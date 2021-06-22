window.onload = function() {
    document.getElementById("button").onclick = function() {
        //envia mensagem para background.js
        chrome.extension.sendMessage({
            type: "revelar-video"
        });
    }
}