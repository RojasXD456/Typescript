import Cl_articulo from './Cl_articulo.js';

export default class Cl_bodega {
  private acGanancia: number;

  constructor() {
    this.acGanancia = 0;
  }

  procesarArticulo(a: Cl_articulo): void {
    this.acGanancia += a.ganancia();
  }

  totalGanancia(): number {
    return this.acGanancia;
  }
}
