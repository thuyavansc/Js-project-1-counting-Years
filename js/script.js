// press Alt and click each line belove
//ஒவ்வொரு element இற்கும் ஒரு id குடுத்து அந்த id ஐ வைத்து element ஐ get செய்து அதற்கு உள்ளே அந்த Data ஐ போடபோகிறோம்.
//This is what called DOM
// To do that we are storeing the element in a variable
// then we are going to change the data using innerHtml

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");



function updateTime(){
    const CurrentYear = new Date().getFullYear();
    const newYear = new Date(`January 1 ${CurrentYear+1} 00:00:00`);
    const currentDate = new Date();

    const diff = newYear - currentDate;

    const noDay = Math.floor(diff/1000/60/60/24);
    
    const noHours = Math.floor((diff/1000/60/60)%24);
    
    const noMin = Math.floor((diff/1000/60)%60);

    const noSec = Math.floor((diff/1000)%60);

    /*
    days.innerHTML = noDay;
    hours.innerHTML = noHours;
    minutes.innerHTML = noMin;
    seconds.innerHTML = noSec;
    */

    //We are going to use condiotional operator to get double digit 
    days.innerHTML = noDay < 10 ? "0" + noDay : noDay;
    hours.innerHTML = noHours < 10 ? "0" + noHours : noHours;
    minutes.innerHTML = noMin < 10 ? "0" + noMin : noMin;
    seconds.innerHTML = noSec < 10 ? "0" + noSec : noSec;
    
    //console.log(noDay + " " + noHours + " " + noMin + " " + noSec);

}

//updateTime();
//Tocall this fucntion with particular time inteerval pass the function name 
//
setInterval(updateTime, 1000);




/*
const CurrentYear = new Date().getFullYear();
console.log(CurrentYear);

const newYear = new Date(`January 1 ${CurrentYear+1} 00:00:00`);
// new Year = currentYear +1;

console.log(newYear);

const currentDate = new Date();
console.log(currentDate);

const diff = newYear - currentDate;
console.log(diff);

//here we will be get days with decimal point therefore we needd to avoid that decimal point 
console.log('Here to find Total days = ', diff/1000/60/60/24);

const noDay = Math.floor(diff/1000/60/60/24);
console.log('NoDay = ', noDay);
// math.floor --> take the interger value and will avoid the decimal points

//from that balance decimal point we need to calculate the #hours , #minutes, # seconds
const noHours = Math.floor((diff/1000/60/60)%24);
console.log('NoHours = ', noHours);

const noMin = Math.floor((diff/1000/60)%60);
console.log('NoMin = ', noMin);

const noSec = Math.floor((diff/1000)%60);
console.log('NoSec = ', noSec);

*/



// in javascript all date are stored in miili seconds
/*
1000ms = 1s
60s = 1m
60m = 1hr
24hur = 1day

milliseconds to days
6487332147 = 75.0848628125

*/