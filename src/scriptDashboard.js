
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
                topicDetailsHTML =`
                <!-- Detalles de la resta -->
                <h2>Resta</h2>
                <h3>Historia de la Resta</h3>
                <p>La resta es una de las operaciones matemáticas fundamentales junto con la suma. Al igual que la suma, la resta ha sido utilizada desde tiempos antiguos por diversas civilizaciones para resolver problemas relacionados con cantidades y medidas. A lo largo de la historia, se ha desarrollado tanto en su aplicación a números naturales como a números negativos, fraccionarios y decimales.</p>
                <h3>Propiedades de la Resta</h3>
                <p>Al igual que la suma, la resta también posee un conjunto de propiedades:
                <ul>
                <li><strong>Propiedad conmutativa:</strong> La resta no es conmutativa. Esto significa que el orden de los números involucrados en la operación afecta el resultado. Es decir, a - b no es igual a b - a.</li>
                <li><strong>Propiedad asociativa:</strong> La resta tampoco es asociativa. Esto significa que el agrupamiento de los números no afecta el resultado. Es decir, (a - b) - c no necesariamente es igual a a - (b - c).</li>
                <li><strong>Propiedad de identidad:</strong> No existe una propiedad de identidad para la resta como la que tiene la suma con el cero.</li>
                <li><strong>Propiedad clausurativa:</strong> Al igual que con la suma, el resultado de una resta pertenece al mismo conjunto numérico de los términos involucrados, siempre que compartan el mismo conjunto.</li></p>
                </ul>
                <h3>Entender la Resta</h3>
                <p>
                <ol>
                <li><strong>Comprende el concepto básico:</strong> La resta es la acción de quitar una cantidad de otra. Por ejemplo, si tienes 5 manzanas y quitas 2, te quedan 3 manzanas. Esto se expresa matemáticamente como 5 - 2 = 3.</li>

                <li><strong>Conoce los términos clave:</strong>
                
                <strong>Minuendo:</strong> Es el número del cual se resta otro número.
                <strong>Sustraendo:</strong> Es el número que se resta del minuendo.
                <strong>Diferencia:</strong> Es el resultado de la resta.
                <strong>Operador de resta (-):</strong> Es el símbolo que indica la operación de resta.</li>
                <li><strong>Practica con ejemplos simples:</strong> Al igual que con la suma, empieza restando números pequeños y aumenta gradualmente la dificultad.</li>
                
                <li><strong>Utiliza manipulativos o materiales físicos:</strong> Al igual que con la suma, puedes usar objetos físicos para representar los números y las operaciones de resta.</li>
                
                <li><strong>Entiende las propiedades de la resta:</strong>
                
                <strong>Conmutativa:</strong> a - b ≠ b - a.
                <strong>Asociativa:</strong> (a - b) - c ≠ a - (b - c).
                <strong>Inexistencia de identidad aditiva:</strong> No existe un elemento neutro en la resta como el cero en la suma.
                <strong>Inverso aditivo:</strong> a - a = 0. Restar un número de sí mismo da como resultado cero.</li>
                <li><strong>Practica con problemas reales:</strong> Encuentra situaciones cotidianas en las que puedas aplicar la resta, como calcular cambios o resolver problemas de tiempo.</li>
                
                <li><strong>Utiliza estrategias de resta mental:</strong> Al igual que con la suma, practica estrategias para realizar restas mentalmente de forma eficiente.</li>
                </ol>
                Con práctica y paciencia, podrás mejorar tu comprensión y habilidades en resta, lo que te será útil tanto en matemáticas como en la vida diaria.</p>
                <h3>Practicar</h3>
                <p>Aquí tienes algunos ejercicios para practicar la Resta:</p>
                <button onclick="window.location.href = 'Resta.html';">Practicar La Resta</button>
            `;

                break;
            case 'multiplicacion':
                topicDetailsHTML =`
                <!-- Detalles de la multiplicacion -->
                <h2>Multiplicación</h2>
                <h3>Historia de la Multiplicación</h3>
                <p>La multiplicación es una de las operaciones fundamentales en matemáticas que involucra la combinación repetida de cantidades. Su origen se remonta a las antiguas civilizaciones, donde la necesidad de calcular áreas de tierras cultivables y resolver problemas comerciales llevó al desarrollo de técnicas de multiplicación. Civilizaciones como los egipcios, babilonios y griegos desarrollaron métodos para multiplicar números enteros, fracciones y hasta para encontrar raíces cuadradas.</p>
                <h3>Propiedades de la Multiplicación</h3>
                <p>La multiplicación posee varias propiedades importantes:
                <ul>
                <li><strong>Propiedad conmutativa:</strong> Esta propiedad establece que el orden de los factores no altera el producto. Es decir, a × b es igual a b × a.</li>
                <li><strong>Propiedad asociativa:</strong> La multiplicación también es asociativa, lo que significa que el agrupamiento de los factores no afecta el resultado final. Es decir, (a × b) × c es igual a a × (b × c).</li>
                <li><strong>Propiedad de identidad:</strong> La multiplicación tiene una propiedad de identidad, donde el número 1 es el elemento neutro. Cualquier número multiplicado por 1 es igual a ese número. Es decir, a × 1 = a.</li>
                <li><strong>Propiedad distributiva:</strong> Esta propiedad establece que la multiplicación se distribuye sobre la adición. Es decir, a × (b + c) es igual a (a × b) + (a × c).</li></p>
                </ul>
                <h3>Entender la Multiplicación</h3>
                <p>
                <ol>
                <li><strong>Comprende el concepto básico:</strong> La multiplicación es una forma abreviada de sumar un número consigo mismo varias veces. Por ejemplo, 4 × 3 se puede entender como 4 sumado tres veces: 4 + 4 + 4 = 12.</li>

                <li><strong>Conoce los términos clave:</strong>
                
                <strong>Factores:</strong> Son los números que se están multiplicando.
                <strong>Producto:</strong> Es el resultado de la multiplicación.
                <strong>Operador de multiplicación (×):</strong> Es el símbolo que indica la operación de multiplicación.</li>
                <li><strong>Practica con ejemplos simples:</strong> Empieza multiplicando números pequeños y luego aumenta gradualmente la dificultad.</li>
                
                <li><strong>Utiliza manipulativos o materiales físicos:</strong> Puedes usar objetos físicos para representar los números y la operación de multiplicación.</li>
                
                <li><strong>Entiende las propiedades de la multiplicación:</strong>
                
                <strong>Conmutativa:</strong> a × b = b × a.
                <strong>Asociativa:</strong> (a × b) × c = a × (b × c).
                <strong>Identidad multiplicativa:</strong> a × 1 = a.
                <strong>Distributiva:</strong> a × (b + c) = (a × b) + (a × c).</li>
                <li><strong>Practica con problemas reales:</strong> Encuentra situaciones cotidianas en las que puedas aplicar la multiplicación, como calcular áreas o resolver problemas de proporción.</li>
                
                <li><strong>Utiliza estrategias de multiplicación mental:</strong> A medida que adquieras más habilidad, podrás realizar multiplicaciones de forma más rápida utilizando estrategias mentales, como descomponer los números o encontrar patrones.</li>
                </ol>
                Con práctica y paciencia, podrás mejorar tu comprensión y habilidades en multiplicación, lo que te será útil tanto en matemáticas como en la vida diaria.</p>
                <h3>Practicar</h3>
                <p>Aquí tienes algunos ejercicios para practicar la Multiplicación:</p>
                <button onclick="window.location.href = 'multiplicacion.html';">Practicar La Multiplicación</button>
            `;
                break;
            case 'division':
                topicDetailsHTML =`
                    <!-- Detalles de la división -->
                    <h2>División</h2>
                    <h3>Historia de la División</h3>
                    <p>La división es una de las operaciones básicas en matemáticas que consiste en repartir o distribuir una cantidad en partes iguales. Su origen se remonta a las antiguas civilizaciones, donde la necesidad de repartir alimentos, tierras y otros recursos llevó al desarrollo de técnicas para realizar divisiones. Civilizaciones como los egipcios, babilonios y griegos desarrollaron métodos para dividir números enteros y fraccionarios.</p>
                    <h3>Propiedades de la División</h3>
                    <p>La división posee varias propiedades importantes:
                    <ul>
                    <li><strong>Propiedad conmutativa:</strong> A diferencia de la suma y la multiplicación, la división no es conmutativa. Es decir, a ÷ b no siempre es igual a b ÷ a.</li>
                    <li><strong>Propiedad asociativa:</strong> La división tampoco es asociativa. Es decir, (a ÷ b) ÷ c no necesariamente es igual a a ÷ (b ÷ c).</li>
                    <li><strong>Propiedad de identidad:</strong> La división no tiene una propiedad de identidad similar a la multiplicación. Sin embargo, existe el concepto de la identidad multiplicativa, donde un número dividido por sí mismo es igual a 1: a ÷ a = 1.</li>
                    <li><strong>Propiedad clausurativa:</strong> Esta propiedad establece que el resultado de una división pertenece al mismo conjunto numérico de los dividendos, siempre que el divisor no sea cero.</li></p>
                    </ul>
                    <h3>Entender la División</h3>
                    <p>
                    <ol>
                    <li><strong>Comprende el concepto básico:</strong> La división es la operación inversa de la multiplicación. Implica dividir un número en partes iguales. Por ejemplo, 12 ÷ 3 se puede entender como dividir 12 en 3 partes iguales, resultando en 4.</li>

                    <li><strong>Conoce los términos clave:</strong>
                    
                    <strong>Dividendo:</strong> Es el número que se divide.
                    <strong>Divisor:</strong> Es el número por el cual se divide el dividendo.
                    <strong>Cociente:</strong> Es el resultado de la división.
                    <strong>Operador de división (÷):</strong> Es el símbolo que indica la operación de división.</li>
                    <li><strong>Practica con ejemplos simples:</strong> Empieza dividiendo números pequeños y aumenta gradualmente la dificultad.</li>
                    
                    <li><strong>Entiende las propiedades de la división:</strong>
                    
                    <strong>No conmutativa:</strong> a ÷ b ≠ b ÷ a.
                    <strong>No asociativa:</strong> (a ÷ b) ÷ c ≠ a ÷ (b ÷ c).
                    <strong>Identidad multiplicativa:</strong> a ÷ a = 1.
                    <strong>No existe identidad aditiva:</strong> No hay un número que funcione como elemento neutro en la división.</li>
                    <li><strong>Practica con problemas reales:</strong> Encuentra situaciones cotidianas en las que puedas aplicar la división, como repartir alimentos o calcular tasas de interés.</li>
                    
                    <li><strong>Utiliza estrategias de división mental:</strong> A medida que adquieras más habilidad, podrás realizar divisiones de forma más rápida utilizando estrategias mentales, como buscar múltiplos comunes o descomponer los números.</li>
                    </ol>
                    Con práctica y paciencia, podrás mejorar tu comprensión y habilidades en división, lo que te será útil tanto en matemáticas como en la vida diaria.</p>
                    <h3>Practicar</h3>
                    <p>Aquí tienes algunos ejercicios para practicar la División:</p>
                    <button onclick="window.location.href = 'divicion.html';">Practicar La División</button>
                `;
                break;
            case 'potenciacion':
                topicDetailsHTML =`
                    <!-- Detalles de la potenciacion -->
                    <h2>Potenciación</h2>
                    <h3>Historia de la Potenciación</h3>
                    <p>La potenciación es una operación matemática que consiste en multiplicar un número por sí mismo un número determinado de veces. Su origen se remonta a la necesidad de expresar multiplicaciones repetidas de manera más concisa y clara. El concepto de potenciación se desarrolló a lo largo de la historia en diferentes culturas, con contribuciones significativas de matemáticos como Arquímedes, Brahmagupta y Leonardo de Pisa (también conocido como Fibonacci).</p>
                    <h3>Propiedades de la Potenciación</h3>
                    <p>La potenciación tiene varias propiedades importantes:
                    <ul>
                    <li><strong>Propiedad de potencia de base:</strong> Para dos potencias con la misma base, al multiplicarlas, se conserva la base y se suman los exponentes: a^m × a^n = a^(m+n).</li>
                    <li><strong>Propiedad de potencia de potencia:</strong> Para elevar una potencia a otra potencia, se conserva la base y se multiplican los exponentes: (a^m)^n = a^(m*n).</li>
                    <li><strong>Propiedad del producto de potencias:</strong> Para multiplicar potencias con la misma base, se conserva la base y se suman los exponentes: (a^m) × (a^n) = a^(m+n).</li>
                    <li><strong>Propiedad del cociente de potencias:</strong> Para dividir potencias con la misma base, se conserva la base y se restan los exponentes: (a^m) ÷ (a^n) = a^(m-n).</li>
                    <li><strong>Propiedad de la potencia de cero:</strong> Cualquier número elevado a la potencia cero es igual a 1: a^0 = 1 (siempre que a sea diferente de cero).</li>
                    </ul>
                    <h3>Entender la Potenciación</h3>
                    <p>
                    <ol>
                    <li><strong>Comprende el concepto básico:</strong> La potenciación es una forma abreviada de escribir multiplicaciones repetidas. Por ejemplo, 2^3 se puede entender como 2 × 2 × 2 = 8.</li>

                    <li><strong>Conoce los términos clave:</strong>
                    
                    <strong>Base:</strong> Es el número que se va a multiplicar repetidamente.
                    <strong>Exponente:</strong> Es el número que indica cuántas veces se multiplica la base consigo misma.
                    <strong>Resultado:</strong> Es el valor obtenido después de realizar la potenciación.
                    <strong>Operador de potenciación (^):</strong> Es el símbolo que indica la operación de potenciación.</li>
                    <li><strong>Practica con ejemplos simples:</strong> Empieza elevando números pequeños a diferentes potencias y observa los patrones.</li>
                    
                    <li><strong>Entiende las propiedades de la potenciación:</strong>
                    
                    <strong>Propiedad de potencia de base:</strong> a^m × a^n = a^(m+n).
                    <strong>Propiedad de potencia de potencia:</strong> (a^m)^n = a^(m*n).
                    <strong>Propiedad del producto de potencias:</strong> (a^m) × (a^n) = a^(m+n).
                    <strong>Propiedad del cociente de potencias:</strong> (a^m) ÷ (a^n) = a^(m-n).
                    <strong>Propiedad de la potencia de cero:</strong> a^0 = 1 (siempre que a sea diferente de cero).</li>
                    <li><strong>Practica con problemas reales:</strong> Encuentra situaciones en las que puedas aplicar la potenciación, como calcular áreas o volumen de figuras geométricas.</li>
                    
                    <li><strong>Utiliza estrategias de potenciación mental:</strong> A medida que adquieras más habilidad, podrás realizar potenciaciones de forma más rápida utilizando estrategias mentales, como buscar patrones y simplificar operaciones.</li>
                    </ol>
                    Con práctica y paciencia, podrás mejorar tu comprensión y habilidades en potenciación, lo que te será útil tanto en matemáticas como en la vida diaria.</p>
                    <h3>Practicar</h3>
                    <p>Aquí tienes algunos ejercicios para practicar la Potenciación:</p>
                    <button onclick="window.location.href = 'potenciacion.html';">Practicar La Potenciación</button>
                `;
                break;
            case 'radicacion':
                topicDetailsHTML = `
                    <!-- Detalles de la radicacion -->
                    <h2>Radicación</h2>
                    <h3>Historia de la Radicación</h3>
                    <p>La radicación es una operación matemática que consiste en calcular la raíz de un número. Su origen se remonta a la necesidad de encontrar la medida de lados de figuras geométricas y la solución de ecuaciones. Los antiguos matemáticos babilonios y egipcios tenían métodos para encontrar raíces cuadradas, y la radicación ha sido una parte fundamental de las matemáticas desde entonces.</p>
                    <h3>Propiedades de la Radicación</h3>
                    <p>La radicación tiene algunas propiedades importantes:
                    <ul>
                    <li><strong>Propiedad de la raíz cuadrada:</strong> La raíz cuadrada de un número es un valor no negativo. Por ejemplo, la raíz cuadrada de 25 es 5.</li>
                    <li><strong>Propiedad de la raíz cúbica:</strong> La raíz cúbica de un número puede ser positiva o negativa. Por ejemplo, la raíz cúbica de -27 es -3.</li>
                    <li><strong>Propiedad de la raíz n-ésima:</strong> La raíz n-ésima de un número puede tener varias soluciones dependiendo de si n es par o impar y del signo del número. Por ejemplo, la raíz cuarta de 16 puede ser 2 o -2.</li>
                    </ul>
                    <h3>Entender la Radicación</h3>
                    <p>
                    <ol>
                    <li><strong>Comprende el concepto básico:</strong> La radicación es la operación inversa de la potenciación. Calcular la raíz cuadrada, cúbica u otra raíz n-ésima de un número significa encontrar el número que, elevado a cierta potencia, da como resultado el número original.</li>

                    <li><strong>Conoce los términos clave:</strong>
                    
                    <strong>Radicando:</strong> Es el número del cual se extrae la raíz.
                    <strong>Índice:</strong> Es el número que indica el tipo de raíz que se está calculando.
                    <strong>Resultado:</strong> Es el valor obtenido después de realizar la radicación.
                    <strong>Operador de radicación (⌃√):</strong> Es el símbolo que indica la operación de radicación.</li>
                    <li><strong>Practica con ejemplos simples:</strong> Empieza calculando raíces cuadradas y cúbicas de números pequeños.</li>
                    
                    <li><strong>Entiende las propiedades de la radicación:</strong>
                    
                    <strong>Propiedad de la raíz cuadrada:</strong> La raíz cuadrada de un número es siempre no negativa.
                    <strong>Propiedad de la raíz cúbica:</strong> La raíz cúbica de un número puede ser positiva o negativa.
                    <strong>Propiedad de la raíz n-ésima:</strong> La raíz n-ésima de un número puede tener varias soluciones dependiendo de si n es par o impar y del signo del número.</li>
                    <li><strong>Practica con problemas reales:</strong> Encuentra situaciones en las que puedas aplicar la radicación, como calcular medidas en geometría o resolver ecuaciones matemáticas.</li>
                    
                    <li><strong>Utiliza estrategias de radicación mental:</strong> A medida que adquieras más habilidad, podrás realizar cálculos de radicación de forma más rápida utilizando estrategias mentales, como buscar aproximaciones o descomponer los números en factores.</li>
                    </ol>
                    Con práctica y paciencia, podrás mejorar tu comprensión y habilidades en radicación, lo que te será útil tanto en matemáticas como en la vida diaria.</p>
                    <h3>Practicar</h3>
                    <p>Aquí tienes algunos ejercicios para practicar la Radicación:</p>
                    <button onclick="window.location.href = 'radicacion.html';">Practicar La Radicación</button>
                `;

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

