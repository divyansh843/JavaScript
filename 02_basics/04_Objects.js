// singleton or contructor

const App = new Object()
App.id = "123abc"
App.name = "Divyansh"
App.isloggin = false

console.log(App);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Divyansh",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2} // object in object
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

const obj5 = {...obj1, ...obj2}
console.log(obj5);

const users = [
    {
        id: 1,
        email: "divyansh@gmail.com"
    },
    {
        id: 1,
        email: "divyansh@gmail.com"
    }
]

console.log(users[1].email);

console.log(Object.keys(App));
console.log(Object.values(App));
console.log(Object.entries(App));

console.log(App.hasOwnProperty("isloggin"));




