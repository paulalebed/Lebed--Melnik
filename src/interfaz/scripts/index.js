import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import {MDCList} from '@material/list';
import Nft from '../../dominio/nft.mjs';
import Sistema from '../../dominio/sistema.js';

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

import {MDCIconButtonToggle} from '@material/icon-button';
const iconToggle = new MDCIconButtonToggle(document.querySelector('.mdc-icon-button0'));
const _iconToggle = new MDCIconButtonToggle(document.querySelector('.mdc-icon-button1'));
const iconToggle2 = new MDCIconButtonToggle(document.querySelector('.mdc-icon-button2'));
const iconToggle3 = new MDCIconButtonToggle(document.querySelector('.mdc-icon-button3'));
const iconToggle4 = new MDCIconButtonToggle(document.querySelector('.mdc-icon-button4'));

const sistema = new Sistema(); 

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const list = new MDCList(document.querySelector('.mdc-list'));

const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
});

const textFieldTitle = new MDCTextField(document.getElementById('title'));
const textFieldYear = new MDCTextField(document.getElementById('year'));
const textFieldDescription = new MDCTextField(document.getElementById('description'));
const selectGenre = new MDCSelect(document.querySelector('.mdc-select'));
const selectCategory = new MDCSelect(document.getElementById('category'));
const textfieldImage = new MDCTextField(document.getElementById('image'));

const addButton = new MDCRipple(document.getElementById('addButton'));
addButton.listen('click', () => {
  let title = textFieldTitle.value;
  let year = textFieldYear.value;
  let genre = selectGenre.value;
  let description = textFieldDescription.value; 
  let category = selectCategory.value; 
  let image = textfieldImage.value; 

  try {
    let newNft = new Nft(title, genre, year, description, category,image);
    sistema.agregar(newNft);
    actualizarPagadoPor();
  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    let nfts = sistema.getNfts();
    console.log(nfts);
    let form = document.getElementById('form'); 
    form.reset(); 
    actualizarPagadoPor();

  }
})

const listaPagadoPor = document.getElementById("personasPagadoPor");
function actualizarPagadoPor() {
  listaPagadoPor.innerHTML = "";
  for (let x of sistema.listaNft) {
    let nodo = document.createElement("li");
    nodo.className = "mdc-list-item";
    nodo.setAttribute("data-value", x.nombre);
    let rip = document.createElement("span");
    rip.className = "mdc-list-item__ripple";
    let text = document.createElement("span");
    text.className = "mdc-list-item__text";
    let str = x.toString();
    let txtNombrePagado = document.createTextNode(str);
    text.appendChild(txtNombrePagado);
    nodo.appendChild(rip);
    nodo.appendChild(text);
    listaPagadoPor.appendChild(nodo);
  }
};

//const showButton = new MDCRipple(document.getElementById('showButton'));
/*addButton.listen('click', () => {
    let nfts = listaNfts.getNfts();
    console.log(nfts);
      let lista = document.getElementById("idLista");
      if(nfts.length == 1){
      document.getElementById("lista").innerHTML="Mis nft: "+nfts[0].value; 
      lista.innerHTML="";
      } else if (nfts.length > 1){
      document.getElementById("lista").innerHTML="Mis nft:"; 
      lista.innerHTML="";
      for (i=0;i<nfts.length;i++) {
      let itemList = document.createElement("li");
      let nodoT = document.createTextNode(nfts[i].value); 
      itemList.appendChild(nodoT); 
      lista.appendChild(itemList);
      }
  
}
})*/

/*import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});*/