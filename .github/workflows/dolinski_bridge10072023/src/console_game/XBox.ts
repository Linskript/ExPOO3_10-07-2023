import IConsole from "./IConsole";

export default class XBox implements IConsole {
   constructor() {
    this.configureGame();
    console.log("Xbox : Console iniciado *Xbox SFX*");
   }
   
    configureGame(): void {
        this.authToken();
        console.log("Xbox : Configurando o jogo")
    }
    authToken(): void {
        console.log("Xbox : Validando jogo")
    }

}