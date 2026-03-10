export default class Cl_empleado {
    constructor(nombre, tipo, gana) {
        this._tipo = 1;
        this._gana = 1;
        this.nombre = nombre;
        this.tipo = tipo;
        this.gana = gana;
    }
    set tipo(tipo) {
        this._tipo = +tipo;
        if (this._tipo !== 1 && this._tipo !== 2)
            this._tipo = 2;
    }
    get tipo() {
        return this._tipo;
    }
    set gana(gana) {
        this._gana = +gana;
    }
    get gana() {
        return this._gana;
    }
}
