/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

DevMagno_-_-_-_Desarollo del Challenge 'Amigo secreto' */

// Declarando el array de amigos
const amigos = [];
n = 0;

//Creación de una función para limpiar el texto luego de guardar el nombre del amigo al array
function limpiarTexto(){
    document.querySelector('#amigo').value = '';
}


//Creación de una función para agregar un amigo al array y mostrarlo en la lista utilizando el botón "Añadir"
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;//Seleccionamos el valor del input que contiene el nombre del amigo
    
    //Mediante una condición verificamos si el campo está vacío
    if (nombreAmigo.trim() === ''){
        alert('Debes ingresar un nombre para continuar');
        return;
    }else{  //Si el campo no está vacío, se agrega el nombre al array y se muestra en la lista
        
        amigos.push(nombreAmigo);
        console.table(amigos);
        limpiarTexto();
        
        const listaAmigos = document.querySelector('#listaAmigos'); //Obtenemos la lista del documento html
        listaAmigos.innerHTML="";//limpieza de la lista existente para evitar duplicados
        
        amigos.forEach((amigo) => {
            const item = document.createElement('li'); //Creamos un elemento de lista
            item.textContent = amigo; //Agregamos el nombre del amigo a la lista
            listaAmigos.appendChild(item); //Agregamos el item a la lista  
        }

        );
        return;
    }

    
}

