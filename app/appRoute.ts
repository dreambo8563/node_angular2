import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Component} from 'angular2/core';
import {Weather} from './components/weather';
import {Search} from './components/Search';
import {Materials} from './components/Material';

@Component({
    selector: 'my-app',
    template: `
 <nav class="navbar navbar-inverse">
  <div class="container" role="navigation">
   <ul class="nav navbar-nav">
     <li class="active" (click)="loopNav($event)"> <a [routerLink]="['Search']">Search</a></li>
     <li (click)="loopNav($event)"> <a [routerLink]="['Weather']">Weather</a></li>
     <li (click)="loopNav($event)"> <a [routerLink]="['Materials']">Angular2 Material</a></li>
    </ul>
  </div>
 </nav>   
 <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/',
        name: 'Search',
        component: Search,
        useAsDefault: true
    },
    { path: '/Weather', name: 'Weather', component: Weather },
     { path: '/Materials', name: 'Materials', component: Materials },
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