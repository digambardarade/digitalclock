function updateDigitalClock() {
    const clock = document.getElementById('digital-clock');
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12

    const timeString =
        `${hours.toString().padStart(2, '0')}:` +
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')} ${ampm}`;

       
    clock.textContent = timeString;
}

let timerInterval;

function upadateCountdownTimer(seconds, isClear = false) {

    const countdown = document.getElementById('countdown-timer');

    let timeLeft = seconds; // seconds

    isClear ? clearInterval(timerInterval):'';

     timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            countdown.textContent = "00:00:00";
        } else {
            countdown.textContent = `00:00:${timeLeft.toString().padStart(2, '0')}`;
            timeLeft--;
        }

        
    }, 1000);
}



setInterval(updateDigitalClock, 1000);
updateDigitalClock();
upadateCountdownTimer(0,true); // Initialize countdown timer display

document.getElementById('preset-timer-10-sec').addEventListener('click', function() {
  upadateCountdownTimer(10,true);
});
document.getElementById('preset-timer-30-sec').addEventListener('click', function() {
  upadateCountdownTimer(30,true);
});
document.getElementById('preset-timer-60-sec').addEventListener('click', function() {
  upadateCountdownTimer(60,true);
});
document.getElementById('timer-stop').addEventListener('click', function() {
  upadateCountdownTimer(0,true);
});
