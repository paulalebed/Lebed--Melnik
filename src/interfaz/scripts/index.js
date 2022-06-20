import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import { MDCSnackbar } from '@material/snackbar';
import { MDCList } from '@material/list';
import Nft from '../../dominio/nft.mjs';
import Sistema from '../../dominio/sistema.js';

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

import { MDCIconButtonToggle } from '@material/icon-button';
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

function agregarNft(titulo, imagen, precio, desc) {
 
 
  const div1 = document.createElement("div");
  div1.className = "my-card";
 
  const div2 = document.createElement("div");
  div2.className = "mdc-card__primary-action demo-card__primary-action backgroundCard";
 
  const div3 = document.createElement("div");
  div3.className = "mdc-card__media mdc-card__media--16-9 demo-card__media";
  div3.style = `background-image: url(${imagen});`;
 
  const div4 = document.createElement("div");
  div4.className = "demo-card__primary";
 
  const h2 = document.createElement("h2");
  h2.className = "demo-card__title mdc-typography mdc-typography--headline6";
  h2.textContent = `${titulo}`
 
  const h3 = document.createElement("h3");
  h3.className = "demo-card__subtitle mdc-typography mdc-typography--subtitle2"
  h3.textContent = `${precio} ETH`
  const container = document.getElementById("card-lists");

  const spn = document.createElement("span");
  spn.textContent = `${desc}`

 
  container.appendChild(div1);
  div1.appendChild(div2);
  div2.appendChild(div3);
  div2.appendChild(div4);
  div4.appendChild(h2);
  div4.appendChild(h3);
  div4.appendChild(spn);
 
}


const addButton = new MDCRipple(document.getElementById('addButton'));
addButton.listen('click', () => {
  let title = textFieldTitle.value;
  let price = textFieldYear.value;
  let wallet = selectGenre.value;
  let description = textFieldDescription.value;
  let category = selectCategory.value;
  let image = textfieldImage.value;

  try {
    let newNft = new Nft(title, wallet, price, description, category, image);
    sistema.agregar(newNft);
  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    let nfts = sistema.getNfts();
    console.log(nfts);
    agregarNft(title, image, price, description);
    let form = document.getElementById('form');
    form.reset();


  }
})
