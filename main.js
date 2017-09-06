var key = document.getElementsByClassName('key');
for (var i = 0; i < key.length; i++) {
	key[i].addEventListener("click", function(){
		console.log(this.getAttribute("data-key"))
	})
}

var notesArray = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
var stringNotes = ["E", "A", "D", "G", "B", "E"]
var reverseString = stringNotes.reverse()
var neck= 12;

for (var i = 0; i < reverseString.length; i++) {
	console.log("this is the guitar string" + reverseString[i])

	var location1 = notesArray.indexOf(reverseString[i])
	// console.log(location1)
 var counter = 0;
	for (var j = location1; j < neck; j++) {
		counter++;

		console.log(notesArray[j])
				if (j == notesArray.length - 1 ){
			console.log("done with neck")
			j = -1; 

		}
		if (counter == neck){
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
