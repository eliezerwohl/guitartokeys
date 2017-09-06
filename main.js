var key = document.getElementsByClassName('key');
var notesArray = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
var stringNotes = ["E", "A", "D", "G", "B", "E"].reverse()
//reversed because in order to append it to the page correctly
//must be done in reverse order
var neck = 22;
var step = 0
function guitarRender(tuning) {
  for (var i = 0; i < stringNotes.length; i++) {
		var counter = 0;
    for (var j = notesArray.indexOf(stringNotes[i]) - tuning; j < neck; j++) {
      if (counter == 1 || counter == 12) {
        var span = document.createElement("span");
        if (counter == 1 ){ span.innerText = "[]"; }
        else { (span.innerText = "||"); }
        guitar.appendChild(span);
      }
      counter++;
      var button = document.createElement("button");
      button.className = "fret";
      button.onclick = function() {
          fretClick(this.innerText);
      }
      //fixes downtuning error
      if (j < 0) {
          j = 11;
      }
      var node = document.createTextNode(notesArray[j]);
      button.appendChild(node);
      guitar.appendChild(button);
      if (j == notesArray.length - 1) {
        j = -1;
      }
      if (counter == neck) {
	      var br = document.createElement("br");
	      guitar.appendChild(br);
	      break;
      }
    }
  }
}
guitarRender(0);
function fretClick(note) {
    for (var i = 0; i < key.length; i++) {
        if (key[i].getAttribute("data-key") === note) {
            key[i].className += " played";
        } else {
            key[i].classList.remove("played");
        }
    }
}
document.getElementById('options').addEventListener('click', function() {
    guitar.innerHTML = null;
    guitarRender(document.getElementById("tuning").value);
});