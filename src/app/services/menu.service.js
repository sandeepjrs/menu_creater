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
var Observable_1 = require("rxjs/Observable");
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var MenuService = (function () {
    // private username = "simon";
    // private password = "pass";
    // private authToken = "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OGNlMzU2MDRlYmEyMDlkMDM4NDI0OTUiLCJuYW1lIjoic2ltb24iLCJwYXNzd29yZCI6IiQyYSQxMCRKTDBUdHVGYldWNHJRMWlqVDRnd2RPOXFxcS9SRlN6bTJiWlVKd0lGUy5rUGhPeHdyaFQ1YSIsIl9fdiI6MH0.oHhjRArkd-9-tFYw17YsFMXFXpPSPYMm4fL84usIb_c";
    function MenuService(http) {
        this.http = http;
        this.menuUrl = 'http://localhost:4000/api/company/58f61a132d44240d085ca2fa/';
        // private formHeaders(){
        this.headers = new http_1.Headers({
            'Accept': 'application/json'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    MenuService.prototype.getMenus = function (test) {
        console.log("runing the member service.ts" + test);
        //    return this.http.get(this.menberInfoUrl, this.options );
        // console.log(tempreq);
        return this.http.get(this.menuUrl, this.options)
            .map(this.toCompany)
            .catch(this.handleError);
        // return this.http.get(this.menberInfoUrl);
    };
    // getMenus(test : String){
    // return this.http.get(this.menuUrl, this.options)
    // .map(this.extractData)
    // .catch(this.handleError);
    // }
    MenuService.prototype.mapCompany = function (res) {
        return res.json().results.map(this.toCompany);
    };
    MenuService.prototype.toCompany = function (res) {
        var data = res.json().data;
        var company = ({
            comapny_name: data.comapny_name,
            categories: data.categories
        });
        // console.log("mapping the company", company);
        //  console.log("huu", data);
        return company;
    };
    MenuService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        console.log(body.data.categories);
        console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
        return body || {};
    };
    MenuService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    MenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MenuService);
    return MenuService;
}());
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map