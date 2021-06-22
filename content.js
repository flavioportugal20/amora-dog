
chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
    switch(message.type) {
        case "revelar-video":
            var divs = document.querySelectorAll("div");
			var corpo_html = document.querySelector("html");
			var learning_container = corpo_html.querySelector("#learning-container");			
			var container = learning_container.querySelector(".container");			
			var media_control = learning_container.querySelector(".media-control");
			if(media_control.innerHTML != ""){
				var frame_video = learning_container.querySelector("iframe");
				var link_video = frame_video.src;
				link_video = link_video.replace("controls=0", "controls=1");
				frame_video.src = link_video;
				media_control.innerHTML = "";				
				container.innerHTML = frame_video.outerHTML;	
				alert("Vídeo liberado!\nMude a qualidade do vídeo e depois recarregue a página apertando F5.\nÉ necessário recarregar a página para computar o progresso!")				
			}else{
				document.location.reload();
			}
			
        break;
    }
	
});