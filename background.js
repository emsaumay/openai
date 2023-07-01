```javascript
import { saveComment, loadComments } from './storage.js';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'SAVE_COMMENT') {
    saveComment(request.comment);
  } else if (request.type === 'LOAD_COMMENTS') {
    const comments = loadComments(request.url);
    sendResponse({ comments });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, { type: 'LOAD_COMMENTS', url: tab.url });
  }
});
```