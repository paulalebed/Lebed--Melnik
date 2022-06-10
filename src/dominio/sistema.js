/**
 * Clase Sistema encargada de manejar las listas de nfts del marketplace
 */
export default class Sistema {

    /**
     * Constructor de la clase
     */
    constructor() {
        this.listaNft = [];
    }

    // METODOS
    /**
     * Método que agrega un Nft a la lista de Nfts
     * @param {*} nft 
     */
    agregar(nft) {
        let nftEnPagina = this.listaNft.some(m => m.nombre == nft.nombre);
        if (!nftEnPagina) {
          this.listaNft.push(nft);
          throw new Error(`Se agregó ${nft.nombre} a la lista de Nft.`);
        } else {
          throw new Error(`No se pudo agregar. El nft ${nft.nombre} ya existe.`);
        }
      }

    /**
     * Método que devuleve una colección con todos los Nfts del sistema
     * @returns 
     */
    getNfts() {
        return this.listaNft;
      }
}
