import Cl_mArticulo from "./Cl_mArticulo.js";

export default class Cl_mBodega {
  private acGanancia: number = 0;
  mayGanancia: number = 0;
  nombreMayGanancia: string = "";

  procesarArticulo(a: Cl_mArticulo): void {
    this.acGanancia += a.ganancia;
    if (a.ganancia > this.mayGanancia) {
      this.mayGanancia = a.ganancia;
      this.nombreMayGanancia = a.nombre;
    }
  }

  get totalGanancia(): number {
    return this.acGanancia;
  }
  get articuloMayorGanancia(): string {
    return this.nombreMayGanancia;
  }
}
