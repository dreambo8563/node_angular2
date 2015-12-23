import {Component, View} from 'angular2/core';
import {NgFor, FORM_DIRECTIVES, FormBuilder, ControlGroup} from "angular2/common";

@Component({
    selector: 'demo-form-sku'
})
@View({
    /**
     * if you inject FORM_DIRECTIVES,
NgForm will get automatically attached to any <form> tags you have in your view. This is really
useful but potentially confusing because it happens behind the scenes.
There are two important pieces of functionality that NgForm gives us:
1. A ControlGroup named ngForm
2. A (submit) action
     */
    directives: [FORM_DIRECTIVES],
    template: `
    <div>
        <h2>Demo Form: Sku</h2>
        <form [ngFormModel]="myForm" (submit)="onSubmit(myForm.value)">
            <div class="form-group">
                <label for="skuInput">SKU</label>
                <input type="text" required minlength="4" class="form-control" id="skuInput" placeholder="SKU" [ngFormControl]="myForm.controls['sku']"></div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
        </div>
    `
})
export class DemoFormsSkuBuilder {
    /**
     * NgForm won’t be applied
to a <form> that has ng-form-model
     */
    myForm: ControlGroup;
    //FormBuilder
    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['']
        });
        
        this.myForm.valueChanges.subscribe(
            (value)=>{
            console.log('Form change -value:' ,value);  
        });
        
        this.myForm.controls['sku'].valueChanges.subscribe(
            (value)=>{
                console.log('sku value:', value);
            }
        );
    }

    onSubmit(value) {
        console.log('submit value:', value);
    }
    
}
export class DemoFormsSku {
    onSubmit(value) {
        console.log('you submitted value: ', value);
    }
}
/**
 *  • (submit) - comes from NgForm
    • onSubmit() - will be implemented in our component definition class (below)
    • f.value - f is the form ControlGroup that we specified above. And .value will return the
    key/value pairs of this ControlGroup
 */


//Don’t try to use ng-control without an NgForm parent or you’ll have problems.





/**
 * To create a new ControlGroup and Controls implicitly use:
• ng-form and
• ng-control
But to bind to an existing ControlGroup and Controls use:
• ng-form-model and
• ng-form-control
 */