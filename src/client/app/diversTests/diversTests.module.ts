import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pour l'utilisation de [(ngModel)]
import { FormsModule } from '@angular/forms';
import { DiversTestsComponent } from './diversTests.component';
import { DiversTestsRoutingModule } from './diversTests-routing.module';
import { TestFormComponent } from './diversTestsform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnfantComponent } from './enfant/enfant.component';

@NgModule({
  imports: [CommonModule, DiversTestsRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [DiversTestsComponent, TestFormComponent, EnfantComponent],
  exports: [DiversTestsComponent]
})

export class DiversTestsModule { }