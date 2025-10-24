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
