export default class Cl_Articulo {
    constructor(costo) {
        this._costo = 0;
        this.costo = costo;
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get costo() {
        return this._costo;
    }
    ganancia() {
        return this.costo * 0.5;
    }
}
