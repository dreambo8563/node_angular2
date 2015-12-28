import {Component} from 'angular2/core';
import {NgFor} from "angular2/common";

@Component({
    selector: 'result',
    inputs: ['item'],
    host: { class: 'col-xs-2 col-xs-offset-1 resultItem itemSpace' },
    template: `
                <div class="row">
                    <div class="col-xs-6">{{item.owner.login}}</div>
                    <div class="col-xs-6">
                        <img src={{item.owner.avatar_url}} class="img-responsive">
                    </div>
                    <div class="col-xs-8">
                        <button type="button" class="btn btn-default btn-lg">
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
    item: { [key: string]: any };
    constructor() {
    }
}

