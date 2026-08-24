let contador = 0

let resultado = document.getElementById('resultado');
let mensagem = document.getElementById('mensagem')

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
    
    
    if (e.target.id === idCorreto) {
        contador++
    }

    resultado.textContent = `Resultado: ${contador}/10`
    
    if (contador <= 3)  {
        mensagem.textContent = 'Por que você está aqui?'
    } else if (contador > 3 && contador <= 5) { 
        mensagem.textContent = 'Meio larper'
    } else if (contador > 5 && contador <= 7) {
        mensagem.textContent = 'Ok, você sabe bem até'
    } else if (contador > 7 && contador <= 9){
        mensagem.textContent = 'True Star Wars Fan'
    } else if (contador == 10) {
        mensagem.textContent = 'You are The Chosen One'
    }
})
