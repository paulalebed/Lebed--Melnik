import Sistema from './sistema.js';
import Nft from './nft.mjs';

test('Throws Error se puede agregar nft', () => {
  try {
    let unNft = new Nft("Hola", "Ethereum",15,"Tienda muy moderna", "TiendasDeCafe","fotoCafe" );
    let sistema = new Sistema(); 
    sistema.agregar(unNft); 
  } catch (Error) {
    expect(Error.message).toBe(`Se agregó Hola a la lista de Nft.`); 
  }
});

test('Throws Error no se puede agregar nft', () => {
    try {
    let unNft = new Nft("Hola", "Ethereum",15,"Tienda muy moderna", "TiendasDeCafe","fotoCafe" );
    let sistema = new Sistema(); 
    let lista = sistema.getNfts().push(unNft); 
    let unNft2 = new Nft("Hola", "Ethereum",15,"Tienda muy moderna", "TiendasDeCafe","fotoCafe" );
    sistema.agregar(unNft2); 
    } catch (Error) {
      expect(Error.message).toBe(`No se pudo agregar. El nft Hola ya existe.`); 
    }
  });

  test('Prueba get nfts', () => {
    let sistema = new Sistema();
    expect(sistema.getNfts().length).toBe(0);
  });



