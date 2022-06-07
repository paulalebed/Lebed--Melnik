import listaNfts from './lista-nfts.mjs';


test('creación de sistema', () => {
  let unSistema = new Sistema();
  expect(unSistema.listaNfts.length()).toBe(0);
});

test('test para agregar un Nft a la lista', () => {
  let sistema = new Sistema(); 
  let unNft = new Nft("Cafe", "Metamask", 3, "Para los amantes del buen cafe", "Fotografía", "imagen");
  sistema.agregar(unNft); 
  expect(sistema.listaNfts.length()).toBe(1);

});

test('test para obtener la lista de Nfts del sistema', () => {
  let sistema = new Sistema(); 
  let unNft = new Nft("Cafe", "Metamask", 3, "Para los amantes del buen cafe", "Fotografía", "imagen");
  sistema.agregar(unNft); 
  let listaNft = sistema.getListaNft(); 
  expect(listaNft[0]).toBe("Cafe");
  expect(listaNft[1]).toBe("Metamask");
  expect(listaNft[2]).toBe(3);
  expect(listaNft[3]).toBe("Para los amantes del buen cafe");
  expect(listaNft[4]).toBe("Fotografía");
  expect(listaNft[5]).toBe("imagen");

});
