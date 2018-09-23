import { Injectable } from "@angular/core";
import { IPlayer } from "./interfaces/IPlayer";
import { PlayerColour } from "./enums/PlayerColour";

@Injectable()
export class PlayerService {
  private players: IPlayer[] = [
    {
      position: 1,
      name : "Dom",
      colour: PlayerColour.Black,
      race: {
        name: "Hacan",
        posibleAvatars: []
      },
      avatar:""
    },
    {
      position: 2,
      name: "Ben",
      colour: PlayerColour.Blue,
      race: {
        name: "Sol",
        posibleAvatars: []
      },
      avatar: ""
    },
    {
      position: 1,
      name: "Dom",
      colour: PlayerColour.Black,
      race: {
        name: "Hacan",
        posibleAvatars: []
      },
      avatar: ""
    },
    {
      position: 2,
      name: "Ben",
      colour: PlayerColour.Blue,
      race: {
        name: "Sol",
        posibleAvatars: []
      },
      avatar: ""
    },
    {
      position: 1,
      name: "Dom",
      colour: PlayerColour.Black,
      race: {
        name: "Hacan",
        posibleAvatars: []
      },
      avatar: ""
    },
    {
      position: 2,
      name: "Ben",
      colour: PlayerColour.Blue,
      race: {
        name: "Sol",
        posibleAvatars: []
      },
      avatar: ""
    },
    {
      position: 1,
      name: "Dom",
      colour: PlayerColour.Black,
      race: {
        name: "Hacan",
        posibleAvatars: []
      },
      avatar: ""
    },
    {
      position: 2,
      name: "Ben",
      colour: PlayerColour.Blue,
      race: {
        name: "Sol",
        posibleAvatars: []
      },
      avatar: ""
    },
    {
      position: 1,
      name: "Dom",
      colour: PlayerColour.Black,
      race: {
        name: "Hacan",
        posibleAvatars: []
      },
      avatar: ""
    },
    {
      position: 2,
      name: "Ben",
      colour: PlayerColour.Blue,
      race: {
        name: "Sol",
        posibleAvatars: []
      },
      avatar: ""
    },
    {
      position: 1,
      name: "Dom",
      colour: PlayerColour.Black,
      race: {
        name: "Hacan",
        posibleAvatars: []
      },
      avatar: ""
    },
    {
      position: 2,
      name: "Ben",
      colour: PlayerColour.Blue,
      race: {
        name: "Sol",
        posibleAvatars: []
      },
      avatar: ""
    },
  ];

  getPlayers(): Promise<IPlayer[]>{
    console.debug("PlayerService.GetPlayers() called.");
    return Promise.resolve(this.players);
  }
}
