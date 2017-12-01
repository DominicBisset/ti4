import { Component } from '@angular/core';
import { PlayerService } from './shared/player.service';
import { IToggleListItemViewModel } from "./shared/interfaces/IToggleListTemViewModel";

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <ti-toggleList [toggleItems]="toggleItems"></ti-toggleList>
  `,
  providers:[PlayerService]
})
export class AppComponent  {
  name = 'Dom';
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
