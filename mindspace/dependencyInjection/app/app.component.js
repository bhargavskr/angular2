System.register(['angular2/core', "./child-component"], function(exports_1, context_1) {
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
    var core_1, child_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (child_component_1_1) {
                child_component_1 = child_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n       <h1>Parent</h1>\n       <p>Value Entered in child Component:{{childValue}}</p>\n        <input type=\"text\" #parentInput (keyup)=\"0\"><br>\n        <button>Click me</button>\n       <child [parentValu]=\"parentInput.value\" (childChanged)=\"childValue = $event\"></child>\n         ",
                        directives: [child_component_1.ChildComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHVTQU1KO3dCQUNELFVBQVUsRUFBQyxDQUFDLGdDQUFjLENBQUM7cUJBR25DLENBQUM7O2dDQUFBO2dCQU1GLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NoaWxkQ29tcG9uZW50fSBmcm9tIFwiLi9jaGlsZC1jb21wb25lbnRcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgIDxoMT5QYXJlbnQ8L2gxPlxuICAgICAgIDxwPlZhbHVlIEVudGVyZWQgaW4gY2hpbGQgQ29tcG9uZW50Ont7Y2hpbGRWYWx1ZX19PC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjcGFyZW50SW5wdXQgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgIDxidXR0b24+Q2xpY2sgbWU8L2J1dHRvbj5cbiAgICAgICA8Y2hpbGQgW3BhcmVudFZhbHVdPVwicGFyZW50SW5wdXQudmFsdWVcIiAoY2hpbGRDaGFuZ2VkKT1cImNoaWxkVmFsdWUgPSAkZXZlbnRcIj48L2NoaWxkPlxuICAgICAgICAgYCxcbiAgICAgICAgIGRpcmVjdGl2ZXM6W0NoaWxkQ29tcG9uZW50XVxuICAgICAgICAgXG4gICAgIFxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGNoaWxkVmFsdWU6c3RyaW5nO1xufSJdfQ==
