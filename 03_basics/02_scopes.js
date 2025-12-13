// var c = 300  global scope

let a = 100
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log(a); // block scope
    
}
console.log(a);
// console.log(b);
//console.log(c);

// nasted scope

function one() {
    const username = "Divyansh"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);

    two()
       
}

one()