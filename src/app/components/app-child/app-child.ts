import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>{{ parentData }}</p>
    <button (click)="notify.emit()">Notify Parent</button>
  `,
  standalone: true
})
export class AppChild {
  @Input() parentData: string = '';
  @Output() notify: EventEmitter<void> = new EventEmitter<void>();
}
