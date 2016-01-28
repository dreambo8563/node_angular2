System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var ChildComponent, numberItem, numberList, Zippy, ParentApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    this.haha = Date.now();
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
                        template: "\n    <div *ngFor = \"#number of numbers\" >\n<numberItem [number]=\"number\"></numberItem>\n    </div>\n    <input #input />\n    <button (click)=\"addNumbers(input.value)\">addNumbers</button>\n    <div>{{moreNumber}}</div>{{haha | date:'medium'}}\n    ",
                        directives: [numberItem]
                    }), 
                    __metadata('design:paramtypes', [])
                ], numberList);
                return numberList;
            })();
            exports_1("numberList", numberList);
            Zippy = (function () {
                function Zippy() {
                    this.visible = true;
                    this.open = new core_1.EventEmitter();
                    this.close = new core_1.EventEmitter();
                }
                Zippy.prototype.toggle = function () {
                    this.visible = !this.visible;
                    if (this.visible) {
                        this.open.emit(null);
                    }
                    else {
                        this.close.emit(null);
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Zippy.prototype, "open", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], Zippy.prototype, "close", void 0);
                Zippy = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n  <div class=\"zippy\">\n    <div (click)=\"toggle()\">Toggle</div>\n    <div [hidden]=\"!visible\">\n      <ng-content></ng-content>\n    </div>\n </div>" }), 
                    __metadata('design:paramtypes', [])
                ], Zippy);
                return Zippy;
            })();
            exports_1("Zippy", Zippy);
            ParentApp = (function () {
                function ParentApp(appViewManager, compiler) {
                    this.appViewManager = appViewManager;
                    compiler.compileInHost(ChildComponent).then(function (hostProtoViewRef) {
                        var a = hostProtoViewRef;
                        this.viewRef = appViewManager.createRootHostView(hostProtoViewRef, 'some-component', null);
                        console.log(this.viewRef);
                        return true;
                    });
                }
                ParentApp = __decorate([
                    core_1.Component({
                        selector: 'parent-component',
                        template: "Parent (<child id=\"child\"></child>)(<child #child></child>) <numberList></numberList>\n     <li> <a [routerLink]=\"['./NumberList']\">NumberList</a></li>\n     <li> <a [routerLink]=\"['./NumberItem']\"  target=\"_blank\">NumberItem</a></li>\n      <router-outlet></router-outlet>\n      Parent (<some-component></some-component>) <zippy></zippy>",
                        directives: [numberList, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'NumberList', component: numberList, useAsDefault: true },
                        { path: '/numberItem', name: 'NumberItem', component: numberItem }
                    ]), 
                    __metadata('design:paramtypes', [core_1.AppViewManager, core_1.Compiler])
                ], ParentApp);
                return ParentApp;
            })();
            exports_1("ParentApp", ParentApp);
        }
    }
});
//# sourceMappingURL=CompLoaderSample.js.map