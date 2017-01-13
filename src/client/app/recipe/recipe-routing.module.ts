import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe.component';

@NgModule({
  imports: [
  RouterModule.forChild([
    { path: 'recipe', component: RecipeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }