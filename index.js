let startTime, updatedTime, difference, tInterval, running = false;
const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
});

document.getElementById('pause').addEventListener('click', () => {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(tInterval);
    running = false;
    display.textContent = '00:00:00';
    laps.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
    if (running) {
        const lapTime = display.textContent;
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        laps.appendChild(lapItem);
    }
});

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
    return ('0' + unit).length > 2 ? unit : '0' + unit;
}
