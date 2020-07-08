// random color generator 
var randomColor=function() {
    var rvalue=function() {
        return Math.round(Math.random()*255);
    }

    return 'rgb('+rvalue()+","+rvalue()+","+rvalue()+")";
}

// get button element from DOM
var button=document.querySelector('button');

// create event listener to change color on button click
button.onclick=function() {}// random color generator 
const p = document.createElement('p').innerHTML = 'hello max';
const content = document.querySelector('body');content.appendChild(p);
var randomColor = function(){
  var rvalue = function() {
  	return Math.round(Math.random()*255); 
  }

 	return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
}

// get button element from DOM
var button = document.querySelector('button');

// create event listener to change color on button click
button.onclick = function(){
	
}