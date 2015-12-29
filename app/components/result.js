System.register(['angular2/core', '../directives/rotate'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, rotate_1;
    var Result;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rotate_1_1) {
                rotate_1 = rotate_1_1;
            }],
        execute: function() {
            Result = (function () {
                function Result() {
                    this.hoverImg = new core_1.EventEmitter();
                }
                Result.prototype.imgSelected = function () {
                    this.hoverImg.emit(this.item.owner.avatar_url);
                };
                Result = __decorate([
                    core_1.Component({
                        selector: 'result',
                        directives: [rotate_1.RotateDirective],
                        outputs: ['hoverImg'],
                        styleUrls: ['app/style/search.css'],
                        inputs: ['item'],
                        host: { class: 'col-xs-2 col-xs-offset-1 resultItem itemSpace' },
                        template: "\n                <div class=\"row\">\n                    <div rotate class=\"col-xs-6\">{{item.owner.login}}</div>\n                    <div class=\"col-xs-6\">\n                        <img rotate src={{item.owner.avatar_url}} class=\"img-responsive\" (mouseenter)=\"imgSelected()\">\n                    </div>\n                    <div class=\"col-xs-8\">\n                        <button rotate type=\"button\" class=\"btn btn-default btn-lg\">\n                            <span class=\"glyphicon glyphicon-star\" aria-hidden=\"true\"></span> {{item.stargazers_count}}\n                        </button>\n                    </div>\n                    <div class=\"col-xs-4\" style=\"margin-top:20px;\">\n                       <a href={{item.html_url}} > Watching</a>\n                    </div>\n                </div>  \n    "
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