// console.log("yes im getting started")

// alert("error")

// console.error("stop it")
let = 200 ;



const age = 33;


//=========== dta types
const bool = true;
const john = 'edith';
const isdeaf = undefined;
const rating = 4.2;
const z = null;
let variableName;

console.log(typeof rating);
console.log(typeof isdeaf);
console.log(typeof z)

// ======= concatenation
const name1 = 'john';
const secname = 24;
console.log(rating + name1 + ' ' + secname);

// ====== template literals

console.log(`my name is ${name1} ${secname}`)

const templatestring = `my name is ${name1} ${secname}`;

console.log(templatestring);

// ====== string

const hello = 'hello peeps is me community'
console.log(hello.length);
console.log(hello.split(' '))

//======== arrays
const number = new Array(1,2,3,5,5);
const food = ["mango", "apple", "carrot"];
food[3] = "junk";
food.push("strawBerries");
console.log(food);
console.log(food[2]);
food.pop();
food.reverse();
console.log(food);
console.log(Array.isArray(food));

//======= object riterals

const person = {
    firstName: "maxwel",
    lastName: "kiambati",
    age: 19,
    hobies: ["programming", "line skating", "quad racing"],
    career: {
        proffesion: "IT",
        skills: "web designer",
        mindset: true
    }
}

console.log(person.career.proffesion)
console.log(`${person.firstName} ${person.lastName}`)
  
person.hobies.push("dancing");
console.log(person.hobies)
// ===================== desturing
const {firstName, lastName, career: { proffesion }} = person;

console.log(proffesion);

person.email = "bot@gmail.com"

console.log(person.email)

// ======== an array of objects

const tado = [
    {
        id: 1,
        text: "dismiss the kids",
        isCompleted: true
    },

    {
        id: 6,
        text: "call mercy",
        isCompleted: false
    }

]

console.log(tado[1].text)

// ========= for loops

for(let i=0; i<10; i++){
    console.log(i);
}

// ======== while loops 

let i;

while(i<10){
    console.log(i);
    i++;
}

// ======== loop throw an array ----->> advanced for
for(let ta of tado){
    console.log(tado)
}

// ======== high order array method  for each, map

tado.forEach(function(tado){
    console.log(tado.text)
});

// ========= map
 const mapping = tado.map((tado) => tado.text);

 console.log(mapping);

//  ======= filter ====== higher oder function ==
const mappi = tado.filter(function(tado){
    return tado.isCompleted === true;
}).map(function(tado){
    return tado.text;
});
console.log(mappi);

// ====== selection
const select=10;
if(select === 10 ){
console.log("yes!!")
}

// ===== ternary operator

const ternar = 10;

const x=10;
const color = x > 10 ? console.log("red") : "blue";

// ====== switch 

const colour = "white";

switch (colour){
    case "green":
        console.log("chage theme too dark");
        break;
    case "white":
        console.log("exelent")
        break;
    default:
        console.log("try again dammy!!")
}

// ======= functions with default values

function myFunction(num1 = 1, num2 = 1){
    return num1+num2;
}

console.log(myFunction(23, 55));

// ====== arrow functions

const addNum = (number1, number2) => {
    return number1+number2;
}

console.log(addNum(233, 55));


const myF = (a, b) => a+b

console.log(myF(23, 5));

tado.forEach((tado) => console.log(tado.text));

const fnction = () => console.log("yes");

fnction();

//===== object oriented

// ====== constractor function

function student (fastName, secondName, regNo, dob){
    this.fastName = fastName;
    this.secondName = secondName;
    this.regNo = regNo;
    this.dob = new Date(dob);


student.prototype.getBirthDate = () => this.dob.getFullYear();

student.prototype.getFullName= () => `${this.fastName} ${this.secondName}`;
}

 
// ======== instantiate 

const student1 = new student("adam", "ravin", 74774, 21-3-1997);

console.log(student1.getBirthDate());
console.log(student1.getFullName());
console.log(student)

// class es6

class developer {
    constructor (fastName, secondName, regNo, dob){
        this.fastName = fastName;
    this.secondName = secondName;
    this.regNo = regNo;
    this.dob = new Date(dob);
    }
    getBDate = () => this.dob.getFullYear();

    getFName (){
        return `${this.fastName} ${this.secondName}`
    }

} 

const developer1 = new developer ("maxwel", "bot", 56483, 1-5-2001)


console.log(developer1.getFName());
console.log(developer1.getBDate());

// ============ es6 return object

const myObjectLiteral = (name, age, gender) => ({name, age, gender});


// ============= use strict 

"use strict";

// =========== const array mutation object.freec()

function freezeobj(){
    "use strict";
    const mathCircleHas = {
        PI: 3.14
    };

    Object.freeze(mathCircleHas);

    try{
        mathCircleHas.PI = 100;
    }catch( ex ){
        console.log(ex)
    }
        return mathCircleHas.PI;
    }

    console.log(freezeobj());

