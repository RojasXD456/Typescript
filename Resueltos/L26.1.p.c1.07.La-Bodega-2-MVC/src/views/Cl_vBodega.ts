import Cl_mArticulo from "../models/Cl_mArticulo";
import Cl_mBodega from "../models/Cl_mBodega";

export default class Cl_vBodega {
  lblGanancia: HTMLLabelElement;
  btProcesar1Articulo: HTMLButtonElement;
  lblNombreArticulo: HTMLElement;
  lblPrecioDeVenta: HTMLElement;
  lblArticuloMayGanancia: HTMLElement;
  constructor() {
    this.lblNombreArticulo = document.getElementById(
      "body_lblNombreArticulo",
    ) as HTMLLabelElement;
    this.lblPrecioDeVenta = document.getElementById(
      "body_lblPrecioDeVenta",
    ) as HTMLLabelElement;
    this.lblGanancia = document.getElementById(
      "body_lblGanancia",
    ) as HTMLLabelElement;
    this.btProcesar1Articulo = document.getElementById(
      "body_btProcesar1Articulo",
    ) as HTMLButtonElement;
    this.lblArticuloMayGanancia = document.getElementById(
      "body_lblArticuloMayGanancia",
    ) as HTMLElement;
  }
  reportar({ bodega, articulo }: { bodega: Cl_mBodega, articulo: Cl_mArticulo }): void {
    this.lblNombreArticulo!.innerHTML = `${articulo.nombre}`;
    this.lblPrecioDeVenta!.innerHTML = `${articulo.precioDeVenta}`;
    this.lblGanancia!.innerHTML = `${bodega.totalGanancia}`;
    this.lblArticuloMayGanancia!.innerHTML = `${bodega.articuloMayorGanancia}`;
  }
}
