# RPG-Game

Attack On Titan RPG

Characters
-	Eren Jaeger – Mysterious Titan
-	Annie Leohart – Female Titan
-	Reiner Braun – Armored Titan
-	Armin Arlert – Colossus Titan

Variables/Attributes to know:
-	Health
-	Attack Power – Constantly goes up by 6 (6, 12, 18, 24 etc.)
-	Opponent counter Attack Power – remains the same and does not increase

Rows:
-	Your Character
-	Titans Available to Attack
-	Battle Section
-	Attack Button
-	Current Opponent
-	Battle outcome

Game Events:
Choice Titan is picked:
-	Remaining 3 go into “Enemies Available to Attack” row and turn red
-	“Your Character” title moves above the player’s choice card

Player picks opponent:
-	Remaining 2 characters stay in “Enemies Available To Attack” row
-	Opponent that has been chosen goes under “Defender” row and turns black

“Attack” button is clicked:
-	A message goes under current opponent card, “You attacked _______ for ___ damage”
-	Opponent character counter attacks and message states, “Opponent attacked you back for ____ damage”

Attacks continue (attack button clicked until opponent is defeated or character is defeated)
-	Player gets stronger attacks each time (slowly increases)
-	Opponents counter attack remains constant

If player is defeated, player card disappears, “GAME OVER” message appears and Restart button appears
-	Restart will reset the whole game

If opponent is defeated
-	Opponent card disappears and message states, “You have defeated ________. You may choose to fight another enemy”
-	If “Attack” is clicked, message will state, “No Enemy Here”

On 2nd Opponent Picked/Clicked
-	Opponent goes under “Defender” section and turns black
-	Player attack remains high (x6) and their current life amount stays the same
-	Attacked until opponent is defeated or player is defeated
o	If opponent is defeated, opponent card disappears and message states, “You have defeated _______. You may choose to fight another enemy.
o	If player is defeated,  player card disappears, “Game Over” message appears and Restart button appears
o	If “Attack” is clicked, message will state, “No Enemy Here”

On 3rd/Last Opponent Picked/Clicked
-	Player’s attack is so high that less clicks on “Attack” button are needed.

When last opponent is defeated
-	Message states, “You have Conquered! Game Over” and the game is completed because the player has won
-	Restart button appears so that player can choose to play again

