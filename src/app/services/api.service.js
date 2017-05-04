"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
// import {Company} from "../module/menu_module"
var APIService = (function () {
    // private username = "simon";
    // private password = "pass";
    // private authToken = "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OGNlMzU2MDRlYmEyMDlkMDM4NDI0OTUiLCJuYW1lIjoic2ltb24iLCJwYXNzd29yZCI6IiQyYSQxMCRKTDBUdHVGYldWNHJRMWlqVDRnd2RPOXFxcS9SRlN6bTJiWlVKd0lGUy5rUGhPeHdyaFQ1YSIsIl9fdiI6MH0.oHhjRArkd-9-tFYw17YsFMXFXpPSPYMm4fL84usIb_c";
    function APIService(http) {
        this.http = http;
        this.menuUrl = 'http://localhost:4000/api/company/58f61a132d44240d085ca2fa/';
        // private formHeaders(){
        this.headers = new http_1.Headers({
            'Accept': 'application/json'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    APIService.prototype.GET = function (url) {
        console.log("runing the member service.ts" + url);
        return this.http.get(url, this.options);
    };
    APIService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], APIService);
    return APIService;
}());
exports.APIService = APIService;
//# sourceMappingURL=api.service.js.map