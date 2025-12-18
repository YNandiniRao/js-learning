function calculateCartPrice (...num1){ //rest operator
    return num1
}
console.log(calculateCartPrice(200,300,400,500));



function calculateCartPrice2 (val1,val2,...num1){ 
    return num1
}
console.log(calculateCartPrice2(200,300,400,500))



const user = {
    username: "nandini",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

console.log(handleObject(user))

handleObject({
    username: "megha",
    price: 399
})



const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
     return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,400,200,600]));
