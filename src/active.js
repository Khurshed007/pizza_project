export default activeFunction = (e) => {
    // Получаем все li внутри текущего ul
    let currentElement = e.currentTarget;
    // Получаем количество активных li внутри текущего ul
    const IngredientsActiveList = [];
    const BasicAndSauceActiveList = [];
    const currentLi = currentElement.parentNode.querySelectorAll('li');

    Array.from(currentLi).forEach((element) => {
        const noBasisActiv = (!element.classList.contains('basis') && element.classList.contains('active'));
        const noSauceActive = (!element.classList.contains('sauce') && element.classList.contains('active'));
        const SauceActive = (element.classList.contains('sauce') && element.classList.contains('active'));
        const BasisActive = (element.classList.contains('basis') && element.classList.contains('active'));
        if (noBasisActiv && noSauceActive) {
            IngredientsActiveList.push(element.classList.value);
        }
        if (SauceActive || BasisActive) {
            BasicAndSauceActiveList.push(element.classList.value);
        }
    })
    if (IngredientsActiveList.length === 2 || BasicAndSauceActiveList.length === 1) {
        return
    }
    // Если уже есть два элемента с классом "active" в текущем ul, то просто выходим из функции
    if (BasicAndSauceActiveList.length === 1 || IngredientsActiveList.length === 2) {
        return;
    }
    currentElement.classList.add("active");
};

