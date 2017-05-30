$(document).ready(function() {

	

//These are the Variables

var eren 	 = document.getElementByID("eren")
var annie 	 = document.getElementByID("annie")
var armored  = document.getElementByID("armored")
var colossus = document.getElementByID("colossus")


//When Mysterious Titan is clicked/chosen, these functions take place
	$("#eren").on("click" function (){
		$("#characterCard").replaceWith("<h2> Your Character </h2>", $("#eren"));
		$("#eren").removeClass("characterCard").addClass("playerChoice");
		$("#opponentChoice").replaceWith($("#annie, #armored, #colossus"));
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
		$("#opponentChoice").replaceWith($("#eren, #armored, #colossus"));
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
		$("#opponentChoice").replaceWith($("#eren, #annie, #colossus"));
		$("#eren, #annie, #colossus").removeClass("characterCard").addClass("remainingOpponents");
		$("#armored").attr("id", "armoredPlayer");
		$("#eren").attr("id", "erenOpponent");
		$("#annie").attr("id", "annieOpponent");
		$("#colossus").attr("id", "colossusOpponent");
		opponentChoice(this.id);
	});

//When Colossus Titan is clicked/chosen, these functions take place
	$("#colossus").on("click" function(){
		$("#characterCard").replaceWith("<h2> Your Character", $("#colossus"));
		$("#colossus").removeClass("characterCard").addClass("playerChoice");
		$("#opponentChoice").replaceWith($("#eren, #annie, #armored"));
		$("#eren, #annie, #armored").removeClass("characterCard").addClass("remainingOpponents");
		$("#colossus").attr("id", "colossusPlayer");
		$("#eren").attr("id", "erenOpponent");
		$("#annie").attr("id", "annieOpponent");
		$("#armored").attr("id", "armoredOpponent");
		opponentChoice(this.id);
	});

//Function depending on which enemy is chosen
	function opponentChoice(result) {
				//Mysterious Titan selected
		if (result == "erenPlayer"){
				//Female Titan
				$("#annieOpponent").on("click", function(){
					$("#currentTitan").replaceWith($("#annieOpponent"));
					$("#annieOpponent").removeClass("remainingOpponents").addClass("opponentChoice");
			});
				//Armored Titan
				$("#armoredOpponent").on("click", function(){
					$("#currentTitan").replaceWith($("#armoredOpponent"));
					$("#armoredOpponent").removeClass("remainingOpponent").addClass("opponentChoice");
			});
				//Colossus Titan
				$("#colossusOpponent").on("click", function(){
					$("#currentTitan").replaceWith($("#colossusOpponent"));
					$("#colossusOpponent").removeClass("remainingOpponent").addClass("opponentChoice");
			});
	}

//Function resulting in choice
	else if(result == "anniePlayer"){
				$("#erenOpponent").on("click", function(){
					$("#currentTitan").replaceWith($("#erenOpponent"));
					$("#erenOpponent").removeClass("remainingOpponents").addClass("opponentChoice");
			});
				$("#armoredOpponent").on("click", function(){
					$("#currentTitan").replaceWith($("#armoredOpponent"));
					$("#armoredOpponent").removeClass("remainingOpponents").addClass("opponentChoice");
			});
				$("#colossusOpponent").on("click",function(){
					$("#currentTitan").replaceWith($("#colossusOpponent"));
					$("#colossusOpponent").removeClass("remainingOpponents").addClass("opponentChoice");
			});
	}
	
	else if(result == "armoredPlayer"){
				$("#erenOpponent").on("click", function(){
					$("#currentTitan").replaceWith($("#erenOpponent"));
					$("#erenOpponent").removeClass("remainingOpponents").addClass("opponentChoice");
			});
				$("#annieOpponent").on("click", function(){
					$("#currentTitan").replaceWith($("#annieOpponent"));
					$("#annieOpponent").removeClass("remainingOpponents").addClass("opponentChoice");
			});	
				$("#colossusOpponent").on("click", function(){
					$("#currentTitan").replaceWith($("#colossusOpponent"));
					$("#colossusOpponent").removeClass("remainingOpponents").addClass("opponentChoice");

			});	
	}

	else if(result == "colossusPlayer"){
				$("#erenOpponent").on("click", function(){
					$("currentTitan").replceWith($("#erenOpponent"));
					$("#erenOpponent").removeClass("remainingOpponents").addClass("opponentChoice");
			});
				$("#annieOpponent").on("click", function(){
					$("currentTitan").replaceWith($("#annieOpponent"));
					$("#annieOpponent").removeClass("remainingOpponents").addClass("opponentChoice");
			});
				$("#armoredOpponent").on("click", function(){
					$("currentTitan").replaceWith($("#armoredOpponent"));
					$("#armoredOpponent").removeClass("remainingOpponents").addClass("opponentChoice");
			});
	}



}