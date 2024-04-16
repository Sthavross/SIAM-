const questions = [
    {
        question: "¿Cuál es el teorema que establece la relación entre los lados y ángulos de un triángulo?",
        options: ["Teorema de Pitágoras", "Teorema de Tales", "Teorema de Euclides", "Teorema de Pitágoras inverso"],
        correctAnswer: "Teorema de Pitágoras"
    },
    {
        question: "¿Cuál es el número pi?",
        options: ["3.14", "2.71", "1.61", "4.13"],
        correctAnswer: "3.14"
    },
    {
        question: "¿Qué es un número primo?",
        options: ["Un número divisible por 2", "Un número divisible por 3", "Un número divisible por 1 y por sí mismo", "Un número divisible por 10"],
        correctAnswer: "Un número divisible por 1 y por sí mismo"
    },
    {
        question: "¿Qué es el teorema fundamental del cálculo?",
        options: ["Relaciona la derivada con la integral", "Establece la suma de infinitos términos convergentes", "Relaciona los límites con las funciones continuas", "Describe la derivada de una función"],
        correctAnswer: "Relaciona la derivada con la integral"
    },
    {
        question: "¿Qué es la geometría analítica?",
        options: ["Estudia las propiedades de las figuras geométricas", "Utiliza técnicas geométricas para resolver problemas", "Combina conceptos de álgebra y geometría", "Se enfoca en la medición de ángulos y distancias"],
        correctAnswer: "Combina conceptos de álgebra y geometría"
    },
    {
        question: "¿Cuál es la definición de una función lineal?",
        options: ["Una función con una curva suave", "Una función con una variable independiente", "Una función con una línea recta", "Una función con múltiples variables"],
        correctAnswer: "Una función con una línea recta"
    },
    {
        question: "¿Qué es el teorema del límite central?",
        options: ["Establece la convergencia de una sucesión", "Describe la distribución de la media de una muestra", "Relaciona los límites con las funciones continuas", "Determina la solución de un límite indeterminado"],
        correctAnswer: "Describe la distribución de la media de una muestra"
    },
    {
        question: "¿Cuál es el teorema de Tales?",
        options: ["Relaciona los lados y ángulos de un triángulo rectángulo", "Establece la proporcionalidad en triángulos semejantes", "Determina la suma de los ángulos interiores de un triángulo", "Relaciona los lados y ángulos de un triángulo cualquiera"],
        correctAnswer: "Establece la proporcionalidad en triángulos semejantes"
    },
    {
        question: "¿Qué es una matriz?",
        options: ["Una lista ordenada de números", "Un conjunto de ecuaciones lineales", "Una representación gráfica de datos", "Una disposición rectangular de números"],
        correctAnswer: "Una disposición rectangular de números"
    },
    {
        question: "¿Cuál es el área de un círculo?",
        options: ["2πr", "πr²", "πr", "π/2 * r²"],
        correctAnswer: "πr²"
    },
    {
        question: "¿Qué es la combinatoria?",
        options: ["El estudio de las probabilidades", "La rama de las matemáticas que estudia las combinaciones y permutaciones", "El cálculo de derivadas e integrales", "El análisis de conjuntos finitos"],
        correctAnswer: "La rama de las matemáticas que estudia las combinaciones y permutaciones"
    },
    {
        question: "¿Cuál es el teorema de Fermat?",
        options: ["Establece la conjetura de Goldbach", "Demuestra la existencia de infinitos números primos", "Afirma que no existen soluciones enteras para la ecuación x^n + y^n = z^n con n mayor que 2", "Demuestra la imposibilidad de dividir un cubo en dos cubos iguales"],
        correctAnswer: "Afirma que no existen soluciones enteras para la ecuación x^n + y^n = z^n con n mayor que 2"
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
