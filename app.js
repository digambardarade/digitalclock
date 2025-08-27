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

        console.log(timeString);

    clock.textContent = timeString;
}

function upadateCountdownTimer(seconds) {
    const countdown = document.getElementById('countdown-timer');
    let timeLeft = seconds; // seconds

    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            countdown.textContent = "Time's up!";
        } else {
            countdown.textContent = `Time left: ${timeLeft} seconds`;
            timeLeft--;
        }

        
    }, 1000);
}

setInterval(updateDigitalClock, 1000);
updateDigitalClock();
upadateCountdownTimer(60);