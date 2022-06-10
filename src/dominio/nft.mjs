const MIN_ANIO = 1888;
const MAX_ANIO = 2021;

/**
 * Clase Nft encargada de guardar la información de los Nft del marketplace
 */
export default class Nft {

  /**
   * Constructor de la clase 
   * @param {*} nombre 
   * @param {*} wallet 
   * @param {*} monto 
   * @param {*} descripcion 
   * @param {*} categoria 
   * @param {*} imagen 
   */
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
      throw new Error(`El año ingresado es incorrecto. el NFT debe ser de los años entre ${MIN_ANIO} y ${MAX_ANIO}`);
    }
  }*/

  /**
   * Método para setear o guardar la descripción de un Nft
   * @param {*} descripcion String
   */
  setDescripcion(descripcion) {
    if (descripcion.length > 0) {
      this.descripcion = descripcion;
    } else {
      throw new Error(`Debe incluir una descripcion`);
    }
  }

  /**
   * Método para setear o guardar la categoría de un Nft. La misma es seleccionada de una picklist
   * @param {*} categoria String
   */
  setCategoria(categoria) {
    if (categoria.length > 0) {
      this.categoria = categoria;
    } else {
      throw new Error(`Seleccione una categoría para su Nft`);
    }
  }


  /**
   * Método para setear o guardar el monto de un Nft
   * @param {*} monto Integer
   */
  setMonto(monto) {
    if (monto > 0) {
      this.monto = monto;
    } else {
      throw new Error(`El costo del NFT debe ser mayor a cero`);
    }
  }

  /**
   * Método para setear o guardar el nombre de un Nft
   * @param {*} nombre String
   */
  setNombre(nombre) {
    if (nombre.length > 0) {
      this.nombre = nombre;
    } else {
      throw new Error(`Ingrese un Nombre válido`);
    }
  }


  /**
   * Método para setear o guardar la Wallet del usuario que sube el Nft
   * @param {*} wallet String
   */
  setWallet(wallet) {
    if (wallet.length > 0) {
      this.wallet = wallet;
    } else {
      throw new Error(`Seleccione una Wallet`);
    }
  }
}

