//PROMISE

// const arr = [];

// const fetchData = (arr) => {
//     return new Promise( (resolve, reject) =>{
//         setTimeout(() => {
//             arr.push({name:"gengis", id:"2121"});
//             if(arr.length===0){
//                 resolve("Data fetched");
//             }
//             else{
//                 reject("some issue occured")
//             }
//         }, 2000);
//     })
// };

// fetchData(arr)
// .then((message) => document.write(message))
// .catch((message) => document.write(message))

const url = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1");

// const fetchData = () =>{
//     fetch(url)
//     .then( (response) =>response.json())
//     .then((data) =>(h1.innerText=data.fact))
//     .catch((e) => console.log(e))
//     .finally(() => console.log("done"))
// }

const fetchData = async() => {
    const response = await fetch(url);
    const data = await response.json();
    h1.innerText=data.fact 
}

fetchData();