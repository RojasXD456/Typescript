export default class Cl_vArticulo {
  inCosto: HTMLInputElement;
  inNombre: HTMLInputElement;
  btCancelar: any;
  btAceptar: any;
  vista: HTMLElement;
  constructor() {
    this.vista = document.getElementById("articulo") as HTMLElement;
    this.inNombre = document.getElementById("articulo_inNombre") as HTMLInputElement;
    this.inCosto = document.getElementById("articulo_inCosto") as HTMLInputElement;
    this.btCancelar = document.getElementById("articulo_btCancelar");
    this.btAceptar = document.getElementById("articulo_btAceptar");
    this.mostrar();
  }
  get nombre(): string {
    return this.inNombre.value
  }
  get costo(): number {
    return +this.inCosto.value
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}