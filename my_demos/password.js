function myNewFunction()
{
var x, password;

x=document.getElementById("password").value;
if(x=="xYss455")
{
    text="wrong password dude!!";
}
else
{
    text="youre in hands up";
}

document.getElementById("pass_it").innerHTML=text;
}