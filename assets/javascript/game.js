$(document).ready(function() {
	var audioElement = document.createElement ('audio');
	audioElement.setAttribut('src', )
}



//These are the Variables

var eren 	 = 100
var annie 	 = 120
var armored  = 150
var colossus = 180

//When Mysterious Titan is clicked, these functions take place
	$("#eren").on("click" function (){
		$("#characterCard").replaceWith("<h2> Your Character </h2>", $("#eren"));
		$("#eren").removeClass("characterCard").addClass("playerChoice");
		$("#enemyChoice").replaceWith($("#annie, #armored, #colossus"));
		$("#annie, #armored, #colossus").removeClass("characterCard").addClass("remainingOpponents");
		$("#eren").attr("id", "erenPlayer");
		$("#annie").attr("id", "annieOpponent");
		$("#armored").attr("id", "armoredOpponent");
		$("#colossus").attr("id", "colossusOpponent");
		opponentChoice(this.id);
	});

//When Female TItan is clicked, these functions take place
	$("#annie").on("click" function (){

	});