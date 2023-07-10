import IConsole from "../console_game/IConsole";
import Play from "./Play";

export default class Challenge extends Play {

    constructor(consolegame : IConsole) {
        super(consolegame);
    }

    challenge(): void {
        console.log("Comando Ativado ! : Modo dificil!");
    }


}