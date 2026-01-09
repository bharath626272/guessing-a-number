
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;

const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");


checkBtn.addEventListener("click", function () {
    const guess = Number(guessInput.value);


    if (!guess) {
        messageEl.textContent = " Enter a number!";


    } else if (guess === secretNumber) {
        messageEl.textContent = " Correct Number!";
        document.body.style.backgroundColor = "green";


    } else {
        if (score > 1) {
            messageEl.textContent =
                guess > secretNumber ? " Too High!" : " Too Low!";
            score--;
            scoreEl.textContent = score;
        } else {
            messageEl.textContent = " You lost!";
            scoreEl.textContent = 0;
        }
    }
});

againBtn.addEventListener("click", function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    scoreEl.textContent = score;
    messageEl.textContent = "Start guessing...";
    guessInput.value = "";
    document.body.style.backgroundColor = "#353b32ff";
});
