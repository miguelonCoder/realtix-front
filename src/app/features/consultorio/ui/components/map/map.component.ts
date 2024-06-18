import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, viewChild } from '@angular/core';
import { LatLng, Map, tileLayer } from 'leaflet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit, OnDestroy{

  mapContainer = viewChild.required<ElementRef<HTMLDivElement>>('mapContainer'); 
  mapInstance: Map | null = null

  subscription = new Subscription()

  ngAfterViewInit(): void {
    console.log(this.mapContainer())
    this._initMap()
  }

  private _initMap(){
    this.mapInstance = new Map(this.mapContainer().nativeElement, {
      center: new LatLng(4, -76),
      zoom: 13
    })

    tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(this.mapInstance );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
