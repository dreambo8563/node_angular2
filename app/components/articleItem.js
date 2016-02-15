System.register(['angular2/core'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var ArticleItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArticleItem = (function () {
                function ArticleItem(height, width) {
                    this._article = {
                        title: "This is a title",
                        content: "This is the main content. In this area,\n                    the header will be hidden. " };
                    this._height = '400px';
                    this._width = '400px';
                    this._height = height || this._height;
                    this._width = width || this._width;
                }
                ArticleItem.prototype.ngOnInit = function () {
                    this._article = this.article || this._article;
                };
                ArticleItem.prototype.ngOnDestroy = function () { console.log('ngOnDestroy'); };
                ArticleItem.prototype.toggle = function () {
                    this.header.nativeElement.classList.toggle("active");
                    this.content.nativeElement.classList.toggle("active");
                };
                __decorate([
                    core_1.ViewChild('content'), 
                    __metadata('design:type', core_1.ElementRef)
                ], ArticleItem.prototype, "content", void 0);
                __decorate([
                    core_1.ViewChild('header'), 
                    __metadata('design:type', core_1.ElementRef)
                ], ArticleItem.prototype, "header", void 0);
                __decorate([
                    core_1.Input('article'), 
                    __metadata('design:type', Object)
                ], ArticleItem.prototype, "article", void 0);
                ArticleItem = __decorate([
                    core_1.Component({
                        selector: 'animate',
                        templateUrl: './app/components/articleItem.html',
                        styleUrls: ['./app/components/articleItem.css']
                    }),
                    __param(0, core_1.Optional()),
                    __param(0, core_1.Self()),
                    __param(0, core_1.Attribute("height")),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Self()),
                    __param(1, core_1.Attribute("width")), 
                    __metadata('design:paramtypes', [String, String])
                ], ArticleItem);
                return ArticleItem;
            }());
            exports_1("ArticleItem", ArticleItem);
        }
    }
});
//# sourceMappingURL=articleItem.js.map