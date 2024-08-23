const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const muneco = document.querySelector(".muneco");
const PR = document.querySelector(".PR");
const P = document.querySelector(".P");
const copiar = document.querySelector(".copiar")


function btnencriptar() {

    const textoEncriptado = encriptar(textArea.value)  
    mensaje.value = textoEncriptado
    textArea.value = "";
    ocultarAdelante();
}

function encriptar (stringEncriptada){
    let matrizcodigo = [["e","enter"],["i","ims"],["a","ai"],["o","ober"],["u","ufat"]];


   for (let i = 0; i < matrizcodigo.length; i++) {
    if (stringEncriptada.includes(matrizcodigo[i][0])) {
        stringEncriptada= stringEncriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
    }
    
   }
   return stringEncriptada
}

function btndesencriptar() {

    const textoEncriptado = desencriptar(textArea.value)  
    mensaje.value = textoEncriptado
    textArea.value = "";
  
}



function desencriptar (stringDesncriptada){
    let matrizcodigo = [["e","enter"],["i","ims"],["a","ai"],["o","ober"],["u","ufat"]];


   for (let i = 0; i < matrizcodigo.length; i++) {
    if (stringDesncriptada.includes(matrizcodigo[i][1])) {
        stringDesncriptada= stringDesncriptada.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0])
    }
    
   }
   return stringDesncriptada
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    PR.classList.add("ocultar");
    P.classList.add("ocultar");
    copiar.classList.add("show")
}

function copiar1(){

    var texto = document.querySelector(".mensaje").value;
    navigator.clipboard.writeText(texto)
    alert("texto copiado");

}