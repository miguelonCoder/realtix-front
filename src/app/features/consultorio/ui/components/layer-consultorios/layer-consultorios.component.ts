import {  AfterViewInit, Component, Input } from '@angular/core';
import { Map } from 'leaflet';
import * as L from 'leaflet';
import { FeatureCollection,Feature, Point} from 'geojson'
import { ConsultorioState } from '../../services/consultorio-state.service';
import { ConsultorioModel } from '../../../domain/models/consultorio.model';
import { Observable, filter, map, switchMap, tap } from 'rxjs';
import { consultorioModelToConsultorioFeature } from '../../../application/mappers/consultorio.mapper';

@Component({
  selector: 'app-layer-consultorios',
  templateUrl: './layer-consultorios.component.html',
  styleUrl: './layer-consultorios.component.css'
})
export class LayerConsultoriosComponent implements AfterViewInit {

  constructor(
    private consultorioService: ConsultorioState,
  ){}

  @Input() mapInstance: Map 
  @Input() mapReady: Observable<boolean>

  layer: L.GeoJSON | null = null

  ngAfterViewInit(){

    this.mapReady
    .pipe(
      filter(mapReady => mapReady === true),
      switchMap(()=> {
        return this.consultorioService.consultorios$
      }),
      map( consultorios => consultorioModelToConsultorioFeature(consultorios))
    )
    .subscribe((features)=> this.renderLayer(features))

    this.consultorioService.selected$.subscribe(id => this.goToPoint(id))
  }

  renderLayer(featrureCollection: FeatureCollection<Point, Omit<ConsultorioModel, "geom">>){
    console.log(this.mapInstance)
    if(this.layer){
      this.mapInstance.removeLayer(this.layer)
    }
    if(this.mapInstance && featrureCollection){
      console.log(featrureCollection, this.mapInstance)
      this.layer = L.geoJSON(featrureCollection, {

        pointToLayer: this._pointToLayer
      })
      .addTo(this.mapInstance)
      this.mapInstance.fitBounds(this.layer.getBounds())
    }else {
      console.log('loading map')
    }
    
  }

  handleError(){

  }

  private _pointToLayer(feature: Feature<Point, Omit<ConsultorioModel, "geom">>, latlng: L.LatLng){
    return L.circleMarker(latlng, {
      radius: 6,
      fillColor: '#2a6dbf',
      color: 'white',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    }).bindPopup(`<b>${feature.properties.Nombre_de_}</b>`);
  }

  private goToPoint(id: number | null){
   
    this.layer?.eachLayer( layer => {
      const feature: Feature<Point, Omit<ConsultorioModel, "geom">> = (layer as any).feature
      if(feature.properties.ID === id){
        console.log(feature)
        this.mapInstance.setView(new L.LatLng(
          feature.geometry.coordinates[1],
          feature.geometry.coordinates[0],
        ), 20)

      }
    })
  }
  
}
