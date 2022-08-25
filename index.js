alert("Bienvenido a 'El amigo de mi primo', una aplicación que te permite contar números primos hasta un valor que nos brindes.")
let limite = parseInt(prompt("Introduzca el número límite del recuento: "))
let menu = true
let opciones = parseInt(prompt("Seleccione el tipo de recuento: 1-Cantidad de primos, 2- Todos los primos, 3- FInaliza el proceso"))
let resultado = 0
let contadorPrimos = " "

while(menu === true){
    if(opciones === 1){
        for(i = 2; i < limite; i++){
            if(limite % i !== 0){
                resultado += 1
            }
            else if(limite % i === 0) {
                continue
            }  
            
        }
        alert(resultado)
        alert("Fin del proceso.")
        menu = false


    } else if(opciones === 2){
        for(i = 2; i < limite; i++){
            if(limite % i !== 0){
                contadorPrimos += i +", "
            }
            else if(limite % i === 0) {
                continue
            }         
        }
        alert(contadorPrimos)
        alert("Fin del proceso.")
        menu = false


    } else if(opciones === 3){
        alert("Fin del proceso.")
        menu = false
    }
}



