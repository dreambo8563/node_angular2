import {Component} from 'angular2/core';
import {NgFor} from "angular2/common";
import {DemoFormsSkuBuilder} from './demo_form_sku';

/**
 * A good practice when writing Angular code is to try to isolate the data structures you are using from
the component code.
 */
class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }

    domain(): string {
        try {
            const link: string = this.link.split("//")[1];
            return link.split("/")[0];
        } catch (err) {
            return null;
        }
    }
}


/**
 * In Angular 2, a component host is the element this component is attached to. You’ll notice on our
@Component we’re passing the option: host: { class: 'row' }. This tells Angular that on the host
element (the reddit-article tag) we want to set the class attribute to have “row”.

Using the host option is nice because it means we can encapsulate the reddit-article
markup within our component. That is, we don’t have to both use a reddit-article tag
and require a class="row" in the markup of the parent view. By using the host option,
we’re able to configure our host element from within the component.
 */
@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    host: {
        class: 'row'
    },
    template: `
    <div class="four wide column center aligned votes">
        <div class="ui statistic">
            <div class="value">
                {{article.votes}}
            </div>
            <div class="label">
                Points
            </div>
        </div>
        <div class="twelve wide column">
            <a class="ui large header" href="{{article.link}}">
                {{article.title}}
            </a>
            <div class="meta">({{article.domain()}})</div>
            <ul class="ui big horizontal list votes">
                <li class="item">
                    <a href (click)="voteUp()">
                        <i class="arrow up icon">
                            upvote
                        </i>
                    </a>
                </li>
                 <li class="item">
                    <a href (click)="voteDown()">
                        <i class="arrow down icon">
                            downvote
                        </i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    `
})
class ArticleComponent {
    article: Article;

    constructor() {
        this.article = new Article('Angular 2', 'http://angular.io', 10);
    }

    // By default, propagates the click event to all the parent components.
    // Because the click event is propagated to parents, our browser is trying to follow the empty link.
    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }

    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }

}


@Component({
    selector: 'reddit',
    directives: [ArticleComponent,DemoFormsSkuBuilder],
    template: `
    <form class="ui large form segment">
        <h3 class="ui header">Add a Link</h3>
        <div class="field">
            <label for="title">Title</label>
            <input name="title" #newtitle>
        </div>
        <div class="field">
            <label for="link">Link</label>
            <input name="link" #newlink>
        </div>
        <button (click)="addArticle(newtitle,newlink)" class="ui positive right floated button">
            Submit link
        </button>
    </form>
    
    <div class="grid ui posts">
        <reddit-article *ngFor="#article of sortArticles()" [article] = "article">
        </reddit-article>
    </div>
    <demo-form-sku></demo-form-sku>
    `
})
export class Reddit {
    articles: Article[];
    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1),
        ];
    }
    
    //#newtitle is a template var, it stands for the DOM object
    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
        this.articles.push(new Article(title.value, link.value, 0));
        //clear the input after added
        title.value = "";
        link.value = "";
    }

    sortArticles(): Article[] {
        return this.articles.sort((a: Article, b: Article) =>  b.votes - a.votes );
    }
}