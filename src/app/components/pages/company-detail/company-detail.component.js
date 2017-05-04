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
var company_component_1 = require("../company/company.component");
var CompanyDetailComponent = (function () {
    function CompanyDetailComponent(company) {
        //  this.company.menu = [];
        this.companyService = company;
        console.log(this.companyService.companies);
    }
    CompanyDetailComponent.prototype.ngOnInit = function () {
        // let x = this.company.;
        console.log("************");
        console.log(this.companyService.companies);
        console.log("************");
    };
    CompanyDetailComponent = __decorate([
        core_1.Component({
            selector: 'company-detail',
            // templateUrl: 'app/components/pages/company/company.component.html',
            // styleUrls: ['app/components/pages/company/company.component.css'],
            template: "I am from company detail",
            providers: [api_service_1.APIService, company_component_1.CompanyComponent]
        }), 
        __metadata('design:paramtypes', [company_component_1.CompanyComponent])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
}());
exports.CompanyDetailComponent = CompanyDetailComponent;
//# sourceMappingURL=company-detail.component.js.map