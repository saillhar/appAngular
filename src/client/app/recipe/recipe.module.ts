import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RecipeFormComponent } from './recipeform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeRoutingModule } from './recipe-routing.module';
/*
 * Dans le cas d 'un nomage plus restrictive utilisant un tableau de root
 */
//import { RecipeRoutingModule } from './recipe.routes';

@NgModule({
  imports: [CommonModule, RecipeRoutingModule,ReactiveFormsModule],
  declarations: [RecipeComponent, RecipeFormComponent],
  exports: [RecipeComponent]
})
export class RecipeModule { }