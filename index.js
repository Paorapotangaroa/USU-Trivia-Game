// Write your functions here:
// 1) Each function should accept points as an input
// 2) Each function should display a prompt quizzing the user on the correct answer to a piece of USU trivia (You choose the trivia question)
// 3) If they answer correctly, return the input points + however many points you feel they deserve for being correct.
// 4) Otherwise, return the original score
// 5) Name your function according to the guidelines on canvas (e.g. round1, round2, etc.)
// If you need more guidence, feel free to check index.html to see the main flow of the program.

// Round 5 function

function round5(points) {
  const answer = prompt(
    "What is the name of Utah State University's main library?"
  );
  if (answer.toLowerCase() === "merrill-cazier library") {
    alert("Correct! You earn 30 points.");
    return points + 30;
  } else {
    alert("Incorrect. The correct answer is Merrill-Cazier Library.");
    return points;
  }
}
export { round5 };

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


// (Round 7, Tyson Lind)
export function round7(currentScore) {
  const award = 3
  const answer = prompt('USU trivia: What city is Utah State University’s main campus located in?')

  if (!answer) return currentScore

  const normalizedAnswer = answer.trim().toLowerCase()
  const correct = ['logan', 'logan utah', 'logan, utah']

  if (correct.includes(normalizedAnswer)) {
    alert(`Correct! +${award} points`)
    return currentScore + award
  } else {
    alert('Not quite — the answer is Logan, Utah.')
    return currentScore
  }
}
function round4(points) {
    usuQuestion = prompt("During Homecoming week fall 2025: When was True Aggie Night? Ex: 06/20/25");
    if (usuQuestion === "10/17/25") {
        alert('Correct! Go Aggies!')
        return points + 20;
    } else {
        alert("Sorry not correct :( Learn your dates");
        return points;
    }
}
export { round4 };
// Round 3

function round3(points) {
    let answer = parseFloat(prompt("How many stairs are there on old main?"));
    if (answer === 124) {
        alert("Wow you know your aggie trivia!")
        return points + 20;
    } else {
        alert("Wrong answer. Guess you gotta take more walks up old main hill.")
        return points;
    };
};

export {round3};
function round2(points){
    let answer = prompt("What year was Utah State University founded?");
    if (answer === "1888"){
        return points + 5;
    }
    else {
        return points
    }
}
export{round2};

//Round 1

function round1(points) {
  let answer = prompt('Trivia Question #1: What is the most popular flavor of Aggie Ice Cream?');
  if (answer && answer.toLowerCase() === 'Aggie ROTC') {
    return points +20;
  }
  return points;
}

module.exports = { round1 };
