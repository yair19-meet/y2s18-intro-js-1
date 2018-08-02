var check = true;
var turn = true;
var play = 0;
while(check) {
	if (turn) {
		play = prompt("Player 1 - Enter a number between 1 - 9: ");
		turn = false;
	}
	else {
		play = prompt("Player 2 - Enter a number between 1 - 9: ");
		turn = true;
	}

	
}