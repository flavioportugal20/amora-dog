
// listening for an event / one-time requests
// coming from the popup
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "revelar-video":
            revelar();
        break;
    }
    return true;
});


// send a message to the content script
var revelar = function() {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "revelar-video"});	
    });
}
