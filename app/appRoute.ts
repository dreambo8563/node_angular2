import {RouteConfig, ROUTER_DIRECTIVES, AuxRoute} from 'angular2/router';
import {Component} from 'angular2/core';
import {Weather} from './components/weather';
// import {Search} from './components/Search';
// import {Materials} from './components/Material';
import {DemoFormSku} from './components/Form';
import {ParentApp} from './components/CompLoaderSample';
import {ArticleItem} from './components/articleItem';



@Component({
    selector: 'my-app',
    template: `
 <nav class="navbar navbar-inverse">
  <div class="container" role="navigation">
   <ul class="nav navbar-nav">
     <li (click)="loopNav($event)"> <a [routerLink]="['Weather']">Weather</a></li>
     <li (click)="loopNav($event)"> <a [routerLink]="['DemoFormSku']">DemoFormSku</a></li>
      <li (click)="loopNav($event)"> <a [routerLink]="['ParentApp','NumberList']">Double</a></li>
     <li (click)="loopNav($event)"> <a [routerLink]="['ParentApp',['Alert']]">ParentApp</a></li>
          <li (click)="loopNav($event)"> <a [routerLink]="['ArticleItem']">ArticleItem</a></li>
    </ul>
  </div>
 </nav>   
 <router-outlet></router-outlet>
  <router-outlet name="alert"></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/Weather', name: 'Weather', component: Weather },
    { path: '/DemoFormSku', name: 'DemoFormSku', component: DemoFormSku, useAsDefault: true },
    { path: '/ParentApp/...', name: 'ParentApp', component: ParentApp},
        { path: '/ArticleItem', name: 'ArticleItem', component: ArticleItem},
    {aux: '/alert',component:Weather, name:'Alert'}
])
export class AppRoute {
    navItems;
    constructor() {
        this.navItems = document.querySelectorAll('li');
    }

    loopNav(event: any) {

        for (let i = 0; i < this.navItems.length - 1; i++) {
            this.navItems[i].className = "";
        }
        event.target.className = "active";
    }

}