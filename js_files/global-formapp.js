

// single element
// console.log(document.querySelector(".my-form"));


// multi elements
// console.log(document.querySelectorAll(".item"))
// console.log(document.getElementsByClassName("item"))
// console.log(document.getElementsByTagName("li"))

// const  items  = document.querySelectorAll(".item");

// items.forEach((item) => console.log(item))

// const ul = document.querySelector(".users")

// ul.remove();

// ul.lastElementChild.remove();
// ul.firstElementChild.remove();

// ul.firstElementChild.textContent = "hello";
// ul.firstElementChild.innerText= "text";
// ul.children[1].innerHTML = "<h1> head</h1>"

// const formB = document.querySelector(".btn");

// formB.addEventListener('mouseout', (event) => {
    // event.preventDefault()
    // console.log(event.target.className)
    // document.querySelector(".global-form").style.background = "#ccc" ;

    // document.querySelector("body").classList.add("body-bg");

const myform = document.querySelector(".my-form");
const inputname = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myform.addEventListener("submit", onSubmit);

function onSubmit (e){
    e.preventDefault();
    
    if(inputname.value === "" || email.value === ""){
        msg.classList.add("error");
        msg.innerHTML = "please enter all fields";setTimeout(() => msg.remove(), 4000);
    }else{
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${inputname.value} : ${email.value}`));

        userList.appendChild(li);

        inputname.value = "";
        email.value = "";
       
    }
}