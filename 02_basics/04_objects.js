//const tinderUser = new Object()//singleton object

const tinderUser = {} //non singelton object

tinderUser.id = "123abc"
tinderUser.name = "fox"
tinderUser.isLoggedIn = false

//console.log(tinderUser)


const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname : {
            firstname: "nandini",
            lastname: "rao"
        }
    }
}

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname);
//console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = Object.assign({},obj1, obj2,obj3)

const obj4 = {...obj1,...obj2,...obj3}
//console.log(obj4);


const users = [
    {
    id: 1,
    email: "h@gmail.com",
},
{
    id: 1,
    email: "h@gmail.com"
},
{
    id: 1,
    email: "h@gmail.com"
}
]

users[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));






