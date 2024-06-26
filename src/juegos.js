
document.addEventListener('DOMContentLoaded', function () {
    const topics = document.querySelectorAll('.topic');
    const topicDetails = document.getElementById('topicDetails');
    let currentTopicIndex = 0; // Índice del tema actual

    // Definir las rutas de redirección para cada juego
    const topicIds = ['sudoku', 'rompecabeza', '2048', 'calculo'];


    // Agregar un evento de clic a cada tema
    topics.forEach(topic => {
        topic.addEventListener('click', () => {
            const topicId = topic.id; // Obtener el ID del tema seleccionado
            displayTopicDetails(topicId); // Mostrar los detalles del tema
        });
    });



    
    
    // Función para mostrar los detalles del tema seleccionado
    function displayTopicDetails(topicId) {
        // Definir los detalles específicos para cada tema
        let topicDetailsHTML;
        switch (topicId) {
<<<<<<< HEAD
            case 'sudoku':
                topicDetailsHTML = `
                <h2>SUDOKU</h2>
                <h3>¡Bienvenido al desafío SUDOKU!</h3>
                <p>El objetivo del juego es completar el tablero de tal manera que cada fila, columna y región contenga los números del 1 al 9, sin repetir ningún número.</p>
                <h3>Reglas</h3>
                <ol>
                    <li>Cada fila debe contener todos los números del 1 al 9 sin repetir.</li>
                    <li>Cada columna debe contener todos los números del 1 al 9 sin repetir.</li>
                    <li>Cada región (subgrupo de 3x3 celdas) debe contener todos los números del 1 al 9 sin repetir.</li>
                </ol>

                <h2>Ejemplo</h2>
                <img src="./img/sudoku.jpg" alt="Ejemplo Sudoku" style="display: block; margin: 0 auto;">

                <p>Para comenzar, simplemente haz clic en el botón "¡Comenzar!" a continuación. ¡Que empiece la diversión!</p>
                <button onclick="window.location.href = 'sudoku.html';">¡Comenzar!</button>
                `;
=======
            case 'trivia':
                topicDetailsHTML = `                
                <!-- Detalles de la Trivia de Conceptos Matemáticos -->
                <h2>Trivia de Conceptos Matemáticos</h2>
                <h3>¡Bienvenido a la Trivia de Conceptos Matemáticos!</h3>
                <p>En este desafiante juego, pondrás a prueba tus conocimientos sobre una variedad de conceptos matemáticos. Desde teoremas hasta definiciones, cada pregunta te llevará a explorar diferentes aspectos de las matemáticas.</p>
                <p>La trivia está diseñada para desafiarte y entretenerte mientras pones a prueba tus habilidades matemáticas. Cada respuesta correcta te acercará más a la victoria, ¡así que piensa cuidadosamente antes de responder!</p>
                
                <h2>Ejemplo</h2>
                <p>Para comenzar, simplemente haz clic en el botón "¡Comenzar!" a continuación. ¡Que empiece la diversión!</p>
                <button onclick="window.location.href = 'trivias.html';">¡Comenzar!</button>
                
`;
>>>>>>> e59cc1966caaf1ed8cc1520b6959d412a9799dde
                break;
            case 'rompecabeza':
                topicDetailsHTML =`
                <!-- Detalles de el Rompe Cabezas -->
                <h2>Rompecabezas de Números</h2>
                <h3>¡Bienvenido al desafío del Rompecabezas de Números!</h3>
                <p>En este fascinante juego, te enfrentarás a un desafío numérico que pondrá a prueba tu habilidad para organizar y visualizar patrones. El objetivo es simple pero requiere concentración y destreza: debes colocar los números del 1 al 8 en orden ascendente, dejando un espacio vacío al final. Este juego no solo te entretendrá, sino que también estimulará tu capacidad para resolver problemas y mejorar tu agudeza mental.</p>
                <p>El rompecabezas está diseñado para desafiarte y entretenerte mientras te sumerges en la emocionante tarea de ordenar los números en la secuencia correcta. Cada movimiento cuenta, ¡así que piensa cuidadosamente antes de actuar!</p>

                <h2>Ejemplo</h2>
                <img src="./img/rompe cabeza.jpg" alt="Rompecabezas de Números" style="display: block; margin: 0 auto;">

                <p>Para comenzar, simplemente haz clic en el botón "¡Comenzar!" a continuación. ¡Que empiece la diversión!</p>
                <button onclick="window.location.href = 'RompeCabeza.html';">¡Comenzar!</button>
`;

                break;
            case '2048':
                topicDetailsHTML =`
                <!-- Detalles de el Rompe Cabezas -->
                <h2>Juego 2048</h2>
                <h3>¡Bienvenido al desafío 2048!</h3>
                <p>El juego 2048 es un juego de rompecabezas donde el objetivo es combinar los números en la cuadrícula para alcanzar el número 2048.</p>

                <h2>Ejemplo</h2>
                <img src="./img/2048.png" alt="2048" style="display: block; margin: 0 auto;">

                <p>Para comenzar, simplemente haz clic en el botón "¡Comenzar!" a continuación. ¡Que empiece la diversión!</p>
                <button onclick="window.location.href = '2048.html';">¡Comenzar!</button>`;
                break;
            case 'calculo':
                topicDetailsHTML =``;
                break;

                // Agregar casos para otros temas si es necesario
            default:
                topicDetailsHTML = `
                    <!-- Mensaje de error si no se encuentra información para el tema -->
                    <p>Lo sentimos, no se encontró información detallada para este tema.</p>
                `;
                
        }

        // Mostrar los detalles del tema seleccionado en el contenedor de detalles
        topicDetails.innerHTML = topicDetailsHTML;
        topicDetails.classList.add('show'); // Mostrar el contenedor de detalles

        
    }

});




// document.addEventListener('DOMContentLoaded', function () {
//     const gameOptions = document.querySelectorAll('.game-option');
//     const detallesJuegos = document.getElementById('.detallesJuegos')

//     // Definir las rutas de redirección para cada juego
//     const gameRoutes = [
//         'RompeCabeza',
//         'ejercicios_operadores',
//         'algebra',
//         'calculo'
//     ]

//     gameOptions.forEach(option => {
//         option.addEventListener('click', function () {
//             // Obtener el id del juego seleccionado
//             const selectedGame = this.id;
//             detallesinformativos(selectedGame)
//         });
//     });

//      function detallesinformativos(selectedGame){
//         let temadeljuego;
//         switch(selectedGame){
//             case 'RompeCabeza':
//                 temadeljuego = `
//                 <h1>se ve </h1>
//                 `;
//                 break;

//         }
//      }

// });
