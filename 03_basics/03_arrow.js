const user = {
    usernmae: "Divyansh",
    price: 999,

    welcomeMassage: function () {
        console.log(`${this.usernmae}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMassage()
// user.usernmae = "sam"
// user.welcomeMassage()

// console.log(this);

// function chai() {
//     let username = "Divyansh"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "Divyansh"
//     console.log(this.username);
    
// }
// chai()

const chai = () => {
        let username = "Divyansh"
        console.log(this);

}

chai()

const addtwo = (num1, num2) => {
    return num1 + num2
}

console.log(addtwo(3, 4));

const addtwo1 = (num1, num2) => num1 + num2

const addtwo2 = (num1, num2) => (num1 + num2)

console.log(addtwo1);


const addtwo3 = (num1, num2) => (num1 + num2 + {username: "Divyasnh"})
console.log(addtwo3());


