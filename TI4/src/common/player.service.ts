import { IPlayer } from "./interfaces/IPlayer";

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
  ];

  getPlayers() {
    return this.players;
  }
}
