function myFunction(){
    var x, text;

    //get the value of the input field with id="number"
    x = document.getElementById("number").value;

    //if x is nit a number or its not less than one or greater than 10

    if(isNaN(x) || x<1 || x>10)
    {
        text = "input not valid";
    }
    else
    {
        text = " input OK!!";
    }

    document.getElementById("demo").innerHTML = text;
   
} 

