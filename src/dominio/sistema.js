export default class Sistema {
    constructor() {
        this.listaNft = [];
        this.listaUsuarios = [];
    }

    // METODOS

    // agrega un NFT a listaNft
    agregarNft(nft) {
        this.listaNft.push(nft);
    }

    // agrega una persona a listaPersonas
    agregarUsuario(usuario) {
        this.listaUsuarios.push(usuario);
    }

    // devuelve true si el nombre del Nft esta repetido
    nftRepetido(nombreNft) {
        let ret = false;
        for (let elem of this.listaNft) {
            if (elem.nombre == nombreNft) {
                ret = true;
            }
        }
        return ret;
    }
}
