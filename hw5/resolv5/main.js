// const obj = {
//     name: 'Max',
//     getName: function () {
//         return this.name
//     }
// }
// console.log(obj.getName())


// const arr = [1, 2, 3, 4, 5];
//
// const swap = (array, index) => {
//     let tmp = array[index];
//     array[index] = array[index + 1];
//     array[index + 1] = tmp;
//     return arr
// };
// console.log(swap(arr, 3));


// const arr = [1, 2, 5, -11, 45];
// const findMin = (array) => {
//   let min = array[0];
//   for (let item of array){
//       if (min > item) {
//           min = item
//       }
//   }
//   return min
// }
// console.log(findMin(arr));


// const arr1 = [];
// for (let i = 0; i < 10; i++) {
//     arr1[i] = Math.random(Math.random()*100)
// }
// const arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//     arr2[i] = arr1[i]*5
//
// }
// console.log(arr1);
// console.log(arr2);


const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const res = [];
let index = 0;
for (let i = 0; i < arr.length; i+=2) {
    res[index++] = arr[i]
}
console.log(res)