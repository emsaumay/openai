// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    timer: 60
  }, function(items) {
    document.getElementById('timeInput').value = items.timer;
  });
}

// Saves options to chrome.storage.sync.
function saveOptions() {
  var timer = document.getElementById('timeInput').value;
  chrome.storage.sync.set({
    timer: timer
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores form state when the DOM loads.
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('saveButton').addEventListener('click', saveOptions);