System.register(['angular2/core', 'ng2-material/all', '../directives/rotate'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, all_1, rotate_1;
    var Materials;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (all_1_1) {
                all_1 = all_1_1;
            },
            function (rotate_1_1) {
                rotate_1 = rotate_1_1;
            }],
        execute: function() {
            /**
             * A good practice when writing Angular code is to try to isolate the data structures you are using from
            the component code.
             */
            Materials = (function () {
                function Materials() {
                    this.title1 = "title1";
                    this.title4 = "title4";
                }
                Materials = __decorate([
                    core_1.Component({
                        selector: 'materials',
                        styleUrls: ['app/style/search.css'],
                        template: "\n        <md-content>\n  <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap>\n    <button rotate md-button>{{title1}}</button>\n    <button md-button md-no-ink class=\"md-primary\">Primary (md-noink)</button>\n    <button md-button disabled=\"true\" class=\"md-primary\">Disabled</button>\n    <button md-button class=\"md-warn\">{{title4}}</button>\n    <div class=\"label\">Flat</div>\n  </section>\n  <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap>\n    <button md-raised-button class=\"md-raised\">Button</button>\n    <button md-raised-button class=\"md-raised md-primary\">Primary</button>\n    <button md-raised-button disabled=\"true\" class=\"md-raised md-primary\">Disabled</button>\n    <button md-raised-button class=\"md-raised md-warn\">Warn</button>\n    <div class=\"label\">Raised</div>\n  </section>\n  <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap>\n      <button md-fab class=\"md-fab\" aria-label=\"Eat cake\">\n          <i md-icon>cake</i>\n      </button>\n      <button md-fab class=\"md-primary\" aria-label=\"Use Android\">\n        <i md-icon>android</i>\n      </button>\n      <button md-fab disabled=\"true\" aria-label=\"Comment\">\n          <i md-icon>comment</i>\n      </button>\n      <button md-fab class=\"md-primary md-hue-2\" aria-label=\"Profile\">\n          <i md-icon>people</i>\n      </button>\n      <button md-fab class=\"md-mini\" aria-label=\"Eat cake\">\n          <i md-icon>cake</i>\n      </button>\n      <button md-fab class=\"md-mini md-primary\" aria-label=\"Use Android\">\n        <i md-icon>android</i>\n      </button>\n    <div class=\"label\">FAB</div>\n  </section>\n  <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap>\n      <a md-button [href]=\"googleUrl\" target=\"_blank\">Default Link</a>\n      <a md-button class=\"md-primary\" [href]=\"googleUrl\" target=\"_blank\">Primary Link</a>\n      <button md-button>Default Button</button>\n    <div class=\"label\">Link vs. Button</div>\n  </section>\n  <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap>\n    <button md-button class=\"md-primary md-hue-1\">Primary Hue 1</button>\n    <button md-raised-button class=\"md-warn md-hue-2\">Warn Hue 2</button>\n    <button md-button class=\"md-accent\">Accent</button>\n    <button md-raised-button class=\"md-accent md-hue-1\">Accent Hue 1</button>\n    <div class=\"label\">Themed</div>\n  </section>\n  <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap>\n    <button md-button class=\"md-icon-button md-primary\" aria-label=\"Settings\">\n      <i md-icon>menu</i>\n    </button>\n    <button md-button class=\"md-icon-button md-accent\" aria-label=\"Favorite\">\n      <i md-icon>favorite</i>\n    </button>\n    <button md-button class=\"md-icon-button\" aria-label=\"More\">\n      <i md-icon>more_vert</i>\n    </button>\n    <a md-button href=\"http://google.com\"\n               title=\"Launch Google.com in new window\"\n               target=\"_blank\"\n               disabled=\"true\"\n               aria-label=\"Google.com\"\n               class=\"md-icon-button launch\" >\n      <i md-icon>launch</i>\n    </a>\n    <div class=\"label\">Icon Button</div>\n  </section>\n</md-content>\n    ",
                        directives: [all_1.MATERIAL_DIRECTIVES, rotate_1.RotateDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Materials);
                return Materials;
            })();
            exports_1("Materials", Materials);
        }
    }
});
//# sourceMappingURL=Material.js.map