// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i<10; i++) {
//     document.write(`<div>Hellow World</div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i<10; i++) {
//     document.write(`<div>Hellow World ${i}</div>`)
// }


// let flowers = ["Rose", "Lily", "Tulip", "Jasmine", "Orchid"];
// for (var i = 0; i < flowers.length; i++) {
//     document.write(`<div>${flowers[i] + " - это цветок."}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.


// let i = 0
// while (i < 20) {
// document.write(`<div>Hello World</div>`);
//     i++
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0
// while (i < 20) {
//     document.write(`<div>Hello World ${i}</div>`);
//     i++
// }


//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul>`)
//
// for (const listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`)
// }
//
//
//
// document.write(`</ul>`)

// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (product of products) {
//     document.write(`<div class="product-card">
//             <h3 class="product-title">${product.title} - ${product.price}</h3>
//             <img class="product-image" src="${product.image}" alt="products">
//             <button>BUY</button>
//             </div>`)
//
// }









//
//
// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// for (user of users) {
//     if (user.status) {
//         console.log(user)
//     }
// }
// console.log('-----------------------')
// for (user of users) {
//     if (!user.status) {
//         console.log(user)
//     }
// }
// console.log('-----------------------')
// for (user of users) {
//     if (user.age > 30) {
//         console.log(user)
//     }
// }

// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років


// let books = [
//     {
//         name: 'Alice in Wanerland',
//         pages: 256,
//         author: ['Lewis Carrol'],
//         genre: ['Childrens literature', 'fantasy', 'Literanure of absurd']
//     },
//     {
//         name: 'Cinderella',
//         pages: 134,
//         author: ['Charles Perrault', 'Brothers Grimn'],
//         genre: ['Fairy tale','Childrens literature']
//     },
//     {
//         name: 'Harry Potter',
//         pages: 452,
//         author: ['Joan Rowling'],
//         genre: ['fantasy']
//     },
// ]
//     let max = books[0];
// for (const book of books) {
//     if (book.pages > max.pages) {
//         max = book;
//     }
// }
// console.log(max)


// let maxGenre = books[0];
// for (const book of books) {
//     if (book.author > maxGenre.author) {
//     maxGenre = book}
// }
// console.log(maxGenre)




// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let array1 = [11, 25, 65, 15, 85];
// let array2 = ['раз', 'два', 'три', 'четыри', 'пять'];
// let array3 = ['Hello', 56, true];
// const newArray = [array1,array2,array3];
// console.log(newArray)

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [];
// array [0] = 'Hello';
// array [1] = true;
// array [2] = 25;
// console.log(array[2])




//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < array.length) {
//     console.log(array[i])
//     i++;
// }

// let i = 0;
// for (i = 0; i < array.length; i++) {
//     console.log(array[i])
// }


// let i = 0;
// while (i < array.length) {
//     if (i % 2 !==0){
//         console.log(array[i])
//     }
//     i++;
// }


// let i = 0;
// for (i = 0; i < array.length; i++) {
//     if (i % 2 !==0) {
//         console.log(array[i])
//     }
// }
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < array.length) {
//     if (i % 3 ===0) {
//         array[i] = 'okten';
//     }
//     console.log(array[i])
//     i++
// }





//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

























