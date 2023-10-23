const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb"){
      return userInput;
    }
    else{
      console.log("Invalid Entry");
    }
  
  };
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
      case 0:
        return "rock";
        break;
      case 1:
        return "paper"
        break;
      case 2:
        return "scissors"
        break;
    }  
  };
  
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return "The game is a tie!";
    }
    if(userChoice === "rock"){
      if(computerChoice ==="paper"){
        return "computer won!";
      } else{
        return "user won!";
      }     
    }  
    if(userChoice === "paper"){
    if(computerChoice === "scissors" || computerChoice === "rock"){
      return "computer won!";
    }else{
        return "user won!";
      }  
  }
  if(userChoice === "scissors"){
    if(computerChoice === "rock" || computerChoice === "paper"){
      return "computer won!";
    }else{
        return "user won!";
      }  
  }
  if(userChoice === "bomb"){
    if(computerChoice === "rock" || computerChoice === "paper" || computerChoice === "scissors"){
        return "user won!";
    }
  }
  };
  
  const playGame = () => {
   const userChoice = getUserChoice("bomb");
   const computerChoice = getComputerChoice();
   document.write(`You threw ${userChoice}<br>`);
   document.write(`The computer threw ${computerChoice}<br>`);
   document.write(determineWinner(userChoice, computerChoice));
  };
  playGame();