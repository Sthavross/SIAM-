document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn');
    
    startBtn.addEventListener('click', function () {
                window.location.href = `dashboardPrincipal.html`;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const gameOptions = document.querySelectorAll('.game-option');

    gameOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedGame = this.id;
            // Redirigir a la página del juego seleccionado
            window.location.href = `${selectedGame}.html`;
        });
    });
});



//Seleccionamos los elemtos del DOM

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let repuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion = document.querySelector("#msj_correccion");
let operador = document.querySelector("#operacion");
let operacion_actual;

//Guardamos numeros aleatorios de la operacion en variables, en este caso n1 y n2

let n1, n2;

//Funcion suma

function btnSuma(){
    //limpiamos el Div contenedor de las correcciones
    msj_correccion.innerHTML = "";

    //Agregamos la clase activa al boton suma y la quitamos del resto
    activarBoton("suma");
    operacion_actual = "+";
    //asignamos la operacion suma a la etiqueta
    operador.innerHTML = " + "

    //generamos los numeros aleatorios de la suma
    nuevaSuma();
}

function nuevaSuma(){
    //generamos 2 numeros aleatorios
    n1 = parseInt(Math.random() * 100);
    n2 = parseInt(Math.random() * 100);

    //Asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;

    //colocamos el cursor en el input
    repuesta_usuario.focus();
}

//Funcion Producto

function btnProducto(){
    //limpiamos el Div contenedor de las correcciones
    msj_correccion.innerHTML = "";

    //Agregamos la clase activa al boton producto y la quitamos del resto
    activarBoton("producto");
    operacion_actual = "*";
    //asignamos la operacion producto a la etiqueta
    operador.innerHTML = " x "

    //generamos los numeros aleatorios del producto
    nuevoProducto();
}

function nuevoProducto(){
    //generamos 2 numeros aleatorios
    n1 = parseInt(Math.random() * 10);
    n2 = parseInt(Math.random() * 10);

    //Asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;

    //colocamos el cursor en el input
    repuesta_usuario.focus();
}

//Funcion Resta

function btnResta(){
    //limpiamos el Div contenedor de las correcciones
    msj_correccion.innerHTML = "";

    //Agregamos la clase activa al boton resta y la quitamos del resto
    activarBoton("resta");
    operacion_actual = "-";
    //asignamos la operacion resta a la etiqueta
    operador.innerHTML = " - "

    //generamos los numeros aleatorios de la resta
    nuevaResta();
}

function nuevaResta(){
    //generamos 2 numeros aleatorios
    n1 = parseInt(Math.random() * 100 + 5);
    n2 = parseInt(Math.random() * 100);

    //Asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;

    //colocamos el cursor en el input
    repuesta_usuario.focus();
}

//Funcion Divicion

function btnDivision(){
    //limpiamos el Div contenedor de las correcciones
    msj_correccion.innerHTML = "";

    //Agregamos la clase activa al boton Dividir y la quitamos del resto
    activarBoton("division");
    operacion_actual = "/";
    //asignamos la operacion dividir a la etiqueta
    operador.innerHTML = " / "

    //generamos los numeros aleatorios de la resta
    nuevaDivision();
}

function nuevaDivision(){
    let divisores = [];
    //generamos 2 numeros aleatorios
    n1 = parseInt(Math.random() * 100 + 1);
    
    //Encontramos los divisores del numero generado y lo guardamos en el arreglo
    for(var i=1; i<=n1; i++){
        if(n1%i===0){//es divisor
            divisores.push(i);
        }
    }
    //Seleccionamos una posicion aleatoria de los numeros que son divisores
    let pos = parseInt(Math.random() * (divisores.length))

    n2 = divisores[pos];
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    repuesta_usuario.focus();

}

//funcion que controla si la respuesta es correcta
function corregir(){
    //Si el usuario no ha ingresado nada no continua
    if(repuesta_usuario.value == ""){
        return;
    }

    let solucion;

    let operador = n1 + operacion_actual + n2;
    solucion = eval(operador);

    //se crea un elemento i para agregar el elemento de correcto o incorrecto
    var i = document.createElement("i");
    //valido si la entrada del usuario es iagual a la solucion
    if(repuesta_usuario.value == solucion){
        i.className = "fa-solid fa-check"
    } else{
        i.className = "fa-regular fa-circle-xmark"
    }

    //Agregando elemento al contenedor de las correciones
    msj_correccion.appendChild(i);

    //Verificar si paso a otra operacion
    if(operacion_actual == "+" ){
            nuevaSuma();
    }else if(operacion_actual == "-"){
            nuevaResta();
    }else if(operacion_actual == "*"){
            nuevoProducto();
    }else if(operacion_actual == "/"){
            nuevaDivision();
    }

    //limpiando input
    repuesta_usuario.value = "";

}

    //Agregando al input el evento onkeydown para detectar Enter
    repuesta_usuario.onkeydown = function(e){
        var ev = document.all ? window.Event : e;
        if(ev.keyCode == 13){
            corregir();
        }
    }

//Esta funcion la creamos luego cuando tengamos listos los estilos
function activarBoton(idBoton) {
}