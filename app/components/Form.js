System.register(['angular2/core', 'angular2/common', '../directives/error'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, error_1;
    var DemoFormSku;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (error_1_1) {
                error_1 = error_1_1;
            }],
        execute: function() {
            DemoFormSku = (function () {
                function DemoFormSku() {
                }
                DemoFormSku.prototype.onSubmit = function (value) {
                    console.log('you submitted value: ', value);
                };
                DemoFormSku = __decorate([
                    core_1.Component({
                        selector: 'demo-form-sku',
                        directives: [common_1.FORM_DIRECTIVES, error_1.ngError],
                        template: "  \n  <div class=\"ui raised segment\">  \n    <h2 class=\"ui header\">Demo Form: Sku</h2>  \n    <form #f=\"ngForm\"  \n          (ngSubmit)=\"onSubmit(f.value)\"  \n          class=\"ui form\">\n\n      <div class=\"field\">  \n        <label for=\"skuInput\">SKU</label>  \n        <input type=\"text\"  \n               id=\"skuInput\"  \n               placeholder=\"SKU\"  \n               ngControl=\"sku\">  \n      \n        <div *ngError =\"'a'\" id=\"input\" contenteditable>\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"ui button\">Submit</button>  \n    </form>  \n  </div>  \n  "
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