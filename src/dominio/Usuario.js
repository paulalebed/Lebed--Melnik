
export default class Usuario {

  constructor(nombre, wallet) {
    this.nombre = nombre;
    this.wallet = wallet;
  }

  toString() {
    return this.nombre + ' (' + this.wallet + ')';
  }

}