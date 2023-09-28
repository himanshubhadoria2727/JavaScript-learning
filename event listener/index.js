const box1 = document.getElementById("box1");
const heading = document.getElementById("heading");
const btn = document.getElementById("bnt");

btn.addEventListener("click", ()=>{
    box1.style.backgroundColor="red";
    btn.style.backgroundColor="purple";
})

box1.addEventListener("mouseover",()=>{
    heading.style.backgroundColor="blue"
})

box1.addEventListener("mouseout",func1=()=>{
    heading.style.backgroundColor=""
})

btn.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    document.body.style.backgroundColor="black";
    document.body.style.transition="all 0.5s"
})

box1.removeEventListener("mouseout", func1);