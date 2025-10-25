// Write your functions here:

export function round6(points){
// Ask USU Question
  let answerR6 = prompt(
    "What is the name of the Interim President (Dean) of USU?\n" +
    "a) Alan Smith\n" +
    "b) Toa Pita\n" +
    "c) Mike Wizowski\n" +
    "d) Harry Wiz. Potter"
  ).trim().toLowerCase();
  
  // Check answer
  if (answerR6 === 'a' || answerR6 === 'alan smith' || answerR6 === 'alansmith'){
      alert('Correct! The dean is Alan L. Smith.');
      return points + 60; 
    
  } else {
      alert('Sorry, the answer was a, Alan L. Smith')
      return points;
  }

}

// 1) Each function should accept points as an input: Done
// 2) Each function should display a prompt quizzing the user on the correct answer to a piece of USU trivia (You choose the trivia question): Done
// 3) If they answer correctly, return the input points + however many points you feel they deserve for being correct. : Done, 60 points for round 6
// 4) Otherwise, return the original score: Done
// 5) Name your function according to the guidelines on canvas (e.g. round1, round2, etc.) : Done
// If you need more guidence, feel free to check index.html to see the main flow of the program.
