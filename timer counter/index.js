const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1")
const counterTimer = document.querySelector(".counterTimer")

const second = 1000;
const minute = 60*second;
const hour = 60*minute;
const day = 24*hour;


function validate(day, month, year){
    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    // Validate day and month
    if (day >= 1 && day <= 31 && month >= 1 && month <= 12 ) {
        return true; // Input is valid
    } else {
        return false; // Input is invalid
    }
}

const timerFunction = () =>{

    const now = new Date();
    let dd = String(now.getDate()).padStart(2, "0");
    let mm = String(now.getMonth()+1).padStart(2, "0");
    let yyyy = String(now.getFullYear()).padStart(2, "0");
    console.log(yyyy);

    const enterDay = prompt("Enter Day").padStart(2, "0");
    const enterMonth = prompt("Enter month").padStart(2, "0");
    const enterYear = prompt("Enter year").padStart(2, "0");

    if (validate(enterDay, enterMonth)) {
        console.log("Input is valid.");
        // Proceed with your timer logic here
    }
    
    else {
        counterTimer.style.display = "none";
        alert("Invalid input. Please enter a valid day (1-31) and month (1-12).");
    }


    const targetDate = (`${enterDay}/${enterMonth}/${enterYear}`)
    const intervalId = setInterval(() => {
        const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();

    const difference = timer-today;
    const leftDay = Math.floor(difference/day);
    const leftHour = Math.floor((difference%day)/hour);
    const leftMinute = Math.floor((difference%hour)/minute);
    const leftSecond = Math.floor((difference%minute)/second);

    daysElement.innerText = leftDay;
    hoursElement.innerText =  leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;

    if(difference<0)
    {
        counterTimer.style.display = "none";
        heading.innerText= "Time is up"
        clearInterval(intervalId);
    }
        console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`)
    }, 0);
}

timerFunction();
