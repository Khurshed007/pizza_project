import { priceShow} from './constants.js'

function addMarker(value, isPositive) {
    const newItem = document.createElement("sup");
    newItem.classList.add("marker"); // Добавляем класс для анимации
    if (isPositive) {
      newItem.textContent = `+${value}`;
    } else {
      newItem.textContent = `-${value}`;
      newItem.classList.add("minus");
    }
    priceShow.appendChild(newItem); // должен стоять до getComputedStyle(newItem).opacity  и newItem.classList.add("show");
    getComputedStyle(newItem).opacity; // Здесь нам не нужно значение, просто вызываем метод для триггера анимации
  
    // Запускаем анимацию
    newItem.classList.add("show");
    setTimeout(() => {
      newItem.classList.add("hidden"); // Скрываем наш элемент через опр. время
    }, 450);
  }
 function addpositiveMarker(e) {
    const currentElPrice = e.dataset.price;
    addMarker(currentElPrice, true);
  }
  
function addnegativeMarker(e) {
    const currentElPrice = e.dataset.price;
    addMarker(currentElPrice, false);
  }

  export {
    addpositiveMarker,
    addnegativeMarker
  }