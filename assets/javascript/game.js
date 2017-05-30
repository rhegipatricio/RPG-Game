$(document).ready(function() {
	var audioElement = document.createElement ('audio');
	audioElement.setAttribut('src', )
}



//These are the Variables

var eren 	 = 100
var annie 	 = 120
var armored  = 150
var colossus = 180

//When Mysterious Titan is clicked/chosen, these functions take place
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

//When Female TItan is clicked/chosen, these functions take place
	$("#annie").on("click" function (){
		$("#characterCard").replaceWith("<h2> Your Character </h2>", $("#annie"));
		$("#annie").removeClass("characterCard").addClass("playerChoice");
		$("#enemyChoice").replaceWith($("#eren, #armored, #colossus"));
		$("#eren, #armored, #colossus").removeClass("characterCard").addClass("remainingOpponents");
		$("#annie").attr("id", "anniePlayer");
		$("#eren").attr("id", "erenOpponent");
		$("#armored").attr("id", "armoredOpponent");
		$("#colossus").attr("id", "colossusOpponent");
		opponentChoice(this.id);
	});

//When Armored Titan is clicked/chosen, these functions take place
	$("#armored").on("click" function(){
		$("#characterCard").replaceWith("<h2> Your Character </h2>", $("#armored"));
		$("#armored").removeClass("characterCard").addClass("playerChoice");
		$("#enemyChoice").replaceWith($("#eren, #annie, #colossus"));
		$("#eren, #annie, #colossus").removeClass("characterCard").addClass("remainingOpponents");
		$("#armored").attr("id", "armoredPlayer");
		$("#eren").attr("id", "erenOpponent");
		$("#annie").attr("id", "annieOpponent");
		$("#colossus").attr("id", "colossusOpponent");
		opponentChoice(this.id);
	});

//When Colossus Titan is clicked/chosen, these functions take place
	$("#colossus").on("click" function(){
		$("#characterCard").replaceWith("<h2>")
	});