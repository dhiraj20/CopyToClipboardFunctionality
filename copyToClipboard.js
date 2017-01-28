(function(){

	var shareableLinkButton = document.getElementById('shareable-link-button');

	shareableLinkButton.onclick = function(){
		var container = document.getElementsByClassName('copy-to-clipboard-container')[0];
		var inputElement = document.getElementById('shareable-link');
		
		container.style.display = 'block';
		inputElement.value = "Hello, there";

		var clipboard = new Clipboard('#copy-to-clipboard-button');

		clipboard.on('success', function(e){
			var tooltiptextEle = document.getElementsByClassName('tooltiptext')[0];
			tooltiptextEle.innerHTML = 'Copied!!';
			
			document.getElementsByClassName('tooltip')[0].addEventListener('mouseleave', function(){
				tooltiptextEle.innerHTML = 'Copy to clipboard';
			})
		})
	}
})()