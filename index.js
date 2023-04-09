function encriptar(){
    let texto = document.getElementById("textoEntrada").value;
    var parrafoEncriptado = document.getElementById("parrafoEncriptadoDesencriptado");
    const tituloEncriptado = document.getElementById("tituloEncriptadoDesencriptado");
    var arrayTexto = texto.split("");
    var arrayEncriptado = [];
    var encriptado;
    var j=texto.length;
    
    for(let i=0; i<=texto.length;i++){
        arrayEncriptado[i]=arrayTexto[j];
        j--;
    }
    encriptado = arrayEncriptado.join("");

    if(texto.length != 0){
        tituloEncriptado.textContent = "Mensaje Encriptado Correctamente";
        parrafoEncriptado.textContent = encriptado;
        document.getElementById("esperandoTexto").style.display = "none";
        document.getElementById("textoEncriptadoDesencriptado").style.display = "block";
    }
    else{
        document.getElementById("esperandoTexto").style.display = "block";
        document.getElementById("textoEncriptadoDesencriptado").style.display = "none";
    }
}

function desencriptar(){
    let texto = document.getElementById("textoEntrada").value;
    var parrafoDesencriptado = document.getElementById("parrafoEncriptadoDesencriptado");
    const tituloDesencriptado = document.getElementById("tituloEncriptadoDesencriptado");
    var arrayTexto = texto.split("");
    var arrayDesencriptado = [];
    var desencriptado;
    var j=texto.length;
    
    for(let i=0; i<=texto.length;i++){
        arrayDesencriptado[i]=arrayTexto[j];
        j--;
    }
    desencriptado = arrayDesencriptado.join("");

    if(texto.length != 0){
        tituloDesencriptado.textContent = "Mensaje Desencriptado Correctamente";
        parrafoDesencriptado.textContent = desencriptado;
        document.getElementById("esperandoTexto").style.display = "none";
        document.getElementById("textoEncriptadoDesencriptado").style.display = "block";
    }
    else{
        document.getElementById("esperandoTexto").style.display = "block";
        document.getElementById("textoEncriptadoDesencriptado").style.display = "none";
    }
}