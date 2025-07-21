let gamesequence=[];
let usersequence=[];
let button=["A","B","C","D"];
let started=false;
let level =0;
let hs=0;
let h2 =document.querySelector("h2");
document.addEventListener("keypress", function() {
    if(started==false)
    {
        console.log("game started");
        started=true;
        levelup();
    }
});
 function levelup(){
    usersequence=[];
    level++; 
    hs=Math.max(hs,level);
    h2.innerText=`Level ${level}`;
    let random = Math.floor(Math.random()*3);
    let rancolor=button[random];
    gamesequence.push(rancolor);
    console.log("gamesequence",gamesequence);
    let randbtn =document.querySelector(`.${rancolor}`);
    btnFlash(randbtn);

}
function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },200);
}
function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },200);
}
function checkans(idx)
{
    if(usersequence[idx]==gamesequence[idx])
    {
        if(usersequence.length==gamesequence.length)
    {
        setTimeout(levelup,1000);
    }
    }
    else
    {
        h2.innerHTML=`Game Over! Your score was <b>${level-1}</b><br> Press any key to restart the game`;
        h2.style.color="red";
        let highs = document.createElement("h2");
        highs.innerHTML=`Highest Score ${hs-1}`;
        h2.appendChild(highs);
        reset();
        redscreen();
    }
}
function reset()
{
    started=false;
    gamesequence=[];
    usersequence=[];
    level=0;
}
function btnPress() 
{
    let btn=this;
    userFlash(btn);
    let usercolor = btn.getAttribute("id");
    usersequence.push(usercolor);
    console.log("usersequence",usersequence);
    checkans(usersequence.length-1);

}
let allbtns = document.querySelectorAll(".btn");
for(bt of allbtns)
{
    bt.addEventListener("click",btnPress);
}
function redscreen()
{
    let b = document.querySelector("body");
    b.classList.add("red");
    setTimeout(function() {
        b.classList.remove("red");
    },100);
}