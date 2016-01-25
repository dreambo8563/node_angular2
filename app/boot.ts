import {bootstrap} from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppRoute} from './AppRoute';
import {setBaseUrl, MATERIAL_PROVIDERS} from 'ng2-material/all';
setBaseUrl('https://cdn.rawgit.com/justindujardin/ng2-material/8ee9cee/');



bootstrap(AppRoute,[ROUTER_PROVIDERS,MATERIAL_PROVIDERS]);