import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';
import { Injector} from 'angular2/src/core/di';

@Component({
    selector: 'child-component',
    template: '<div>good</div>'
})
class ChildComponent {
}

@Component({
    selector: 'parent-component',
    template: 'Parent (<child id="child"></child>)(<child #child></child>)'
})
export class ParentApp {

    // constructor(dcl: DynamicComponentLoader, elementRef: ElementRef) {
    //     dcl.loadIntoLocation(ChildComponent, elementRef, 'child');
    // }
    constructor(dcl: DynamicComponentLoader, injector: Injector) {
      console.log(dcl.loadAsRoot(ChildComponent, '#child', injector));
    }
    
    
    // constructor(dcl: DynamicComponentLoader, elementRef: ElementRef) {
    //     dcl.loadNextToLocation(ChildComponent, elementRef);
    // }
}


