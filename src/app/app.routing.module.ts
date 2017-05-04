import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CompanyComponent} from './components/pages/company/company.component'
import {CompanyDetailComponent} from './components/pages/company-detail/company-detail.component'

const routes: Routes = [
    {path : 'company',  component : CompanyComponent},
    {path : 'company-detail/:id', component : CompanyDetailComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
