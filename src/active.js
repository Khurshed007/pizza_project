 export default activeFuntion = (e) => {
    // Получаем все li внутри текущего ul
    let currentElement = e.currentTarget;
    // Получаем количество активных li внутри текущего ul
           const arrIngredientsActiv = [];
          const arrBasicAndSauceActiv = [];
          const currentLi = currentElement.parentNode.querySelectorAll('li');
          
          Array.from(currentLi).forEach((element) => {
              const noOsnova = (!element.classList.contains('osnova') && element.classList.contains('active'));
              const noSauce = (!element.classList.contains('sauce') && element.classList.contains('active'));
              const noIng1 = (element.classList.contains('sauce') && element.classList.contains('active'));
              const noIng2 = (element.classList.contains('osnova') && element.classList.contains('active'));
              if (noOsnova && noSauce) {
                  arrIngredientsActiv.push(element.classList.value);
              }
              if (noIng1 || noIng2) {
                  arrBasicAndSauceActiv.push(element.classList.value);
              }
          })
          if (arrIngredientsActiv.length === 2 || arrBasicAndSauceActiv.length === 1) {
              return
          }
    // Если уже есть два элемента с классом "active" в текущем ul, то просто выходим из функции
     if (arrBasicAndSauceActiv.length === 1 || arrIngredientsActiv.length === 2) {
      return;
    }
 
  };
  
 