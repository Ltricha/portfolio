var btnswitch = document.getElementById("btn-switch");
var main = document.getElementsByClassName("main");

var viewx = false;

btnswitch.addEventListener("click", switchView);



function switchView(){
	
	if(viewx == false){
		viewx = true;
	} else{
		viewx = false;
	}
	
	console.log(viewx);
	
	if(viewx){
		alert("Horizontale weergave");
		
		for(var i = 0; i < main.length; i++){
			console.log(main[i]);
			
			addClass(main[i], "horizontal");
			
		}
		
	} else{
		alert("Verticale weergave");
		
		for(var i = 0; i < main.length; i++){
			console.log(main[i]);
			
			removeClass(main[i], "horizontal");
		}
	}
}


//adds class
function addClass(element, name){
	var i, arr;
	
	arr = element.className.split(" ");
	
	if(arr.indexOf(name) == -1){
		element.className += " " + name;
	}
}

//removes class
function removeClass(element, name){
	var i, arr;
	
	arr = element.className.split(" ");
	
		if(arr.indexOf(name) > -1){
			
		element.className = element.className.replace(" " + name, "");
		
	}
}