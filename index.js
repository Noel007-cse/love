window.alert(`Hey I love you`)
let message;
message=window.prompt("Do you love me 😙??");
console.log(message);
let msg=message.toLowerCase();
if(msg=="yes")
{
    window.alert("I love you too 😘");
}
else
{
    window.alert("It's ok 😭. Still I love You!!!");
}

let user;
//let sir=document.getElementById("myinp").value;
document.getElementById("mysub").onclick=function(){
    user=document.getElementById("myinp").value;
    document.getElementById("myh1").textContent=`Hey ${user}`;
    document.getElementById("myinp").textContent="";
    console.log(user);
} 
//const is used to make constant values to varous keywords
//Number()function is used for typeconversion
const btn1=document.getElementById(`btn1`);
const btn2=document.getElementById(`btn2`);
const btn3=document.getElementById(`btn3`);
const mylab=document.getElementById(`mylab`);

let count=0;

btn1.onclick=function(){
    count++;
    mylab.textContent=count;
}
btn2.onclick=function(){
    count=0;
    mylab.textContent=count;
}
btn3.onclick=function(){
    count--;
    mylab.textContent=count;
}

const newb=document.getElementById(`newb`);
const newlb=document.getElementById(`newlb`);
let rand;
newb.onclick=function(){
    rand=Math.floor(Math.random()*100)+1;
    newlb.textContent= `Our love Percentage is 🤍🤍🤍 ${rand}% `;
}
