import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-zoom';
  map: any;

  ngOnInit() {
    this.imageOverlay();
  }

  /**
   * Using Image Overlay
   */
  imageOverlay() {
    setTimeout(() => {
      this.map = L.map('map', {
        minZoom: 0,
        maxZoom: 6,
        center: [0, 0],
        zoom: 1,
        maxBoundsViscosity: 1,
        crs: L.CRS.Simple
      });

      // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      // }).addTo(this.map);

      const image = L.imageOverlay('./assets//bridge.jpg', [[0, 0], [432, 576]]); // initial size at zoom 1
      image.addTo(this.map);
      this.map.setMaxBounds(new L.LatLngBounds([0, 0], [432, 576]));
    }, 1000);
  }
}
