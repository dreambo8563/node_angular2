import {Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer, Input,
Optional, Self, Attribute} from 'angular2/core';

@Component({
    selector: 'animate',
    templateUrl: './app/components/articleItem.html',
    styleUrls: ['./app/components/articleItem.css']
})

export class ArticleItem implements OnInit, OnDestroy {
    @ViewChild('content') content: ElementRef;
    @ViewChild('header') header: ElementRef;


    @Input('article') article: { title: string, content: string };

    _article = {
        title: `This is a title`,
        content: `This is the main content. In this area,
                    the header will be hidden. Click the button to jump on top.test test test test test test test test testtest test test test test
                    test test test test test test test test test test test test test test test test test test`};
    _height: string = '400px';
    _width: string = '400px';
    
    constructor( @Optional() @Self() @Attribute("height") height: string, @Optional() @Self() @Attribute("width") width: string) {
        this._height = height || this._height;
        this._width = width || this._width;
        this._article = this.article || this._article;
    }

    ngOnInit() { console.log('ngOnInit'); }
    ngOnDestroy() { console.log('ngOnDestroy'); }

    toggle() {
        this.header.nativeElement.classList.toggle("active");
        this.content.nativeElement.classList.toggle("active");
    }
}
