export default class Cl_empleado {
  private nombre;
  private _tipo = 1;
  private _gana = 1;

  constructor(nombre: string, tipo: number, gana: number) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.gana = gana;
  }

  set tipo(tipo) {
    this._tipo = +tipo;
    if (this._tipo !== 1 && this._tipo !== 2) this._tipo = 2;
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
