"use strict";

//Мінімум

//Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

let userAge = prompt("Введіть свій вік");
if (userAge >= 0 && userAge <= 11) {
    alert("Ви дитина!");
} else if (userAge >= 12 && userAge <= 17) {
    alert("Ви підліток!");
} else if (userAge >= 18 && userAge <= 59) {
    alert("Ви дорослий!");
} else if (userAge >= 60 && userAge <= 99) {
    alert("Ви пенсіонер!");
} else if (userAge >= 100) {
    alert("Невірне значення!");
} else { alert("Невірне значення!"); }

//Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

let questionSpecialSymbol = prompt("Введіть число від 0 до 9");
if (questionSpecialSymbol == 0) {
    alert(")");
} else if (questionSpecialSymbol == 1) {
    alert("!");
} else if (questionSpecialSymbol == 2) {
    alert("@");
} else if (questionSpecialSymbol == 3) {
    alert("#");
} else if (questionSpecialSymbol == 4) {
    alert("$");
} else if (questionSpecialSymbol == 5) {
    alert("%");
} else if (questionSpecialSymbol == 6) {
    alert("^");
} else if (questionSpecialSymbol == 7) {
    alert("&");
} else if (questionSpecialSymbol == 8) {
    alert("*");
} else if (questionSpecialSymbol == 9) {
    alert("(");
} else { alert("Невірне значення!"); }

//Підрахуй суму всіх чисел в заданому користувачем діапазоні.

let firstNumber = Number(prompt("Bведіть початок діапазону"));
let secondNumber = Number(prompt("Bведіть кінець діапазону"));
let sumNumber = 0;

while (firstNumber <= secondNumber) {
    sumNumber += firstNumber;
    firstNumber++;
}

alert("Сума всіх чисел в заданому діапазоні буде дорівнювати " + sumNumber);

//Запитай у користувача 2 числа і знайди найбільший спільний дільник.

let numberA = Number(prompt("Bведіть перше число"));
let numberB = Number(prompt("Bведіть друге число"));
let greatestDivisor;
while (numberA != numberB) {
    if (numberA > numberB) {
        numberA = numberA - numberB;
    }
    else {
        numberB = numberB - numberA;
    }
}
greatestDivisor = numberA;
alert("Найбільший спільний дільник " + greatestDivisor);

//Запитай у користувача число і виведи всі дільники цього числа.

let dividingNumber = prompt("Введіть число для розрахунку його дільників");
let dividers = '';
for (let n = 1; n <= dividingNumber; n++) {
    let a = dividingNumber % n
    if (a == 0) {
        dividers += n + ' , '
    }
}
alert(dividers);

//Норма

//Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

let fiveDigitNumber = Number(prompt("Bведіть п'ятизнаяне число"));

let result = 0;
function revers(num) {
    while (num) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return result;
}

revers(fiveDigitNumber);

if (fiveDigitNumber == result && fiveDigitNumber <= 99999 && fiveDigitNumber > 9999) {
    alert("Це паліндром!");
}
else if (fiveDigitNumber > 99999) {
    alert("Некорректне значення! Введіть п'ятизначне число!");
} else { alert("Це не паліндром!"); }

/*Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
    від 200 до 300 - знижка буде 3%;
    від 300 до 500 - 5%;
    від 500 і вище - 7%.*/

let purchaseSum = +prompt("Введіть суму покупки (в UAH)");
let purchaseSumSale;
const SALE_THREE_PERCENT = 3;
const SALE_FIVE_PERCENT = 5;
const SALE_SEVEN_PERCENT = 7;
let saleThreeUan;
let saleFiveUan;
let saleSevenUan;
if (purchaseSum < 200) {
    alert("У вас немає знижки! Сумма вашої  покупки складає " + purchaseSum.toFixed(2) + " UAH.");
} else if (purchaseSum <= 300) {
    saleThreeUan = purchaseSum / 100 * SALE_THREE_PERCENT;
    purchaseSumSale = purchaseSum - saleThreeUan;
    alert("Вітаємо! Ви отримуєте знижку 3% ! Сумма вашої  покупки тепер складає " + purchaseSumSale.toFixed(2) + " UAH.");
} else if (purchaseSum <= 500) {
    saleFiveUan = purchaseSum / 100 * SALE_FIVE_PERCENT;
    purchaseSumSale = purchaseSum - saleFiveUan;
    alert("Вітаємо! Ви отримуєте знижку 5% ! Сумма вашої  покупки тепер складає " + purchaseSumSale.toFixed(2) + " UAH.");
} else if (purchaseSum > 500) {
    saleSevenUan = purchaseSum / 100 * SALE_SEVEN_PERCENT;
    purchaseSumSale = purchaseSum - saleSevenUan;
    alert("Вітаємо! Ви отримуєте знижку 7% ! Сумма вашої  покупки тепер складає " + purchaseSumSale.toFixed(2) + " UAH.");
} else { alert("Невірне значення!"); }

