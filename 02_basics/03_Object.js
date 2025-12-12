// Singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Divyansh",
    "Full Name": "Divyansh Singh",
    [mySym]: "symkey",
    age: 21,
    location: "Kanpur",
    email: "divyansh@gmail.com",
    isLogin: false,
    lastLogin: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Full Name"]);
console.log(jsUser[mySym]);

jsUser.email = "divyanshgpt.com"

// Object.freeze(jsUser)
jsUser.email = "dkgpt.com"

console.log(jsUser.email);

jsUser.greeting = function () {
    console.log("Hello js user");
    
}

jsUser.greeting2 = function () {
    console.log(`Hello js user, ${this.name}`);
    
}

console.log(jsUser.greeting); // function (anonymous)
console.log(jsUser.greeting());
console.log(jsUser.greeting2());




