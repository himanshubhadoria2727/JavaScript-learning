// let x = "hello world";

// let heading = document.getElementById("myHeading");

// heading.innerText = x;
// heading.style.backgroundColor = "red";
// heading.style.color = "white"

// let me = Number(prompt("enter your number"));

// console.log(typeof me);
// if (me === 10) {
//     console.log("heyy");
// }

// else if (me === 30) {
//     console.log("bye");
// }

// else {
//     console.log("douchebag");
// }
//let arr = [1,2,3,4,5,6,7,8,9];

// let arr2 = arr.slice(1,4);

// console.log(arr2);

// let arr = [];
// console.log(arr.length)
// for (let i = 0; i < 10; i++) {
//     arr.push(i + 1);
// }
// console.log(arr);

// console.log(arr.length);

// const myObj= {
//     name: "Himanshu",
//     surname: "Bhadoria",
//     height: "178 cm",
//     weight: "69 kg"
// }

// myObj.DOB = "05/08/2001"

// console.log(myObj);


// function totalOfArray(arr=[]){
//     console.log(arr);
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//        sum=sum+arr[i];
//     }
//     return sum;
// }

// console.log(totalOfArray([1,2,3,4,5,6,7]));


//DOM MANIPULATION


// const fake= document.getElementsByTagName("span");

// console.log(fake[0]);

// const mybtn= document.getElementById("btn");

// mybtn.style.backgroundColor="black";
// mybtn.style.color="white";
// mybtn.style.padding="20px 25px";
// mybtn.style.margin="20px 25px";
// mybtn.style.cursor="pointer";

// console.log(mybtn);

// const mybtns = document.querySelectorAll("button");
// mybtn.onclick= bringMeHeading;
// mybtns[1].onclick = deleteHeading;
// function bringMeHeading(){
//     const h2= document.createElement("h2");
//     h2.innerText= "heyayeyay";
//     document.body.prepend(h2);
// }

// function deleteHeading(){
//     const h2= document.querySelector("h2");
//     h2.remove();   
// }


const arr = [2,4,7,9,10];

// const result = arr.find((value, index)=>{
//     if(value>7){
//         return value;
//     }
// }); RETURNS ONLY FIND GREATER OR LESSER VALUE

// const result = arr.filter((value, index)=>{
//     if(value>2){
//         return value;
//     }
// });  RETURNS NEW ARRAY WITH FILTERED VALUES

//EVERY FUNCTION RETURNS BOOLEAN VALUE
// const result= arr.every((value,index)=>{
//     return value>1;
// }
// );

// const result= arr.some((value,index)=>{
//     return value>7;
// }
// ); //RETURNS BOOLEAN VALUE IF ANY IS TRUE OR FALSE


//LOOPS
//FOR OF
// for(let value of arr){
//     value+=3;
//     console.log(value);
// }

//FOR EACH
// let totalSum=0;
// arr.forEach((value,index) =>{
//     totalSum+=value;
//     console.log(value);
// });

// MAP

// const result=arr.map((value,index)=>{
//     return value+10;
// });

// console.log(result); MAP RETURNS NEW ARRAY ;

// REDUCE
// (Starts indexing from 1st index so we need previous index)
const result=arr.reduce((total,value,index)=>{
    return total+value ;
});

console.log(result);