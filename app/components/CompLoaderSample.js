System.register(['angular2/core', 'angular2/src/core/di'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, di_1;
    var ChildComponent, ParentApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (di_1_1) {
                di_1 = di_1_1;
            }],
        execute: function() {
            ChildComponent = (function () {
                function ChildComponent() {
                }
                ChildComponent = __decorate([
                    core_1.Component({
                        selector: 'child-component',
                        template: '<div>good</div>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildComponent);
                return ChildComponent;
            })();
            ParentApp = (function () {
                // constructor(dcl: DynamicComponentLoader, elementRef: ElementRef) {
                //     dcl.loadIntoLocation(ChildComponent, elementRef, 'child');
                // }
                function ParentApp(dcl, injector) {
                    console.log(dcl.loadAsRoot(ChildComponent, '#child', injector));
                }
                ParentApp = __decorate([
                    core_1.Component({
                        selector: 'parent-component',
                        template: 'Parent (<child id="child"></child>)(<child #child></child>)'
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, di_1.Injector])
                ], ParentApp);
                return ParentApp;
            })();
            exports_1("ParentApp", ParentApp);
        }
    }
});
//# sourceMappingURL=CompLoaderSample.js.map