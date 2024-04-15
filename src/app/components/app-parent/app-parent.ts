import { Component } from '@angular/core';
import { AppChild } from '../app-child/app-child';

@Component({
  selector: 'app-parent',
  template: `
    <app-child [parentData]="data" (notify)="onNotify()"></app-child>
  `,
  imports: [
    AppChild
  ],
  standalone: true
})
export class ParentComponent {
  data = 'Data from parent';

  onNotify() {
    alert('Child component has emitted an event!');
  }
}
