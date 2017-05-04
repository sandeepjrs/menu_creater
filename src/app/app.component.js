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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //   template: `
            //   <div class="container">
            //   <br>
            //   {{name}}
            //   <br>
            //   <ul class="nav nav-pills" role="tablist">
            //   <li role="presentation" > <a routerLink="/hero" routerLinkActive="active">Home <span class="badge">2</span></a></li>
            //  <li role="presentation" > <a routerLink="/login" routerLinkActive="active">Login <span class="badge">8</span></a></li>
            //  <li role="presentation" > <a routerLink="/options" routerLinkActive="active">Options <span class="badge">21</span></a></li>
            // </ul>
            // <br>
            // <br>
            // <router-outlet></router-outlet>
            //   </div>
            //   `,
            template: "\n<main-header></main-header>\n<router-outlet></router-outlet>\n<main-footer></main-footer>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map