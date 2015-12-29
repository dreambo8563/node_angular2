import {Component, EventEmitter} from 'angular2/core';
import {NgFor} from "angular2/common";
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
   <div *ngFor="#item of weatherData.hourly_forecast">
        <div class="col-xs-8 col-xs-offset-1">
            <div class="row">
                <div class="col-xs-4">
                    时间:
                </div>
                <div class="col-xs-8">
                    {{item.date}}
                </div>
                <div class="col-xs-4">
                    湿度(%)::
                </div>
                <div class="col-xs-8">
                    {{item.hum}}
                </div>
                <div class="col-xs-4">
                     当前温度(摄氏度):
                </div>
                <div class="col-xs-8">
                    {{item.tmp}}
                </div>
                <div class="col-xs-4">
                    气压:
                </div>
                <div class="col-xs-8">
                    {{item.pres}}
                </div>
            </div>
        </div>
    </div>
    
    
       <dir class="col-xs-3">
            <h3> 未来7天预报</h3>
   </dir>
       <div *ngFor="#item of weatherData.daily_forecast">
        <div class="col-xs-8 col-xs-offset-1">
            <div class="row">
                <div class="col-xs-4">
                    时间:
                </div>
                <div class="col-xs-8">
                    {{item.date}}
                </div>
                <div class="col-xs-4">
                    湿度(%)::
                </div>
                <div class="col-xs-8">
                    {{item.hum}}
                </div>
                <div class="col-xs-4">
                     温度:
                </div>
                <div class="col-xs-8">
                    {{item.tmp.max}} ~ {{item.tmp.min}}
                </div>
                <div class="col-xs-4">
                    气压:
                </div>
                <div class="col-xs-8">
                    {{item.pres}}
                </div>
                <div class="col-xs-4">
                    天气情况:
                </div>
                <div class="col-xs-8">
                   白天: {{item.cond.txt_d}}
                   夜间： {{item.cond.txt_n}}
                </div>
            </div>
        </div>
    </div>
 </div>
    `
})
export class Weather {
    firstHeaders: Headers;
    weatherData;
    opts: RequestOptions;
    hourly_time: string[] = ['时间'];
    hourly_tmp: string[] = ['温度'];
    hourly_pres: string[] = ['气压'];
    hourly_hum: string[] = ['气压'];

    constructor(http: Http) {
        this.firstHeaders = new Headers();
        this.firstHeaders.append('apikey', '1b3e35e5bdb4cced72fae8c2244668a0');
        this.opts = new RequestOptions();
        this.opts.headers = this.firstHeaders;
        http.get('http://apis.baidu.com/heweather/weather/free?city=beijing', this.opts).subscribe(res=> {
            this.weatherData = res.json();
            this.weatherData = this.weatherData['HeWeather data service 3.0'][0];
            console.log(this.weatherData);

            for (let v of this.weatherData.hourly_forecast) {
                let time = v.date.split(" ")[1];
                this.hourly_time.push(time);

                this.hourly_tmp.push(v.tmp);
                this.hourly_pres.push(v.pres);
                this.hourly_pres.push(v.hum);
            }
            console.log(this.hourly_time);
        })

    }
    // loadDailyChart() {
    //     var chart = c3.generate({
    //         data: {
    //             x: 'x',
    //             //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
    //             columns: [
    //                 ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
    //                 //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
    //                 ['data1', 30, 200, 100, 400, 150, 250],
    //                 ['data2', 130, 340, 200, 500, 250, 350]
    //             ]
    //         },
    //         axis: {
    //             x: {
    //                 type: 'timeseries',
    //                 tick: {
    //                     format: '%Y-%m-%d'
    //                 }
    //             }
    //         }
    //     });

    //     setTimeout(function() {
    //         chart.load({
    //             columns: [
    //                 ['data3', 400, 500, 450, 700, 600, 500]
    //             ]
    //         });
    //     }, 1000);
    // }

}