import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DiversTestsComponent } from './diversTests.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'diversTests', component: DiversTestsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class DiversTestsRoutingModule { }
