// Arrays

const arr = [0, 1, 4, 5, 8]
console.log(arr[2]);
console.log(arr);

const myHeros = ["thor", "ironman"]

const myArr = new Array(1, 4, 7)
console.log(myArr);

// Array Methods

myArr.push(6) // add element at last
console.log(myArr);

myArr.pop() // remove element from last
console.log(myArr);

myArr.unshift(0) // add element at start
console.log(myArr);

myArr.shift() // remove element from start
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(1));

const newArr = myArr.join() // convert array in to string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3) // create a sub arraye without manipulate main array
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // saperate subarray and manipulate main array
console.log(myn2);

console.log("C", myArr);







