async function adicionarAmigo() {
    const input = document.getElementById('nome');
    const nome = input.value.trim();

    if (!nome) {
        input.style.borderColor = '#e74c3c';
        setTimeout(() => {
            input.style.borderColor = '#ddd';
        }, 2000);
        return;
    }

    try {
        const response = await fetch('/api/adicionar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome })
        });

        if (response.ok) {
            input.value = '';
            input.style.borderColor = '#2ecc71';
            setTimeout(() => {
                input.style.borderColor = '#ddd';
            }, 2000);
        }
    } catch (error) {
        console.error('Erro:', error);
    }
}

async function carregarAmigos() {
    const lista = document.getElementById('lista-amigos');
    if (!lista) return;

    try {
        const response = await fetch('/api/listar');
        const amigos = await response.json();

        lista.innerHTML = '';
        amigos.forEach((amigo, index) => {
            const li = document.createElement('li');
            li.textContent = amigo;
            li.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s forwards`;
            lista.appendChild(li);
        });
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Adicionar evento de tecla Enter no input
const input = document.getElementById('nome');
if (input) {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            adicionarAmigo();
        }
    });
}

// Carregar lista de amigos quando estiver na página de listagem
if (window.location.pathname === '/listar') {
    carregarAmigos();
}