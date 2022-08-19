// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.phone = phone;
// }

// let array = [];
// let user1 = new User(26, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233');
// let user2 = new User(54, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233');
// let user3 = new User(51, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233');
// let user4 = new User(25, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233');
// let user5 = new User(44, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233');
// let user6 = new User(88, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233');
// let user7 = new User(33, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233');
// let user8 = new User(32, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233');
// let user9 = new User(11, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233');
// let user10 = new User(10, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233');
//
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(array);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let result = array.filter(function (num){
//     return num.id % 2 === 0;
//
// });
// console.log(result);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let result2 = array.sort(function (a, b){
//     return a.id - b.id;
//
// });
// console.log(result2);


//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class User {
//
//     constructor(id, name, surname, email, phone, order) {
//             this.id = id;
//             this.name = name;
//             this.surname = surname;
//             this.phone = phone;
//             this.order = order;
//
//
//     }
//
// }
// let array = [];
// let user1 = new User(26, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233', [1, 2, 3]);
// let user2 = new User(54, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233', [42, 33]);
// let user3 = new User(51, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233', [1, 2, 3, 4, 5, 6, 7]);
// let user4 = new User(25, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233', [8, 9, 10, 11]);
// let user5 = new User(44, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233', [66, 55, 44]);
// let user6 = new User(88, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233', [51, 52, 53]);
// let user7 = new User(33, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233', [54, 55, 56, 57]);
// let user8 = new User(32, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233', [61, 62, 63]);
// let user9 = new User(11, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233', [64, 65]);
// let user10 = new User(10, 'evhen', 'anreevich', 'email@gmail.com', '+380688112233', [71, 72, 73]);
//
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let filter = array.sort((a, b) => a.order.length - b.order.length);
// console.log(filter);

//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- inof () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// function Car (model, manufacturer, year, maxSpeed, volume) {
//
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.inf0 = function () {
//         for (const carKey in this) {
//             if(typeof this[carKey] !== 'function') {
//                 console.log(`${carKey} -- ${this[carKey]}`);
//             }
//         }
//     }
//    this.increaseMaxSpeed = function (newSpeed) {
//        this.maxSpeed += newSpeed;
//    }
//    this.changeYear = function (newValue) {
//        this.year += newValue;
//    }
//    this.addDriver = function (driver) {
//        this.drive = driver;
//    }
//
// }
//
// let car = new Car('Audi','Germany', 2015,250, 3 );
// // console.log(car);
// // car.drive()
// // car.inf0()
// // car.increaseMaxSpeed(50)
// // console.log(car);
// car.changeYear(5)
// console.log(car);
// car.addDriver({name: 'vasiliy', age: 33, status: true})
// console.log(car);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Car {
//
//     constructor(model, manufacturer, year, maxSpeed, volume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     inf0() {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function') {
//                 console.log(`${carKey} -- ${this[carKey]}`);
//             }
//
//         }
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     addDriver(driver){
//         this.drive = driver;
//     }
// }
//
// let car = new Car('Audi','Germany', 2015,250, 3 );
// console.log(car);
// car.drive()
// car.inf0()
// car.increaseMaxSpeed(100)
// car.addDriver({name: 'Petya', age: 43, status: true})
// console.log(car);
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;

    }
}

let array1 = new Cinderella('Lena', 25, '34');
let array2 = new Cinderella('Lena', 25, '33');
let array3 = new Cinderella('Lena', 25, '32');
let array4 = new Cinderella('Lena', 25, '31');
let array5 = new Cinderella('Lena', 25, '30');
let array6 = new Cinderella('Lena', 25, '35');
let array8 = new Cinderella('Lena', 25, '37');
let array7 = new Cinderella('Lena', 25, '36');
let array9 = new Cinderella('Lena', 25, '29');

let array = [array1, array2, array3, array4, array5, array6, array7, array8, array9];

class Prince extends Cinderella {
    constructor(name, age, findFootSize) {
        super(name, age);
        this.findFootSize = findFootSize;
    }

}

let prince = new Prince('Vasia', 30, 34);

 function find (array, prince){
    for (const item of array) {
        if (prince.findFootSize === item.footSize) {
            return `My Cinderella is ${item.name}`
        }
    }
}
console.log(find(array, prince));

let cinderella = array.find(value => prince.findFootSize === value.footSize);
    console.log(cinderella);














