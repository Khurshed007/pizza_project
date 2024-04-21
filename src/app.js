import {options, showPizza, orderShow, priceShow, btn, pizzaSlice} from "./constants.js"; // Наши константы элементов  
import activeFunction from "./active.js" 
// import style.css from "./"

console.log(options)


options.forEach((items) => {
    items.addEventListener("click", (e) => activeFunction(e));
  });
