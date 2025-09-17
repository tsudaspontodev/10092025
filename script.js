'use strict'; //Ajuda evitar erros no JS

const inputNome = document.getElementById('nome');
// campo de texto do nome

const inputAno = document.getElementById('ano');
// campo de texto do ano

const botaoCalcular = document.getElementById('btn-calcular');
// botão de calcular a idade

const resultado = document.getElementById('resultado');
// parágrafo onde aparece o resultado

const anoAtual = new Date().getFullYear();
//descobrir o ano atual

botaoCalcular.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    const anoNascStr = inputAno.value.trim();
    const anoNasc = Number(anoNascStr);
    const anoValido = Number.isInteger(anoNasc) && anoNasc >= 1900 && anoNasc <= anoAtual;

    if (!anoValido) {
        resultado.textContent = 'Por favor, coloque um ano válido 1900 - 2100';
        return; //Saí da função sem continuar
    }

    const idade = anoAtual - anoNasc;
    //resultado.textContent = (`${nome}, tem ${idade} anos de idade`);

    const nomeDefault = nome || 'Visitante';

    const mensagem = `Olá, ${nomeDefault}! Você tem ${idade} anos em ${anoAtual}`;

    resultado.textContent = mensagem

    inputNome.select()

});

[inputNome, inputAno].forEach(campo => {
    campo.addEventListener('keydown', (evento) => {
        if (evento.key === 'Enter') {
            botaoCalcular.click();
        }
    })
});

botaoCalcular.addEventListener('mouseenter', () => {
    botaoCalcular.dataset.labelAntiga = botaoCalcular.textContent; 
    botaoCalcular.textContent = 'Clique aqui!';
});
botaoCalcular.addEventListener('mouseleave', () => {
    botaoCalcular.textContent = botaoCalcular.dataset.labelAntiga || 'Calcular idade';
});
