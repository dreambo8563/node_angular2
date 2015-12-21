System.register(['angular2/platform/browser', './Reddit'], function(exports_1) {
    var browser_1, Reddit_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (Reddit_1_1) {
                Reddit_1 = Reddit_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(Reddit_1.Reddit);
        }
    }
});
//# sourceMappingURL=boot.js.map