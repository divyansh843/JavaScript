// with out return
function sayMyName() { // non parameterise function
    console.log("D");
    console.log("i");
    console.log("v");
    console.log("y");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
}

// sayMyName();

function addTwoNumber(number1, number2) { // parameterise function
    console.log(number1 + number2);
       
}

// const result = addTwoNumber(3, 5) 
// console.log(result);

// with return

function addTwoNumber(number1, number2) { // parameterise function
    const result = number1 + number2
    return result
}

// const result = addTwoNumber(3, 5)
// console.log(result);

function loginUserMassage(username) {
    return `${username} just logged in`
    
}

function loginUserMassage(username = "Div") {
    return `${username} just logged in`
    
}

// console.log(loginUserMassage("Divyansh"));
// console.log(loginUserMassage());

function calcutateCartPrice(val1, val2, ...num1) {
    return num1

}

console.log(calcutateCartPrice(200, 300, 500, 2000));

const user = {
    username: "Divyansh",
    price: 100
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject({
    username: "sam",
    price: 1000
})

const myNewArray = [200, 400, 1000, 4000]

function returnSecondValue(getArray) {
    return getArray[1]
    
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 200, 100]));

