System.register(['angular2/core', 'angular2/router', 'angular2/http', './shadedProgressBars'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, shadedProgressBars_1;
    var Weather;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (shadedProgressBars_1_1) {
                shadedProgressBars_1 = shadedProgressBars_1_1;
            }],
        execute: function() {
            Weather = (function () {
                function Weather(http, _route) {
                    var _this = this;
                    this.hourly_time = [];
                    this.hourly_tmp = [];
                    this.hourly_pres = [];
                    this.hourly_hum = [];
                    this.hourly_svg = [];
                    this.options = { color: "dark", move: false, rotate: false, ruler: "ruler-2" };
                    this.firstHeaders = new http_1.Headers();
                    this.firstHeaders.append('apikey', '1b3e35e5bdb4cced72fae8c2244668a0');
                    this.opts = new http_1.RequestOptions();
                    this.opts.headers = this.firstHeaders;
                    http.get('http://apis.baidu.com/heweather/weather/free?city=beijing', this.opts).subscribe(function (res) {
                        _this.weatherData = res.json();
                        _this.weatherData = _this.weatherData['HeWeather data service 3.0'][0];
                        // console.log(this.weatherData);
                        for (var _i = 0, _a = _this.weatherData.hourly_forecast; _i < _a.length; _i++) {
                            var v = _a[_i];
                            var time = v.date.split(" ")[1];
                            time = Number(time.split(":")[0]);
                            _this.hourly_time.push(time);
                            var obj = new Object();
                            obj = { time: parseInt(time), tmp: parseInt(v.tmp) };
                            _this.hourly_svg.push(obj);
                            _this.hourly_tmp.push(parseInt(v.tmp));
                        }
                        // console.log(this.hourly_time, this.hourly_tmp);
                    });
                }
                Weather.prototype.ngAfterViewChecked = function () {
                    this.InitChart();
                };
                Weather.prototype.InitChart = function () {
                    // var data = [{
                    //     "sale": "202",
                    //     "year": "2000"
                    // }, {
                    //         "sale": "215",
                    //         "year": "2001"
                    //     }, {
                    //         "sale": "179",
                    //         "year": "2002"
                    //     }, {
                    //         "sale": "199",
                    //         "year": "2003"
                    //     }, {
                    //         "sale": "134",
                    //         "year": "2003"
                    //     }, {
                    //         "sale": "176",
                    //         "year": "2010"
                    //     }];
                    var vis = d3.select("#visualisation_today"), WIDTH = 1000, HEIGHT = 500, MARGINS = {
                        top: 20,
                        right: 80,
                        bottom: 20,
                        left: 50
                    }, xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([Math.min.apply(Math, this.hourly_time), Math.max.apply(Math, this.hourly_time)]), yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([Math.min.apply(Math, this.hourly_tmp), Math.max.apply(Math, this.hourly_tmp)]), xAxis = d3.svg.axis()
                        .scale(xScale), yAxis = d3.svg.axis()
                        .scale(yScale)
                        .orient("left");
                    vis.append("svg:g")
                        .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
                        .call(xAxis);
                    console.log();
                    vis.append("svg:g")
                        .call(yAxis);
                    var lineGen = d3.svg.line()
                        .x(function (d) {
                        return xScale(d['time']);
                    })
                        .y(function (d) {
                        return yScale(d['tmp']);
                    })
                        .interpolate("basis");
                    vis.append('svg:path')
                        .attr('d', lineGen(this.hourly_svg))
                        .attr('stroke', 'green')
                        .attr('stroke-width', 2)
                        .attr('fill', 'none');
                };
                Weather = __decorate([
                    core_1.Component({
                        selector: 'weather',
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [shadedProgressBars_1.ShadedProgressBars],
                        template: "\n    <div  *ngIf=\"weatherData\">\n       <div class=\"row\">\n            <dir class=\"col-xs-3\">\n                <h3> \u4ECA\u65E5\u5929\u6C14</h3>\n            </dir>\n            <div class=\"col-xs-8 col-xs-offset-1\">\n                <div class=\"row\">\n                    <div class=\"col-xs-4\">\n                        \u5F53\u524D\u6E29\u5EA6(\u6444\u6C0F\u5EA6):\n                    </div>\n                    <div class=\"col-xs-8\">\n                        {{weatherData.now.tmp}}\n                    </div>\n                    <div class=\"col-xs-4\">\n                        \u6E7F\u5EA6(%):\n                    </div>\n                    <div class=\"col-xs-8\">\n                        {{weatherData.now.hum}}\n                    </div>\n                    <div class=\"col-xs-4\">\n                        \u5929\u6C14\u72B6\u51B5:\n                    </div>\n                    <div class=\"col-xs-8\">\n                        {{weatherData.now.cond.txt}}\n                    </div>\n                    <div class=\"col-xs-4\">\n                        \u964D\u96E8\u91CF(mm):\n                    </div>\n                    <div class=\"col-xs-8\">\n                        {{weatherData.now.pcpn}}\n                    </div>\n                </div>\n            </div>\n        </div>\n   <dir class=\"col-xs-3\">\n            <h3> \u4ECA\u65E5\u9884\u62A5</h3>\n   </dir>\n <svg class=\"col-xs-8\" id=\"visualisation_today\" width=\"1000\" style=\"padding-left: 53px;\" height=\"500\"></svg>\n    \n    \n </div>\n \n <shadedProgressBars width=\"600px\" value=\"35\" [options]=\"options\"></shadedProgressBars>\n    "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], Weather);
                return Weather;
            }());
            exports_1("Weather", Weather);
        }
    }
});
//# sourceMappingURL=weather.js.map