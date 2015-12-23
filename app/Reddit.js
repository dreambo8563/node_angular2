System.register(['angular2/core', './demo_form_sku'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, demo_form_sku_1;
    var Article, ArticleComponent, Reddit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (demo_form_sku_1_1) {
                demo_form_sku_1 = demo_form_sku_1_1;
            }],
        execute: function() {
            /**
             * A good practice when writing Angular code is to try to isolate the data structures you are using from
            the component code.
             */
            Article = (function () {
                function Article(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                Article.prototype.domain = function () {
                    try {
                        var link = this.link.split("//")[1];
                        return link.split("/")[0];
                    }
                    catch (err) {
                        return null;
                    }
                };
                return Article;
            })();
            /**
             * In Angular 2, a component host is the element this component is attached to. You’ll notice on our
            @Component we’re passing the option: host: { class: 'row' }. This tells Angular that on the host
            element (the reddit-article tag) we want to set the class attribute to have “row”.
            
            Using the host option is nice because it means we can encapsulate the reddit-article
            markup within our component. That is, we don’t have to both use a reddit-article tag
            and require a class="row" in the markup of the parent view. By using the host option,
            we’re able to configure our host element from within the component.
             */
            ArticleComponent = (function () {
                function ArticleComponent() {
                    this.article = new Article('Angular 2', 'http://angular.io', 10);
                }
                // By default, propagates the click event to all the parent components.
                // Because the click event is propagated to parents, our browser is trying to follow the empty link.
                ArticleComponent.prototype.voteUp = function () {
                    this.article.voteUp();
                    return false;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.article.voteDown();
                    return false;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        inputs: ['article'],
                        host: {
                            class: 'row'
                        },
                        template: "\n    <div class=\"four wide column center aligned votes\">\n        <div class=\"ui statistic\">\n            <div class=\"value\">\n                {{article.votes}}\n            </div>\n            <div class=\"label\">\n                Points\n            </div>\n        </div>\n        <div class=\"twelve wide column\">\n            <a class=\"ui large header\" href=\"{{article.link}}\">\n                {{article.title}}\n            </a>\n            <div class=\"meta\">({{article.domain()}})</div>\n            <ul class=\"ui big horizontal list votes\">\n                <li class=\"item\">\n                    <a href (click)=\"voteUp()\">\n                        <i class=\"arrow up icon\">\n                            upvote\n                        </i>\n                    </a>\n                </li>\n                 <li class=\"item\">\n                    <a href (click)=\"voteDown()\">\n                        <i class=\"arrow down icon\">\n                            downvote\n                        </i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            })();
            Reddit = (function () {
                function Reddit() {
                    this.articles = [
                        new Article('Angular 2', 'http://angular.io', 3),
                        new Article('Fullstack', 'http://fullstack.io', 2),
                        new Article('Angular Homepage', 'http://angular.io', 1),
                    ];
                }
                //#newtitle is a template var, it stands for the DOM object
                Reddit.prototype.addArticle = function (title, link) {
                    console.log("Adding article title: " + title.value + " and link: " + link.value);
                    this.articles.push(new Article(title.value, link.value, 0));
                    //clear the input after added
                    title.value = "";
                    link.value = "";
                };
                Reddit.prototype.sortArticles = function () {
                    return this.articles.sort(function (a, b) { return b.votes - a.votes; });
                };
                Reddit = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        directives: [ArticleComponent, demo_form_sku_1.DemoFormsSkuBuilder],
                        template: "\n    <form class=\"ui large form segment\">\n        <h3 class=\"ui header\">Add a Link</h3>\n        <div class=\"field\">\n            <label for=\"title\">Title</label>\n            <input name=\"title\" #newtitle>\n        </div>\n        <div class=\"field\">\n            <label for=\"link\">Link</label>\n            <input name=\"link\" #newlink>\n        </div>\n        <button (click)=\"addArticle(newtitle,newlink)\" class=\"ui positive right floated button\">\n            Submit link\n        </button>\n    </form>\n    \n    <div class=\"grid ui posts\">\n        <reddit-article *ngFor=\"#article of sortArticles()\" [article] = \"article\">\n        </reddit-article>\n    </div>\n    <demo-form-sku></demo-form-sku>\n    "
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