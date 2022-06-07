export default class ListaPeliculas {

  constructor() {
    this.peliculas = [];
  }

  agregar(pelicula) {
    let peliculaEnCartelera = this.peliculas.some(m => m.nombre == pelicula.nombre);
    if (!peliculaEnCartelera) {
      this.peliculas.push(pelicula);
      throw new Error(`Se agregó ${pelicula.nombre} a la lista de Nft.`);
    } else {
      throw new Error(`No se pudo agregar. El nft ${pelicula.nombre} ya existe.`);
    }
  }

  getPeliculas() {
    return this.peliculas;
  }
}