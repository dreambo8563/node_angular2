System.register(['angular2/core', 'angular2/src/core/di', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, di_1, router_1;
    var ChildComponent, numberItem, numberList, ParentApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (di_1_1) {
                di_1 = di_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            numberItem = (function () {
                function numberItem(ref) {
                    this.ref = ref;
                }
                numberItem.prototype.ngOnChanges = function () {
                    // this.ref.detach();
                    console.log("ngOnChange:", this.number);
                };
                numberItem.prototype.changeNumber = function () {
                    // this.ref.detach();
                    this.number++;
                    console.log(this.number);
                };
                numberItem = __decorate([
                    core_1.Component({
                        selector: 'numberItem',
                        template: "<div>{{number}}</div>      <button (click)=\"changeNumber()\">changeNumber</button>",
                        inputs: ['number']
                    }), 
                    __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
                ], numberItem);
                return numberItem;
            })();
            exports_1("numberItem", numberItem);
            numberList = (function () {
                function numberList() {
                    this.numbers = [1, 2, 3, 4];
                }
                // ngOnChanges() {
                //     console.log("ngOnChange:", this.numbers);
                // }
                numberList.prototype.addNumbers = function (a) {
                    this.numbers.push(a);
                };
                numberList = __decorate([
                    core_1.Component({
                        selector: 'numberList',
                        template: "\n    <div *ngFor = \"#number of numbers\" >\n<numberItem [number]=\"number\"></numberItem>\n    </div>\n    <input #input />\n    <button (click)=\"addNumbers(input.value)\">addNumbers</button>\n    <div>{{moreNumber}}</div>\n    ",
                        directives: [numberItem]
                    }), 
                    __metadata('design:paramtypes', [])
                ], numberList);
                return numberList;
            })();
            exports_1("numberList", numberList);
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
                        template: "Parent (<child id=\"child\"></child>)(<child #child></child>) <numberList></numberList>\n     <li> <a [routerLink]=\"['./NumberList']\">NumberList</a></li>\n     <li> <a [routerLink]=\"['./NumberItem']\">NumberItem</a></li>\n      <router-outlet></router-outlet>",
                        directives: [numberList, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'NumberList', component: numberList, useAsDefault: true },
                        { path: '/numberItem', name: 'NumberItem', component: numberItem }
                    ]), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, di_1.Injector])
                ], ParentApp);
                return ParentApp;
            })();
            exports_1("ParentApp", ParentApp);
        }
    }
});
//# sourceMappingURL=CompLoaderSample.js.map