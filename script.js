document.querySelector('#btnIgual').addEventListener('click', igual);
document.querySelector('#btnLimpar').addEventListener('click', limpaCalc);

let visor = document.querySelector('#visorInput');
let num1 = null;
let num2 = null;
let resultado = null;

//Executa uma função para cada elemento do grupo de seleção
document.querySelectorAll('.btnNum').forEach((botao) => {

    //evento click para cada elemento
    document.getElementById(botao.id).addEventListener('click', () => {
        //visor recebe o valor dos botões
        visor.value += botao.value;
    });
});

function igual() {
    num2 = visor.value.substring(num1.length); //Segundo valor
    resultado = eval(num1 + num2) //Concatenação e Execução
    visor.value = resultado; //Lançamento do Resultado
};

function operacao(op) {
    visor.value += op; //adiciona a operação (soma, subtração...)
    num1 = visor.value; //Primeiro valor
};

function limpaCalc() {
    visor.value = '';
    num1 = null;
    num2 = null;
};