
let dial1 = document.getElementById("dial1");
let dial2 = document.getElementById("dial2");
let dial3 = document.getElementById("dial3");
let day = document.getElementById("day");

window.onload = function getTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);
    dial1.innerHTML = hour;
    dial2.innerHTML = min;
    dial3.innerHTML = sec;
    day.innerHTML = today.toDateString()
    setTimeout(function (){getTime()}, 1000);
}

function checkTime(i){
    if(i<10){
        i = "0"+i;
    }
    return i;
}