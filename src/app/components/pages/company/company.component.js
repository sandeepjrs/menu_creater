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
var core_1 = require('@angular/core');
var api_service_1 = require('./../../../services/api.service');
var CompanyComponent = (function () {
    // private companyUrl = '/app/mockdata/menu.json';
    function CompanyComponent(apiService) {
        // this.data = [];
        this.companyUrl = 'http://localhost:4000/api/company/';
        this.apiService = apiService;
        this.getCompanies(this.companyUrl);
        this.companies = [];
        this.menu = {};
    }
    CompanyComponent.prototype.getCompanies = function (url) {
        var _this = this;
        this.companies = this.apiService.GET(url).map(function (response) {
            return response.json();
        }).subscribe(function (response) {
            _this.companies = response;
            // this.data = this.transformArray(response);
            console.log(_this.companies);
        });
        // console.log(this.data);
    };
    CompanyComponent.prototype.getMenu = function (id) {
        var _this = this;
        var url = "http://localhost:4000/api/company/" + id;
        console.log(url);
        this.menu = this.apiService.GET(url).map(function (response) {
            return response.json();
        }).subscribe(function (response) {
            _this.menu = response;
            // this.data = this.transformArray(response);
            console.log(_this.menu);
        });
        return this.menu;
        // console.log("-----")
        // console.log(this.companies);
        // console.log("------")
        // return this.companies[]
    };
    CompanyComponent = __decorate([
        core_1.Component({
            selector: 'companies',
            templateUrl: 'app/components/pages/company/company.component.html',
            styleUrls: ['app/components/pages/company/company.component.css'],
            providers: [api_service_1.APIService]
        }), 
        __metadata('design:paramtypes', [api_service_1.APIService])
    ], CompanyComponent);
    return CompanyComponent;
}());
exports.CompanyComponent = CompanyComponent;
//# sourceMappingURL=company.component.js.map