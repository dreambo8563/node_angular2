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
    var InputEffects;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputEffects = (function () {
                function InputEffects(height, width, id) {
                    //default Value
                    this._height = '200%';
                    this._width = '350px';
                    this._id = 'input-1';
                    this._inputStyle = 'madoka';
                    this._title = 'Name';
                    this._height = height || this._height;
                    this._width = width || this._width;
                    this._id = id || this._id;
                }
                InputEffects.prototype.ngOnInit = function () {
                    this._inputStyle = this.inputStyle ? this.inputStyle.toLowerCase() : this._inputStyle;
                    this._title = this.title || this._title;
                };
                InputEffects.prototype.ngOnDestroy = function () { console.log('ngOnDestroy'); };
                __decorate([
                    core_1.Input('inputStyle'), 
                    __metadata('design:type', String)
                ], InputEffects.prototype, "inputStyle", void 0);
                __decorate([
                    core_1.Input('title'), 
                    __metadata('design:type', String)
                ], InputEffects.prototype, "title", void 0);
                InputEffects = __decorate([
                    core_1.Component({
                        selector: 'inputEffects',
                        templateUrl: './app/components/inputEffects.html',
                        styleUrls: ['./app/components/inputEffects.css']
                    }),
                    __param(0, core_1.Optional()),
                    __param(0, core_1.Self()),
                    __param(0, core_1.Attribute("height")),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Self()),
                    __param(1, core_1.Attribute("width")),
                    __param(2, core_1.Optional()),
                    __param(2, core_1.Self()),
                    __param(2, core_1.Attribute("id")), 
                    __metadata('design:paramtypes', [String, String, String])
                ], InputEffects);
                return InputEffects;
            }());
            exports_1("InputEffects", InputEffects);
        }
    }
});
//# sourceMappingURL=inputEffects.js.map