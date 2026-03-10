import Cl_Articulo from "./Cl_Articulo.js";

export default class Cl_Bodega{
    private acGanancia: number;

    constructor(){
        this.acGanancia=0
    }

    procesarArticulo(a:Cl_Articulo): void {
        this.acGanancia+= a.ganancia();
    }
    totalGanancia(): number {
        return this.acGanancia;
    }
}
