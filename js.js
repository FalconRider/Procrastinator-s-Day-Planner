


function planit(){
	
	var myPictures = [
	"Images/Monday.png",
	"Images/Tuesday.png",
	"Images/Wednesday.png",
	"Images/Thursday.png",
	"Images/Friday.png",
	"Images/Saturday.png",
	"Images/Sunday.png",
	
	];

	

var randomNum = Math.floor((Math.random()*myPictures.length));

document.getElementById("pic").src = myPictures[randomNum];

}
	
