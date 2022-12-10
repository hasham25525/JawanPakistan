
var sec = 60;
var userHour = document.getElementById('inputHour');
var userMin = document.getElementById('inputMins');
var displayMin = document.getElementById('displayMin');
var displaySec = document.getElementById('displaySec');
var displayHour = document.getElementById('displayHour');
var min = userMin.value;
var hour = userHour.value;
var interval;


function timer() {
    sec--;

    if (sec == 0) {
        sec = 60;
        min--;

        if (min == 0) {
            min = 60;
            hour--;
        }

    }
    displayHour.innerHTML = hour;
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;

}


function startTimer() {
    interval = setInterval(function () {
        timer()
    }, 1000)
}

function pauseTimer() {
    clearInterval(interval);

}

function resetTimer() {
    pauseTimer();
    min = 0;
    sec = 60;
    hour = 0;
    displayHour.innerHTML = hour;
    displaySec.innerHTML = sec;
    displayMin.innerHTML = min;
}
