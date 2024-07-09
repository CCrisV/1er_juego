// Aqui podemos utilizar el DOM para enviar parametros  las etiquetas de HTML
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hola Mundo"; 

let parrafo = document.querySelector('p');
parrafo.innerHTML = " Mi primer parrafo";
*/
//--------------------------------------------------variables-----------------------------------------
let intentos = 1;
let numeroMaximo = 10;
let listaNumerosSorteados = [];
//--------------------------------------------------funciones-----------------------------------------

//Mensajes default

function MensajesIniciales() {
    asignarTextoElemento('h1','Primer Juego');
    asignarTextoElemento('p',`metale un número entre 1 y ${numeroMaximo}`)
    console.log(numeroSecreto);
}

//Vamos a crear una función que haga lo del DOM
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//funcion para limpiar el input 

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

//función para generar un número aleatorio
function generarNumeroSecreto() {
    //devulve la parte entera de un número de 0 a 1 multiplicado  por 10 + 1 para que incluya el 0 y el 10
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se jugaron todos los números');
    } else {
        if ( listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            console.log(listaNumerosSorteados);
            return numeroGenerado;
        }
    }
}

//función para que salga un aviso cuando se le da click en un evento en  HTML
function intentoDeUsuario() {
    alert('Se activo Funcion');
}

//función para tomar el texto desde el html

function verificarIntento() {
    //se le puso el id en la etiqueta input del HTMl, . value para obtener le valor
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // === igual en valor y en tipo de variable.
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Es el numero, adivinó en ${intentos} ${(intentos == 1)? "intento":"intentos"}`);
        //quitar el estado deshabilitado del botón reiniciar:
        document.getElementById('reiniciar').removeAttribute('disabled');
    //Se puede evitar colocar dos veces lo mismo utilizando un else anidado a un if
    }else if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p',"El número secreto es menor");
        intentos++;
        limpiarCaja();  
        
    } else {
        asignarTextoElemento('p',"El número secreto es mayor");
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //generar otro número
    numeroSecreto = generarNumeroSecreto();
    //mostrar mensaje default
    MensajesIniciales();
    //deshabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //reiniciar variables
    intentos = 1;
}

//--------------------------------------------------Ejecucion------------------------------------------

let numeroSecreto = generarNumeroSecreto();
//Ejecutamos la función
MensajesIniciales();

//ejecutar la función, ojo el HTML solo se puede utilizaR EN UN EVENTO. 


/* Arreglos
Se definen let numero = [];
adicion al ultimo  numero.push(5);
empiezan desde 0 = primero  , indice numero[0]
se muestran console.log(numero);
tamaño numero.length por lo tanto el ultimo ingresado será console.log(numero[numero.length-1]);
*/
