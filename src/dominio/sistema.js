export default class Sistema {

    /**
     * Constructor de la clase
     */
    constructor() {
        this.listaNft = [];
        this.listaUsuarios = [];
    }

    // METODOS
    /**
     * Método que agrega un Nft a la lista de Nfts
     * @param {*} nft 
     */
    agregarNft(nft) {
        this.listaNft.push(nft);
    }

    /**
     * Método que agrega un usuario a la lista de usuarios
     * @param {*} usuario 
     */
    agregarUsuario(usuario) {
        this.listaUsuarios.push(usuario);
    }

    /**
     * Método que devuelve si un Nft está repetido
     * @param {*} nombreNft 
     * @returns true si el nombre del Nft existe en la lista
     */
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
