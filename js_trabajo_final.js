var numero = 0;
var palabraB = '';
var listapal = ['ojete','coger','fumar','tomar','tirar'];
var palabra = '';
var puntos = 0;
/*Comprueba la letra y la colorea de su color */
function comprobar(){
    for (i = 0; i < 5; i++) {
        //Recorrer las posiciones
        for (j = 0; j < 5; j++) {
            console.log(palabraB[j] + ' - ' + palabra[i]);
            if (palabra.charAt(i) == palabraB.charAt(j)) {
                if (i == j) {   
                    inputs.eq(i).css('background-color', '#198754');
                    puntos = puntos + 10;
                    $('#pnt').text(puntos);
                    console.log('más 10 puntos');
                    break; //sale del blucle
                }
                else {
                    //Otra posicion
                    inputs.eq(i).css('background-color', '#ffc107');
                    puntos = puntos + 5;
                    $('#pnt').text(puntos);
                    console.log('mas 5 puntos');
                }
            }
        }
    }
}

function colorear(){
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            if(palabra[i] == palabraB[j]){

            }
        }
    }
}

function capturarPalabra(){
    inputs = $('#word' + numero).children();
    //Almacenar las palabras de los inputs
    palabra = [];

    for (i = 0; i < 5; i++) {
        palabra = palabra + inputs.eq(i).val();
    }
    console.log(palabra);
}

function haGanado(){
    if(palabra == palabraB) return true;
    else return false;
}




//OCULTAR CASILLAS
function ocultar() {
    for(let i=1;i<6;i++){
        $('#word' + i).css('display','none');
    }
}
//MOSTRAR SIGUIENTE LÍNEA
function mostrar(boton){
    $('#word' + numero).children().prop('disabled', true);
    numero++;
    $('#word' + numero).css('display','block');

}                    
//Funcion palabra aleatoria
function palabrarandom(){
    palabraB = listapal[ Math.floor( Math.random() * listapal.length) ];
    console.log(palabraB);
}

