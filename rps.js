            // Defining user choice by which button is clicked
            const rock = document.getElementById('rock');
            const paper = document.getElementById('paper');
            const scissors = document.getElementById('scissors');

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
            
            //refreshing to play again
            function restart() {
                window.location.reload();
            }

            //Computer Play
            function computerPlay() {
                let computerValue = Math.floor((Math.random() * 3) + 1);
                let computerChoice;
                    if(computerValue === 1) {
                        computerChoice = "rock";
                }   else if(computerValue === 2) {
                        computerChoice = "paper";
                }   else if(computerValue === 3) {
                        computerChoice = "scissors";
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
                        (playerSelection === "rock" && computerSelection === "scissors") || 
                        (playerSelection === "paper" && computerSelection === "rock") ||
                        (playerSelection === "scissors" && computerSelection === "paper" &&
                        (playerScore < 5 || computerScore < 5)) 
                    ){
                            playerScore++;
                            userChoice.innerText = playerSelection;
                            compChoice.innerText = computerSelection;
                            resultsDisplay.innerText = "You won this round!"
                            userScore.textContent = `${playerScore}`;
                            if(playerScore >=5) {
                                winner.innerText = "Congratulations! You won!"
                                rock.removeEventListener('click', playRound);
                                paper.removeEventListener('click', playRound);
                                scissors.removeEventListener('click', playRound);
                            }
                } else if(
                        (playerSelection === "rock" && computerSelection === "paper") ||
                        (playerSelection === "paper" && computerSelection === "scissors") ||
                        (playerSelection === "scissors" && computerSelection === "rock" &&
                        (playerScore < 5 || computerScore < 5)) 
                ){
                            computerScore++;
                            userChoice.innerText = playerSelection;
                            compChoice.innerText = computerSelection;
                            resultsDisplay.innerText = "You lost this round!"
                            compScore.textContent = `${computerScore}`;
                            if(computerScore >= 5) {
                                winner.innerText = "You lost lol.";
                                rock.removeEventListener('click', playRound);
                                paper.removeEventListener('click', playRound);
                                scissors.removeEventListener('click', playRound);
                            }
                } else {
                    userChoice.innerText = playerSelection;
                    compChoice.innerText = computerSelection;
                    resultsDisplay.innerText = "This round is a draw!"
                } 
            } 
            


            //Event Listeners
            rock.addEventListener('click', playRound);
            paper.addEventListener('click', playRound);
            scissors.addEventListener('click', playRound);