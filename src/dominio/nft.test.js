import Sistema from './sistema.mjs';
import Nft from './nft.mjs';

test('creación de un Nft', () => {
  let unNft = new Nft("CafeteriaCallejera", "Ethereum",15,"Tienda muy moderna", "TiendasDeCafe","fotoCafe" );
  expect(unNft.nombre).toBe("CafeteriaCallejera");
  expect(unNft.wallet).toBe("Ethereum");
  expect(unNft.monto).toBe(15);
  expect(unNft.descripcion).toBe("Tienda muy moderna");
  expect(unNft.categoria).toBe("TiendasDeCafe");
  expect(unNft.imagen).toBe("fotoCafe");
});

test('Throws Error Nombre', () => {
  try {
    let unNft = new Nft("", "Ethereum",15,"Tienda muy moderna", "TiendasDeCafe","fotoCafe" );
  } catch (Error) {
    expect(Error.message).toBe(`Ingrese un Nombre válido`); 
  }
});

test('Throws Error Wallet', () => {
  try {
    let unNft = new Nft("Test", "",15,"Tienda muy moderna", "TiendasDeCafe","fotoCafe" );
  } catch (Error) {
    expect(Error.message).toBe(`Seleccione una Wallet`); 
  }
});

test('Throws Error Precio menor a 0', () => {
  try {
    let unNft = new Nft("Test", "Metamask",-1,"Tienda muy moderna", "TiendasDeCafe","fotoCafe" );
  } catch (Error) {
    expect(Error.message).toBe(`El costo del NFT debe ser mayor a cero`); 
  }
});

test('Throws Error no incluye Descripción', () => {
  try {
    let unNft = new Nft("Test", "Metamask",10,"", "jj","fotoCafe" );
  } catch (Error) {
    expect(Error.message).toBe(`Debe incluir una descripcion`); 
  }
});

test('Throws Error No selecciona Categoría', () => {
  try {
    let unNft = new Nft("Test", "Metamask",10,"jj", "","fotoCafe" );
  } catch (Error) {
    expect(Error.message).toBe(`Seleccione una categoría para su Nft`); 
  }
});
