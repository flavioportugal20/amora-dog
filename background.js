//recebe mensagem de popup.js
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "revelar-video":
            revelar();
        break;
    }
    return true;
});


//envia mensagem para content.js
var revelar = function() {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "revelar-video"});	
    });
}
