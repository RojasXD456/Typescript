export default class Cl_Articulo{
    private _costo: number = 0;

    constructor(costo:number){
        this.costo=costo;
    }

    set costo(costo: number){
        this._costo = +costo;
    }
    get costo(): number {
        return this._costo;
    }
    ganancia():number {
        return this.costo * 0.5
    }

}
