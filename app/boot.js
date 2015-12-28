System.register(['angular2/platform/browser', './Search'], function(exports_1) {
    var browser_1, Search_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (Search_1_1) {
                Search_1 = Search_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(Search_1.Search);
        }
    }
});
//# sourceMappingURL=boot.js.map