const questions = [
    {
        question: "¿Cuánto es 3 multiplicado por 4?",
        options: ["7", "10", "12", "14"],
        correctAnswer: "12"
    },
    {
        question: "Si tienes 5 cajas de lápices y cada caja contiene 6 lápices, ¿cuántos lápices tienes en total?",
        options: ["9", "20", "25", "30"],
        correctAnswer: "30"
    },
    {
        question: "Si compras 2 paquetes de galletas y cada paquete tiene 8 galletas, ¿cuántas galletas tienes en total?",
        options: ["12", "14", "16", "18"],
        correctAnswer: "16"
    },
    {
        question: "Si hay 4 niños en una fiesta y cada niño tiene 3 globos, ¿cuántos globos hay en total?",
        options: ["8", "10", "12", "14"],
        correctAnswer: "12"
    },
    {
        question: "Si tienes 3 filas de libros y en cada fila hay 5 libros, ¿cuántos libros tienes en total?",
        options: ["8", "10", "12", "15"],
        correctAnswer: "15"
    },
    {
        question: "Si plantas 4 árboles en tu jardín y cada árbol tiene 2 manzanas, ¿cuántas manzanas tendrás en total?",
        options: ["6", "7", "8", "9"],
        correctAnswer: "8"
    },
    {
        question: "Si hay 3 cajas de juguetes y cada caja contiene 7 juguetes, ¿cuántos juguetes hay en total?",
        options: ["17", "18", "19", "20"],
        correctAnswer: "21"
    },
    {
        question: "Si tienes 2 grupos de flores y en cada grupo hay 6 flores, ¿cuántas flores tienes en total?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12"
    },
    {
        question: "5 multiplicado por 4 es igual a ¿cuánto?",
        options: ["15", "18", "20", "25"],
        correctAnswer: "20"
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
