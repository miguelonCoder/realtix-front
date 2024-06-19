import { Component, Input } from '@angular/core';
import { Observable, filter, switchMap, map } from 'rxjs';

import { Map } from 'leaflet';
import * as L from 'leaflet';
import { FeatureCollection, Feature, Polygon } from 'geojson'


import { consultorioModelToConsultorioFeature } from '../../../application/mappers/consultorio.mapper';
import { ConsultorioState } from '../../services/consultorio-state.service';
import { distribucionToConsultorioFeature } from '../../../application/mappers/distribucion.mapper';

@Component({
  selector: 'app-layer-distribucion',
  templateUrl: './layer-distribucion.component.html',
  styleUrl: './layer-distribucion.component.css'
})
export class LayerDistribucionComponent {
  constructor(
    private consultorioService: ConsultorioState,
  ) { }

  @Input() mapInstance: Map
  @Input() mapReady: Observable<boolean>

  layer: L.GeoJSON | null = null

  ngAfterViewInit() {

    this.mapReady
      .pipe(
        filter(mapReady => mapReady === true),
        switchMap(() => {
          return this.consultorioService.getDistribucion()
        }),
        map(polygons => distribucionToConsultorioFeature(polygons))
      )
      .subscribe((features) => this.renderLayer(features))

  }

  renderLayer(featrureCollection: FeatureCollection<Polygon, { area: number }>) {
    console.log(featrureCollection)
    if (this.layer) {
      this.mapInstance.removeLayer(this.layer)
    }
    if (this.mapInstance && featrureCollection) {
      console.log(featrureCollection, this.mapInstance)
      this.layer = L.geoJSON(featrureCollection, {
        style: (feature) => {
          return this.getStyle(feature?.properties.area)
        }
      })
        .addTo(this.mapInstance)
        .bringToBack()
      this.mapInstance.fitBounds(this.layer.getBounds())
    } else {
      console.log('loading map')
    }

  }

  getStyle(area: number) {
    const redThreshold = 1;
    const yellowThreshold = 5;
    let opacity

    if (area < redThreshold) {
      opacity = 0.8;
    } else if (area < yellowThreshold) {
      opacity = 0.5;
    } else {
      opacity = 0.3;
    }

    return {
      fillColor: '#0aa171',
      fillOpacity: opacity,
      color: '#0aa171',
      weight: 1
    }
  }

}
