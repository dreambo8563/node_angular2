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
    var ProductRow, ProductList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ProductRow = (function () {
                function ProductRow(parameters) {
                    this.click = new core_1.EventEmitter();
                }
                ProductRow.prototype.clicked = function () {
                    /**
                     * You can see that we are calling the next/emit method of the EventEmitter, and passing the product this
            ProductRow holds. What we are doing is forwarding the event on to any one who is listening. This
            way, if we had another component that used ours, we could write:
            <div product-row [product]="product" (click)="display(product)">
            </div>
                     */
                    this.click.emit(this.product);
                };
                ProductRow = __decorate([
                    core_1.Component({
                        selector: 'product-row',
                        inputs: ['product'],
                        outputs: ['click']
                    }),
                    core_1.View({
                        directives: [ProductImage, ProductDepartment, PriceDisplay],
                        template: "\n    <div class=\"product-row cf\" (click)=\"clicked()\">\n        <product-image [product]=\"product\"></product-image>\n        <div class=\"product-info\">\n            <div class=\"product-sku\">SKU #{{product.sku}}</div>\n            <div class=\"product-name\">{{product.name}}</div>\n            <product-department [product]=\"product\"> </product-department>\n        </div>\n        <price-display [price]=\"product.price\"> </price-display>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [Object])
                ], ProductRow);
                return ProductRow;
            })();
            // The "component decorator"
            ProductList = (function () {
                function ProductList() {
                }
                ProductList = __decorate([
                    core_1.Component({
                        /**
                         * Alternatively, with this selector, we can also use a regular div and specify the component as an
                    attribute：  <div products-list></div>
                         */
                        selector: "products-list",
                        //we can user the inputs in our class. use alias 'isEnabled: enabled'
                        /**
                         * In the inputs array, when the strings are on the key: value format, each have a specific meaning:
                    • The key (name, age and isEnabled) represent how that incoming property will be visible
                    (“bound”) in the controller.
                    • The value (name, age and enabled) configures how the property is visible to the outside
                    world.
                         */
                        //     When talking about inputs, the component decorator knows what inputs exist and the view
                        // defines how they are rendered. When talking about outputs, it’s the other way around: the
                        // view knows _what outputs will be triggered and the controller knows how they are handled.
                        //In an early version of Angular 2, inputs and outputs were called properties and events.
                        inputs: ['products']
                    }),
                    core_1.View({
                        directives: [ProductRow, common_1.NgFor],
                        template: "\n    <div class=\"products-list\">\n        <div product-row *ng-for=\"#product of products\" [product]=\"product\">\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductList);
                return ProductList;
            })();
        }
    }
});
//# sourceMappingURL=productsList.js.map