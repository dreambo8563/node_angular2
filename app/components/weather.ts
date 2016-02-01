import {Component, EventEmitter, AfterViewChecked} from 'angular2/core';
import {NgFor} from "angular2/common";
import {Router} from 'angular2/router';
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from 'angular2/http';


@Component({
    selector: 'weather',
    providers: [HTTP_PROVIDERS],
    template: `
    <div  *ngIf="weatherData">
       <div class="row">
            <dir class="col-xs-3">
                <h3> 今日天气</h3>
            </dir>
            <div class="col-xs-8 col-xs-offset-1">
                <div class="row">
                    <div class="col-xs-4">
                        当前温度(摄氏度):
                    </div>
                    <div class="col-xs-8">
                        {{weatherData.now.tmp}}
                    </div>
                    <div class="col-xs-4">
                        湿度(%):
                    </div>
                    <div class="col-xs-8">
                        {{weatherData.now.hum}}
                    </div>
                    <div class="col-xs-4">
                        天气状况:
                    </div>
                    <div class="col-xs-8">
                        {{weatherData.now.cond.txt}}
                    </div>
                    <div class="col-xs-4">
                        降雨量(mm):
                    </div>
                    <div class="col-xs-8">
                        {{weatherData.now.pcpn}}
                    </div>
                </div>
            </div>
        </div>
   <dir class="col-xs-3">
            <h3> 今日预报</h3>
   </dir>
 <svg class="col-xs-8" id="visualisation_today" width="1000" style="padding-left: 53px;" height="500"></svg>
    
    
 </div>
    `
})
export class Weather implements AfterViewChecked {
    firstHeaders: Headers;
    weatherData;
    opts: RequestOptions;
    hourly_time: number[] = [];
    hourly_tmp: number[] = [];
    hourly_pres: string[] = [];
    hourly_hum: string[] = [];
    hourly_svg: Object[] = [];

    constructor(http: Http, _route: Router) {
        this.firstHeaders = new Headers();
        this.firstHeaders.append('apikey', '1b3e35e5bdb4cced72fae8c2244668a0');
        this.opts = new RequestOptions();
        this.opts.headers = this.firstHeaders;
        http.get('http://apis.baidu.com/heweather/weather/free?city=beijing', this.opts).subscribe(res=> {
            this.weatherData = res.json();
            this.weatherData = this.weatherData['HeWeather data service 3.0'][0];
            // console.log(this.weatherData);


            for (let v of this.weatherData.hourly_forecast) {
                let time = v.date.split(" ")[1];
                time = Number(time.split(":")[0]);
                this.hourly_time.push(time);


                let obj = new Object();
                obj = { time: parseInt(time), tmp: parseInt(v.tmp) }
                this.hourly_svg.push(obj);

                this.hourly_tmp.push(parseInt(v.tmp));

            }
            
            // console.log(this.hourly_time, this.hourly_tmp);
            
        })

    }

    ngAfterViewChecked() {

        this.InitChart();
    }
    InitChart() {
      

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

        var vis = d3.select("#visualisation_today"),
            WIDTH = 1000,
            HEIGHT = 500,
            MARGINS = {
                top: 20,
                right: 80,
                bottom: 20,
                left: 50
            },

            xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([Math.min(...this.hourly_time), Math.max(...this.hourly_time)]),
            yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([Math.min(...this.hourly_tmp), Math.max(...this.hourly_tmp)]),
            

            
            xAxis = d3.svg.axis()
                .scale(xScale),

            yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("left");


        vis.append("svg:g")
            .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
            .call(xAxis);
            console.log();
        vis.append("svg:g")
            .call(yAxis);

        var lineGen = d3.svg.line()
            .x(function(d) {
                return xScale(d['time']);
            })
            .y(function(d) {
                return yScale(d['tmp']);
            })
            .interpolate("basis");

        vis.append('svg:path')
            .attr('d', lineGen(this.hourly_svg))
            .attr('stroke', 'green')
            .attr('stroke-width', 2)
            .attr('fill', 'none');
    }

}