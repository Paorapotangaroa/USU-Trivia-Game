// Write your functions here:
// 1) Each function should accept points as an input
// 2) Each function should display a prompt quizzing the user on the correct answer to a piece of USU trivia (You choose the trivia question)
// 3) If they answer correctly, return the input points + however many points you feel they deserve for being correct. 
// 4) Otherwise, return the original score
// 5) Name your function according to the guidelines on canvas (e.g. round1, round2, etc.)
// If you need more guidence, feel free to check index.html to see the main flow of the program.

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