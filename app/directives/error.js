System.register(['angular2/core', 'angular2/src/facade/lang', 'angular2/src/facade/exceptions'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, lang_1, exceptions_1;
    var ngError;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            }],
        execute: function() {
            ngError = (function () {
                function ngError(_viewContainer, _templateRef) {
                    this._viewContainer = _viewContainer;
                    this._templateRef = _templateRef;
                    this._condition = null;
                    this._view = null;
                    this._content = null;
                    this._prevError = false;
                    this._error = false;
                    this._messageEl = null;
                }
                Object.defineProperty(ngError.prototype, "ngError", {
                    set: function (newCondition) {
                        if (!!newCondition) {
                            this._condition = new lang_1.RegExp(newCondition);
                            this._view = this._viewContainer.createEmbeddedView(this._templateRef);
                            this._view._view.renderFragment.nodes[0].addEventListener('blur', this.onBlur.bind(this));
                        }
                        else {
                            throw exceptions_1.makeTypeError('The RegExp must have at leat one character.');
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ngError.prototype.onBlur = function () {
                    this._content = this._view._view.renderFragment.nodes[0].lastChild;
                    this._error = this._condition.test(this._content.textContent);
                    if (this._error && this._prevError !== true) {
                        this._prevError = true;
                        this.addMessageElement();
                    }
                    else if (this._error === false && this._prevError === true) {
                        this._prevError = false;
                        this.removeMessage();
                    }
                };
                ngError.prototype.addMessageElement = function () {
                    this._messageEl = document.createElement('div');
                    this._messageEl.id = "popupContainer";
                    this._messageEl.className = "md-padding";
                    this._messageEl.innerHTML = "<button md-raised-button class=\"md-warn md-hue-2\">\n                                    Haha Warning Message Here!\n                                    </button>";
                    this._viewContainer.element.nativeElement.parentElement.appendChild(this._messageEl);
                };
                ngError.prototype.removeMessage = function () {
                    this._viewContainer.element.nativeElement.parentElement.removeChild(this._messageEl);
                };
                ngError = __decorate([
                    core_1.Directive({
                        selector: '[ngError]',
                        inputs: ['ngError']
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef])
                ], ngError);
                return ngError;
            })();
            exports_1("ngError", ngError);
        }
    }
});
//# sourceMappingURL=error.js.map