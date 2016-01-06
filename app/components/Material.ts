import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {RotateDirective} from '../directives/rotate';
import {ShakeOpacityDirective} from '../directives/shake-opacity';





/**
 * A good practice when writing Angular code is to try to isolate the data structures you are using from
the component code.
 */

@Component({
    selector: 'materials',
    styleUrls: ['app/style/search.css'],
    template: `
        <md-content>
  <section layout="row" layout-sm="column" layout-align="center center" layout-wrap>
    <button rotate md-button>{{title1}} </button>
    <button shakeOpacity md-button md-no-ink class="md-primary">Primary (md-noink)</button>
    <button md-button disabled="true" class="md-primary">Disabled</button>
    <button md-button class="md-warn">{{title4}}</button>
    <div class="label">Flat</div>
  </section>
  <section layout="row" layout-sm="column" layout-align="center center" layout-wrap>
    <button md-raised-button class="md-raised">Button</button>
    <button md-raised-button class="md-raised md-primary">Primary</button>
    <button md-raised-button disabled="true" class="md-raised md-primary">Disabled</button>
    <button md-raised-button class="md-raised md-warn">Warn</button>
    <div class="label">Raised</div>
  </section>
  <section layout="row" layout-sm="column" layout-align="center center" layout-wrap>
      <button md-fab class="md-fab" aria-label="Eat cake">
          <i md-icon>cake</i>
      </button>
      <button md-fab class="md-primary" aria-label="Use Android">
        <i md-icon>android</i>
      </button>
      <button md-fab disabled="true" aria-label="Comment">
          <i md-icon>comment</i>
      </button>
      <button md-fab class="md-primary md-hue-2" aria-label="Profile">
          <i md-icon>people</i>
      </button>
      <button md-fab class="md-mini" aria-label="Eat cake">
          <i md-icon>cake</i>
      </button>
      <button md-fab class="md-mini md-primary" aria-label="Use Android">
        <i md-icon>android</i>
      </button>
    <div class="label">FAB</div>
  </section>
  <section layout="row" layout-sm="column" layout-align="center center" layout-wrap>
      <a md-button [href]="googleUrl" target="_blank">Default Link</a>
      <a md-button class="md-primary" [href]="googleUrl" target="_blank">Primary Link</a>
      <button md-button>Default Button</button>
    <div class="label">Link vs. Button</div>
  </section>
  <section layout="row" layout-sm="column" layout-align="center center" layout-wrap>
    <button md-button class="md-primary md-hue-1">Primary Hue 1</button>
    <button md-raised-button class="md-warn md-hue-2">Warn Hue 2</button>
    <button md-button class="md-accent">Accent</button>
    <button md-raised-button class="md-accent md-hue-1">Accent Hue 1</button>
    <div class="label">Themed</div>
  </section>
  <section layout="row" layout-sm="column" layout-align="center center" layout-wrap>
    <button md-button class="md-icon-button md-primary" aria-label="Settings">
      <i md-icon>menu</i>
    </button>
    <button md-button class="md-icon-button md-accent" aria-label="Favorite">
      <i md-icon>favorite</i>
    </button>
    <button md-button class="md-icon-button" aria-label="More">
      <i md-icon>more_vert</i>
    </button>
    <a md-button href="http://google.com"
               title="Launch Google.com in new window"
               target="_blank"
               disabled="true"
               aria-label="Google.com"
               class="md-icon-button launch" >
      <i md-icon>launch</i>
    </a>
    <div class="label">Icon Button</div>
  </section>
</md-content>
    `,
    directives: [MATERIAL_DIRECTIVES,RotateDirective,ShakeOpacityDirective]
})
export class Materials {
    title1: string;
    title4:string;
    constructor() {
        this.title1 = "title1";
        this.title4 = "title4";
    }

}