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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
// import {HeroComponent } from './components/hero.component';
// import {AddMenuComponent} from './components/addmenu.component';
// import {OptionsComponent} from './components/options.component';
// import { LoginComponent } from './components/login.component';
// import { MeberService } from './components/member.service';
var api_service_1 = require('./services/api.service');
var main_header_component_1 = require('./components/templates/header/main-header.component');
var main_footer_component_1 = require('./components/templates/footer/main-footer.component');
var app_routing_module_1 = require('./app.routing.module');
var company_component_1 = require('./components/pages/company/company.component');
var company_detail_component_1 = require('./components/pages/company-detail/company-detail.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule
            ],
            declarations: [app_component_1.AppComponent, main_header_component_1.MainHeader, main_footer_component_1.MainFooter, company_component_1.CompanyComponent, company_detail_component_1.CompanyDetailComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [api_service_1.APIService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map