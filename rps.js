            // Defining user choice by which button is clicked
            const rock = document.getElementById('Rock');
            const paper = document.getElementById('Paper');
            const scissors = document.getElementById('Scissors');

            //Scores
            let playerScore = 0;
            let computerScore = 0;
            const userScore = document.getElementById('pScore');
            const compScore = document.getElementById('cScore');

            //Results Display
            const resultsDisplay = document.getElementById('results');
            const userChoice = document.getElementById('player');
            const compChoice = document.getElementById('computer');

            //Winner notification
            const winner = document.getElementById('winner');
            const playAgain = document.getElementById('play-again');

            
            //refreshing to play again
            function restart() {
                window.location.reload();
            }

            //Computer Play
            function computerPlay() {
                let computerValue = Math.floor((Math.random() * 3) + 1);
                let computerChoice;
                    if(computerValue === 1) {
                        computerChoice = "Rock";
                }   else if(computerValue === 2) {
                        computerChoice = "Paper";
                }   else if(computerValue === 3) {
                        computerChoice = "Scissors";
                }   else {
                        computerChoice = "Something went wrong";
                }
                return computerChoice;
            }

            //Play one round
                function playRound(playerSelection, computerSelection) {
                    playerSelection = this.id;
                    computerSelection = computerPlay();

                    if(
                        (playerSelection === "Rock" && computerSelection === "Scissors") || 
                        (playerSelection === "Paper" && computerSelection === "Rock") ||
                        (playerSelection === "Scissors" && computerSelection === "Paper" &&
                        (playerScore < 5 || computerScore < 5)) 
                    ){
                            playerScore++;
                            userChoice.innerText = "Player: " + playerSelection;
                            compChoice.innerText = "Computer: " + computerSelection;
                            resultsDisplay.innerText = "You won this round!"
                            userScore.textContent = `${playerScore}`;
                            if(playerScore >=5) {
                                winner.innerText = "Congratulations! You won!";
                                playAgain.style.display = "block";
                                playAgain.innerText = "Play Again?";
                                rock.removeEventListener('click', playRound);
                                paper.removeEventListener('click', playRound);
                                scissors.removeEventListener('click', playRound);
                            }
                } else if(
                        (playerSelection === "Rock" && computerSelection === "Paper") ||
                        (playerSelection === "Paper" && computerSelection === "Scissors") ||
                        (playerSelection === "Scissors" && computerSelection === "Rock" &&
                        (playerScore < 5 || computerScore < 5)) 
                ){
                            computerScore++;
                            userChoice.innerText = "Player: " + playerSelection;
                            compChoice.innerText = "Computer: " + computerSelection;
                            resultsDisplay.innerText = "You lost this round!"
                            compScore.textContent = `${computerScore}`;
                            if(computerScore >= 5) {
                                winner.innerText = "You lost lol.";
                                playAgain.style.display = "block";
                                playAgain.innerText = "Play Again?";
                                rock.removeEventListener('click', playRound);
                                paper.removeEventListener('click', playRound);
                                scissors.removeEventListener('click', playRound);
                            }
                } else {
                    userChoice.innerText = "Player: " + playerSelection;
                    compChoice.innerText = "Computer: " + computerSelection;
                    resultsDisplay.innerText = "This round is a draw!"
                } 
            } 
            


            //Event Listeners
            rock.addEventListener('click', playRound);
            paper.addEventListener('click', playRound);
            scissors.addEventListener('click', playRound);
            playAgain.addEventListener('click', restart);