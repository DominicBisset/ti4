import { PlayerColour } from "../enums/PlayerColour";

export interface IToggleListItemViewModel {
  label: string;
  imgUrl: string;
  colour: PlayerColour;
  state: boolean;
}
