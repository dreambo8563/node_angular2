import {Component,
DynamicComponentLoader,
ElementRef,
OnInit,
DoCheck,
ChangeDetectionStrategy,
ChangeDetectorRef,
OnChanges,
ViewRef,
AppViewManager,
Compiler,
HostViewFactoryRef,
EventEmitter,
Output,
Injectable,
Inject
} from 'angular2/core';
import { Injector} from 'angular2/src/core/di';
import {Headers} from "angular2/http";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'child-component',
    template: '<div>good</div>'
})
class ChildComponent {
}




export class InjectClass {
    a = "inject var";
    constructor() { }
}


@Injectable()
export class InjectClassMore {
    a = "inject var 2";
    b: string;
    constructor(ina: InjectClass) {
        this.b = ina.a;
    }
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
    <div>{{moreNumber}}</div>{{haha | date:'medium'}}
    `,
    directives: [numberItem],
    providers: [InjectClassMore]
})
export class numberList {
    numbers: Array<number>;
    haha = Date.now();
    constructor(public ina: InjectClassMore, _inject: Injector) {
        ina.a = "change a in child com";
        console.log("from NUmberlIst", ina);
        console.log("from parent", _inject.parent.get(InjectClassMore));

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
    selector: 'zippy',
    template: `
  <div class="zippy">
    <div (click)="toggle()">Toggle</div>
    <div [hidden]="!visible">
      <ng-content></ng-content>
    </div>
 </div>`})
export class Zippy {
    visible: boolean = true;
    @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() close: EventEmitter<any> = new EventEmitter();
    toggle() {
        this.visible = !this.visible;
        if (this.visible) {
            this.open.emit(null);
        } else {
            this.close.emit(null);
        }
    }
}



@Component({
    selector: 'parent-component',
    template: `Parent (<child id="child"></child>)(<child #child></child>) <numberList></numberList>
     <li> <a [routerLink]="['./NumberList']">NumberList</a></li>
     <li> <a [routerLink]="['./NumberItem']"  target="_blank">NumberItem</a></li>
      <router-outlet></router-outlet>
      Parent (<some-component></some-component>) <zippy>hahah houhou</zippy>`,
    directives: [numberList, ROUTER_DIRECTIVES, Zippy],
    providers: [InjectClassMore, InjectClass]
})
@RouteConfig([
    { path: '/', name: 'NumberList', component: numberList, useAsDefault: true },
    { path: '/numberItem', name: 'NumberItem', component: numberItem }
])
export class ParentApp {

    // constructor(dcl: DynamicComponentLoader, elementRef: ElementRef) {
    //     dcl.loadIntoLocation(ChildComponent, elementRef, 'child');
    // }
    // constructor(dcl: DynamicComponentLoader, injector: Injector) {
    //     console.log(dcl.loadAsRoot(ChildComponent, '#child', injector));
    // }
    viewRef: ViewRef;
    constructor(public appViewManager: AppViewManager, compiler: Compiler, public ina: InjectClassMore) {
        var xx = 6;

        var firstHeaders = new Headers();  // Currently empty
        firstHeaders.append('Content-Type', 'image/jpeg');
        var m =firstHeaders.toJSON(); //'Angular'
        
        compiler.compileInHost(ChildComponent).then(function(hostProtoViewRef: HostViewFactoryRef) {
            var a = hostProtoViewRef;
            this.viewRef = appViewManager.createRootHostView(hostProtoViewRef, 'some-component', null);
            console.log(this.viewRef);
            return true;
        })
    }

    
    // constructor(dcl: DynamicComponentLoader, elementRef: ElementRef) {
    //     dcl.loadNextToLocation(ChildComponent, elementRef);
    // }
}






