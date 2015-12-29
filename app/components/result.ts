import {Component, EventEmitter} from 'angular2/core';
import {NgFor} from "angular2/common";
import {RotateDirective} from '../directives/rotate';

@Component({
    selector: 'result',
    directives: [RotateDirective],
    outputs: ['hoverImg'],
    styleUrls: ['app/style/search.css'],
    inputs: ['item'],
    host: { class: 'col-xs-2 col-xs-offset-1 resultItem itemSpace' },
    template: `
                <div class="row">
                    <div rotate class="col-xs-6">{{item.owner.login}}</div>
                    <div class="col-xs-6">
                        <img rotate src={{item.owner.avatar_url}} class="img-responsive" (mouseenter)="imgSelected()">
                    </div>
                    <div class="col-xs-8">
                        <button rotate type="button" class="btn btn-default btn-lg">
                            <span class="glyphicon glyphicon-star" aria-hidden="true"></span> {{item.stargazers_count}}
                        </button>
                    </div>
                    <div class="col-xs-4" style="margin-top:20px;">
                       <a href={{item.html_url}} > Watching</a>
                    </div>
                </div>  
    `
})
export class Result {
    item;
    hoverImg: EventEmitter<string>;
    constructor() {
        this.hoverImg = new EventEmitter();
    }
    imgSelected() {
        this.hoverImg.emit(this.item.owner.avatar_url);
    }

}

