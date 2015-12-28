System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Result;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Result = (function () {
                function Result() {
                }
                Result = __decorate([
                    core_1.Component({
                        selector: 'result',
                        inputs: ['item'],
                        host: { class: 'col-xs-2 col-xs-offset-1 resultItem' },
                        template: "\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">{{item.owner.login}}</div>\n                    <div class=\"col-xs-6\">\n                        <img src={{item.owner.avatar_url}} class=\"img-responsive\">\n                    </div>\n                    <div class=\"col-xs-8\">\n                        <button type=\"button\" class=\"btn btn-default btn-lg\">\n                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span> {{item.stargazers_count}}\n                        </button>\n                    </div>\n                    <div class=\"col-xs-4\">\n                       <a href={{item.html_url}}> Watching</a>\n                    </div>\n                </div>  \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Result);
                return Result;
            })();
            exports_1("Result", Result);
        }
    }
});
//# sourceMappingURL=result.js.map