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