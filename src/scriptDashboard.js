
import './app/logout.js'

document.addEventListener('DOMContentLoaded', function() {
    const topics = document.querySelectorAll('.topic');
    const topicDetails = document.getElementById('topicDetails');
    // const closeButton = document.getElementById('closeButton');
    // const nextButton = document.getElementById('nextButton');
    
    let currentTopicIndex = 0; // Índice del tema actual
    
    // Array con los IDs de los temas disponibles
    const topicIds = ['suma', 'resta', 'multiplicacion', 'division', 'potenciacion', 'radicacion'];


    // Agregar un evento de clic a cada tema
    topics.forEach(topic => {
        topic.addEventListener('click', () => {
            const topicId = topic.id; // Obtener el ID del tema seleccionado
            displayTopicDetails(topicId); // Mostrar los detalles del tema
        });
    });

    // window.addEventListener('scroll', function() {
    //     var nav = document.getElementById('miNav');
    //     if (window.scrollY > 0) {
    //       nav.style.top = '0';
    //     } else {
    //       nav.style.top = '-50px'; // Cambia el valor según la altura de tu menú
    //     }
    //   });

    // closeButton.addEventListener('click', () => {
    //     // Lógica para cerrar los detalles del tema
    //     topicDetails.classList.remove('show');
    // });

    // nextButton.addEventListener('click', () => {
    //     // Lógica para pasar al siguiente tema
    //     currentTopicIndex++; // Incrementar el índice del tema actual

    //     if (currentTopicIndex < topicIds.length) {
    //         const nextTopicId = topicIds[currentTopicIndex];
    //         displayTopicDetails(nextTopicId); // Mostrar detalles del siguiente tema
    //     } else {
    //         // Si ya se han mostrado todos los temas, ocultar los detalles
    //         topicDetails.classList.remove('show');
    //     }
    // });

    

    // Función para mostrar los detalles del tema seleccionado
    function displayTopicDetails(topicId) {
        // Definir los detalles específicos para cada tema
        let topicDetailsHTML;
        switch (topicId) {
            case 'suma':
                topicDetailsHTML = `
                    
                    <!-- Detalles de la suma -->
                    <h2>Suma</h2>
                    <h3>Historia de la suma</h3>
                    <p>La suma es una de las operaciones matemáticas más antiguas y básicas que se conocen. Se piensa que el ser humano del neolítico ya manejaba los principios matemáticos elementales, entre los que necesariamente estarían la adición y la resta, dado que estas operaciones son fáciles de evidenciar de cara a las provisiones agrícolas que aumentaban y disminuían conforme a la época del año.
                    Sin embargo, el estudio de la suma y su aplicación a tanto números naturales como fraccionarios comenzó con los antiguos egipcios, y continuó desarrollándose en aspectos más complejos con los babilonios, y especialmente con los chinos y los hindúes, quienes fueron los primeros en sumar números negativos. Pero recién en el Renacimiento el auge de la banca impuso la suma de decimales y de logaritmos vulgares.</p>
                    <h3>Propiedades de la Suma</h3>
                    <p>La suma en tanto operación matemática posee un conjunto de propiedades, que son:
                    <ul>
                    <li><strong>Propiedad conmutativa.</strong> Establece que el orden de los sumandos no altera el resultado, es decir, que a + b es exactamente lo mismo que b + a, y en ambos casos se obtiene el mismo resultado.</li>
                    <li><strong>Propiedad asociativa.</strong> Establece que a la hora de sumar tres o más elementos, es posible agrupar dos de ellos para resolverlos primero, independientemente de cuáles sean, sin alterar el resultado final. Es decir, si deseamos sumar a + b +c, podemos optar por dos caminos: (a + b) + c ó a + (b + c), sin afectar en absoluto el resultado.</li>
                    <li><strong>Propiedad de identidad.</strong> Establece que el cero es un elemento neutro en la operación, de modo que sumarlo con cualquier otro número dará siempre como resultado este mismo último número: a + 0 = a.</li>
                    <li><strong>Propiedad clausurativa.</strong> Establece que el resultado de una suma pertenecerá siempre al mismo conjunto numérico de los sumandos, siempre que estos a su vez compartan el mismo conjunto. Es decir, si los sumandos a y b pertenecen a N (naturales), Z (enteros), Q (irracionales), R (reales) o C (complejos), el resultado de la suma también pertenecerá al mismo conjunto.</li></p>
                    </ul>
                    <h3>Entender la suma</h3>
                    <p>
                    <ol>
                    <li><strong>Comprende el concepto básico:</strong> La suma es la acción de agregar cantidades. Por ejemplo, si tienes 2 manzanas y luego agregas otras 3, en total tendrás 5 manzanas. Esto se expresa matemáticamente como 2 + 3 = 5.</li>

                    <li><strong>Conoce los términos clave:</strong>
                    
                    <strong>Sumandos:</strong> Son los números que se están sumando.
                    <strong>Suma:</strong> Es el resultado de agregar los sumandos.
                    <strong>Operador de suma (+):</strong> Es el símbolo que indica la operación de suma.</li>
                    <li><strong>Practica con ejemplos simples:</strong> Empieza sumando números pequeños y luego ve aumentando la dificultad gradualmente. Por ejemplo, comienza con sumas como 2 + 3 o 5 + 4, y luego pasa a sumas más complejas como 23 + 17 o 156 + 78.</li>
                    
                    <li><strong>Utiliza manipulativos o materiales físicos:</strong> Puedes usar objetos físicos como bloques, fichas o lápices para representar los números y sumarlos. Esto puede ayudarte a visualizar mejor la operación.</li>
                    
                    <li><strong>Entiende las propiedades de la suma:</strong>
                    
                    <strong>Asociativa:</strong> (a + b) + c = a + (b + c). El orden en que sumas los números no cambia el resultado.
                    <strong>Conmutativa:</strong> a + b = b + a. El orden de los sumandos no afecta el resultado.
                    <strong>Identidad aditiva:</strong> a + 0 = a. Sumar cero a cualquier número no cambia ese número.
                    <strong>Inverso aditivo:</strong> a + (-a) = 0. La suma de un número y su opuesto aditivo es igual a cero.</li>
                    <li><strong>Practica con problemas reales:</strong> Encuentra situaciones cotidianas en las que puedas aplicar la suma. Por ejemplo, al calcular el cambio en una compra o al sumar el tiempo que lleva realizar diferentes actividades.</li>
                    
                    <li><strong>Utiliza estrategias de suma mental:</strong> A medida que adquieras más habilidad, podrás realizar sumas de forma más rápida utilizando estrategias mentales, como descomponer los números en partes más manejables o encontrar sumas cercanas para estimar el resultado.</li>
                    </ol>
                    Con práctica y paciencia, podrás mejorar tu comprensión y habilidades en suma, lo que te ayudará en tu educación matemática y en la vida diaria.</p>
                    <h3>Practicar</h3>
                    <p>Aquí tienes algunos ejercicios para practicar la suma:</p>
                    <button onclick="window.location.href = 'Suma.html';">Practicar La suma</button>
                    
                `;
                break;
            case 'resta':
                topicDetailsHTML = `

                    <!-- Detalles de la resta -->
                    <h2>Resta</h2>
                    <h3>Historia de la Resta</h3>

                    <p>La multiplicacion es una de las operaciones matemáticas más antiguas y básicas que se conocen. Se piensa que el ser humano del neolítico ya manejaba los principios matemáticos elementales, entre los que necesariamente estarían la adición y la resta, dado que estas operaciones son fáciles de evidenciar de cara a las provisiones agrícolas que aumentaban y disminuían conforme a la época del año.
                    Sin embargo, el estudio de la suma y su aplicación a tanto números naturales como fraccionarios comenzó con los antiguos egipcios, y continuó desarrollándose en aspectos más complejos con los babilonios, y especialmente con los chinos y los hindúes, quienes fueron los primeros en sumar números negativos. Pero recién en el Renacimiento el auge de la banca impuso la suma de decimales y de logaritmos vulgares.</p>
                    <h3>Propiedades de la Resta</h3>
                    <p>La suma en tanto operación matemática posee un conjunto de propiedades, que son:
                    <ul>
                    <li><strong>Propiedad conmutativa.</strong> Establece que el orden de los sumandos no altera el resultado, es decir, que a + b es exactamente lo mismo que b + a, y en ambos casos se obtiene el mismo resultado.</li>
                    <li><strong>Propiedad asociativa.</strong> Establece que a la hora de sumar tres o más elementos, es posible agrupar dos de ellos para resolverlos primero, independientemente de cuáles sean, sin alterar el resultado final. Es decir, si deseamos sumar a + b +c, podemos optar por dos caminos: (a + b) + c ó a + (b + c), sin afectar en absoluto el resultado.</li>
                    <li><strong>Propiedad de identidad.</strong> Establece que el cero es un elemento neutro en la operación, de modo que sumarlo con cualquier otro número dará siempre como resultado este mismo último número: a + 0 = a.</li>
                    <li><strong>Propiedad clausurativa.</strong> Establece que el resultado de una suma pertenecerá siempre al mismo conjunto numérico de los sumandos, siempre que estos a su vez compartan el mismo conjunto. Es decir, si los sumandos a y b pertenecen a N (naturales), Z (enteros), Q (irracionales), R (reales) o C (complejos), el resultado de la suma también pertenecerá al mismo conjunto.</li></p>
                    </ul>
                    <h3>Entender la Resta</h3>
                    <p>
                    <ol>
                    <li><strong>Comprende el concepto básico:</strong> La suma es la acción de agregar cantidades. Por ejemplo, si tienes 2 manzanas y luego agregas otras 3, en total tendrás 5 manzanas. Esto se expresa matemáticamente como 2 + 3 = 5.</li>

                    <li><strong>Conoce los términos clave:</strong>
                    
                    <strong>Sumandos:</strong> Son los números que se están sumando.
                    <strong>Suma:</strong> Es el resultado de agregar los sumandos.
                    <strong>Operador de suma (+):</strong> Es el símbolo que indica la operación de suma.</li>
                    <li><strong>Practica con ejemplos simples:</strong> Empieza sumando números pequeños y luego ve aumentando la dificultad gradualmente. Por ejemplo, comienza con sumas como 2 + 3 o 5 + 4, y luego pasa a sumas más complejas como 23 + 17 o 156 + 78.</li>
                    
                    <li><strong>Utiliza manipulativos o materiales físicos:</strong> Puedes usar objetos físicos como bloques, fichas o lápices para representar los números y sumarlos. Esto puede ayudarte a visualizar mejor la operación.</li>
                    
                    <li><strong>Entiende las propiedades de la suma:</strong>
                    
                    <strong>Asociativa:</strong> (a + b) + c = a + (b + c). El orden en que sumas los números no cambia el resultado.
                    <strong>Conmutativa:</strong> a + b = b + a. El orden de los sumandos no afecta el resultado.
                    <strong>Identidad aditiva:</strong> a + 0 = a. Sumar cero a cualquier número no cambia ese número.
                    <strong>Inverso aditivo:</strong> a + (-a) = 0. La suma de un número y su opuesto aditivo es igual a cero.</li>
                    <li><strong>Practica con problemas reales:</strong> Encuentra situaciones cotidianas en las que puedas aplicar la suma. Por ejemplo, al calcular el cambio en una compra o al sumar el tiempo que lleva realizar diferentes actividades.</li>
                    
                    <li><strong>Utiliza estrategias de suma mental:</strong> A medida que adquieras más habilidad, podrás realizar sumas de forma más rápida utilizando estrategias mentales, como descomponer los números en partes más manejables o encontrar sumas cercanas para estimar el resultado.</li>
                    </ol>
                    Con práctica y paciencia, podrás mejorar tu comprensión y habilidades en suma, lo que te ayudará en tu educación matemática y en la vida diaria.</p>
                    <h3>Practicar</h3>
                    <p>Aquí tienes algunos ejercicios para practicar la Resta:</p>
                    <button onclick="window.location.href = 'Suma.html';">Practicar La suma</button>
                `;
                break;
            case 'multiplicacion':
                topicDetailsHTML =`
                <!-- Detalles de la resta -->
                    <h2>Resta</h2>
                    <h3>Historia de la Resta</h3>
                    <p>La suma es una de las operaciones matemáticas más antiguas y básicas que se conocen. Se piensa que el ser humano del neolítico ya manejaba los principios matemáticos elementales, entre los que necesariamente estarían la adición y la resta, dado que estas operaciones son fáciles de evidenciar de cara a las provisiones agrícolas que aumentaban y disminuían conforme a la época del año.
                    Sin embargo, el estudio de la suma y su aplicación a tanto números naturales como fraccionarios comenzó con los antiguos egipcios, y continuó desarrollándose en aspectos más complejos con los babilonios, y especialmente con los chinos y los hindúes, quienes fueron los primeros en sumar números negativos. Pero recién en el Renacimiento el auge de la banca impuso la suma de decimales y de logaritmos vulgares.</p>
                    <h3>Propiedades de la Resta</h3>
                    <p>La suma en tanto operación matemática posee un conjunto de propiedades, que son:
                    <ul>
                    <li><strong>Propiedad conmutativa.</strong> Establece que el orden de los sumandos no altera el resultado, es decir, que a + b es exactamente lo mismo que b + a, y en ambos casos se obtiene el mismo resultado.</li>
                    <li><strong>Propiedad asociativa.</strong> Establece que a la hora de sumar tres o más elementos, es posible agrupar dos de ellos para resolverlos primero, independientemente de cuáles sean, sin alterar el resultado final. Es decir, si deseamos sumar a + b +c, podemos optar por dos caminos: (a + b) + c ó a + (b + c), sin afectar en absoluto el resultado.</li>
                    <li><strong>Propiedad de identidad.</strong> Establece que el cero es un elemento neutro en la operación, de modo que sumarlo con cualquier otro número dará siempre como resultado este mismo último número: a + 0 = a.</li>
                    <li><strong>Propiedad clausurativa.</strong> Establece que el resultado de una suma pertenecerá siempre al mismo conjunto numérico de los sumandos, siempre que estos a su vez compartan el mismo conjunto. Es decir, si los sumandos a y b pertenecen a N (naturales), Z (enteros), Q (irracionales), R (reales) o C (complejos), el resultado de la suma también pertenecerá al mismo conjunto.</li></p>
                    </ul>
                    <h3>Entender la Resta</h3>
                    <p>
                    <ol>
                    <li><strong>Comprende el concepto básico:</strong> La suma es la acción de agregar cantidades. Por ejemplo, si tienes 2 manzanas y luego agregas otras 3, en total tendrás 5 manzanas. Esto se expresa matemáticamente como 2 + 3 = 5.</li>

                    <li><strong>Conoce los términos clave:</strong>
                    
                    <strong>Sumandos:</strong> Son los números que se están sumando.
                    <strong>Suma:</strong> Es el resultado de agregar los sumandos.
                    <strong>Operador de suma (+):</strong> Es el símbolo que indica la operación de suma.</li>
                    <li><strong>Practica con ejemplos simples:</strong> Empieza sumando números pequeños y luego ve aumentando la dificultad gradualmente. Por ejemplo, comienza con sumas como 2 + 3 o 5 + 4, y luego pasa a sumas más complejas como 23 + 17 o 156 + 78.</li>
                    
                    <li><strong>Utiliza manipulativos o materiales físicos:</strong> Puedes usar objetos físicos como bloques, fichas o lápices para representar los números y sumarlos. Esto puede ayudarte a visualizar mejor la operación.</li>
                    
                    <li><strong>Entiende las propiedades de la suma:</strong>
                    
                    <strong>Asociativa:</strong> (a + b) + c = a + (b + c). El orden en que sumas los números no cambia el resultado.
                    <strong>Conmutativa:</strong> a + b = b + a. El orden de los sumandos no afecta el resultado.
                    <strong>Identidad aditiva:</strong> a + 0 = a. Sumar cero a cualquier número no cambia ese número.
                    <strong>Inverso aditivo:</strong> a + (-a) = 0. La suma de un número y su opuesto aditivo es igual a cero.</li>
                    <li><strong>Practica con problemas reales:</strong> Encuentra situaciones cotidianas en las que puedas aplicar la suma. Por ejemplo, al calcular el cambio en una compra o al sumar el tiempo que lleva realizar diferentes actividades.</li>
                    
                    <li><strong>Utiliza estrategias de suma mental:</strong> A medida que adquieras más habilidad, podrás realizar sumas de forma más rápida utilizando estrategias mentales, como descomponer los números en partes más manejables o encontrar sumas cercanas para estimar el resultado.</li>
                    </ol>
                    Con práctica y paciencia, podrás mejorar tu comprensión y habilidades en suma, lo que te ayudará en tu educación matemática y en la vida diaria.</p>
                    <h3>Practicar</h3>
                    <p>Aquí tienes algunos ejercicios para practicar la Resta:</p>
                    <button onclick="window.location.href = 'Suma.html';">Practicar La suma</button>
                `;
                break;
            case 'division':
                // Detalles de la Division ...
                break;
            case 'potenciacion':
                // Detalles de la potenciacion ...
                break;
            case 'multiplicacion':
                // Detalles de la radicacion ...
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

