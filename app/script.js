function validarLogin(){
    const produto = document.getElementById("produto").value.trim();
    const tipo = document.getElementById("tipo").value.trim();
    const quantidade = document.getElementById("quantidade").value;

    if(produto === "" || tipo === "" || quantidade === ""){
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    return true;
}