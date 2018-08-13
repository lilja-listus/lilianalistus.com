var protoFu = [	"*ükte",
				"*kakta",
				"*kolme"]

var answers = ["one",
				"two",
				"three"]
var boxes = document.querySelectorAll(".boxed");
var yourAnswer = document.querySelectorAll(".yourAnswer");
var word = document.getElementById("word");

	var pickedWord = protoFu[1];
	var	pickedAnswer = answers[1];

	word.textContent = pickedWord;
	//add initial colors to squares
//adding text to squares
for(var j = 0; j < 3; j++){
	yourAnswer[j].textContent = answers[j];
}



for (var i = 0; i < protoFu.length; i++){	

	
	yourAnswer.textContent = answers[i];

	//click listeners
	boxes[i].addEventListener("click", function(){
		//grab color to picked square
		var clickedWord = this.yourAnswer.textContent;		
		
		if (clickedWord === pickedAnswer){
			alert("correct");
		} else {
			alert("wrong");
		}
	})
}
