System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var ChildComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChildComponent = (function () {
                function ChildComponent() {
                    this.childChanged = new core_1.EventEmitter();
                }
                ChildComponent.prototype.onChange = function (value) {
                    this.childChanged.emit(value);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ChildComponent.prototype, "childChanged", void 0);
                ChildComponent = __decorate([
                    core_1.Component({
                        selector: 'child',
                        template: "\n       <h2>Child</h2>\n        <p>Value Entered in Parent Component:{{parentValue}}</p>\n        <input type=\"text\" #childInput (keyup)=\"onChange(childInput.value)\"><br>\n        <button>Click me</button>\n         ",
                        inputs: ['parentValue:parentValu']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildComponent);
                return ChildComponent;
            }());
            exports_1("ChildComponent", ChildComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUFBO29CQUVhLGlCQUFZLEdBQUMsSUFBSSxtQkFBWSxFQUFVLENBQUM7Z0JBS3JELENBQUM7Z0JBSEUsaUNBQVEsR0FBUixVQUFTLEtBQVk7b0JBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUpEO29CQUFDLGFBQU0sRUFBRTs7b0VBQUE7Z0JBaEJaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFFBQVEsRUFBRSwrTkFLSjt3QkFDTixNQUFNLEVBQUMsQ0FBQyx3QkFBd0IsQ0FBQztxQkFFcEMsQ0FBQzs7a0NBQUE7Z0JBV0YscUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELDJDQU9DLENBQUEiLCJmaWxlIjoiY2hpbGQtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcixPdXRwdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjaGlsZCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICA8aDI+Q2hpbGQ8L2gyPlxuICAgICAgICA8cD5WYWx1ZSBFbnRlcmVkIGluIFBhcmVudCBDb21wb25lbnQ6e3twYXJlbnRWYWx1ZX19PC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjY2hpbGRJbnB1dCAoa2V5dXApPVwib25DaGFuZ2UoY2hpbGRJbnB1dC52YWx1ZSlcIj48YnI+XG4gICAgICAgIDxidXR0b24+Q2xpY2sgbWU8L2J1dHRvbj5cbiAgICAgICAgIGAsXG4gICAgaW5wdXRzOlsncGFyZW50VmFsdWU6cGFyZW50VmFsdSddXG4gICAgXG59KVxuXG5cblxuZXhwb3J0IGNsYXNzIENoaWxkQ29tcG9uZW50IHtcbiAgIHBhcmVudFZhbHVlOnN0cmluZztcbiAgIEBPdXRwdXQoKSBjaGlsZENoYW5nZWQ9bmV3IEV2ZW50RW1pdHRlcjxTdHJpbmc+KCk7XG5cbiAgIG9uQ2hhbmdlKHZhbHVlOnN0cmluZyl7XG4gICAgICAgIHRoaXMuY2hpbGRDaGFuZ2VkLmVtaXQodmFsdWUpO1xuICAgfVxufSJdfQ==
