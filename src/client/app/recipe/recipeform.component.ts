import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl , Validators} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'sd-recipeform',
  template:`
    <form (ngSubmit)="onRecipeSubmit()" [formGroup]="formGroupRecipe">
      <input formControlName="recipeName" type="text" placeholder="name of your recipe" />
      <span [hidden]="formGroupRecipe.controls.recipeName.valid">Champ obligatoire!</span>
  <br>
      <input formControlName="type" type="text" placeholder="type of the recipe" />
      <span [hidden]="formGroupRecipe.controls.type.valid">Champ obligatoire!</span>

  <br>
      <button type="submit">Ajouter</button>
    </form>

  {{ formGroupRecipe.value | json }}
  {{ formGroupRecipe.valid }}
  `
})

export class RecipeFormComponent implements OnInit{
  formGroupRecipe: FormGroup;
  
  constructor(public fb: FormBuilder) {}
  
  onRecipeSubmit(){}
  
  ngOnInit(){
//    this.formGroupRecipe = new FormGroup({
//      recipeName: new FormControl(),
//      type: new FormControl()
//    })
    this.formGroupRecipe= this.fb.group({
//      recipeName: '',
//      type:''
    /*
     * Ajout d'un validateur
     */
      recipeName: ['', Validators.required],
      type: ['', Validators.required]
    });
    
    /*
     * Pour insérer des valeurs par défaut pour le formulaire
     */
    this.formGroupRecipe.setValue({
      recipeName: 'quelque chose',
      type:'de parametrer'
    });
  }
}