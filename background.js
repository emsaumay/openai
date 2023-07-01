let timer = null;
let startTime = null;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ time: 0 });
});

chrome.action.onClicked.addListener((tab) => {
  chrome.action.setPopup({ tabId: tab.id, popup: 'popup.html' });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'timerStarted') {
    startTime = Date.now();
    timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      chrome.storage.sync.set({ time: elapsedTime });
    }, 1000);
  } else if (request.message === 'timerStopped') {
    clearInterval(timer);
    timer = null;
  } else if (request.message === 'timerReset') {
    clearInterval(timer);
    timer = null;
    startTime = null;
    chrome.storage.sync.set({ time: 0 });
  }
});