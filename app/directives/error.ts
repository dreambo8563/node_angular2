import {Directive, ViewContainerRef, TemplateRef } from 'angular2/core';
import {isPresent, isBlank, RegExp} from 'angular2/src/facade/lang';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {makeTypeError} from 'angular2/src/facade/exceptions';


@Directive({
    selector: '[ngError]',
    inputs: ['ngError']
})
export class ngError {
    private _condition: RegExp = null;
    private _view = null;
    private _content: any = null;
    private _prevError: boolean = false;
    private _error: boolean = false;

    private _messageEl = null;

    constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef) {
    }

    set ngError(newCondition: string) {

        if (!!newCondition) {

            this._condition = new RegExp(newCondition);
            this._view = this._viewContainer.createEmbeddedView(this._templateRef);
            this._view._view.renderFragment.nodes[0].addEventListener('blur', this.onBlur.bind(this));
        }
        else {
            throw makeTypeError('The RegExp must have at leat one character.');
        }
    }


    onBlur() {
        this._content = this._view._view.renderFragment.nodes[0].lastChild;
        this._error = this._condition.test(this._content.textContent);

        if (this._error && this._prevError !== true) {
            this._prevError = true;
            this.addMessageElement();
        } else if (this._error === false && this._prevError === true) {

            this._prevError = false;
            this.removeMessage();
        }
    }

    addMessageElement() {
        this._messageEl = document.createElement('div');
        this._messageEl.id = "popupContainer";
        this._messageEl.className = "md-padding";
        this._messageEl.innerHTML = `<button md-raised-button class="md-warn md-hue-2">
                                    Haha Warning Message Here!
                                    </button>`;

        this._viewContainer.element.nativeElement.parentElement.appendChild(this._messageEl);
    }

    removeMessage() {
        this._viewContainer.element.nativeElement.parentElement.removeChild(this._messageEl);
    }

}