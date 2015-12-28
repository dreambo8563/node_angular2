System.register(['angular2/platform/browser', './Buttons'], function(exports_1) {
    var browser_1, Buttons_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (Buttons_1_1) {
                Buttons_1 = Buttons_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(Buttons_1.Buttons);
        }
    }
});
//# sourceMappingURL=boot.js.map