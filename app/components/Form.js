System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, common_1;
    var ChildComponent, ChildDir, SomeDir, InputAttrDirective, DemoFormSku;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            // import { ngError} from '../directives/error';
            ChildComponent = (function () {
                function ChildComponent() {
                    this.a = "hha";
                }
                ChildComponent = __decorate([
                    core_1.Component({
                        selector: 'child-component',
                        template: '<div>{{a}}</div>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildComponent);
                return ChildComponent;
            })();
            ChildDir = (function () {
                function ChildDir() {
                    this.exprotAsVar = "exportAs Text";
                }
                ChildDir = __decorate([
                    core_1.Directive({
                        selector: 'child-dir',
                        exportAs: 'child'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildDir);
                return ChildDir;
            })();
            SomeDir = (function () {
                function SomeDir() {
                }
                SomeDir.prototype.ngAfterContentInit = function () {
                    var a = this.contentChildren;
                };
                __decorate([
                    core_1.ContentChildren(ChildComponent), 
                    __metadata('design:type', core_1.QueryList)
                ], SomeDir.prototype, "contentChildren", void 0);
                SomeDir = __decorate([
                    core_1.Component({
                        selector: 'someDir',
                        queries: {},
                        template: '<div>in  someDir</div>  ',
                    }), 
                    __metadata('design:paramtypes', [])
                ], SomeDir);
                return SomeDir;
            })();
            InputAttrDirective = (function () {
                function InputAttrDirective(id) {
                    console.log(id);
                }
                InputAttrDirective = __decorate([
                    core_1.Directive({ selector: 'input' }),
                    __param(0, core_1.Attribute('id')), 
                    __metadata('design:paramtypes', [Object])
                ], InputAttrDirective);
                return InputAttrDirective;
            })();
            DemoFormSku = (function () {
                function DemoFormSku() {
                    this.name = 'first name haha';
                    this.heroImageUrl = "/good/path/img.png";
                }
                DemoFormSku.prototype.onSubmit = function (value) {
                    console.log('you submitted value: ', value);
                };
                DemoFormSku = __decorate([
                    core_1.Component({
                        selector: 'demo-form-sku',
                        directives: [common_1.FORM_DIRECTIVES, ChildDir, SomeDir, ChildComponent, InputAttrDirective],
                        template: "  \n  <div class=\"ui raised segment\">  \n    <h2 class=\"ui header\">Demo Form: Sku</h2>  \n    <form #f=\"ngForm\"  \n          (ngSubmit)=\"onSubmit(f.value)\"  \n          class=\"ui form\">\n\n      <div class=\"field\">  \n        <label for=\"skuInput\">SKU</label>  \n        <input type=\"text\"  \n               id=\"skuInput\"  \n       \n               ngControl=\"sku\" [value]='name'>  \n      \n        <div id=\"input\" contenteditable>\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"ui button\">Submit</button>  \n    </form>  \n  </div>  \n    <child-dir  #c=\"child\" > houhou</child-dir>{{c.exprotAsVar}}\n   <someDir>\n\n  <child-component></child-component>\n  </someDir>\n  <img [src] = \"heroImageUrl\">\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], DemoFormSku);
                return DemoFormSku;
            })();
            exports_1("DemoFormSku", DemoFormSku);
        }
    }
});
//# sourceMappingURL=Form.js.map