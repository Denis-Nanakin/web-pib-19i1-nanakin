let time = 0;
let interval = 0;

function startPause() {
    if(interval === 0)
        start();
    else
        pause();
}

function start() {
    interval = setInterval(timer, 100);
    document.getElementById('startPause').innerHTML = 'PAUSE';
}

function pause() {
    clearInterval(interval);
    interval = 0;
    document.getElementById('startPause').innerHTML = 'RESUME';
}

function reset() {
    pause();
    time = 0;
    document.getElementById('startPause').innerHTML = 'START';
    document.getElementById('output').innerHTML = '00:00:00';
}

function timer() {
    time++;
    let mins = Math.floor(time/10/60);
    let secs = Math.floor(time/10 % 60);
    let hours = Math.floor(time/10/60/60);
    let tenths = time % 10;
    if (mins < 10)
        mins = '0' + mins;
    if (secs < 10)
        secs = '0'+ secs;            
    document.getElementById('output').innerHTML = 
        hours + ':' + mins + ':' + secs+ ':'+tenths+ '0';
}