import {Component} from 'angular2/core';
import {NgFor} from "angular2/common";
import * as Rx from 'rxjs/Rx';
import {HTTP_PROVIDERS, Http, Response} from 'angular2/http';
import {Result} from './Result';
import {sortBy} from '../pipes/sort';


/**
 * A good practice when writing Angular code is to try to isolate the data structures you are using from
the component code.
 */

@Component({
    selector: 'buttons',
    providers: [HTTP_PROVIDERS],
    directives: [Result],
    pipes: [sortBy],
    styleUrls: ['app/style/search.css'],
    template: `
    <div class="container">
        <div class="row">
            <div class="col-xs-8 col-xs-offset-2">
                <input autofocus type="text" class="form-control searchInput" placeholder="Keywords">
            </div>
        </div>
        <div class="row">
            <div class="col-xs-4" *ngIf="selectedAvatar">
                <h3> From Inner Component:</h3> 
             </div>
             <div class="col-xs-8 ">
                  <img src={{selectedAvatar}} class="img-responsive">
            </div>
         </div>
           <div class="row">
        <div class="col-xs-12 searchResults " [style.marginTop]="!responseData.length? '150px' : '50px'">
           <h2 *ngIf="!responseData.length"> Please input your keyword to search on Github</h2>
           <result *ngFor="#item of responseData|sortBy:'stargazers_count'; #i = index" [item] = "item" (hoverImg)="hoverImg($event)">
           </result>
        </div>
    </div> 
    </div> 
    `
})
export class Search {
    searchEl;
    http: Http;
    keyups: Rx.Observable<any>;
    requestStream: Rx.Observable<any>;
    responseData = [];
    selectedAvatar: string = null;

    constructor(http: Http) {
        // console.log(!!this.responseData.length);
        this.http = http;
        this.searchEl = document.querySelector('.searchInput');
       
        this.keyups = Rx.Observable.fromEvent(this.searchEl, 'keyup');
        this.requestStream = this.keyups
            .map(e => e.target.value)
            .filter(text => text.length > 2)
            .debounceTime(500)
            .distinctUntilChanged();

        this.requestStream.subscribe((x) => {
            this.http.get("https://api.github.com/search/repositories?q=" + x).subscribe(res=> {
                this.responseData = res.json().items;
            });
        });
    }
    hoverImg(url: string) {
        console.log(url);
        this.selectedAvatar = url;
    }


}