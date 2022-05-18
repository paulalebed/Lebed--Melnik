
export default class Nft {
  constructor(nombre, monto, creador) {
    this.nombre = nombre;
    this.monto = monto;
    this.creador = creador;
    this.fecha = null;
    this.descripcion = null;
  }

  setFecha(fecha) {
    this.fecha = fecha;
  }

  setDescripcion(descripcion) {
    this.descripcion = descripcion;
  }
}