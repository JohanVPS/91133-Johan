//recupera o nome do usuário do localStorage
const username = localStorage.getItem("username");

if(username){
    document.getElementById("userWelcome")
    .textContent = `Usuário: ${username}`
} else{
    document.getElementById("userWelcome")
    .textContent = "Nome de usuárioi não encontrado."
};



//Função para sair (destuir a sessão e voltar para o login)
document.getElementById("logoutBtn").addEventListener("click", 
function(){
    //Remove o nome de usuário do localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("produto");
    localStorage.removeItem("quantidade");
    localStorage.removeItem("preco");
    localStorage.removeItem("total");

    //Redireciona o usuário de volta para a página de login
    window.location.href = "index.html"; //Alterar para o caminho da página 
});



//Função para calcular o total e atualizar dinamicamente o total

document.getElementById("preco").addEventListener("input", calcularTotal);
document.getElementById("quantidade").addEventListener("input", calcularTotal);

function calcularTotal(){
    const qtd = parseFloat(document.getElementById("quantidade").value) || 0;
    const preco = parseFloat(document.getElementById("preco").value) || 0;
    
    const total = qtd * preco;

    document.getElementById("total").value = total.toFixed(2);
}



//função para cadastrar os produtos e salvar no LocalStorage
document.getElementById("cadBtn").addEventListener("click", 
    function(event){
        event.preventDefault();
        
        const prod = document.getElementById("produto").value;
        const qtd = parseInt(document.getElementById("quantidade").value);
        const preco = parseFloat(document.getElementById("preco").value);
        const total = parseFloat(document.getElementById("total").value);

        if(!prod || !qtd || !preco){
            alert("Por favor, preencha todos os campos.")
            return; 
        }
        
        localStorage.setItem("produto", prod)
        localStorage.setItem("quantidade", qtd)
        localStorage.setItem("preco", preco)
        localStorage.setItem("total", total)
    }
)