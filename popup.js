let timerInterval;

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

function startTimer() {
    chrome.runtime.sendMessage({timerStarted: true});
    timerInterval = setInterval(() => {
        chrome.storage.sync.get(['time'], function(result) {
            let time = result.time;
            time++;
            chrome.storage.sync.set({time: time});
            document.getElementById('timerDisplay').innerText = time;
        });
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    chrome.runtime.sendMessage({timerStopped: true});
}

function resetTimer() {
    clearInterval(timerInterval);
    chrome.storage.sync.set({time: 0});
    document.getElementById('timerDisplay').innerText = '0';
    chrome.runtime.sendMessage({timerReset: true});
}

window.onload = function() {
    chrome.storage.sync.get(['time'], function(result) {
        document.getElementById('timerDisplay').innerText = result.time;
    });
}