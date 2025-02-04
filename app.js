// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let names = []
const listaAmigos = document.getElementById("listaAmigos")
const textField = document.getElementById("amigo")
const resultado = document.getElementById("resultado")

function isEmptyName(name) {    
    if (name == 0) {
        alert("El campo nombre no puede estar vacío")
        return true
    }
    return false
}

function actualizarLista() {
    listaAmigos.innerHTML = ""
    names.forEach(name => {
        const li = document.createElement("li")
        li.textContent = name
        listaAmigos.appendChild(li)
    })

    textField.value = ""
}

function agregarAmigo() {

    const name = document.getElementById("amigo").value

    if (!isEmptyName(name)) {
        names.push(name)

        resultado.innerHTML = ""

        actualizarLista()
    }
}

function sortearAmigo(){
    if(names.length != 0){
        let amigoSorteado = names[Math.floor(Math.random() * names.length)]
        resultado.innerHTML = "El amigo secreto es: " + amigoSorteado

        names = []
        listaAmigos.innerHTML = ""
    }
}





