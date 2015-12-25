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
    var Reddit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * A good practice when writing Angular code is to try to isolate the data structures you are using from
            the component code.
             */
            Reddit = (function () {
                function Reddit() {
                }
                Reddit = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        template: "\nHello vincent\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Reddit);
                return Reddit;
            })();
            exports_1("Reddit", Reddit);
        }
    }
});
//# sourceMappingURL=Reddit.js.map