import { priceShow, orderShow, btn } from './constants.js'
import {addpositiveMarker,addnegativeMarker} from "./marker.js"

let handleClick = () => {
  let priceCounter = 0;
  let pizzaCounter = 0;
  const UniqueMenuList = [];
  btn.disabled = true;
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

        }

      }
    }


    Array.from(orderShow.querySelectorAll("li")).forEach((item) => {
      item.addEventListener("click", (e) => {
        let currentElement = e.currentTarget;
        let menuAttribute = currentElement.dataset.menu; // Получаем значение атрибута меню текущего элемента
        let UniqueMenuIndex = UniqueMenuList.indexOf(menuAttribute);
        if (
          UniqueMenuIndex !== -1 &&
          UniqueMenuList.includes(currentElement.dataset.menu)
        ) {
          // Удаляем элемент из массива по его индексу
          UniqueMenuList.splice(UniqueMenuIndex, 1);
          console.log("Deleted:", menuAttribute, "from arr");
          console.log("New arr:", UniqueMenuList);
          console.log(UniqueMenuIndex);
          showPizza[--pizzaCounter].classList.remove("active");
        }

        Array.from(options).forEach((li) => {
          if (currentElement.textContent === li.textContent) {
            priceCounter -= Number(currentElement.dataset.price);
            PriceShow.innerHTML = priceCounter;
            li.classList.remove("active");
            currentElement.remove();
            addnegativeMarker(currentElement);
          }
        });


        e.stopImmediatePropagation();
      });
    });
  };
};


export default handleClick()