/*Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй,
скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.*/

let arr1 = prompt("Bведіть число (1/10)");
let arr2 = prompt("Bведіть число (2/10)");
let arr3 = prompt("Bведіть число (3/10)");
let arr4 = prompt("Bведіть число (4/10)");
let arr5 = prompt("Bведіть число (5/10)");
let arr6 = prompt("Bведіть число (6/10)");
let arr7 = prompt("Bведіть число (7/10)");
let arr8 = prompt("Bведіть число (8/10)");
let arr9 = prompt("Bведіть число (9/10)");
let arr10 = prompt("Bведіть число (10/10)");
let arr = [];
arr.push(arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10);
let counterPositive = 0;
let counterNegative = 0;
let counterZero = 0;
let counterPaired = 0;
let counterUnpaired = 0;

let positiveArr = arr.filter(function (number) {
    return number > 0;
});
for (let elem of positiveArr) {
    {
        counterPositive++;
    }
}

let negativeArr = arr.filter(function (number) {
    return number < 0;
});
for (let elem of negativeArr) {
    {
        counterNegative++;
    }
}

let zeroArr = arr.filter(function (number) {
    return number == 0;
});
for (let elem of zeroArr) {
    {
        counterZero++;
    }
}

let pairedArr = arr.filter(function (number) {
    return number % 2 == 0 && number != 0;
});
for (let elem of pairedArr) {
    {
        counterPaired++;
    }
}

let unpairedArr = arr.filter(function (number) {
    return number % 2 != 0 && number != 0;
});
for (let elem of unpairedArr) {
    {
        counterUnpaired++;
    }
}

alert("Позитвні : " + positiveArr + " (" + counterPositive + "од." + ") ;  Негативні : " + negativeArr + " (" + counterNegative + "од." + ") ;  Нулі :"
    + zeroArr + " (" + counterZero + "од." + ") ;  Парні :" + pairedArr + " (" + counterPaired + "од." + ") ;  Непарні :" + unpairedArr + " (" + counterUnpaired + "од." + ") .");

//Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

const days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя'];
let weekday = 0;

while (confirm(`${days[weekday]}. Хочеш побачити наступний день?`)) {
    weekday = (weekday + 1) % days.length;
}

//Максимум

/*Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл,
записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100,
поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N
(буде корисним почитати про алгоритм: "бінарний пошук").*/

let gameRules = confirm("Привіт! Давай зіграємо в гру! Загадай число від 0 до 100.");

function fn(b, d) {
    function e() {
        var a = b + Math.random() * (d + 1 - b) | 0,
            c = prompt("Ваше число " + a + "?", "менше/більше/так      (залиш тільки правильну відповідь)");
        "так" == c ? alert("Ваше число " + a + " !!!") : ("більше" == c && (b = a), "менше" == c && (d = a), e())
    }
    e()
};
fn(1, 100)

//Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

document.write("<h1>Таблиця множення</h1>");

for (let j = 2; j <= 9; j++) {
    document.write("<div style='float: left; width: 90px;'>");
    for (let i = 1; i <= 10; i++) {
        document.write(i + "*" + j + "=" + (i * j) + "<br>");
    }
    document.write("</div>");
}

//Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

let currentDate = new Date(prompt("Bвед\іть дату у форматі РРРР-ММ-ДД"));
let oneDay = 1;
currentDate.setDate(currentDate.getDate() + oneDay);
let dd = currentDate.getDate();
let mm = currentDate.getMonth() + 1;
let yyyy = currentDate.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
currentDate = dd + '.' + mm + '.' + yyyy;
confirm("Дата через 1 день: " + currentDate);
