const questions = [
    {
        question: "En una fiesta, Ana recibió 24 caramelos y luego su amigo le dio 37 caramelos más. ¿Cuántos caramelos tiene ahora Ana en total?",
        options: ["13", "45", "85", "61"],
        correctAnswer: "61"
    },
    {
        question: "En una tienda de libros, Juan compró un libro por 51 dólares y otro por 16 dólares. ¿Cuánto gastó en total?",
        options: ["18", "67", "32", "36"],
        correctAnswer: "67"
    },
    {
        question: "En un partido de fútbol, el equipo local anotó 83 goles y el equipo visitante anotó 29 goles más. ¿Cuántos goles anotó el equipo visitante?",
        options: ["3", "112", "54", "29"],
        correctAnswer: "29"
    },
    {
        question: "María tenía 42 chocolates y su hermano le dio 58 chocolates más. ¿Cuántos chocolates tienen en total?",
        options: ["250", "88", "66", "100"],
        correctAnswer: "100"
    },
    {
        question: "En una clase, hay 97 estudiantes y llegaron 14 estudiantes más tarde. ¿Cuántos estudiantes hay en total?",
        options: ["83", "111", "135", "163"],
        correctAnswer: "111"
    },
    {
        question: "En una tienda, Juan compró 123 lápices y luego compró 45 más. ¿Cuántos lápices compró en total?",
        options: ["168", "78", "54", "178"],
        correctAnswer: "168"
    },
    {
        question: "María tiene 56 dulces y su amiga le dio 78 dulces más. ¿Cuántos dulces tienen en total?",
        options: ["22", "134", "135", "146"],
        correctAnswer: "134"
    },
    {
        question: "Pedro tenía 89 pegatinas y luego compró 37 más en la tienda. ¿Cuántas pegatinas tiene ahora en total?",
        options: ["133", "52", "126", "50"],
        correctAnswer: "126"
    },
    {
        question: "565 + (-565) = ? ¿Cual es el total?",
        options: ["1,130", "0", "987", "5"],
        correctAnswer: "0"
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
            window.location.href = "dashboard.html"; // Redirige de vuelta al dashboard cuando se hayan respondido todas las preguntas
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
                window.location.href = "dashboard.html"; // Redirige de vuelta al dashboard cuando se hayan respondido todas las preguntas
            }, 1000);
        }
    }
    timeLeft--;
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
    timerInterval = setInterval(updateTimer, 1000); // Inicia el temporizador
});