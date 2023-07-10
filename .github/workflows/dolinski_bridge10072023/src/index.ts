import IConsole from "./console_game/IConsole";
import PlayStation from "./console_game/Playstation";
import XBox from "./console_game/Xbox";
import Challenge from "./gameplay/Challenge";
import Play from "./gameplay/Play";

function jogoNormal(consolegame : IConsole) {
    console.log("Loading ...  ...");
    const play = new Play(consolegame);
    play.playing();
    play.result();

}

function jogoDificil(consolegame: IConsole) {
    console.log("Loading ...  ...");
    const play = new Challenge(consolegame);
    play.playing();
    play.challenge();
    play.result();
}

jogoNormal(new XBox());
jogoDificil(new PlayStation());