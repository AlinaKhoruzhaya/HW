"use strict";

//Мінімум

/*Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи
для роботи з цим об'єктом:
1.Метод, який виводить на екран інформацію про автомобіль.
2.Додавання ім’я водія у список
3.Перевірка водія на наявність його ім’я у списку
4.Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити
перерву на 1 годину.*/

let bmv = {
    model: "X6",
    'years of production': 2015,
    'engine code': 'N63B44',
    volume: '4395 cm³',
    cylinders: 'V8',
    'Power at rev/min': '423 kW (575 hp) at 6000–6500',
    'Fuel consumption l/100 km': 9.7,
    'V max km/h': 250,
    drivers: {
        first: 'Alina',
    },

    showInfo() {
        console.log(this.model, this['years of production'], this['engine code'], this.volume, this.cylinders, this['Power at rev/min'], this['Fuel consumption l/100 km'],
            this['V max km/h'], this.drivers)
    },
    calcTimes(distanceQuantity) {
        let timesQuantity;
        timesQuantity = distanceQuantity / this['V max km/h'];
        if (timesQuantity => 4) {
            let recessQuantity;
            recessQuantity = timesQuantity / 4;
            timesQuantity += recessQuantity;
        };
        return timesQuantity;
    },

    calcFuel(distanceQuantity) {
        let fuelQuantity;
        fuelQuantity = distanceQuantity / 100 * this['Fuel consumption l/100 km'];
        return fuelQuantity;
    },
}

bmv.showInfo();
bmv.drivers.second = "Michael Schumacher";

if ('drivers' in bmv) {
    console.log(bmv.drivers)
};

console.log(bmv.calcTimes(3000));
console.log(bmv.calcFuel(3000));

//Норма

/*Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
    1.Для виведення часу на екран.
    2.Зміни часу на передану кількість секунд.
    3.Зміни часу на передану кількість хвилин.
    4.Зміни часу на передану кількість годин.
    5.Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд,
то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.*/

let times = new Date();


let secondsCoefficient = 0;
if (secondsCoefficient > 0) {
    times.setSeconds(times.getSeconds() + secondsCoefficient)
};

let hoursCoefficient = 3;
if (hoursCoefficient > 0) {
    times.setHours(times.getHours() + hoursCoefficient)
};

let minutesCoefficient = 0;
if (minutesCoefficient > 0) {
    times.setMinutes(times.getMinutes() + minutesCoefficient)
};

console.log(times);

//Максимум

/*Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
    Складання 2-х об'єктів-дробів.
    Віднімання 2-х об'єктів-дробів.
    Множення 2-х об'єктів-дробів.
    Ділення 2-х об'єктів-дробів.
    Скорочення об'єкта-дробу.

(Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)*/

let describesFractionFirst = {
    numeratorOne: 1,
    denominatorOne: 2,
};
let divider;

let calcFraction = {
    summFraction(a, b, c, d) {
        console.log((+(a / b) + +(c / d)).toFixed(2));
    },
    differenceFraction(a, b, c, d) {
        console.log((+(a / b) - +(c / d)).toFixed(2));
    },
    productFraction(a, b, c, d) {
        console.log((+(a / b) * +(c / d)).toFixed(2));
    },
    quotientFraction(a, b, c, d) {
        console.log((+(a / b) / +(c / d)).toFixed(2));
    },

    //знаходимо спільний дільник для дробу, щоб його скоротити
    calcDivider(numerator, denomerator) {
        while (numerator) {
            divider = numerator;
            numerator = denomerator % numerator;
            denomerator = divider;
            return divider;
        };
    },

    //скорочуємо дріб за допомогою знайденого вищє дільника
    reduceFraction(numerator, denomerator, divider) {
        let abbreviatedNumerator = numerator / divider;
        let abbreviatedDenomerator = denomerator / divider;
        console.log(abbreviatedNumerator);
        console.log(abbreviatedDenomerator);
    },
}

calcFraction.summFraction(1, 2, 1, 3);//результат додавання дробів
calcFraction.differenceFraction(1, 2, 1, 3);//результат віднімання дробів
calcFraction.productFraction(1, 2, 1, 3);//результат множення дробів
calcFraction.quotientFraction(1, 2, 1, 3);//результат ділення дробів


console.log(calcFraction.calcDivider(3, 12));//дільник для скорочення дробу
calcFraction.reduceFraction(3, 12, 3);// скорочені чисельник і знаменник
