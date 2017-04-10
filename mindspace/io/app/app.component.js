System.register(['angular2/core', './component1.component', './component2.component'], function(exports_1, context_1) {
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
    var core_1, component1_component_1, component2_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (component1_component_1_1) {
                component1_component_1 = component1_component_1_1;
            },
            function (component2_component_1_1) {
                component2_component_1 = component2_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n     <section class=\"component\">\n             <component1></component1>\n           </section>\n          <section class=\"component\">\n               <component2></component2>\n           </section>\n      \n    \n\n         ",
                        directives: [component1_component_1.Component1Component, component2_component_1.Component2Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFyQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDBPQVVKO3dCQUNILFVBQVUsRUFBQyxDQUFDLDBDQUFtQixFQUFDLDBDQUFtQixDQUFDO3FCQUUxRCxDQUFDOztnQ0FBQTtnQkFNRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDb21wb25lbnQxQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudDEuY29tcG9uZW50JztcbmltcG9ydCB7Q29tcG9uZW50MkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnQyLmNvbXBvbmVudCdcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbXBvbmVudFwiPlxuICAgICAgICAgICAgIDxjb21wb25lbnQxPjwvY29tcG9uZW50MT5cbiAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICA8Y29tcG9uZW50Mj48L2NvbXBvbmVudDI+XG4gICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICAgIFxuXG4gICAgICAgICBgLFxuICAgICAgIGRpcmVjdGl2ZXM6W0NvbXBvbmVudDFDb21wb25lbnQsQ29tcG9uZW50MkNvbXBvbmVudF1cbiAgICAgXG59KVxuXG5cblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICBcbn0iXX0=
