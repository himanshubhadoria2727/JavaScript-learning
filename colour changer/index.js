const zodiac = document.getElementById("zodiac");

const body=document.body;

const changeBackground=()=>{
    switch (zodiac.value){
        case "aries":
            body.style.backgroundColor="red";
        break;

        case "cancer":
            body.style.backgroundColor="blue";
        break;

        case "capricorn":
            body.style.backgroundColor="green";
        break;

        case "taurus":
            body.style.backgroundColor="yellow";
        break;
        
        default:
            body.style.backgroundColor = "#fff";
            break;

    }
}