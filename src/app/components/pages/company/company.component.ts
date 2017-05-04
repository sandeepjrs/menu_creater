import { Component, OnInit } from '@angular/core';
import {APIService} from './../../../services/api.service'
import {Response} from "@angular/http";

@Component({
  selector: 'companies',
  templateUrl: 'app/components/pages/company/company.component.html',
  styleUrls: ['app/components/pages/company/company.component.css'],
  providers : [APIService]
})
export class CompanyComponent  {

  apiService : APIService;
  public companies : any;
  public menu : any;
  // this.data = [];
  private companyUrl = 'http://localhost:4000/api/company/';
  // private companyUrl = '/app/mockdata/menu.json';

  constructor(apiService : APIService) {

    this.apiService = apiService;
   
    this.getCompanies(this.companyUrl);
     this.companies = []
     this.menu = {};
    

   }

   getCompanies(url: any){
     this.companies = this.apiService.GET(url).map((response : Response)=>
     response.json()).subscribe((response)=>{

       this.companies = response;
      // this.data = this.transformArray(response);
      
       console.log(this.companies);
     })
      // console.log(this.data);
     
   }

   getMenu(id:string){
     let url = "http://localhost:4000/api/company/" + id;
     console.log(url)
     this.menu = this.apiService.GET(url).map((response : Response)=>
     response.json()).subscribe((response)=>{

       this.menu = response;
      // this.data = this.transformArray(response);
      
       console.log(this.menu);
     })

     return this.menu;

    // console.log("-----")

    // console.log(this.companies);

    // console.log("------")

    // return this.companies[]

   }

   


  

}





