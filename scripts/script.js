let score = 0;
let number = 1;

let questionAnswer = {};

function startGame() {
    fetchTrivia();
}

async function fetchTrivia() {
    const url = "https://opentdb.com/api.php?amount=1";

    const res = await fetch(url);
    const data = await res.json();
    const trivia = data.results[0];
    // console.log(trivia);

    const question = trivia.question;
    const correct_answer = trivia.correct_answer;
    const temp = [...trivia.incorrect_answers, trivia.correct_answer];
    const allOptions = temp.sort(() => Math.random() - 0.5);

    questionAnswer = { question, correct_answer, allOptions }
    // console.log(questionAnswer);

    // console.log(allOptions);
    const questionNo = document.getElementById("question-no");
    questionNo.textContent = number;
    number++;
    loadLayout();
}
// console.log(questionAnswer);

const ul = document.getElementById("options");

function loadLayout() {
    const question = document.getElementById("question");

    ul.innerHTML = "";

    question.innerHTML = questionAnswer.question;

    questionAnswer.allOptions.forEach(option => {
        const btn = document.createElement("button");
        btn.innerHTML = option;
        // console.log(btn.innerHTML);
        btn.classList.add("option-btn");
        ul.appendChild(btn);

        btn.onclick = () => {
            // console.log("button clicked...");
            checkAnswer(option, btn);
        }
    });
}

function checkAnswer(choice, buttonEle) {
    // console.log("button clicked...");
    ul.querySelectorAll(".option-btn").forEach((btn) => {
        btn.classList.remove("correct");
        btn.classList.remove("wrong");
        btn.setAttribute("disabled", true);
    });

    if (choice == questionAnswer.correct_answer) {
        score++;
        updateScore();
        nextQuestionBtn.removeAttribute("disabled");
        buttonEle.classList.add("correct");
    }
    else {
        nextQuestionBtn.removeAttribute("disabled");;
        buttonEle.classList.add("wrong");
    }
}

const scoreText = document.getElementById("score");
function updateScore() {
    // console.log(score);

    scoreText.textContent = score;
}

const nextQuestionBtn = document.getElementById("next-btn");
nextQuestionBtn.addEventListener("click", startGame);

startGame();