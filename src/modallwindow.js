import {modallContent, modallButton} from "./constants.js"

function modallWindow(pizzaAmount, currentMassive) {
    const areAllPizzaBought = pizzaAmount.length === currentMassive.length;
    if (areAllPizzaBought) {
    //   location.reload();
    //   alert("asdas");
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      
    modallContent.classList.add("active")
    }
  }


  modallButton.addEventListener("click", ()=> {
    location.reload();
  })

  export default modallWindow