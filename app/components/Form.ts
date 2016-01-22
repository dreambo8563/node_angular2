import { Component, Directive, ContentChildren, ViewChildren, QueryList} from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import { ngError} from '../directives/error';


@Component({
    selector: 'child-component',
    template: '<div>{{a}}</div>'
})
class ChildComponent {
     a = "hha";
}


@Directive({
    selector: 'child-dir',
    exportAs: 'child'
})
class ChildDir {
    exprotAsVar = "exportAs Text";
}

@Component({
    selector: 'someDir',
    queries: {
        contentChildren: new ContentChildren(ChildComponent)
    },
    template: '<div>in  someDir</div>  ',

})
class SomeDir {
    contentChildren: QueryList<ChildComponent>;
    viewChildren: QueryList<ChildComponent>;

    ngAfterContentInit() {
        var a = this.contentChildren;
    }


}



@Component({
    selector: 'demo-form-sku',
    directives: [FORM_DIRECTIVES, ngError, ChildDir, SomeDir,ChildComponent],
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
    <child-dir  #c="child" > houhou</child-dir>{{c.exprotAsVar}}
   <someDir>

  <child-component></child-component>
  </someDir>
  `
})
export class DemoFormSku {
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}
