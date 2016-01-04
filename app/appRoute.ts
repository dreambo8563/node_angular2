import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Component} from 'angular2/core';
import {Weather} from './components/weather';
import {Search} from './components/Search';

@Component({
    selector: 'my-app',
    template: `
 <nav class="navbar navbar-inverse">
  <div class="container" role="navigation">
   <ul class="nav navbar-nav">
     <li class="active"> <a [routerLink]="['Search']">Search</a></li>
     <li> <a [routerLink]="['Weather']">Weather</a></li>
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
])
export class AppRoute {

}