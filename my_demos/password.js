function myNewFunction()
{
var x, password;

x=document.getElementById("password").value;
if( x=="1234")
{
    text="heads up!! you in winky...";
}
else
{
    text="wrong password dude!!";
}

document.getElementById("pass_it").innerHTML=text;
}