document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(!username || !password){
        alert("Por favor, preencha todos os campos.")
        return;
    }
    if(password.length < 8){
        alert("A senha deve ter pelo menos 8 caracteres.");
        return;
    }

    localStorage.setItem("username", username)

    window.location.href = "cadastro.html";
})