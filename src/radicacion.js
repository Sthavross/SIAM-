const questions = [
    {
        question: "¿Cuánto es la raíz cuadrada de 9?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3"
    },
    {
        question: "¿Cuánto es la raíz cuadrada de 16?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "¿Cuánto es la raíz cuadrada de 25?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "5"
    },
    {
        question: "¿Cuánto es la raíz cuadrada de 36?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "6"
    },
    {
        question: "¿Cuánto es la raíz cuadrada de 49?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "7"
    },
    {
        question: "¿Cuánto es la raíz cúbica de 8?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "2"
    },
    {
        question: "¿Cuánto es la raíz cúbica de 27?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "3"
    },
    {
        question: "¿Cuánto es la raíz cúbica de 64?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "4"
    },
    {
        question: "¿Cuánto es la raíz cúbica de 125?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "5"
    },
    {
        question: "¿Cuánto es la raíz cuarta de 16?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "2"
    }
];

let currentQuestion = 0;
let timeLeft = 60; // 60 segundos

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const timerElement = document.getElementById('timer');

let timerInterval;

function displayQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option-button');
        optionButton.addEventListener('click', function () {
            checkAnswer(option);
        });
        optionsElement.appendChild(optionButton);
    });
    
    feedbackElement.textContent = '';

    // Reiniciar tiempo
    timeLeft = 60;
    updateTimer();
}

function checkAnswer(answer) {
    const question = questions[currentQuestion];
    if (answer === question.correctAnswer) {
        feedbackElement.textContent = "¡Respuesta correcta!";
    } else {
        feedbackElement.textContent = "Respuesta incorrecta. La respuesta correcta es: " + question.correctAnswer;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        setTimeout(displayQuestion, 1000); // Muestra la próxima pregunta después de 1 segundo
    } else {
        setTimeout(function () {
            window.location.href = "dashboardPrincipal.html"; // Redirige de vuelta al dashboard cuando se hayan respondido todas las preguntas
        }, 1000);
    }
}

function updateTimer() {
    timerElement.textContent = `Tiempo restante: ${timeLeft} segundos`;
    if (timeLeft <= 0) {
        clearInterval(timerInterval); // Limpiar intervalo si el tiempo llega a cero
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion(); // Muestra la próxima pregunta
        } else {
            setTimeout(function () {
                window.location.href = "dashboardPrincipal.html"; // Redirige de vuelta al dashboard cuando se hayan respondido todas las preguntas
            }, 1000);
        }
    }
    timeLeft--;
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
    timerInterval = setInterval(updateTimer, 1000); // Inicia el temporizador
});