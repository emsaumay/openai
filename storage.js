```javascript
let comments = [];

function Comment(url, timestamp, text) {
    this.url = url;
    this.timestamp = timestamp;
    this.text = text;
}

function saveComment(comment) {
    comments.push(comment);
    chrome.storage.sync.set({comments: comments}, function() {
        console.log('Comment saved');
    });
}

function loadComments(url) {
    chrome.storage.sync.get(['comments'], function(result) {
        comments = result.comments.filter(comment => comment.url === url);
    });
}
```