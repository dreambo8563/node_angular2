import {Component, View, EventEmitter} from 'angular2/core';
import {NgFor} from "angular2/common";


@Component({
    selector: 'product-row',
    inputs: ['product'],
    outputs: ['click']
})
@View({
    directives: [ProductImage, ProductDepartment, PriceDisplay],
    template: `
    <div class="product-row cf" (click)="clicked()">
        <product-image [product]="product"></product-image>
        <div class="product-info">
            <div class="product-sku">SKU #{{product.sku}}</div>
            <div class="product-name">{{product.name}}</div>
            <product-department [product]="product"> </product-department>
        </div>
        <price-display [price]="product.price"> </price-display>
    </div>
    `
})
class ProductRow {
    product: Product;
    click: EventEmitter<any>;
    constructor(parameters) {
        this.click = new EventEmitter();
    }
    clicked() {
        
        /**
         * You can see that we are calling the next/emit method of the EventEmitter, and passing the product this
ProductRow holds. What we are doing is forwarding the event on to any one who is listening. This
way, if we had another component that used ours, we could write:
<div product-row [product]="product" (click)="display(product)">
</div>
         */
        this.click.emit(this.product);
    }
}


// The "component decorator"
@Component({
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
})

// The view annotation
@View({
    directives: [ProductRow, NgFor],
    template: `
    <div class="products-list">
        <div product-row *ng-for="#product of products" [product]="product">
        </div>
    </div>
    `
})
class ProductList {
    products: Array<Product>;
}