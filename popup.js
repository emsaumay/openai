```javascript
let comments = [];

document.getElementById('saveButton').addEventListener('click', () => {
    let commentText = document.getElementById('commentInput').value;
    let comment = {
        url: window.location.href,
        timestamp: new Date().toISOString(),
        text: commentText
    };
    chrome.runtime.sendMessage({type: 'SAVE_COMMENT', comment: comment});
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'LOAD_COMMENTS') {
        comments = request.comments;
        displayComments();
    }
});

function displayComments() {
    let commentList = document.getElementById('commentList');
    commentList.innerHTML = '';
    comments.forEach(comment => {
        addComment(comment);
    });
}

function addComment(comment) {
    let commentList = document.getElementById('commentList');
    let commentElement = document.createElement('li');
    commentElement.textContent = `${comment.timestamp}: ${comment.text}`;
    commentList.appendChild(commentElement);
}

chrome.runtime.sendMessage({type: 'LOAD_COMMENTS', url: window.location.href});
```