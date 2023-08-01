"use strict";

//1.Створити сторінку, що показує нумерований список пісень:

let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

let list = document.querySelector('main');
let element;
for (let i = 1; i < playList.length; i++) {
    let element = document.createElement('div');
    element.innerHTML = i + `<h2>${playList[i].author}</h2><p> ${playList[i].song}</p >`;
    list.append(element);
}

/*2.Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається.
При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.*/

//зробила це завдання повністю в js

let main = document.querySelector('main');

let buttonOpen = document.createElement('button');
buttonOpen.innerHTML = `Відкрити`;
main.prepend(buttonOpen);
buttonOpen.setAttribute('id', 'btn_modal_window');
buttonOpen.style.cssText = `
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
`;

let modal = document.createElement('div');
main.append(modal);
modal.setAttribute('id', 'my_modal');
modal.setAttribute('class', 'modal');
modal.style.cssText = `
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;
`;

let modalWindow = document.createElement('div');
modal.append(modalWindow);
modalWindow.setAttribute('class', 'modal_content');
modalWindow.style.cssText = `
    background-color: #fefefe;
    margin: 15% auto;
    padding: 30px;
    border: 1px solid #888;
    width: 80%;
    z-index: 99999;
`;

let buttonClose = document.createElement('button');
buttonClose.innerHTML = `Закрити`;
modalWindow.prepend(buttonClose);
buttonClose.setAttribute('class', 'close_modal_window');
buttonClose.style.cssText = `
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
`;

let text = document.createElement('p');
text.innerHTML = `Модальне вікно!`;
modalWindow.append(text);

buttonOpen.onclick = function () {
    modal.style.display = "block";
};

buttonClose.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//3.Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const trafficLights = document.querySelector("div.traffic__light");

const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellow");
const greenlight = document.getElementById("green");
const butn = document.getElementById("btn");

butn.addEventListener("click", function () {
    if (redlight.classList.contains("traffic__red")) {
        redlight.classList.remove("traffic__red");
        yellowlight.classList.add("traffic__yellow");
    } else if (yellowlight.classList.contains("traffic__yellow")) {
        yellowlight.classList.remove("traffic__yellow");
        greenlight.classList.add("traffic__green");
    } else if (greenlight.classList.contains("traffic__green")) {
        greenlight.classList.remove("traffic__green");
        redlight.classList.add("traffic__red");
    }
});
