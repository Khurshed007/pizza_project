import {priceShow, orderShow} from './constants.js'

let handleClick = () => {
  let priceCounter = 0;
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

      }
    }


    Array.from(orderShow.querySelectorAll("li")).forEach((item) => {
        item.addEventListener("click", (e) => {
          let currentElement = e.currentTarget;
        
  
          Array.from(options).forEach((li) => {
            if (currentElement.textContent === li.textContent) {
             priceCounter -=  Number(currentElement.dataset.price);
             PriceShow.innerHTML = priceCounter;
              li.classList.remove("active");
              currentElement.remove();
            }
          });

  
          e.stopImmediatePropagation();
        });
      });
  };
};


export default handleClick()