const paperBtn = document.querySelector(".paper");
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const scoreInfo = document.querySelector(".score-info");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
let random;

const paperIcon = () => {
	player1.innerHTML = `<i class="fa-regular fa-hand"></i>`;
};
const rockIcon = () => {
	player1.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
};
const scissorsIcon = () => {
	player1.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
};

const PcChoiceIcon = (option) => {
	switch (String(option)) {
		case "0":
			player2.innerHTML = `<i class="fa-regular fa-hand"></i>`; //paper
			break;
		case "1":
			player2.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`; //rock
			break;
		case "2":
			player2.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`; //scissors
			break;
	}
};

const scoreText = (option) => {
	switch (String(option)) {
		case "0":
			scoreInfo.textContent = "DRAW 😶";
			break;
		case "1":
			scoreInfo.textContent = "WIN 😀";
			break;
		case "2":
			scoreInfo.textContent = "LOSE 😥";
			break;
	}
};

const game = (playerChoice) => {
	// const randomChoice = ["paper", "rock", "scissors"];
	const random = Math.trunc(Math.random() * 3);

	if (playerChoice.toLowerCase() === "paper") {
		if (random === 0) {
			PcChoiceIcon(0);
			scoreText(0);
			paperIcon();
		} else if (random === 1) {
			PcChoiceIcon(1);
			scoreText(1);
			paperIcon();
		} else if (random === 2) {
			PcChoiceIcon(2);
			scoreText(2);
			paperIcon();
		}
	}
	if (playerChoice.toLowerCase() === "rock") {
		if (random === 0) {
			scoreText(2);
			PcChoiceIcon(0);
			rockIcon();
		} else if (random === 1) {
			scoreText(0);
			PcChoiceIcon(1);
			rockIcon();
		} else if (random === 2) {
			scoreText(1);
			PcChoiceIcon(2);
			rockIcon();
		}
	}
	if (playerChoice.toLowerCase() === "scissors") {
		if (random === 0) {
			scoreText(1);
			PcChoiceIcon(0);
			scissorsIcon();
		} else if (random === 1) {
			scoreText(2);
			PcChoiceIcon(1);
			scissorsIcon();
		} else if (random === 2) {
			scoreText(0);
			PcChoiceIcon(2);
			scissorsIcon();
		}
	}
};
paperBtn.addEventListener("click", (e) => {
	game(e.target.textContent);
});
rockBtn.addEventListener("click", (e) => {
	game(e.target.textContent);
});
scissorsBtn.addEventListener("click", (e) => {
	game(e.target.textContent);
});
