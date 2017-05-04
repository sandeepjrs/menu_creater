import { Component, OnInit } from '@angular/core';
import {APIService} from './../../../services/api.service'
import {Response} from "@angular/http";
import { CompanyComponent } from "../company/company.component";

@Component({
  selector: 'company-detail',
  // templateUrl: 'app/components/pages/company/company.component.html',
  // styleUrls: ['app/components/pages/company/company.component.css'],
  template : `I am from company detail`,
  providers : [APIService, CompanyComponent ]
})
 export class CompanyDetailComponent  implements OnInit{
   companyService : CompanyComponent;


   constructor(company : CompanyComponent){
    //  this.company.menu = [];
     this.companyService = company;
     console.log(this.companyService.companies);

   }

  ngOnInit(){
    // let x = this.company.;
    console.log("************");
    console.log(this.companyService.companies);
    console.log("************");

  }


  

}





