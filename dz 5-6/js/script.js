var startBtn = document.querySelector('.start');
var resetBtn = document.querySelector('.reset');
var pauseBtn = document.querySelector('.pause');
var timerContainer = document.querySelector('#my_timer');
var flag = false;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var currentDate;
var timerSpot;
var delta;

function showPause() {
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
}

function showStart() {
    startBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
}

function showReset() {
    resetBtn.style.display = 'block';
}


//setting interval in timer
function interval() {
    timerSpot = setInterval(timerToHTML, 10);
}

//getting initial date
var initialDate;
function startWatch() {
    if (!flag) {
        initialDate = new Date().getTime();

    } else {
        initialDate = new Date().getTime();
        initialDate = initialDate - delta;
    }
}

//getting timer to HTML finally
function timerToHTML() {
    startTimer();
    timerContainer.innerHTML = minutes + ":" + seconds + ":" + milliseconds;
}

function startTimer() {
    currentDate = new Date();
    var date = new Date(currentDate - initialDate);
    delta = date;
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    milliseconds = date.getMilliseconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (milliseconds < 10) {
        milliseconds = "00" + milliseconds;
    } else if (milliseconds < 100) {
        milliseconds = "0" + milliseconds;
    }
}

function resetTimer() {
    flag = false;
    clearInterval(timerSpot);
    startBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    resetBtn.style.display = 'none';
    timerContainer.innerHTML = "00" + ":" + "00" + ":" + "000";
}


function pauseTimer() {
    startTimer();
    clearInterval(timerSpot);
    flag = true;
    timerSpot = 0;
}

startBtn.addEventListener('click', function () {
    showPause();
    showReset();
    startWatch();
    interval();
});
pauseBtn.addEventListener('click', function () {
    showStart();
    pauseTimer();
});
resetBtn.addEventListener('click', resetTimer);

