// console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.forms);
// const cardT = document.getElementById("card-title");
// console.log(cardT);
// cardT.textContent = "item codes";
// cardT.innertext = "code items" 
// cardT.innerHTML ="<h2> items cc</h2>"

// const list = document.getElementsByTagName('li')

// console.log(list);

// list.forEach(list => {
//     list.style.backgroundColor 
// });

// for(let i = 0; i<list.length; i++){
//     list[i].style.backgroundColor = 'grey'
// }
 

// const list = document.querySelector(".list(nth-child(2))")
// const list = document.querySelector('input');

// list.value = 'i am the freaking value';

// const submit = document.querySelector('input[type = "submit"]')

// submit.value = "send";
// submit.style.backgroundColor = "grey";

// const nthChild = document.querySelector('li:nth-child(2n+1)');

// nthChild.style.color = "red"

// const listItems = document.querySelectorAll('.list-item');
// console.log(listItems);
// listItems.forEach(listItems => {
//  listItems.textContent = 'oo';
// });

// traversing the dom

// const list = document.querySelector('#main');

// console.log(list.parentNode)

// list.parentNode.style.backgroundColor = 'grey'
const list = document.querySelector('#main');

// const childd = list.children
const childd = list.childNodes 

console.log(childd);