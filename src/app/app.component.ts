import { Component } from '@angular/core';
import {MainHeader} from './components/templates/header/main-header.component'


@Component({
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

template:`
<main-header></main-header>
<router-outlet></router-outlet>
<main-footer></main-footer>
`,

  // styleUrls: ['/css/bootstrap.min.css'],

  
})
export class AppComponent  {
  //  name = 'Angular Sandeep'; 
  
// constructor(private meberService: MeberService) { 
//   this.meberService.getData()
// }

}
