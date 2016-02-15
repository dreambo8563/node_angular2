import {Component, OnInit, Optional, Self, Attribute, Input} from 'angular2/core';


interface ProgressBarsOpt {
    color?: string; //orange, red, yellow, lime, navy, cyan, dark
    rotate?: boolean;
    move?: boolean;
    ruler?: string; //ruler, ruler-2, ruler-3, dots-pattern, heat-gradient
    toolTipColor?:string; //orange, red, yellow, lime, navy, cyan, dark
}


@Component({
    selector: 'shadedProgressBars',
    templateUrl: './app/components/shadedProgressBars.html',
    styleUrls: ['./app/components/shadedProgressBars.css']

})
export class ShadedProgressBars implements OnInit {
    _width: string = '400px';
    _value: number = 1;
    _options: ProgressBarsOpt = { color: "yellow", move: false, rotate: false, ruler: "ruler" ,toolTipColor:"white"};
    @Input('options') options: ProgressBarsOpt;
    constructor( @Optional() @Self() @Attribute("width") width: string, @Optional() @Self() @Attribute("value") value: number) {
        this._width = width || this._width;
        this._value = value || this._value;
    }

    ngOnInit() {
        if (!!this.options) {
            this._options.color = this.options.color || this._options.color;
            this._options.move = this.options.move || this._options.move;
            this._options.rotate = this.options.rotate || this._options.rotate;
            this._options.ruler = this.options.ruler || this._options.ruler;
            this._options.toolTipColor = this.options.toolTipColor || this._options.color ||this._options.toolTipColor;
        }
    }
}


