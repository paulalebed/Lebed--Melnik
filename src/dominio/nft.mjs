const MIN_ANIO = 1888;
const MAX_ANIO = 2021;

export default class Pelicula {

  constructor(nombre, wallet, monto, descripcion, categoria, imagen) {
    this.setNombre(nombre); 
    //this.genero = genero;
    this.setWallet(wallet); 
    this.setMonto(monto);
    this.setDescripcion(descripcion);
    this.setCategoria(categoria); 
    this.imagen = imagen; 
  }

  /*setAnio(anio) {
    if (anio >= MIN_ANIO && anio <= MAX_ANIO) {
      this.anio = anio;
    } else {
      throw new Error(`El año ingresado es incorrecto. La pelicula debe ser de los años entre ${MIN_ANIO} y ${MAX_ANIO}`);
    }
  }*/

  setDescripcion(descripcion) {
    if (descripcion.length > 0) {
      this.descripcion = descripcion;
    } else {
      throw new Error(`Debe incluir una descripcion`);
    }
  }

  setCategoria(categoria) {
    if (categoria.length > 0) {
      this.categoria = categoria;
    } else {
      throw new Error(`Seleccione una categoría para su Nft`);
    }
  }


  setMonto(monto) {
    if (monto > 0) {
      this.monto = monto;
    } else {
      throw new Error(`El costo del NFT debe ser mayor a cero`);
    }
  }

  setNombre(nombre) {
    if (nombre.length > 0) {
      this.nombre = nombre;
    } else {
      throw new Error(`Ingrese un Nombre válido`);
    }
  }

  setWallet(wallet) {
    if (wallet.length > 0) {
      this.wallet = wallet;
    } else {
      throw new Error(`Seleccione una Wallet`);
    }
  }
}

