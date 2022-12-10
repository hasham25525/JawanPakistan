
var sec = 60;

var displayMin = document.getElementById('displayMin');
var displaySec = document.getElementById('displaySec');
var displayHour = document.getElementById('displayHour');

var interval;


function timer() {

    var userHour = document.getElementById('inputHour');
    var userMin = document.getElementById('inputMins');
    var min = userMin.value;
    var hour = userHour.value;
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

    if (min == 0 && sec == 0) {
        clearInterval(interval);
    }
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
