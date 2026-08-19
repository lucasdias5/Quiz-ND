const botao = document.querySelectorAll('.alternativas');

// vou separar por questões porque vai ser muito botão

// questão 1

const qst1alt1 = document.getElementById('1_alt-1');
const qst1alt2 = document.getElementById('1_alt-2');
const qst1alt3 = document.getElementById('1_alt-3');
const qst1alt4 = document.getElementById('1_alt-4');

botao.forEach(botao => {
    botao.addEventListener('click', function() {

        qst1alt1.style.backgroundColor = 'red'
        qst1alt2.style.backgroundColor = 'green'
        qst1alt3.style.backgroundColor = 'red'
        qst1alt4.style.backgroundColor = 'red'
        
    })
})

// questão 2

const qst2alt1 = document.getElementById('2_alt-1');
const qst2alt2 = document.getElementById('2_alt-2');
const qst2alt3 = document.getElementById('2_alt-3');
const qst2alt4 = document.getElementById('2_alt-4');

botao.forEach(botao => {
    botao.addEventListener('click', function() {

        qst2alt1.style.backgroundColor = 'red'
        qst2alt2.style.backgroundColor = 'green'
        qst2alt3.style.backgroundColor = 'red'
        qst2alt4.style.backgroundColor = 'red'
        
    })
})

// questão 3

const qst3alt1 = document.getElementById('3_alt-1');
const qst3alt2 = document.getElementById('3_alt-2');
const qst3alt3 = document.getElementById('3_alt-3');
const qst3alt4 = document.getElementById('3_alt-4');

botao.forEach(botao => {
    botao.addEventListener('click', function() {

        qst3alt1.style.backgroundColor = 'red'
        qst3alt2.style.backgroundColor = 'green'
        qst3alt3.style.backgroundColor = 'red'
        qst3alt4.style.backgroundColor = 'red'
        
    })
})