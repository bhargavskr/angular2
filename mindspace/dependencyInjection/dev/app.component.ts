import {Component} from 'angular2/core';
import {ChildComponent} from "./child-component";
@Component({
    selector: 'my-app',
    template: `
       <h1>Parent</h1>
       <p>Value Entered in child Component:{{childValue}}</p>
        <input type="text" #parentInput (keyup)="0"><br>
        <button>Click me</button>
       <child [parentValu]="parentInput.value" (childChanged)="childValue = $event"></child>
         `,
         directives:[ChildComponent]
         
     
})



export class AppComponent {
    childValue:string;
}