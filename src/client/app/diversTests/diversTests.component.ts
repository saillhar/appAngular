import { Component } from '@angular/core';

@Component({
  moduleId : module.id,
  templateUrl: 'diversTests.component.html'
})

export class DiversTestsComponent { 
  data:string="azerty";
  dataNgModelTest:string="yop";
  table = [
  {description:"ligne1"},
  {description:"ligne2"},
  {description:"ligne3"},
  {description:"ligne4"},
  ];
  
  onClick(evt:any, something:string){
    console.log(evt , something);
  }
 }