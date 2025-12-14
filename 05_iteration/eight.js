const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, crrvalue) {
//     console.log(`acc: ${acc} and currvalue: ${crrvalue}`);
//     return acc + crrvalue
// }, 0)

const myTotal = myNums.reduce( (acc, crr) => acc + crr, 0)
console.log(myTotal);

const shoppinCard = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile",
        price: 4999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "java course",
        price: 3999
    }
]

const pricetopay = shoppinCard.reduce((acc, item) => acc + item.price, 0)
console.log(pricetopay);
