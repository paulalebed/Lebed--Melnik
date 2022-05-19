//imports
import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import Nft from '../../dominio/Nft.js';
import Sistema from '../../dominio/Sistema.js';
import Usuario from '../../dominio/Usuario.js';

//constantes
const sis = new Sistema();
const listaNft = document.getElementById("idListaNft");
const listaUsuarios = document.getElementById("idListaUsuarios");
const body = document.getElementsByTagName("body")[0];
const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
const snackbar = new MDCSnackbar(document.querySelector(".mdc-snackbar"));
const btnAgregarNft = document.getElementById("btnAgregarNft");
const btnAgregarPersona= document.getElementById("btnAgregarPersona");
//const topAppBarElement = document.querySelector('.mdc-top-app-bar');
//const topAppBar = new MDCTopAppBar(topAppBarElement);

//agregar Nft
// agregar gasto
const ventanaNft = document.getElementById("nuevoNft");
const txtNombreNft = new MDCTextField(document.getElementById("txtNombreNft"));
const txtMontoNft = new MDCTextField(document.getElementById("txtMontoNft"));
const txtFechaPublicacion = new MDCTextField(document.getElementById("txtFechaPubli"));
const txtDescripcionNft = new MDCTextField(document.getElementById("txtDescripcionNft"));
const txtSeleccionarWallet = new MDCSelect(document.getElementById("SelectWallet"));
const txtCreadoPor = new MDCSelect(document.getElementById("selectCreadoPor"));
const confirmarNft = document.getElementById("confirmarNft");
const btnDialogDescartarNft = document.getElementById("btnDialogDescartarNft");
const btnDialogAgregarNft = document.getElementById("btnDialogAgregarNft");

// agregar persona
const ventanaPersona = document.getElementById("nuevaPersona");
const txtNombrePersona = new MDCTextField(document.getElementById("txtNombreP"));
const WalletPersona = new MDCTextField(document.getElementById("txtWallet"));
const cerrarPersona = document.getElementById("cerrarPersona");
const btnDialogDescartarP = document.getElementById("btnDialogDescartarP")
const btnDialogAgregarP = document.getElementById("btnDialogAgregarP")

/*// Funciones/Variables/Datos a cargar en cada nueva ventana
window.addEventListener("load", (event) => {
  txtSeleccionarWallet.selectedIndex = 0;
  // agregar usuario "yo" por defecto
  sis.agregarUsuario(new Usuario("Yo", "0"));
  setDeboDebes();
})

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
const selectGenre = new MDCSelect(document.querySelector('.mdc-select'));

const addButton = new MDCRipple(document.getElementById('addButton'));
addButton.listen('click', () => {
  let title = textFieldTitle.value;
  let year = textFieldYear.value;
  let genre = selectGenre.value;
  try {
    let newPelicula = new Pelicula(title, genre, year);
    listaPeliculas.agregar(newPelicula);
  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    let peliculas = listaPeliculas.getPeliculas();
    console.log(peliculas);
  } 
}) */