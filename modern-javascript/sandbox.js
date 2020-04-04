// ----- string ---
let email = 'netbot@codeAssembly.co.ke';
console.log(email);

// ----- concatenation ---

let firstName = 'john'; 
let secondName  = 'doe';
let fullName = firstName + ' ' + secondName;
console.log(fullName);

//  ----- characters ---  
console.log(fullName[2]);

// ----- length ---  
console.log(email.length);

// ----- methods --- 
console.log(email.toUpperCase(), secondName.toLocaleLowerCase());

// ----- index ---

let index = email.indexOf('@');
console.log(index);
let lasTindex = email.lastIndexOf('k');
console.log(lasTindex);

// --- slice ---- 

// let sliice  =  email.slice(0,3);
// console.log(sliice);

//-- replace 

console.log(email.replace('n', 'i was a freaking N !'));

let decrement =  4;
console.log(decrement -= 3);