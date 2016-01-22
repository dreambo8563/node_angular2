import {Component, DynamicComponentLoader, ElementRef, OnInit, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges} from 'angular2/core';
import { Injector} from 'angular2/src/core/di';

@Component({
    selector: 'child-component',
    template: '<div>good</div>'
})
class ChildComponent {
}


@Component({
    selector: 'numberItem',
    template: `<div>{{number}}</div>      <button (click)="changeNumber()">changeNumber</button>`,
    inputs: ['number']
})
export class numberItem implements OnChanges {
    number: number;
    ref: ChangeDetectorRef;
    constructor(ref: ChangeDetectorRef) {
        this.ref = ref;
    }

    ngOnChanges() {
        // this.ref.detach();
        console.log("ngOnChange:", this.number);
    }
    changeNumber() {
        // this.ref.detach();
        this.number++;
        console.log(this.number);

    }
}


@Component({
    selector: 'numberList',
    template: `
    <div *ngFor = "#number of numbers" >
<numberItem [number]="number"></numberItem>
    </div>
    <input #input />
    <button (click)="addNumbers(input.value)">addNumbers</button>
    <div>{{moreNumber}}</div>
    `,
    directives: [numberItem]
})

export class numberList  {
    numbers: Array<number>;
    constructor() {
        this.numbers = [1, 2, 3, 4];
    }


    // ngOnChanges() {
    //     console.log("ngOnChange:", this.numbers);
    // }
    addNumbers(a) {
        this.numbers.push(a);
    }
}


@Component({
    selector: 'parent-component',
    template: `Parent (<child id="child"></child>)(<child #child></child>) <numberList></numberList>`,
    directives: [numberList]
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


