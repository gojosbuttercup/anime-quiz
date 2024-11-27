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
    },
    {
        question: "Who is the main protagonist in 'One Piece'?",
        options: ["Luffy", "Naruto", "Goku", "Ichigo"],
        answer: 0
    },
    {
        question: "What is the name of the world in 'Sword Art Online'?",
        options: ["Alfheim", "Aincrad", "GGO", "Underworld"],
        answer: 1
    },
    {
        question: "In 'Dragon Ball Z', who is the father of Gohan?",
        options: ["Vegeta", "Trunks", "Goku", "Piccolo"],
        answer: 2
    },
    {
        question: "Which character says the phrase 'I am gonna be king of the pirates!'?",
        options: ["Luffy", "Naruto", "Zoro", "Nami"],
        answer: 0
    },
    {
        question: "What is the name of the first Hokage in Naruto?",
        options: ["Tobirama", "Hiruzen", "Hashirama", "Minato"],
        answer: 2
    },
    {
        question: "In 'My Hero Academia', what is Deku's real name?",
        options: ["Katsuki Bakugo", "Izuku Midoriya", "Shoto Todoroki", "Tenya Iida"],
        answer: 1
    },
    {
        question: "Who is the creator of the 'Naruto' series?",
        options: ["Masashi Kishimoto", "Eiichiro Oda", "Hiro Mashima", "Yoshihiro Togashi"],
        answer: 0
    },
    {
        question: "Which anime features a character named Edward Elric?",
        options: ["Fullmetal Alchemist", "Attack on Titan", "Naruto", "Bleach"],
        answer: 0
    },
    {
        question: "What is the name of the main character in 'Death Note'?",
        options: ["Light Yagami", "L Lawliet", "Kira", "Ryuk"],
        answer: 0
    },
    {
        question: "In 'Tokyo Ghoul', what is the main character's name?",
        options: ["Ken Kaneki", "Touka Kirishima", "Rize Kamishiro", "Shuu Tsukiyama"],
        answer: 0
    },
    {
        question: "In 'Bleach', who is the main character?",
        options: ["Ichigo Kurosaki", "Rukia Kuchiki", "Uryu Ishida", "Renji Abarai"],
        answer: 0
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

