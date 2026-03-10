/**
 * INFO EMPLEADOS
En una empresa se tiene personal obrero y personal administrativo. La empresa necesita 
determinar cuál es el monto promedio que paga por cada tipo de personal.
El tipo de personal: 1=obrero, 2=administrativo.
La empresa informa los siguientes datos
nombre tipo gana
Juan    1   $100
Ana     1   $120
Lin     2   $200
Mary    1    $50
Carlos  2   $150

Al ser consultada por la forma como desean que se presente la salida, la empresa 
suministra el siguiente formato.
Salida:
Monto total pagado a obreros: $270
Promedio pagado a 3 obreros: $90

Monto total pagado a administrativos: $350
Promedio pagado a 2 administrativos: $175
*/

import Cl_empleado from "./Cl_empleado.js";
import Cl_empresa from "./Cl_empresa.js";

let empleado1 = new Cl_empleado("Juan", 1, 100);
let empleado2 = new Cl_empleado("Ana", 1, 120);
let empleado3 = new Cl_empleado("Lin", 2, 200);
let empleado4 = new Cl_empleado("Mary", 1, 50);
let empleado5 = new Cl_empleado("Carlos", 2, 150);

let empresa = new Cl_empresa();
empresa.procesarEmpleado(empleado1);
empresa.procesarEmpleado(empleado2);
empresa.procesarEmpleado(empleado3);
empresa.procesarEmpleado(empleado4);
empresa.procesarEmpleado(empleado5);

let body = document.getElementById("body");
if (body) {
  body.innerHTML = `Promedio pagado a obreros: $${empresa.promedioObreros()}`;
  body.innerHTML += `<br>Promedio pagado a administrativos: $${empresa.promedioAdministrativos()}`;
}
