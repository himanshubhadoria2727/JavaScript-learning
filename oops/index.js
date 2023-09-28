// const a ={
//     name:"himanshu",
//     surname:"bhadoria",
//     print:()=>{
//         console.log("aja")
//     }
// }



// console.log(a);

// a.added="lund pe";

// console.log(a);

// we make variables private in class so it cant be accessed from outside the class

// class Myclasss{
//     #a=10;
//     #b=20;

//     constructor(val1, val2){
//         this.a= val1;
//         this.b=val2;   
//     }

//     get Data(){
//         return this.#a;
//     }

//     print(){
//         console.log("hey");
//     }
// }

// const obj= new Myclasss(20,30);

// obj
// console.log(obj.Data);


// CALL BACK
// function sum(a,b, callback){
//     const result = a+b;
//    callback(result);
// }

// function displaySum(result){
    //     const h1 = document.querySelector("h1");
    //     h1.innerText=result;
// }

// sum(10,20,displaySum);

// const arr = [1,2,3,4,5,6];


// function dummy(arr=[], callback){

//     const ans  = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = callback(arr[i]);
//         ans.push(element);
//     }
//     const h1 = document.querySelector("h1");
//     h1.innerText=ans;
// }

// function addition(a){
//     return a+100;
// }
// dummy(arr, addition)
 
const gameList = [];
const game= {};

const fetchData = (callback)=>{
    setTimeout((callback) => {
        gameList.push(
            {
                name: "Tekken",
                id: "12343"
            },

            {
                name: "Valorant",
                id: "12344",
            },

            {
                name: "Mortal kombat",
                id: "12346",
            },
        )

        setTimeout((callback) => {
          game.id= "djidiosa";
          game.name= "mario" ;
            console.log(game);
            callback();
        }, 2000, callback);

        console.log("after fetching"); 
        
    }, 2000, callback); 
};





const displayGame = ()=>{
    setTimeout(() => {
        for (let i = 0; i < gameList.length; i++) {
            const p = document.createElement("p");
            p.innerText = gameList[i].name;
            document.body.append(p);       
        }
      console.log("after display");
    }, 1000);
}

fetchData(displayGame);

