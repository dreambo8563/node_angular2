import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import { ngError} from '../directives/error';

@Component({
    selector: 'demo-form-sku',
    directives: [FORM_DIRECTIVES,ngError],
    template: `  
  <div class="ui raised segment">  
    <h2 class="ui header">Demo Form: Sku</h2>  
    <form #f="ngForm"  
          (ngSubmit)="onSubmit(f.value)"  
          class="ui form">

      <div class="field">  
        <label for="skuInput">SKU</label>  
        <input type="text"  
               id="skuInput"  
               placeholder="SKU"  
               ngControl="sku">  
      
        <div *ngError ="'a'" id="input" contenteditable>
        </div>
      </div>

      <button type="submit" class="ui button">Submit</button>  
    </form>  
  </div>  
  `
})
export class DemoFormSku {
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}
