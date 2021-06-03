chrome.runtime.onMessage.addListener(
    function(request, sender) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello")
        setTimeout(function() {
            location.reload();
        }, 5000);
    }
  );
