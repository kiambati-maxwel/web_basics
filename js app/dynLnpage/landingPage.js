// --- dom elements --- 
const greeting = document.getElementById('greeting'),
      time = document.getElementById('time'),
      focus = document.getElementById('focus'),
      name = document.getElementById('name');


    //   show time 
    function showTime(){
        let today = new Date(),
            hour = today.getHours(),
            min = today.getMinutes(),
            sec = today.getSeconds();

    // --- set am or pm 
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12 hr format
    hour = hour % 12 || 12;

    // output the time 
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span id="ampm"> ${amPm}</span>`;

    setTimeout(showTime, 1000);
    }


    // -- add zero
    function addZero(n){
        return (parseInt(n, 10) < 10 ? '0': '')+n;
    }

    // set background 
    function setBg (){
        let today = new Date(),
            hour = today.getHours();
            document.body.style.backgroundImage = "url('./images/screen.png')";

        if(hour < 12){
            // morning 
            document.body.style.backgroundImage = "url('./images/screen.png')";
            greeting.textContent = "goodmorning ";
            document.body.style.color = 'white';
            focus.style.color = 'green';
        }else if(hour < 18) {
            // after noon 
            document.body.style.backgroundImage = "url('./images/apple.webp')";
            document.body.style.color = 'orangered';
            greeting.textContent = "good afternoon";
        } else {
            // evening
            document.body.style.backgroundImage = "url('./images/image1.jpg')";
            greeting.textContent = "goodevening ";
            document.body.style.color = 'white';
            document.body.style.background = "center  norepeat";

        }

    }

    // get name
    function getname(){
        if(localStorage.getItem('name') == null){
            name.textContent = '[Enter Name]'
        }else{
            name.textContent = localStorage.getItem('name');
        }
    }

    // set name
    function setName(e){
        if(e.type === 'keypress'){
            // make sure enter is pressed
            if(e.which == 13 || e.keyCode ==13){
                localStorage.setItem('name', e.target.innerText);
                name.blur();
            }
        }else{
            localStorage.setItem('name', e.target.innerText);
        }
    }

     // set focus
     function setFocus(e){
        if(e.type === 'keypress'){
            // make sure enter is pressed
            if(e.which == 13 || e.keyCode ==13){
                localStorage.setItem('focus', e.target.innerText);
                focus.blur();
            }
        }else{
            localStorage.setItem('focus', e.target.innerText);
        }
    }

    // get focus
    function getFocus(){
        if(localStorage.getItem('focus') == null){
            focus.textContent = '[Enter focus]'
        }else{
            focus.textContent = localStorage.getItem('focus');
        }
    }
 
    // event handler 

    name.addEventListener('keypress', setName);
    name.addEventListener('blur', setName);
    focus.addEventListener('keypress', setFocus);
    focus.addEventListener('blur', setFocus);

    // run
    getFocus();
    getname();
    showTime();
    setBg();
