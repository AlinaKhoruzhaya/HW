
"use strict";

/*1.Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі.
Також напиши до 5 неправильних імен

Правильні імена змінних
    let nameUser = Alina;
    let myName = Alina;
    let lastName = Khoruzhaya;
    let myLastName = Khoruzhaya;

Неправильні імена змінних
    let 111name;
    let my-name;
    et my-last-name;
    let 777;
    let if;*/


//2. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

let yourName = prompt("What is your name?");

alert('Hello, ' + yourName + "!");

//3. Запитай рік народження користувача, порахуй його / її вік і виведи результат.Поточний рік вкажи в коді як константу;

let yourYear = prompt("What is your year of birth?");

const CURRENT_YEAR = 2023;

let yourAge = CURRENT_YEAR - yourYear;

alert('You are ' + yourAge + " years old!");

//4. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

let squareSide = prompt("Enter the length of the side of the square (in cm)");

let squarePerimeter = squareSide * 4;

alert('The perimeter of the square is ' + squarePerimeter + " cm");

//5. Запитай у користувача радіус кола і виведи площу такої окружності.

let circleRadius = prompt("Enter the radius of the circle (in cm)");

const PI_NUMBER = 3.141592653589;

let circleArea = PI_NUMBER * (circleRadius * circleRadius);

alert('The area of the circle is ' + circleArea.toFixed(2) + " cm");

//6. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

let distance = prompt("Enter the distance between the cities (in km)");

let hours = prompt("How many hours do you want to reach your destination?");

let speed = distance / hours;

alert('To get there on time, you need to move with speed - ' + speed + " km/h");

//7. Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.

let dollarAmount = prompt("КOHBEРТЕР долара США до ЄВРО. Введіть сумму в USD");

const COEFFICIENT = 0.91;

let euroAmount = dollarAmount * COEFFICIENT;

alert(dollarAmount + " USD   дорівнює   " + euroAmount + " EUR");

