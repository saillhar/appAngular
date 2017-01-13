import { Component } from '@angular/core';

@Component({
  moduleId : module.id,
  templateUrl: 'diversTests.component.html'
})

export class DiversTestsComponent { 
  data:string="azerty";
  dataNgModelTest:string="yop";
  onClick(evt:any, something:string){
    console.log(evt , something);
  }
 }