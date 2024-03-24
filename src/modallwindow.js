function modallWindow(pizzaAmount, currentMassive) {
    const areAllPizzaBought = pizzaAmount.length === currentMassive.length;
    if (areAllPizzaBought) {
      location.reload();
      alert("asdas");
    }
  }

  export default modallWindow