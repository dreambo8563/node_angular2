import {Directive, ElementRef, Renderer, Input} from 'angular2/core';
@Directive({
    selector: '[rotate]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class RotateDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {
    }
    onMouseEnter() { this._rotate(true); }
    onMouseLeave() { this._rotate(false); }
    private _rotate(run: boolean) {
        this.renderer.setElementClass(this.el, 'rotate', run);
    }
}