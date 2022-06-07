export default class ListaNft {

  constructor() {
    this.nft = [];
  }

  agregar(nft) {
    let nftEnPagina = this.nfts.some(m => m.nombre == nft.nombre);
    if (!nftEnPagina) {
      this.nft.push(nft);
      throw new Error(`Se agregó ${nft.nombre} a la lista de Nft.`);
    } else {
      throw new Error(`No se pudo agregar. El nft ${nft.nombre} ya existe.`);
    }
  }

  getNfts() {
    return this.nfts;
  }
}