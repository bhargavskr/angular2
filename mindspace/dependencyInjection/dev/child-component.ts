import {Component, EventEmitter,Output} from 'angular2/core';
@Component({
    selector: 'child',
    template: `
       <h2>Child</h2>
        <p>Value Entered in Parent Component:{{parentValue}}</p>
        <input type="text" #childInput (keyup)="onChange(childInput.value)"><br>
        <button>Click me</button>
         `,
    inputs:['parentValue:parentValu']
    
})



export class ChildComponent {
   parentValue:string;
   @Output() childChanged=new EventEmitter<String>();

   onChange(value:string){
        this.childChanged.emit(value);
   }
}