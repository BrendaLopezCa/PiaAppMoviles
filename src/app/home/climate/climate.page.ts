import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { Climate, Current } from './climate';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.page.html',
  styleUrls: ['./climate.page.scss'],
})
export class ClimatePage implements OnInit {
  apikey = "09d1a62c194e4ac89a0205805212505";
  url = "http://api.weatherapi.com/v1";

  climate: Climate;

  latitud: number;
  longitud: number;

  constructor(
    private geolocation: Geolocation
  ) { }

  ngOnInit() {
    this.getLocation();

  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    this.latitud = rta.coords.latitude;
    this.longitud = rta.coords.longitude;
    this.getWheatherData();
  }

  getWheatherData()
  {
    fetch(`${this.url}/current.json?key=${this.apikey}&q=${this.latitud},${this.longitud}&aqi=no`, {
      "method": "GET",
      "headers": {
        "Transfer-Encoding": "chunked",
        "Connection": "keep-alive",
        "Vary": "Accept-Encoding",
        "CDN-PullZone": "93447",
        "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
        "CDN-RequestCountryCode": "GB",
        "CDN-EdgeStorageId": "615",
        "Request-Context": "appId=cid-v1:89996683-9a04-40b3-8e46-77754119dcf5",
        "CDN-CachedAt": "2021-05-25 23:01:31",
        "CDN-RequestPullSuccess": "True",
        "CDN-RequestPullCode": "200",
        "CDN-RequestId": "dab012502021edc2164f1ef146f6dab4",
        "CDN-Cache": "MISS",
        "Cache-Control": "public, max-age=180",
        "Content-Type": "application/json",
        "Date": "Tue, 25 May 2021 21:01:31 GMT",
        "Server": "BunnyCDN-FI1-615",
        "mode": 'cors',
      }
    })
    .then(response => response.json())
    .then(data => {
      this.climate = data;
    })
    .catch(err => {
      console.error(err);
    });
  }
}

