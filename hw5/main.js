// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function areaRectangle (a, b, square) {
//             return a*b;
// }
// console.log(areaRectangle(15,25))


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaCirkle(radius) {
//     return Math.PI * Math.pow(radius, 2);
// }
// console.log(areaCirkle(6))

// let Pi = 3.14;
// function foo (Pi, r) {
//   return Pi * r * r;
// }
//
// console.log(foo(Pi, 10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaCylinder (h, r) {
//     return 2 * Math.PI * r * h;
// }
// console.log(areaCylinder(5, 10))




// - створити функцію яка приймає масив та виводить кожен його елемент

// let arrayNum = [45, 'Hellow', true, 78, 1, 'World'];
//
// function arrayPrintin (array) {
//     for (const item of array) {
//         console.log(item)
//     }
// }
// arrayPrintin(arrayNum)

// let array = [1, 2, 3, 4];
// function foo (arr) {
//   console.log(arr);
// }
// foo(array)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function foo (text) {
//   document.write(`<p>${text}</p>`)
// }
//
// foo('text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function argumens(foo){
//     for(const item of foo){
//         document.write(`<ul>`)
//             document.write(`<li>${item}</li>`)
//             document.write(`</ul>`)
//     }
// }
// argumens([`text`, `text`, `text`])


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function function1 (text, count) {
//     for (let i = 0; i < count; i++) {
// document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
// document.write(`</ul>`)
//     }
// }
//
// function1('text', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let users= ['Evheny', 32, true]
// function arrayPrinter (array){
// for (const item of array){
//     console.log(item)
// }
//  }
//  arrayPrinter(users)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let objectsUsers = [
//     {
//         id: 456789,
//         name: 'Evheny',
//         age: 30
//     },
//     {
//         id: 741523,
//         name: 'Serhey',
//         age: 31
//     },
//     {
//         id: 965474,
//         name: 'Oleg',
//         age: 33
//     }
// ];
//
// function usersBlocks (array) {
//     for (const item of array) {
//         document.write(`<div> ${item.id} ${item.name} ${item.age}</div>`)
//
//     }
// }
// usersBlocks(objectsUsers)

// - створити функцію яка повертає найменьше число з масиву

// let myArray = [3, 2,17,13,6,22,31,45,66,100, 1];
// function minNum () {
//     for (const item of myArray){
//         let min = Math.min(...myArray);
//         console.log(min)
//     }
// }
//
// minNum(myArray)

// let array = [1, 2, 3, 4, -5];
// function foo(arr) {
//     let min = arr[0];
//     for ( const minElement of min){
//         if (minElement < min) {
//             min = minElement;
//         }
//     }
//     return min
// }
//
// console.log(foo(array))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1, 2, 10, 15];
//
// function arraySum (array)
// { let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
//   console.log(sum);
// }
//
// arraySum(arr);

// let array = [1, 2, 3, 4];
// function foo(arr) {
//     let sum = 0;
//     for (const arrElement of arr){
//     sum += arrElement
//     }
//     return sum
// }
//
// console.log(foo(array))