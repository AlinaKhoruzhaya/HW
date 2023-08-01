"use strict";

//МІНІМУМ

//Створи функцію, яка буде виводити кількість переданих їй аргументів.

const myFunc = (...args) => {
    return args.length
};

console.log(myFunc(1, 2, 3, 4))
console.log(myFunc())

/*Напиши функцію, яка приймає 2 числа і повертає :
    -1, якщо перше число менше, ніж друге;
    1 - якщо перше число більше, ніж друге;
    0 - якщо числа рівні.*/

function calcSumm(nunOne, numTwo) {
    let numSumm = nunOne + numTwo;
    return numSumm;
}
let funcRezultFirst = calcSumm(-2, 1);
console.log(funcRezultFirst);

let funcRezultSecond = calcSumm(1, 0);
console.log(funcRezultSecond);

let funcRezultThird = calcSumm(0, 0);
console.log(funcRezultThird);

//Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(n) {
    let result = 1;
    while (n) {
        result *= n--;
    }
    return result;
}
console.log(factorial(6));

//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function createString(firstNum, secondNum, thirdNum) {
    return `${firstNum}${secondNum}${thirdNum}`;
}
console.log(createString(1, 4, 9));

//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

let area;
function calcArea(length = width, width = length) {
    area = length * width;
    return area;
}

//НОРМА

//Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function is_perfect(number) {
    let temp = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        console.log("Це досконале число.");
    }
    else {
        console.log("Це не досконале число.");
    }
}
is_perfect();

/*Напиши функцію, яка приймає мінімальне і максимальне
 значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.*/

function getPerfect(a, b) {
    let result = [];
    for (let i = a; i < b; i++) {
        let sum = 0;
        for (let n = 1; n <= i / 2; n++) {
            if (i % n === 0) sum += n;
        }
        if (i === sum) result.push(i);
    }
    return result;
}

console.log(getPerfect(1, 1000));
