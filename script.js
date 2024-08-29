let carrinho = [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const carrinhoCount = document.getElementById('carrinho-count');
    
    listaCarrinho.innerHTML = '';
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaCarrinho.appendChild(li);
    });

    carrinhoCount.textContent = carrinho.length;
}

// Adicionar uma funcionalidade para o formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sua mensagem foi enviada com sucesso!');
    this.reset();
});
