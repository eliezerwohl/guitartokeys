var key = document.getElementsByClassName('key');
for (var i = 0; i < key.length; i++) {
	key[i].addEventListener("click", function(){
		console.log(this.getAttribute("data-key"))
	})
}

var step = 0
var notesArray = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
var stringNotes = ["E", "A", "D", "G", "B", "E"]
var reverseString = stringNotes.reverse()
var neck= 12;

for (var i = 0; i < reverseString.length; i++) {
	console.log("this is the guitar string" + reverseString[i])

	var startLocation = notesArray.indexOf(reverseString[i])
	// console.log(startLocation)
 var counter = 0;
for (var j = startLocation; j < neck; j++) {
		counter++;
		console.log(notesArray[j])
		var button = document.createElement("button");
		button.className="fret";
		button.onclick= function(){
			console.log(this.innerText)
		}
		var node = document.createTextNode(notesArray[j]);
		button.appendChild(node);
		guitar.appendChild(button)
			if (j == notesArray.length - 1 ){
			j = -1; 

		}
		if (counter == neck){
			var br = document.createElement("br");
			guitar.appendChild(br)
			break;
		}
	}
}

// for (var i = 0; i < notesArray.length; i++) {
// 	console.log(notesArray[i])
// }

// var guitar = document.getElementById('guitar')
// theKid = document.createElement("button");
// theKid.innerHTML = 'Are we there yet?';
// guitar.appendChild(theKid)
