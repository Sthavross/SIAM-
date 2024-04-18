const questions = [
    {
        question: "¿Cuánto es 2 elevado a la potencia de 3?",
        options: ["4", "6", "8", "10"],
        correctAnswer: "8"
    },
    {
        question: "Si tienes 3 cajas, ¿cuántas formas distintas puedes organizarlas?",
        options: ["6", "8", "9", "12"],
        correctAnswer: "8"
    },
    {
        question: "Si tienes 4 colores de crayones y quieres hacer combinaciones de 2 colores cada una, ¿cuántas combinaciones puedes hacer?",
        options: ["6", "8", "12", "16"],
        correctAnswer: "6"
    },
    {
        question: "¿Cuántos números de tres dígitos puedes formar usando los dígitos 1, 2 y 3 sin repetir ningún dígito?",
        options: ["3", "6", "9", "12"],
        correctAnswer: "6"
    },
    {
        question: "Si tienes 2 opciones para el desayuno, 3 opciones para el almuerzo y 2 opciones para la cena, ¿cuántas combinaciones diferentes de comidas puedes hacer durante un día?",
        options: ["4", "6", "8", "12"],
        correctAnswer: "12"
    },
    {
        question: "Si tienes 5 libros y quieres colocarlos en una estantería de 2 niveles, ¿cuántas formas diferentes puedes organizar los libros?",
        options: ["8", "10", "15", "25"],
        correctAnswer: "10"
    },
    {
        question: "Si tienes 2 cartas de invitación y cada carta puede ser para 3 personas diferentes, ¿cuántas personas puedes invitar en total?",
        options: ["5", "6", "8", "9"],
        correctAnswer: "9"
    },
    {
        question: "¿Cuántos posibles resultados diferentes hay al lanzar un dado 3 veces?",
        options: ["12", "18", "24", "36"],
        correctAnswer: "36"
    },
    {
        question: "¿Cuánto es 4 elevado a la potencia de 2?",
        options: ["6", "8", "12", "16"],
        correctAnswer: "16"
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
