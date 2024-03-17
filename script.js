const URL="https://www.boredapi.com/api/activity";
let msg=document.querySelector(".msg");
let btn=document.querySelector("button")

btn.addEventListener("click",(evt)=>{
    bored();
})
const bored = async () => {
let response= await fetch(URL);
console.log(response);
let data = await response.json();
let pr=data.activity;
msg.innerText=`${pr}`;
}