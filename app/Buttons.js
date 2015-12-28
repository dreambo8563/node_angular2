System.register(['angular2/core', 'rxjs/Rx', 'angular2/http', './components/result'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx, http_1, result_1;
    var Buttons;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1) {
                Rx = Rx_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (result_1_1) {
                result_1 = result_1_1;
            }],
        execute: function() {
            /**
             * A good practice when writing Angular code is to try to isolate the data structures you are using from
            the component code.
             */
            Buttons = (function () {
                function Buttons(http) {
                    var _this = this;
                    this.responseData = [];
                    console.log(!!this.responseData.length);
                    this.http = http;
                    this.searchEl = document.querySelector('.searchInput');
                    this.keyups = Rx.Observable.fromEvent(this.searchEl, 'keyup');
                    this.requestStream = this.keyups
                        .map(function (e) { return e.target.value; })
                        .filter(function (text) { return text.length > 2; })
                        .debounceTime(500)
                        .distinctUntilChanged();
                    this.requestStream.subscribe(function (x) {
                        _this.http.get("https://api.github.com/search/repositories?q=" + x).subscribe(function (res) {
                            _this.responseData = res.json().items;
                            console.log(res.json().items);
                        });
                    });
                }
                Buttons = __decorate([
                    core_1.Component({
                        selector: 'buttons',
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [result_1.Result],
                        styleUrls: ['app/style/search.css'],
                        template: "\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-8 col-xs-offset-2\">\n                <input autofocus type=\"text\" class=\"form-control searchInput\" placeholder=\"Keywords\">\n            </div>\n        </div>\n           <div class=\"row\">\n        <div class=\"col-xs-12 searchResults\">\n           <h2 *ngIf=\"!responseData.length\"> Please input your keyword to search on Github</h2>\n           <result *ngFor=\"#item of responseData; #i = index\" [item] = \"item\">\n           <div class=\"itemSpace\"></div>\n           </result>\n        </div>\n    </div> \n    </div>\n  \n    "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Buttons);
                return Buttons;
            })();
            exports_1("Buttons", Buttons);
        }
    }
});
//# sourceMappingURL=Buttons.js.map