import { Component, Directive, ContentChildren, ViewChildren, QueryList, Attribute} from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import {ArticleItem} from './articleItem'
// import { ngError} from '../directives/error';


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

    },
    template: '<div>in  someDir</div>  ',

})
class SomeDir {
    @ContentChildren(ChildComponent) contentChildren : QueryList<ChildComponent>;
    viewChildren: QueryList<ChildComponent>;

    ngAfterContentInit() {
        var a = this.contentChildren;
    }


}

@Directive({ selector: 'input' })
class InputAttrDirective {
    constructor( @Attribute('id') id) {
        console.log(id);
    }
}

@Component({
    selector: 'demo-form-sku',
    directives: [FORM_DIRECTIVES, ChildDir, SomeDir, ChildComponent, InputAttrDirective,ArticleItem],
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
       
               ngControl="sku" [value]='name'>  
      
        <div id="input" contenteditable>
        </div>
      </div>

      <button type="submit" class="ui button">Submit</button>  
    </form>  
  </div>  
    <child-dir  #c="child" > houhou</child-dir>{{c.exprotAsVar}}
   <someDir>

  <child-component></child-component>
  </someDir>
  <img [src] = "heroImageUrl">
  <animate height="600px" width="800px" [article]="article"></animate>
  `
})
export class DemoFormSku {
    name='first name haha';
    heroImageUrl="/good/path/img.png";
    
    article = {title:"new title", content:"new contetn"};
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}
