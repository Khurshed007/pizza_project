import constansObj from "./constants.js"; // Наши константы элементов  
import activeFunction from "./active.js" 

options.forEach((items) => {
    items.addEventListener("click", (e) => activeFunction(e));
  });
