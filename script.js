const palabras = ["PERRO","GATO","CABALLO","LECHUZA","SIMIO","CODORNIZ","GALLINA","JIRAFA","GORILA","CULEBRA","ARAÑA","MARTINETA","GUANACO","AVISPA","RINOCERONTE","LARVA","MOSQUITO"]



var jugar = document.getElementById("iniciar");
var palabra_elegida = "";

var contador_aciertos=0;
var contador_errores = 0; 
var imagen = document.getElementById("ahorcado")
var foto = `ahorcado_${contador_errores}.jpg`

jugar.addEventListener("click",iniciar)



//CLICK EN INICIAR JUEGO

function iniciar(event){
    imagen.src  = `ahorcado_${contador_errores}.jpg`
    contador_aciertos=0;
    contador_errores = 0; 
    
    var h1  = document.querySelector("h1")
        h1.textContent = "Bienvenido al juego del ahorcado";

    
    

    jugar.disabled=true;
    for (let i = 0; i<btn_letras.length; i++){
        btn_letras[i].disabled=false;                    
    }
    var cant_palabras = palabras.length;
    var random = Math.floor(Math.random()*cant_palabras);
    palabra_elegida = palabras[random];    
    var cant_letras = palabra_elegida.length;
    var palabra_span = document.getElementById("palabra_a_adivinar");
    palabra_span.innerHTML = "";

  
    
    for(let i=0 ; i<cant_letras ; i++){
        var span = document.createElement("span");        
        palabra_span.appendChild(span);
    }


}


var btn_letras = document.querySelectorAll("#letras button");



for (let i = 0; i<btn_letras.length; i++){
    btn_letras[i].addEventListener("click",click_letras);
}


//CLICK EN LETRAS


function click_letras(event){
    var spans = document.querySelectorAll("#palabra_a_adivinar span") //devuelve un array con los spans 
    var btn_letra_tocada = event.target;
    btn_letra_tocada.disabled=true;
    var letra_tocada = btn_letra_tocada.textContent;


    var acerto = false;
    

    for (let i =0; i < palabra_elegida.length;i++){
        if (letra_tocada == palabra_elegida[i]){
            //la variable i es la posicion de la letra en la palabra
            //la i coincide con el span en donde tenemos q mostrar la letra
            spans[i].textContent = letra_tocada;
            acerto=true;
            contador_aciertos++
        }
    }
        
    
    if (acerto==false){
        contador_errores++;
        foto = `ahorcado_${contador_errores}.jpg`
         imagen = document.getElementById("ahorcado")
        imagen.src = foto;            
        
    }

    if(contador_errores==6){
        var h1  = document.querySelector("h1")
        h1.textContent = "PERDISTE! La palabra era: " + palabra_elegida;
        game_over()
        
    }
    else if (contador_aciertos == palabra_elegida.length){
        var h1  = document.querySelector("h1")
        h1.textContent = "GANASTE";
        game_over();
    }

    //FIN DE JUEGO, GANANDO O PERDIENDO

  
    jugar.disabled = false;
}


function game_over(){
    for (let i = 0; i<btn_letras.length; i++){
        btn_letras[i].disabled=true;                    
    }
}
    game_over();

