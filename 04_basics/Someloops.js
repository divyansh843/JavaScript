let arr = [2, 3, 4]

arr.forEach(function(ele, index, arr){
    console.log(index, ele, arr);
    
})

arr.forEach((ele, index, arr) => {
    console.log("arrow" , index, ele, arr);
    
})

const heros = ["doremon", "shaktomaan", "Divynash", "Divraj"]

heros.forEach((el) => {
    console.log(el.toUpperCase());
    
})

arr.map(function(ele, index, arr){
    console.log(ele, index, arr);
    
})

//filter
console.log(heros);

const herosWithRaj = heros.filter((h) => {
    return h.endsWith("raj")
})

console.log(herosWithRaj);

// shopping card

const cardBill = [20, 30, 40]

const sumOfCardBill = cardBill.reduce((prev, curr)=> {prev + curr}, 0)
console.log(sumOfCardBill);
