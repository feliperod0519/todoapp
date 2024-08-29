export class Todo{
    public id: number;
    public texto: string;
    public completado: boolean;

    constructor(texto: string){
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        this.completado = false;
        this.id = Math.floor(Math.random() * 10000000)//new Date().getTime();
    }
}