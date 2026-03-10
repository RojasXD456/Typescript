import Cl_articulo from "./Cl_articulo.js";

export default class Cl_bodega {
  acGanancia;

  constructor() {
    this.acGanancia = 0;
  }

  procesarArticulo(a) {
    this.acGanancia += a.ganancia();
  }

  totalGanancia() {
    return this.acGanancia;
  }
}
