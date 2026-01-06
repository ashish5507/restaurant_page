import "./styles.css";
import loadHome from "./home"
import loadOutlets from "./outlets";
import loadContacts from "./contacts";

loadHome();
const home_button = document.querySelector("#home");
const outlets_button = document.querySelector("#outlets");
const contacts_button = document.querySelector("#contacts");

home_button.addEventListener("click",loadHome);
outlets_button.addEventListener("click",loadOutlets);
contacts_button.addEventListener("click",loadContacts);