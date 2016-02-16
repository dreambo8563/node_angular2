import {Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer, Input,
Optional, Self, Attribute} from 'angular2/core';

@Component({
    selector: 'inputEffects',
    templateUrl: './app/components/inputEffects.html',
    styleUrls: ['./app/components/inputEffects.css']
})

export class InputEffects implements OnInit, OnDestroy {
    //default Value
    _height: string = '200%';
    _width: string = '350px';
    _id: string = 'input-1';
    _inputStyle: string = 'madoka';
    _title: string = 'Name';

    @Input('inputStyle') inputStyle: string;
    @Input('title') title: string;

    constructor( @Optional() @Self() @Attribute("height") height: string, @Optional() @Self() @Attribute("width") width: string, @Optional() @Self() @Attribute("id") id: string) {
        this._height = height || this._height;
        this._width = width || this._width;
        this._id = id || this._id;
    }


    ngOnInit() {
        this._inputStyle = this.inputStyle ? this.inputStyle.toLowerCase() : this._inputStyle;
        this._title = this.title || this._title;
    }
    ngOnDestroy() { console.log('ngOnDestroy'); }
}
