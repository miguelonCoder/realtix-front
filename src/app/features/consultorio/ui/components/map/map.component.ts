import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild, viewChild } from '@angular/core';
import { LatLng, Map, tileLayer } from 'leaflet';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit, OnDestroy{

  constructor(
    private dr: ChangeDetectorRef
  ){}

  mapContainer = viewChild.required<ElementRef<HTMLDivElement>>('mapContainer'); 
  //mapInstance = new BehaviorSubject<Map | null>(null)
  mapInstance: Map
  mapReady = new BehaviorSubject(false)

  subscription = new Subscription()


  ngAfterViewInit(): void {
    
    this._initMap()
    console.log(this.mapInstance)
    this.dr.detectChanges()
  }

  private _initMap(){
    this.mapInstance =
      new Map(this.mapContainer().nativeElement, {
      center: new LatLng(4, -76),
      zoom: 13
    })

    tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(this.mapInstance);

    this.mapReady.next(true)
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
