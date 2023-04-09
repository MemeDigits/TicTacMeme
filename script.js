// Store the cells of the Tic Tac Toe grid as an array of buttons
const cells = Array.from(document.querySelectorAll("button"));

// Set the player symbols
const player1 = "420";
const player2 = "69";

// Set the initial player
let currentPlayer = player1;

// Add a click event listener to each cell
cells.forEach(cell => {
	cell.addEventListener("click", handleCellClick);
});

// Function to handle a cell click event
function handleCellClick(event) {
	// Get the clicked cell's ID and element
	const cellId = event.target.id;
	const cell = document.getElementById(cellId);

	// Check if the cell is already occupied
	if (cell.textContent !== "") {
		return;
	}

	// Mark the cell with the current player's symbol
	cell.textContent = currentPlayer;

	// Check for a win or tie
	if (checkForWin()) {
		alert(`Player ${currentPlayer} wins!`);
		resetGame();
	} else if (checkForTie()) {
		alert("It's a tie!");
		resetGame();
	} else {
		// Switch to the next player
		currentPlayer = (currentPlayer === player1) ? player2 : player1;
	}
}

// Function to check if a player has won
function checkForWin() {
	const winningCombos = [
		[0, 1, 2], [
