System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var Weather;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Weather = (function () {
                function Weather(http) {
                    var _this = this;
                    this.hourly_time = ['时间'];
                    this.hourly_tmp = ['温度'];
                    this.hourly_pres = ['气压'];
                    this.hourly_hum = ['气压'];
                    this.firstHeaders = new http_1.Headers();
                    this.firstHeaders.append('apikey', '1b3e35e5bdb4cced72fae8c2244668a0');
                    this.opts = new http_1.RequestOptions();
                    this.opts.headers = this.firstHeaders;
                    http.get('http://apis.baidu.com/heweather/weather/free?city=beijing', this.opts).subscribe(function (res) {
                        _this.weatherData = res.json();
                        _this.weatherData = _this.weatherData['HeWeather data service 3.0'][0];
                        console.log(_this.weatherData);
                        for (var _i = 0, _a = _this.weatherData.hourly_forecast; _i < _a.length; _i++) {
                            var v = _a[_i];
                            var time = v.date.split(" ")[1];
                            _this.hourly_time.push(time);
                            _this.hourly_tmp.push(v.tmp);
                            _this.hourly_pres.push(v.pres);
                            _this.hourly_pres.push(v.hum);
                        }
                        console.log(_this.hourly_time);
                    });
                }
                Weather = __decorate([
                    core_1.Component({
                        selector: 'weather',
                        providers: [http_1.HTTP_PROVIDERS],
                        template: "\n    <div  *ngIf=\"weatherData\">\n       <div class=\"row\">\n            <dir class=\"col-xs-3\">\n                <h3> \u4ECA\u65E5\u5929\u6C14</h3>\n            </dir>\n            <div class=\"col-xs-8 col-xs-offset-1\">\n                <div class=\"row\">\n                    <div class=\"col-xs-4\">\n                        \u5F53\u524D\u6E29\u5EA6(\u6444\u6C0F\u5EA6):\n                    </div>\n                    <div class=\"col-xs-8\">\n                        {{weatherData.now.tmp}}\n                    </div>\n                    <div class=\"col-xs-4\">\n                        \u6E7F\u5EA6(%):\n                    </div>\n                    <div class=\"col-xs-8\">\n                        {{weatherData.now.hum}}\n                    </div>\n                    <div class=\"col-xs-4\">\n                        \u5929\u6C14\u72B6\u51B5:\n                    </div>\n                    <div class=\"col-xs-8\">\n                        {{weatherData.now.cond.txt}}\n                    </div>\n                    <div class=\"col-xs-4\">\n                        \u964D\u96E8\u91CF(mm):\n                    </div>\n                    <div class=\"col-xs-8\">\n                        {{weatherData.now.pcpn}}\n                    </div>\n                </div>\n            </div>\n        </div>\n   <dir class=\"col-xs-3\">\n            <h3> \u4ECA\u65E5\u9884\u62A5</h3>\n   </dir>\n   <div *ngFor=\"#item of weatherData.hourly_forecast\">\n        <div class=\"col-xs-8 col-xs-offset-1\">\n            <div class=\"row\">\n                <div class=\"col-xs-4\">\n                    \u65F6\u95F4:\n                </div>\n                <div class=\"col-xs-8\">\n                    {{item.date}}\n                </div>\n                <div class=\"col-xs-4\">\n                    \u6E7F\u5EA6(%)::\n                </div>\n                <div class=\"col-xs-8\">\n                    {{item.hum}}\n                </div>\n                <div class=\"col-xs-4\">\n                     \u5F53\u524D\u6E29\u5EA6(\u6444\u6C0F\u5EA6):\n                </div>\n                <div class=\"col-xs-8\">\n                    {{item.tmp}}\n                </div>\n                <div class=\"col-xs-4\">\n                    \u6C14\u538B:\n                </div>\n                <div class=\"col-xs-8\">\n                    {{item.pres}}\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    \n       <dir class=\"col-xs-3\">\n            <h3> \u672A\u67657\u5929\u9884\u62A5</h3>\n   </dir>\n       <div *ngFor=\"#item of weatherData.daily_forecast\">\n        <div class=\"col-xs-8 col-xs-offset-1\">\n            <div class=\"row\">\n                <div class=\"col-xs-4\">\n                    \u65F6\u95F4:\n                </div>\n                <div class=\"col-xs-8\">\n                    {{item.date}}\n                </div>\n                <div class=\"col-xs-4\">\n                    \u6E7F\u5EA6(%)::\n                </div>\n                <div class=\"col-xs-8\">\n                    {{item.hum}}\n                </div>\n                <div class=\"col-xs-4\">\n                     \u6E29\u5EA6:\n                </div>\n                <div class=\"col-xs-8\">\n                    {{item.tmp.max}} ~ {{item.tmp.min}}\n                </div>\n                <div class=\"col-xs-4\">\n                    \u6C14\u538B:\n                </div>\n                <div class=\"col-xs-8\">\n                    {{item.pres}}\n                </div>\n                <div class=\"col-xs-4\">\n                    \u5929\u6C14\u60C5\u51B5:\n                </div>\n                <div class=\"col-xs-8\">\n                   \u767D\u5929: {{item.cond.txt_d}}\n                   \u591C\u95F4\uFF1A {{item.cond.txt_n}}\n                </div>\n            </div>\n        </div>\n    </div>\n </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Weather);
                return Weather;
            })();
            exports_1("Weather", Weather);
        }
    }
});
//# sourceMappingURL=weather.js.map