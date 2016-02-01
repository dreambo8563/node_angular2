import {bootstrap} from 'angular2/platform/browser'
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppRoute} from './AppRoute';
import {provide} from 'angular2/core';
// import {setBaseUrl, MATERIAL_PROVIDERS} from 'ng2-material/all';
// setBaseUrl('https://cdn.rawgit.com/justindujardin/ng2-material/8ee9cee/');



bootstrap(AppRoute, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/my/app' }), provide(LocationStrategy, {useClass: HashLocationStrategy})]);