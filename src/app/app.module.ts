import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent }  from './app.component';
// import {HeroComponent } from './components/hero.component';
// import {AddMenuComponent} from './components/addmenu.component';
// import {OptionsComponent} from './components/options.component';


// import { LoginComponent } from './components/login.component';

// import { MeberService } from './components/member.service';
import {APIService} from './services/api.service'
import {MainHeader} from './components/templates/header/main-header.component'
import {MainFooter} from './components/templates/footer/main-footer.component'
import { AppRoutingModule } from './app.routing.module';

import {CompanyComponent} from './components/pages/company/company.component'
import {CompanyDetailComponent} from './components/pages/company-detail/company-detail.component'


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,AppRoutingModule
  // RouterModule.forRoot([
  //   {
  //   path : 'company',
  //   component : CompanyComponent
  // },
  
  // ])
   ],
  declarations: [ AppComponent, MainHeader, MainFooter, CompanyComponent, CompanyDetailComponent],
  bootstrap:    [ AppComponent ],
  providers : [ APIService]
})
export class AppModule { }
