System.register(['angular2/platform/browser', 'angular2/router', './AppRoute', 'ng2-material/all'], function(exports_1) {
    var browser_1, router_1, AppRoute_1, all_1;
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
            function (all_1_1) {
                all_1 = all_1_1;
            }],
        execute: function() {
            all_1.setBaseUrl('https://cdn.rawgit.com/justindujardin/ng2-material/8ee9cee/');
            browser_1.bootstrap(AppRoute_1.AppRoute, [router_1.ROUTER_PROVIDERS, all_1.MATERIAL_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map