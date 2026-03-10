import Cl_Articulo from "./Cl_Articulo.js";
import Cl_Bodega from "./Cl_Bodega.js";

const articulo1:Cl_Articulo = new Cl_Articulo(10);
const articulo2:Cl_Articulo = new Cl_Articulo(20);
const articulo3:Cl_Articulo = new Cl_Articulo(14);
const articulo4:Cl_Articulo = new Cl_Articulo(6);
const articulo5:Cl_Articulo = new Cl_Articulo(4);
const bodega: Cl_Bodega = new Cl_Bodega();

bodega.procesarArticulo(articulo1);
bodega.procesarArticulo(articulo2);
bodega.procesarArticulo(articulo3);
bodega.procesarArticulo(articulo4);
bodega.procesarArticulo(articulo5);

let body = document.getElementById("body");
if (body) body.innerHTML =`La ganancia sera de Bs.${bodega.totalGanancia()}`