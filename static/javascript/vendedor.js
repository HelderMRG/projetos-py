

const btnapagar_conta = document.querySelector("#apagar_conta");
const modal_apagarConta = document.querySelector("#modal_apagarConta");
const cancelarApagarConta = document.querySelector("#cancelarApagarConta");

btnapagar_conta.addEventListener("click", () => {
    modal_apagarConta.style.display = 'block';
})

cancelarApagarConta.addEventListener("click", () => {
    modal_apagarConta.style.display = 'none';
})



const btnEscolha_formulario_senha = document.querySelector("#escolha_formulario_senha");
const btnEscolha_formulario_produtos = document.querySelector("#escolha_formulario_produtos");
const formulario_produtos = document.querySelector("#formulario_produtos");
const produtos = document.querySelector("#produtos");
const formulario_senha = document.querySelector("#formulario_senha");
const titulo = document.querySelector("#titulo");



btnEscolha_formulario_senha.addEventListener("click", () => {
    produtos.style.display = 'none';
    formulario_produtos.style.display = 'none';
    formulario_senha.style.display = 'flex';
    const titulo = document.querySelector("#titulo");
    titulo.textContent = "MUDAR SENHA"

})

btnEscolha_formulario_produtos.addEventListener("click", () => {

    if (produtos.style.display !== 'none') {
        produtos.style.display = 'none';
        formulario_produtos.style.display = 'flex';
        formulario_senha.style.display = 'none';
        titulo.textContent = 'ENVIAR PRODUTOS';
        btnEscolha_formulario_produtos.textContent = 'MEUS PRODUTOS';

    } else {
        produtos.style.display = 'block';
        formulario_produtos.style.display = 'none';
        formulario_senha.style.display = 'none';
        titulo.textContent = 'MEUS PRODUTOS';
        btnEscolha_formulario_produtos.textContent = 'ENVIAR PRODUTOS';

    }
})