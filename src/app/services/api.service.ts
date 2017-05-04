  import { Injectable } from "@angular/core";
  import { Http, Headers, RequestOptions, Response } from "@angular/http";
  import { Observable } from "rxjs/Observable";
  

  import 'rxjs/add/operator/catch';
  import 'rxjs/add/operator/map';

  // import {Company} from "../module/menu_module"

  @Injectable()
  export class APIService {
    private menuUrl = 'http://localhost:4000/api/company/58f61a132d44240d085ca2fa/';
    // private username = "simon";
    // private password = "pass";
    // private authToken = "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OGNlMzU2MDRlYmEyMDlkMDM4NDI0OTUiLCJuYW1lIjoic2ltb24iLCJwYXNzd29yZCI6IiQyYSQxMCRKTDBUdHVGYldWNHJRMWlqVDRnd2RPOXFxcS9SRlN6bTJiWlVKd0lGUy5rUGhPeHdyaFQ1YSIsIl9fdiI6MH0.oHhjRArkd-9-tFYw17YsFMXFXpPSPYMm4fL84usIb_c";

  constructor (private http : Http){}

  // private formHeaders(){
  headers = new Headers(
    { 
    'Accept': 'application/json' 
    // 'Authorization' : this.authToken

    }
    );

    options = new RequestOptions({ headers: this.headers });

    GET(url: any) {
        console.log("runing the member service.ts" + url);
    return this.http.get(url , this.options)
    }



  }