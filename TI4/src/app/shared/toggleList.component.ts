import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IToggleListItemViewModel } from '../shared/interfaces/IToggleListTemViewModel';

@Component({
  selector: 'ti-toggleList',
  template: `<div *ngFor="let toggleItem of toggleItems">
              <h1>Hello {{toggleItem.label}}</h1>
              <p>Current state {{toggleItem.state}}</p>
</div>`
})
export class ToggleListComponent {
  @Input() toggleItems: IToggleListItemViewModel[];
  //@Output() itemToggled: EventEmitter<IToggleItemClicked>;
}
