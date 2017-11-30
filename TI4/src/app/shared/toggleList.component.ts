import { Component } from '@angular/core';
import { PlayerService } from '../shared/player.service';
import { IToggleListItemViewModel } from '../shared/interfaces/IToggleListTemViewModel';

@Component({
  selector: 'ti-toggleList',
  template: `<div *ngFor="let toggleItem of toggleItems">
              <h1>Hello {{toggleItem.label}}</h1>
              <p>Current state {{toggleItem.state}}</p>
</div>`,
  providers: [PlayerService]
})
export class ToggleListComponent {
  toggleItems: IToggleListItemViewModel[];
  constructor(private playerService: PlayerService) { }
  ngOnInit() {
    this.getItems();
  }
  getItems(): void {
    console.debug("ToggleListComponent.GetPlayers() called.");
    this.playerService
      .getPlayers()
      .then(players => this.toggleItems = players
        .map<IToggleListItemViewModel>((player, idx, all) => {
          return {
            label: player.name,
            imgUrl: player.avatar,
            state: true
          }
        })
      );

  }
}
