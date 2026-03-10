/**
 * LA BODEGA
 * En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%...
 * Hacer un programa que calcule:
 * - El precio de venta para cada artículo
 * - El total de ganancia que tendrá la bodega al venderlos todos.
 * - El nombre del artículo con mayor ganancia
 * Ej. Sean varios artículos: Lápiz Bs.10, Saca Bs.20, Borra Bs.14, Regla Bs.6 y Bolso Bs.4
 * La salida requerida presenta el siguiente formato:
 * El artículo Lápiz tiene un precio de venta de Bs.15
 * La ganancia total será de Bs.27
 * El artículo con mayor ganancia es el Saca
 */

import Cl_mBodega from "../models/Cl_mBodega.js";
import Cl_vBodega from "../views/Cl_vBodega.js";
import Cl_cArticulo from "./Cl_cArticulo.js";

export default class Cl_cBodega {
  private mBodega: Cl_mBodega = new Cl_mBodega();
  private vBodega: Cl_vBodega = new Cl_vBodega();
  constructor() {
    this.vBodega.btProcesar1Articulo.onclick = () => this.procesar1Articulo();
  }
  procesar1Articulo(): void {
    new Cl_cArticulo({
      callback: (articulo) => {
        if (articulo) {
          this.mBodega.procesarArticulo(articulo);
          this.vBodega.reportar({ bodega: this.mBodega, articulo });
        }
      },
    });
  }
}
