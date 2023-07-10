import IGameplay from "./IGameplay";
import IConsole from "../console_game/IConsole";

export default class Play implements IGameplay {

    constructor(private consolegame : IConsole) {}

    playing(): void {
        console.log("Inciando Jogo");
    }
    result(): void {
        console.log("Jogando !");
    }

}