System.register(['angular2/router', 'angular2/core', './components/weather', './components/Form', './components/CompLoaderSample'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1, weather_1, Form_1, CompLoaderSample_1;
    var AppRoute;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_1_1) {
                weather_1 = weather_1_1;
            },
            function (Form_1_1) {
                Form_1 = Form_1_1;
            },
            function (CompLoaderSample_1_1) {
                CompLoaderSample_1 = CompLoaderSample_1_1;
            }],
        execute: function() {
            AppRoute = (function () {
                function AppRoute() {
                    this.navItems = document.querySelectorAll('li');
                }
                AppRoute.prototype.loopNav = function (event) {
                    for (var i = 0; i < this.navItems.length - 1; i++) {
                        this.navItems[i].className = "";
                    }
                    event.target.className = "active";
                };
                AppRoute = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n <nav class=\"navbar navbar-inverse\">\n  <div class=\"container\" role=\"navigation\">\n   <ul class=\"nav navbar-nav\">\n     <li (click)=\"loopNav($event)\"> <a [routerLink]=\"['Weather']\">Weather</a></li>\n     <li (click)=\"loopNav($event)\"> <a [routerLink]=\"['DemoFormSku']\">DemoFormSku</a></li>\n     <li (click)=\"loopNav($event)\"> <a [routerLink]=\"['ParentApp','NumberList']\">ParentApp</a></li>\n    </ul>\n  </div>\n </nav>   \n <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/Weather', name: 'Weather', component: weather_1.Weather },
                        { path: '/DemoFormSku', name: 'DemoFormSku', component: Form_1.DemoFormSku, useAsDefault: true },
                        { path: '/ParentApp/...', name: 'ParentApp', component: CompLoaderSample_1.ParentApp }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppRoute);
                return AppRoute;
            })();
            exports_1("AppRoute", AppRoute);
        }
    }
});
//# sourceMappingURL=appRoute.js.map