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
    var ShadedProgressBars;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShadedProgressBars = (function () {
                function ShadedProgressBars(width, value) {
                    this._width = '400px';
                    this._value = 1;
                    this._options = { color: "yellow", move: false, rotate: false, ruler: "ruler", toolTipColor: "white" };
                    this._width = width || this._width;
                    this._value = value || this._value;
                }
                ShadedProgressBars.prototype.ngOnInit = function () {
                    if (!!this.options) {
                        this._options.color = this.options.color || this._options.color;
                        this._options.move = this.options.move || this._options.move;
                        this._options.rotate = this.options.rotate || this._options.rotate;
                        this._options.ruler = this.options.ruler || this._options.ruler;
                        this._options.toolTipColor = this.options.toolTipColor || this._options.color || this._options.toolTipColor;
                    }
                };
                __decorate([
                    core_1.Input('options'), 
                    __metadata('design:type', Object)
                ], ShadedProgressBars.prototype, "options", void 0);
                ShadedProgressBars = __decorate([
                    core_1.Component({
                        selector: 'shadedProgressBars',
                        templateUrl: './app/components/shadedProgressBars.html',
                        styleUrls: ['./app/components/shadedProgressBars.css']
                    }),
                    __param(0, core_1.Optional()),
                    __param(0, core_1.Self()),
                    __param(0, core_1.Attribute("width")),
                    __param(1, core_1.Optional()),
                    __param(1, core_1.Self()),
                    __param(1, core_1.Attribute("value")), 
                    __metadata('design:paramtypes', [String, Number])
                ], ShadedProgressBars);
                return ShadedProgressBars;
            }());
            exports_1("ShadedProgressBars", ShadedProgressBars);
        }
    }
});
//# sourceMappingURL=shadedProgressBars.js.map