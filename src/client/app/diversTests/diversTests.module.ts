import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pour l'utilisation de [(ngModel)]
import { FormsModule } from '@angular/forms';
import { DiversTestsComponent } from './diversTests.component';
import { DiversTestsRoutingModule } from './diversTests-routing.module';

@NgModule({
  imports: [CommonModule, DiversTestsRoutingModule, FormsModule],
  declarations: [DiversTestsComponent],
  exports: [DiversTestsComponent]
})

export class DiversTestsModule { }