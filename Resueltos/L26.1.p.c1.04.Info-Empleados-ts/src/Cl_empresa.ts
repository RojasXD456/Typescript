import Cl_empleado from "./Cl_empleado";

export default class Cl_empresa {
  private acMontoObreros: number;
  private acMontoAdministrativos: number;
  private cntObreros: number;
  private cntAdministrativos: number;
  constructor() {
    this.acMontoObreros = 0;
    this.acMontoAdministrativos = 0;
    this.cntObreros = 0;
    this.cntAdministrativos = 0;
  }

  procesarEmpleado(empleado: Cl_empleado) {
    if (empleado.tipo === 1) {
      this.acMontoObreros += empleado.gana;
      this.cntObreros++;
    } else {
      this.acMontoAdministrativos += empleado.gana;
      this.cntAdministrativos++;
    }
  }

  promedioObreros() {
    if (this.cntObreros === 0) return 0;
    return this.acMontoObreros / this.cntObreros;
  }

  promedioAdministrativos() {
    if (this.cntAdministrativos === 0) return 0;
    return this.acMontoAdministrativos / this.cntAdministrativos;
  }
}
