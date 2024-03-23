function changeMode(){
    const body = document.body;

    if(body.classList.contains('light')){
        body.classList.remove('light');
    }else{
        body.classList.add('light');
    }
}

document.getElementById('mode').addEventListener('click',changeMode);


const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

const displayTime = document.querySelector('.display-time-and-date h2');
const displayDate = document.querySelector('.display-time-and-date h4');

const months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

const days = ["Sunday", "Monday", "Tuesday","Thursday", "Friday", "Saturday"];

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function setTime(){
    const time = new Date;

    const hour = time.getHours()%12;
    const minute = time.getMinutes();
    const second = time.getSeconds();

    
    secondEl.style.transform= `translate(-50%,-100%) rotate(${scale(second,0,60,0,360)}deg)`;
    hourEl.style.transform= `translate(-50%,-100%) rotate(${scale(hour,0,12,0,360)}deg)`;
    minuteEl.style.transform= `translate(-50%,-100%) rotate(${scale(minute,0,60,0,360)}deg)`;

    displayTime.innerHTML = `${setHour(hour)} : ${setMinte(minute)} <span><div>PM</div><div>${setMinte(second)}</div></span>`
    displayDate.innerHTML = `${days[time.getDay()-1]} <span>${time.getDate()}</span>`
    


}
setTime();
setInterval(setTime, 1000);

function setHour(hour){
    if(hour===0){
        return 12;
    }else if(hour<10){
        return '0'+hour;
    }else{
        return hour;
    }
}
function setMinte(minute){
    if(minute===0){
        return '00';
    }else if(minute<10){
        return '0'+minute;
    }else{
        return minute;
    }
}