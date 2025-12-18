//Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
//console.log(myDate.toLocaleTimeString());



let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());


let my_Date = new Date(2023,0,23,5,3)
console.log(my_Date.toLocaleString());

let date = new Date("2023-01-14")
console.log(date.toLocaleString());


let myTimeStamp = Date.now()
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate);


//`${newDate.getDay()} and the time `


newDate.toLocaleString('default', {
    weekday: "long",
    
})