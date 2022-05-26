import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import ListaPeliculas from '../../dominio/lista-peliculas.mjs';
import Pelicula from '../../dominio/pelicula.mjs';

const listaPeliculas = new ListaPeliculas();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

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
    let newPelicula = new Pelicula(title, genre, year, description, category);
    listaPeliculas.agregar(newPelicula);
  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    let peliculas = listaPeliculas.getPeliculas();
    console.log(peliculas);
    let form = document.getElementById('form'); 
    form.reset(); 

  }
})

const showButton = new MDCRipple(document.getElementById('showButton'));
addButton.listen('click', () => {
    let peliculas = listaPeliculas.getPeliculas();
    console.log(peliculas);
      let lista = document.getElementById("idLista");
      if(peliculas.length == 1){
      document.getElementById("lista").innerHTML="Mis nft: "+peliculas[0].value; 
      lista.innerHTML="";
      } else if (peliculas.length > 1){
      document.getElementById("lista").innerHTML="Mis nft:"; 
      lista.innerHTML="";
      for (i=0;i<peliculas.length;i++) {
      let itemList = document.createElement("li");
      let nodoT = document.createTextNode(peliculas[i].value); 
      itemList.appendChild(nodoT); 
      lista.appendChild(itemList);
      }
  
}
})