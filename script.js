const questions = [
    {
        question: "What is Naruto's last name?",
        options: ["Uzumaki", "Uchiha", "Hatake", "Hyuga"],
        answer: 0
    },
    {
        question: "Who is the captain of the Straw Hat Pirates?",
        options: ["Luffy", "Zoro", "Nami", "Sanji"],
        answer: 0
    },
    {
        question: "In 'Attack on Titan', what are the giant creatures called?",
        options: ["Elves", "Titans", "Demons", "Giants"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.querySelectorAll(".option");
    questionElement.innerText = questions[currentQuestionIndex].question;
    options.forEach((option, index) => {
        option.innerText = questions[currentQuestionIndex].options[index];
    });
}

function selectOption(optionIndex) {
    const correctIndex = questions[currentQuestionIndex].answer;
    if (optionIndex === correctIndex) score++;
    document.getElementById("score").innerText = `Score: ${score}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Completed!";
        document.getElementById("next-btn").style.display = "none";
    }
}

loadQuestion();
