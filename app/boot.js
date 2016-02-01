System.register(['angular2/platform/browser', 'angular2/router', './AppRoute', 'angular2/core'], function(exports_1) {
    var browser_1, router_1, AppRoute_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (AppRoute_1_1) {
                AppRoute_1 = AppRoute_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // import {setBaseUrl, MATERIAL_PROVIDERS} from 'ng2-material/all';
            // setBaseUrl('https://cdn.rawgit.com/justindujardin/ng2-material/8ee9cee/');
            browser_1.bootstrap(AppRoute_1.AppRoute, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.APP_BASE_HREF, { useValue: '/my/app' }), core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=boot.js.map