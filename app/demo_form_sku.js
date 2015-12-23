System.register(['angular2/core', "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var DemoFormsSkuBuilder, DemoFormsSku;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DemoFormsSkuBuilder = (function () {
                function DemoFormsSkuBuilder(fb) {
                    this.myForm = fb.group({
                        'sku': ['abc123']
                    });
                }
                DemoFormsSkuBuilder.prototype.onSubmit = function (value) {
                    console.log('submit value:', value);
                };
                DemoFormsSkuBuilder = __decorate([
                    core_1.Component({
                        selector: 'demo-form-sku'
                    }),
                    core_1.View({
                        /**
                         * if you inject FORM_DIRECTIVES,
                    NgForm will get automatically attached to any <form> tags you have in your view. This is really
                    useful but potentially confusing because it happens behind the scenes.
                    There are two important pieces of functionality that NgForm gives us:
                    1. A ControlGroup named ngForm
                    2. A (submit) action
                         */
                        directives: [common_1.FORM_DIRECTIVES],
                        template: "\n    <div>\n        <h2>Demo Form: Sku</h2>\n        <form [ngFormModel]=\"myForm\" (submit)=\"onSubmit(myForm.value)\">\n            <div class=\"form-group\">\n                <label for=\"skuInput\">SKU</label>\n                <input type=\"text\" class=\"form-control\" id=\"skuInput\" placeholder=\"SKU\" ngControl=\"sku\"></div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DemoFormsSkuBuilder);
                return DemoFormsSkuBuilder;
            })();
            exports_1("DemoFormsSkuBuilder", DemoFormsSkuBuilder);
            DemoFormsSku = (function () {
                function DemoFormsSku() {
                }
                DemoFormsSku.prototype.onSubmit = function (value) {
                    console.log('you submitted value: ', value);
                };
                return DemoFormsSku;
            })();
            exports_1("DemoFormsSku", DemoFormsSku);
        }
    }
});
/**
 *  • (submit) - comes from NgForm
    • onSubmit() - will be implemented in our component definition class (below)
    • f.value - f is the form ControlGroup that we specified above. And .value will return the
    key/value pairs of this ControlGroup
 */
//Don’t try to use ng-control without an NgForm parent or you’ll have problems.
//FormBuilder
//# sourceMappingURL=demo_form_sku.js.map