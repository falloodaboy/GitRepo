var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("body")





function changeBody(col1, col2){
	 body.style.background = "linear-gradient(to right, "+col1+" , "+col2+")";
	 // h3.innerHTML = "New Background- Left " + col1 + " Right:" + col2;
	h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", function(){

		changeBody(color1.value, color2.value);
});
color2.addEventListener("input", function(){
		changeBody(color1.value, color2.value);

});