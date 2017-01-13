import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl , Validators} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'sd-dtform',
  template:`
    <form (ngSubmit)="onTestSubmit()" [formGroup]="formGroupTest">
      <input formControlName="testName" type="text" placeholder="name of your recipe" />
      <span [hidden]="formGroupTest.controls.testName.valid">Champ obligatoire!</span>
  <br>
      <input formControlName="type" type="text" placeholder="type of the recipe" />
      <span [hidden]="formGroupTest.controls.type.valid">Champ obligatoire!</span>

  <br>
      <button type="submit">Ajouter</button>
    </form>

  {{ formGroupTest.value | json }}
  {{ formGroupTest.valid }}
  `
})

export class TestFormComponent implements OnInit{
  formGroupTest: FormGroup;
  
  constructor(public fb: FormBuilder) {}
  
  onTestSubmit(){}
  
  ngOnInit(){
//    this.formGroupRecipe = new FormGroup({
//      recipeName: new FormControl(),
//      type: new FormControl()
//    })
    this.formGroupTest= this.fb.group({
//      recipeName: '',
//      type:''
    /*
     * Ajout d'un validateur
     */
      testName: ['', Validators.required],
      type: ['', Validators.required]
    });
    
    /*
     * Pour insérer des valeurs par défaut pour le formulaire
     */
    this.formGroupTest.setValue({
      testName: 'quelque chose',
      type:'de parametrer'
    });
  }
}