 // 1. создать JS хранилище для картинок
// 2. придумать слова и хранить их в массиве
// 3. создать элемент для отображения картинки
// 4. создать элемент для ввода данных пользователем (ограничить ввод только 1 буквой)
// 5. создать кнопку для отправки введеных пользователем данных 
// 6. отображение букв загаданного слова
// 7. после ввода буквы мы должны проверять загаданное слово
// 7.1 если отгадали букву ТО картинку оставляем,отображаем угаданную букву на нужном месте
// 7.2 если не отгадали ТО меняем картинку
// 7.2.1 если картинка номер 4 ТО заканчиваем игру (дизейблим инпуты) 


import img1link from '../images/1.png';
import img2link from '../images/2.png';
import img3link from '../images/3.png';
import img4link from '../images/4.png';

const hangmanImg = document.getElementById('hangman');
const word = document.getElementById('word');
const userLetterInput = document.getElementById('userLetter');
const btn = document.getElementById('btn');
const images = [img1link, img2link, img3link, img4link];

let imageIndex = 0;

function getRandomWord () {
    const secretWords = ['table', 'chair', 'spoon', 'laptop', 'house', 'Valerchik'];

    const randomIndex = Math.floor(Math.random() * secretWords.length);

    return secretWords[randomIndex];
}
const currentWord = getRandomWord();

console.log(currentWord);

Array.from(currentWord).forEach(() => {
    const span = document.createElement('span');
    span.textContent = '_';

    word.append(span);
});

const endGameWithMessage = (message) => {
    btn.disabled = true;
    userLetterInput.disabled = true;
    const h1 = document.createElement('h1');
    h1.textContent = message;

    document.body.prepend(h1);
};

btn.addEventListener('click', () => {
    const inputValue = userLetterInput.value;
    const wordArr = Array.from(currentWord);
    let wasLetterFound = false;
wordArr.forEach((letter, letterIndex) => {
        if (letter.toUpperCase() === inputValue.toUpperCase()) {
            word.children[letterIndex].textContent = inputValue.toUpperCase();
            wasLetterFound = true;
        }
    });

    if (!wasLetterFound) {
        hangmanImg.src = images[++imageIndex];
    }
    if (wasLetterFound) {
        const allLettersDiscovered = Array.from(word.children).every(({textContent}) => textContent !== '_');

        if (allLettersDiscovered) {
            endGameWithMessage('YOU WIN!');
        }
    }

    if (imageIndex === images.length - 1) {
        endGameWithMessage('YOU LOST!');
    }

});