const questions = [
    {
        question: "María tenía 57 caramelos y dio 23 a su hermano. ¿Cuántos caramelos le quedaron a María?",
        options: ["1", "54", "34", "83"],
        correctAnswer: "34"
    },
    {
        question: "Juan tenía 98 dólares y gastó 36 dólares en un videojuego. ¿Cuánto dinero le queda a Juan?",
        options: ["88", "62", "23", "99"],
        correctAnswer: "62"
    },
    {
        question: "En una granja, había 135 pollos y se vendieron 64. ¿Cuántos pollos quedan en la granja?",
        options: ["30", "71", "199", "92"],
        correctAnswer: "71"
    },
    {
        question: "En una caja había 87 manzanas y se sacaron 29 para hacer jugo. ¿Cuántas manzanas quedan en la caja?",
        options: ["20", "188", "68", "58"],
        correctAnswer: "58"
    },
    {
        question: "En una biblioteca, había 152 libros y se prestaron 43. ¿Cuántos libros quedan en la biblioteca?",
        options: ["77", "101", "109", "128"],
        correctAnswer: "109"
    },
    {
        question: "En una tienda, Juan compró 123 lápices y luego compró 45 más. ¿Cuántos lápices compró en total?",
        options: ["168", "78", "54", "178"],
        correctAnswer: "168"
    },
    {
        question: "María tenía 376 caramelos y regaló 195 a sus amigos. ¿Cuántos caramelos le quedaron a María?",
        options: ["181", "223", "0", "188"],
        correctAnswer: "181"
    },
    {
        question: "En un estanque había 98 peces y se pescaron 37. ¿Cuántos peces quedan en el estanque?",
        options: ["98", "62", "61", "37"],
        correctAnswer: "61"
    },
    {
        question: "96 - (-55) = ? ¿Cual es el total?",
        options: ["15", "0", "151", "41"],
        correctAnswer: "151"
    },
    {
        question: "Si tienes 15 manzanas y regalas 7, ¿cuántas manzanas te quedan?",
        options: ["4", "6", "8", "10"],
        correctAnswer: "8"
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