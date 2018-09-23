import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IToggleListItemViewModel } from '../shared/interfaces/IToggleListTemViewModel';

@Component({
  selector: 'ti-toggleList',
  templateUrl: './toggleList.component.html'
})
export class ToggleListComponent {
  @Input() toggleItems: IToggleListItemViewModel[];
  @Input() maxWidth: number;
  @Input() boxSize: number;
  clicked(item: IToggleListItemViewModel) {
    item.state = !item.state;
  }
  //@Output() itemToggled: EventEmitter<IToggleItemClicked>;
}
