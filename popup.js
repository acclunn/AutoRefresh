// activates function after the page loads
document.addEventListener('DOMContentLoaded', function() {
    // create a variable for the button
    var timerButton = document.getElementById('setTimer');
    // listen for the button to be clicked
    timerButton.addEventListener('click', function() {
        // grab the active tab
        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            // pass a message to the tab
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"})
        });
    }, false);
}, false);
