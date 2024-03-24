
import { priceShow, orderShow, btn,showPizza, options, pizzaSlice } from './constants.js'
import {addpositiveMarker,addnegativeMarker} from "./marker.js"
 import modallWindow from './modallwindow.js';


btn.setAttribute("disabled",true);
let handleClick = () => {
  let priceCounter = 0;
  let pizzaCounter = 0;
  const UniqueMenuList = [];
  btn.disabled = true;
  
  btn.addEventListener("click", () => modallWindow(pizzaSlice, UniqueMenuList));
  return function (e) {
    let currentElement = e.currentTarget;
    if (currentElement.classList.contains("active")) {
      // Проверяем, существует ли уже элемент с таким же текстом и классом внутри orderShow

      let isDuplicate = Array.from(orderShow.querySelectorAll("li")).some(
        (existingLi) =>
          existingLi.textContent.trim() === currentElement.textContent.trim()
      );
      if (!isDuplicate) {
        // нужен для того чтобы один и тот же элемент дважды не добавлялся
        //   let liChild = document.createElement("li");
        //   liChild.className = currentElement.classList.value;
        //   liChild.setAttribute("data-price", currentElement.dataset.price);
        //   liChild.setAttribute("data-menu", currentElement.dataset.menu);
        //   liChild.textContent = currentElement.textContent;
        orderShow.append(currentElement.cloneNode(true));
        priceCounter += +currentElement.dataset.price;
        priceShow.innerHTML = priceCounter;
        addpositiveMarker(currentElement);
        
        if (!UniqueMenuList.includes(currentElement.dataset.menu)) {
            showPizza[pizzaCounter].classList.add("active");
            showPizza[pizzaCounter].setAttribute(
              "data-menu",
              currentElement.dataset.menu
            );
            UniqueMenuList.push(currentElement.dataset.menu);
            console.log(UniqueMenuList);
            pizzaCounter++;
          }

      }

  
      if (currentElement.classList.contains("active")) {

        if (UniqueMenuList.length === showPizza.length) {
          btn.disabled = false
          btn.classList.add("active")
        }

      }
    }


    Array.from(orderShow.querySelectorAll("li")).forEach((item) => {
      item.addEventListener("click", (e) => {
        let currentElement = e.currentTarget;
        let menuAttribute = currentElement.dataset.menu; // Получаем значение атрибута меню текущего элемента
        let UniqueMenuIndex = UniqueMenuList.indexOf(menuAttribute);
        
        Array.from(options).forEach((li) => {
          if (currentElement.textContent === li.textContent) {
            currentElement.remove();
            priceCounter -= Number(currentElement.dataset.price);
            priceShow.innerHTML = priceCounter;
            li.classList.remove("active");
           
            addnegativeMarker(currentElement);
          }
        });
        // let isDiscovered = false
        let isDiscovered = Array.from(orderShow.querySelectorAll("li")).some((li) => {
                   if(currentElement.dataset.menu === li.dataset.menu){
                          return true
                   }else{
                     return false
                   }
        })
         
          console.log(isDiscovered, "discovery")
        
        if (
          UniqueMenuIndex !== -1 && !isDiscovered &&
          UniqueMenuList.includes(currentElement.dataset.menu)
        ) {
          // Удаляем элемент из массива по его индексу
          UniqueMenuList.splice(UniqueMenuIndex, 1);
          console.log("Deleted:", menuAttribute, "from arr");
          console.log("New arr:", UniqueMenuList);
          console.log(UniqueMenuIndex);
          showPizza[--pizzaCounter].classList.remove("active");
          btn.disabled = true
          btn.classList.remove("active")
        }

     


        e.stopImmediatePropagation();
      });
    });
  };
};

  let toggleUniqueElemnet = handleClick()
export default toggleUniqueElemnet