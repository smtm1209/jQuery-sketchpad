const MAX_DIM = 100;
$(document).ready(function(){
	changeDim(16, 16);
});

function changeDim(width, height) {	
	/*if(isNaN(width) || isNaN(height)) {
		alert("ERROR: Invalid text input. Setting to 16x16.");
		width = 16; height = 16;
	}*/
	if(width > 50 || height > 50) {
		alert("ERROR: Specified window too large. Setting to 16x16.");
		width = 16; height = 16;
	}
	if(width <= 0 || height <= 0) {
		alert("ERROR: Specified window too small. Setting to 16x16.");
		width = 16; height = 16;
	}
	var dim = 0;
	if(width >= height) dim = Math.trunc(MAX_DIM / width);
	else dim = Math.trunc(MAX_DIM / height);
	for(var i = 0; i < height; i++) {
		var append_str = "<tr>";
		for(var j = 0; j < width; j++) {
			var td_str = '<td class="unvisited" style="padding: ' + dim * 2 + 'px"></td>';
			console.log(td_str);
			append_str = append_str + td_str;
		}	
		append_str = append_str + "</tr>";
		console.log(append_str);
		$("#sketchpad").append(append_str);
	}
}