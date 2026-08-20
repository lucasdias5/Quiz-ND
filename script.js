const respostasCorretas = {
    1: "1_alt-2",
    2: "2_alt-2",
    3: "3_alt-3",
    4: "4_alt-2",
    5: "5_alt-4",
    6: "6_alt-1",
    7: "7_alt-2",
    8: "8_alt-4",
    9: "9_alt-2",
    10: "10_alt-4"
}

document.querySelector('.quiz').addEventListener('click', function (e) {
    
    if (!e.target.classList.contains('alternativas')) return;
    
    const numeroPergunta = e.target.id.split('_')[0];
    const idCorreto = respostasCorretas[numeroPergunta];

    const perguntas = e.target.closest('.perguntas');
    const btnAlternativas = perguntas.querySelectorAll('.alternativas');

    btnAlternativas.forEach(botao => {
        if (botao.id === idCorreto) {
            botao.classList.add('correta')
        } else {
            botao.classList.add('incorreta')
        }

    });

})