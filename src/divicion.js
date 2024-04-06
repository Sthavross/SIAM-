const questions = [
    {
        question: "¿Cuánto es 12 dividido por 3?",
        options: ["3", "4", "6", "8"],
        correctAnswer: "4"
    },
    {
        question: "Si tienes 20 dulces y los quieres repartir en 4 bolsas iguales, ¿cuántos dulces habrá en cada bolsa?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5"
    },
    {
        question: "Si tienes 16 monedas y quieres repartirlas entre 4 amigos, ¿cuántas monedas recibirá cada uno?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4"
    },
    {
        question: "Si tienes 24 galletas y quieres colocarlas en bolsas de 6 galletas cada una, ¿cuántas bolsas necesitarás?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4"
    },
    {
        question: "Si tienes 15 libros y quieres colocarlos en estantes con capacidad para 3 libros cada uno, ¿cuántos estantes necesitarás?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5"
    },
    {
        question: "Si tienes 30 caramelos y quieres repartirlos entre 6 niños, ¿cuántos caramelos recibirá cada niño?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5"
    },
    {
        question: "Si tienes 18 fichas y quieres repartirlas en grupos de 2 fichas cada uno, ¿cuántos grupos podrás formar?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "9"
    },
    {
        question: "Si tienes 21 paquetes de crayones y los quieres colocar en cajas con capacidad para 3 paquetes cada una, ¿cuántas cajas necesitarás?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7"
    },
    {
        question: "20 dividido por 4 es igual a ¿cuánto?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5"
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
