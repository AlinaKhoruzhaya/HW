
"use strict";

//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let firstNumber = 0.1;
let secondNumber = 0.2;
let firstAmount = firstNumber + secondNumber;
console.log(firstAmount.toFixed(1));

//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let string = "1";
let thirdNumber = 2;
let secondAmount = +string + thirdNumber;
console.log(secondAmount.toFixed(1));

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let flashDriveСapacity = prompt("Введіть обсяг флешки в Гб");
const fileSize = 820;
let quantity = flashDriveСapacity * 1000 / fileSize;
alert("На флешку поміститься " + Math.floor(quantity) + " файлів розміром 820 Мб");

//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let sumMoney = prompt("Введіть суму грошей у гаманці (в UAH)");
let chocolatePrice = prompt("Введіть ціну однієї шоколадки (в UAH)");
let quantityChocolate = sumMoney / chocolatePrice;
let balanceFunds = sumMoney % chocolatePrice;
alert("Ви можете купити " + Math.floor(quantityChocolate) + " шоколадок і у вас залишиться " + balanceFunds.toFixed(2) + " UAH");

//Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let numUser = prompt("Введіть тризначне число");
let result = 0;
function revers(num) {
    while (num) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return result;
}
alert(revers(numUser));

//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let depositAmount = prompt("Введіть суму вкладу в банк (в UAH)");
let annualPercentage = 5 / 100;
const daysInYear = 365;
const daysInMonth = 30;
let arriveFirstMonth = +depositAmount * annualPercentage / daysInYear * daysInMonth;
let depositAmountSecondMonth = +depositAmount + arriveFirstMonth;
let arriveSecondMonth = depositAmountSecondMonth * annualPercentage / daysInYear * daysInMonth;
let interestAmount = arriveFirstMonth + arriveSecondMonth;
alert("За 2 місяці Вам буде нараховано відсотків у сумі - " + interestAmount.toFixed(2) + " UAH");

//Що повернуть вирази:
let _first = 2 && 0 && 3;
console.log(_first);      //0
let _second = 2 || 0 || 3;
console.log(_second);     //2
let _thirt = 2 && 0 || 3;
console.log(_thirt);      //3
