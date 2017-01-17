import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'enfant',
  templateUrl: 'enfant.component.html' 
})
export class EnfantComponent {
  @Input() children:any;
}