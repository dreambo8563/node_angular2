import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Component} from 'angular2/core';
import {Weather} from './components/weather';
import {Search} from './components/Search';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Component Router</h1>
    <a [routerLink]="['Search']">Search Center</a>
    <a [routerLink]="['Weather']">Weather</a>
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
  {path: '/Weather',   name: 'Weather',     component: Weather},
])
export class AppRoute{
    
}