```javascript
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'LOAD_COMMENTS') {
    const url = new URL(request.url);
    chrome.runtime.sendMessage({message: 'LOAD_COMMENTS', url: url.href}, response => {
      if (response.comments) {
        response.comments.forEach(comment => {
          const commentElement = document.createElement('div');
          commentElement.textContent = comment.text;
          document.body.appendChild(commentElement);
        });
      }
    });
  }
});
```