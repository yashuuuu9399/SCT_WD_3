const questions = [
  { 
    question: "Which language is known as the backbone of web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript"
  },
  { 
    question: "HTML stands for?",
    options: ["Hyper Text Makeup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "High Text Machine Language"],
    answer: "Hyper Text Markup Language"
  },
  { 
    question: "Which company developed the Windows OS?",
    options: ["Apple", "IBM", "Microsoft", "Google"],
    answer: "Microsoft"
  },
  { 
    question: "CSS is mainly used for?",
    options: ["Database", "Designing", "Programming Logic", "Networking"],
    answer: "Designing"
  },
  { 
    question: "Shortcut key for copy in Windows?",
    options: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + Z"],
    answer: "Ctrl + C"
  },
  { 
    question: "Fill in the blank: Git is a _____ control system.",
    options: ["version", "database", "management", "storage"],
    answer: "version"
  },
  { 
    question: "Which of these is NOT a programming language?",
    options: ["Python", "Java", "HTML", "C#"],
    answer: "HTML"
  },
  { 
    question: "In networking, IP stands for?",
    options: ["Internet Process", "Internet Protocol", "Internal Program", "Internet Provider"],
    answer: "Internet Protocol"
  },
  { 
    question: "Which of the following is a backend framework?",
    options: ["React", "Angular", "Node.js", "Bootstrap"],
    answer: "Node.js"
  },
  { 
    question: "Cloud services like AWS, Azure, GCP are examples of?",
    options: ["IaaS", "PaaS", "SaaS", "All of these"],
    answer: "All of these"
  }
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

let currentIndex = 0;
let score = 0;

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentIndex];
  questionEl.textContent = `${currentIndex + 1}. ${currentQuestion.question}`;

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("btn-blue");
    button.addEventListener("click", () => selectAnswer(button, currentQuestion.answer));
    optionsEl.appendChild(button);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  optionsEl.innerHTML = "";
}

function selectAnswer(button, correctAnswer) {
  const selected = button.textContent;
  if (selected === correctAnswer) {
    button.classList.remove("btn-blue");
    button.classList.add("btn-green");
    score++;
  } else {
    button.classList.remove("btn-blue");
    button.classList.add("btn-red");
  }

  Array.from(optionsEl.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("btn-green");
    }
  });

  nextBtn.style.display = "block";
}

function showResult() {
  resetState();
  resultEl.classList.remove("hidden");
  resultEl.textContent = `🎉 You scored ${score} out of ${questions.length}`;
  nextBtn.style.display = "none";
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

showQuestion();
