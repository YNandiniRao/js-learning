const name = "nandini"
const repoCount = 50

//console.log(name + repoCount + " value"); //concatination

console.log(`hello my name is  ${name} and my repo is ${repoCount}`);

const gameName = new String('nandini-ii')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));
console.log(gameName.indexOf('n'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);


const newStringOne = "   nandini   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://nandini.com/nandini%20rao"

console.log(url.replace('%20', '-'))

console.log(url.includes('nandini'))
console.log(url.includes('apple'))


console.log(gameName.split('-'))

