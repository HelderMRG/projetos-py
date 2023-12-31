



const btnapagar_conta = document.querySelector("#apagar_conta");
const modal_apagarConta = document.querySelector("#modal_apagarConta");
const cancelarApagarConta = document.querySelector("#cancelarApagarConta");
const btnEscolha_formulario_senha = document.querySelector("#escolha_formulario_senha");
const produtos = document.querySelector("#produtos");
const formulario_senha = document.querySelector("#formulario_senha");
const titulo = document.querySelector("#titulo");
const btnHistorico = document.querySelector("#btnHistorico");
const paginaInicial = document.querySelector("#paginaInicial");
const meus_pedidos = document.querySelector("#meus_pedidos");
const historico = document.querySelector("#historico");

btnapagar_conta.addEventListener("click", () => {
    modal_apagarConta.style.display = 'block';
})

cancelarApagarConta.addEventListener("click", () => {
    modal_apagarConta.style.display = 'none';
})


btnHistorico.addEventListener("click", () => {
    historico.style.display = 'block';
    produtos.style.display = 'none';
    formulario_senha.style.display = 'none';
    titulo.textContent = "HISTÓRICO DE COMPRAS";

})



btnEscolha_formulario_senha.addEventListener("click", () => {
    produtos.style.display = 'none';
    formulario_senha.style.display = 'flex';
    historico.style.display = 'none';
    titulo.textContent = "MUDAR SENHA"

})


paginaInicial.addEventListener("click", () => {
    window.location.href = 'http://localhost/projetos/py/templates/inicial_index.html';
})

meus_pedidos.addEventListener("click", () => {
    produtos.style.display = 'flex';
    formulario_senha.style.display = 'none';
    historico.style.display = 'none';
    titulo.textContent = "CARRINHO - CLIENTE"
})