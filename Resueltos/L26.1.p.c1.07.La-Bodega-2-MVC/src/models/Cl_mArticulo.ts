export default class Cl_mArticulo {
  private _costo: number = 0;
  private _nombre: string = "";

  constructor(
    { nombre, costo }: { nombre: string; costo: number } = {
      nombre: "",
      costo: 0,
    },
  ) {
    this.nombre = nombre;
    this.costo = costo;
  }
  set costo(costo: number) {
    this._costo = +costo;
  }
  get costo(): number {
    return this._costo;
  }
  set nombre(nombre: string) {
    this._nombre = nombre.trim();
  }
  get nombre(): string {
    return this._nombre;
  }
  get precioDeVenta(): number {
    return this.costo + this.ganancia;
  }
  get ganancia(): number {
    return this.costo * 0.5;
  }
}
