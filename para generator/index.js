const input= document.getElementById("numberOfWords");
const container = document.querySelector(".container");

const generateWord= (n)=>{
    let text ="";
    const letters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0; i<n; i++)//here n is the RandomNumber giver as parameter in the below function
    {
        const random = (Math.random()*25).toFixed(0);
        text+=letters[random];
    }
    return text;
}


let numberOfWords;
const generatePara= ()=>{
    let data = " ";
    numberOfWords = Number(input.value);

    const para = document.createElement("p");// creating elements through DOM

     // Generating random words of max to max 15 length

     //run a for loop for generating the number of words entered by the user
    for(let i=0; i<numberOfWords;i++){
        const RandomNumber = (Math.random()*15).toFixed(0);
        // console.log(RandomNumber);
        data+= generateWord(RandomNumber);
        data+= " ";
        
    }

    para.innerHTML= data;// changing the data in the html file 

    para.setAttribute("class","paras");// setting attributes of new paras
    
    container.append(para);// apprending paras one after another
}