import IConsole from "./IConsole";

export default class PlayStation implements IConsole {
   constructor() {
    this.configureGame();
    console.log("Playstation : Console iniciado *Playstation SFX*");
   }
   
    configureGame(): void {
        this.authToken();
        console.log("Playstation : Configurando o jogo")
    }
    authToken(): void {
        console.log("Playstation : Validando jogo")
    }

}