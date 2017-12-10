/** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрощено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */
function createDiv() {
    let myDiv = document.createElement('div');

    function myRandom(e){
        return Math.floor(Math.random() * e);
    }

    function bgColor(e){
        return 'rgb(' + myRandom(e) + ',' + myRandom(e) + ',' + myRandom(e) + ')';
    }

    myDiv.classList.add('draggable-div');
    myDiv.style.width = myRandom(120) + 'px'; 
    myDiv.style.height = myRandom(80) + 'px';
    myDiv.style.background = bgColor(255);
    myDiv.style.position = 'absolute';
    myDiv.style.left = myRandom(window.innerWidth) + 'px';
    myDiv.style.top = myRandom(window.innerHeight) + 'px';

    return myDiv;
}

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */
function addListeners(target) {
    target.onmousedown = () => {
        let moving = (e) => {
            target.style.top = e.pageY - target.offsetHeight / 2 + 'px';
            target.style.left = e.pageX - target.offsetWidth / 2 + 'px';
        };
        document.onmousemove = (e) => moving(e);
        target.onmouseup = () => {
            document.onmousemove = target.onmouseup = null;
        }
    }
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    let div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации d&d
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
