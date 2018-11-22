//Maak variabelen aan.
var myImages = document.getElementsByClassName("myImages");
var myModal = document.getElementById("myModal");
var modalImage = document.getElementById("modalImage");
var mySpan = document.getElementsByClassName("close")[0];
var myText = document.getElementById("myText");
var logIn = document.getElementById("logIn");
var inloggen = document.getElementById("inloggen");
var modal_header = document.getElementById("modal_header");


console.log(myImages.length);

for(i=0; i < myImages.length; i++){
			myImages[i].addEventListener("click", function(){
			inloggen.style.display = "none";
			modalImage.style.display = "inline";
			console.log(this.src);
			myModal.style.display = "block";
			modalImage.src = this.src;
			myText.style.display = "block";
			if(this.name == "Wolf"){
				modal_header.innerHTML = "Wolf";
			}
			if(this.name == "Vos"){
				modal_header.innerHTML = "Vos";
			}
			if(this.name == "Puppy"){
				modal_header.innerHTML = "Puppy";
			}
		
			
		})
}

logIn.addEventListener("click", function(){
	modalImage.style.display = "none";
	myModal.style.display = "block";
	inloggen.style.display = "block";
	myText.style.display = "none";
	modal_header.innerHTML = "Log in";
	
})




window.addEventListener("click", function(){
	if(event.target == myModal || event.target == mySpan){
		myModal.style.display = "none";
	}
})

