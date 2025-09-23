// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo").value;
    
    if (nombreAmigo.trim() === "" || nombreAmigo.length === 0) {
        alert("Por favor, inserte un nombre");
    } else {
    listaDeAmigos.push(nombreAmigo);
    actualizarListaAmigos();
    console.log(listaDeAmigos);
    }
    limpiarCampo();
}

function limpiarCampo() {
    document.getElementById("amigo").value = ' ';
}

function actualizarListaAmigos() {
let list = document.getElementById("listaAmigos");

}


function sortearAmigo() {

}