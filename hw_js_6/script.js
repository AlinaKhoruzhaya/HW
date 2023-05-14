"use strict";

//МІНІМУМ

/*Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька
функцій для роботи з таким масивом:*/

let arr = [
    { name: 'apple', quantity: 3, bought: 'no', price: 20, amount: 60, },
    { name: 'ice cream', quantity: 2, bought: 'yes', price: 40, amount: 80, },
    { name: 'yams', quantity: 4, bought: 'yes', price: 180, amount: 720, },
    { name: 'bread', quantity: 2, bought: 'no', price: 25, amount: 50, },
    { name: 'meat', quantity: 5, bought: 'yes', price: 250, amount: 1250, },
    { name: 'chocolates', quantity: 10, bought: 'no', price: 50, amount: 500, },
    { name: 'broccol\i', quantity: 3, bought: 'no', price: 190, amount: 570, },
];

//1.Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}
arr.sort(byField('bought'));
arr.forEach(arr => console.log(arr));

//2.Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

const newArr = arr.map((post) => ({
    ...post,
    bought: post.name === 'apple' ? 'yes' : post.bought
}));
console.log(newArr);

//НОРМА

// 1.Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

let removed = arr.splice(0, 1);
console.log(arr);

/*2.Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці,
а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.*/

//додавання до списку нового продукту

let add = arr.push({ name: 'milk', quantity: 2, bought: 'yes', price: 35, amount: 70, },);
console.log(arr);

//змінення кількісті та суми у існуючому продукті у списку, наприклад apple

arr[0].quantity = 4;
arr[0].amount = 80;
console.log(arr);

//МАКСИМУМ

//1.Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
//2.Підрахунок суми всіх (не) придбаних продуктів.

let amountSum = 0;
let boughtYesSum = 0;
let boughtNoSum = 0;
arr.forEach((element) => {
    amountSum += element.quantity * element.price;
    if (element.bought === 'yes') {
        boughtYesSum += element.quantity * element.price;
    } else if (element.bought === 'no') {
        boughtNoSum += element.quantity * element.price;
    }
});
console.log(amountSum);//3230
console.log(boughtYesSum);//2050
console.log(boughtNoSum);//1180

//3.Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

arr.sort((x, y) => x.amount - y.amount);
console.log(arr);
