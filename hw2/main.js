// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let myArray = [];
// myArray[0] = 'Hello';
// myArray[1] = 12;
// myArray[2] = true;
// myArray[3] = [1, 2, 3, 4, 5];
// myArray[4] = {
//     name: 'Evheny',
//     age: 30
// };

// console.log(myArray)
// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])
// console.log(myArray[3])
// console.log(myArray[4])
// console.log(myArray[3][3])


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.


// const book1 = {
//     title: 'title',
//     pageCount: 300,
//     genre: 'genre'
//
// }
//
// const book2 = {
//     title: 'title',
//     pageCount: 300,
//     genre: 'genre'
//
// }
//
// const book3 = {
//     title: 'title',
//     pageCount: 300,
//     genre: 'genre'
//
// }
//
// console.log(book1, book2, book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age


// const book1 = {
//     title: 'title',
//     pageCount: 300,
//     genre: 'genre',
//     authors: [
//         {name: 'Evheny', age: 30},{name: 'Sasha', age: 31}
//     ]
//
// }
//
// const book2 = {
//     title: 'title',
//     pageCount: 300,
//     genre: 'genre',
//     authors: [
//         {name: 'Evheny', age: 30},{name: 'Sasha', age: 31}
//     ]
//
// }
//
// const book3 = {
//     title: 'title',
//     pageCount: 300,
//     genre: 'genre',
//     authors: [
//         {name: 'Evheny', age: 30},{name: 'Sasha', age: 31}
//     ]
//
// }
//
// console.log(book1, book2, book3)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача



const array = [
    {name: 'Evheny', username: 'Evheny91', password: 'qwerty'},
    {name: 'Evheny', username: 'Evheny91', password: 'gdgdger'},
    {name: 'Evheny', username: 'Evheny91', password: 'qesgrgfd'},
    {name: 'Evheny', username: 'Evheny91', password: 'gfjhhhb'},
    {name: 'Evheny', username: 'Evheny91', password: 'gnbmjy'},
    {name: 'Evheny', username: 'Evheny91', password: 'QQDASD'},
    {name: 'Evheny', username: 'Evheny91', password: 'jhmjhmn'},
    {name: 'Evheny', username: 'Evheny91', password: 'kuikuku'},
    {name: 'Evheny', username: 'Evheny91', password: 'k,jjh'},
    {name: 'Evheny', username: 'Evheny91', password: 'gjthrr'}

]

console.log(array[0].password);
console.log(array[1]['password']);
console.log(array[2].password);
console.log(array[3]['password']);
console.log(array[4].password);
console.log(array[5]['password']);
console.log(array[6].password);
console.log(array[7]['password']);
console.log(array[8].password);
console.log(array[9]['password']);