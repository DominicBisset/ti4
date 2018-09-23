import { IRace } from "./IRace";

export interface IPlayer{
  position: number;
  name: string;
  colour: PlayerColour;
  race: IRace;
  avatar: string;
}
