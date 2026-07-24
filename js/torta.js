let perguntasDisponiveis = [...perguntas];


let perguntasUsadas = JSON.parse(localStorage.getItem("perguntasUsadas")) || [];

perguntasDisponiveis = perguntas.filter((_, indice) => !perguntasUsadas.includes(indice));

perguntasDisponiveis.sort((a, b) => a.id - b.id);

let perguntaAtual;
let indicePerguntaAtual;

let respostaSelecionada = null;

let pontos = 3;

const palavra = document.getElementById("palavra");
const letras = ["A","B","C","D"];
const timeA = document.getElementById("timeA");
const timeB = document.getElementById("timeB");

const conferirResposta = document.getElementById("conferirResposta");
const proximaPergunta = document.getElementById("proximaPergunta");


const alternativas = document.querySelectorAll(".alternativas button");

const somAcerto = new Audio("../sons/acerto.mp3");
const somErro = new Audio("../sons/letraErro.mp3");

const selectTime = document.getElementById("timeSelecionado");

selectTime.addEventListener("change", destacarEquipe); 

alternativas.forEach((botao, indice) => {

    botao.onclick = () => {

        alternativas.forEach(b =>
            b.classList.remove("selecionada")
        );

        botao.classList.add("selecionada");

        respostaSelecionada = indice;

        conferirResposta.disabled = false;

    };

});

function destacarEquipe() {

    if (selectTime.value === "equipeA") {
        timeA.classList.add("ativa");
        timeB.classList.remove("ativa");
    } else {
        timeB.classList.add("ativa");
        timeA.classList.remove("ativa");
    }

}

function carregarPergunta() {

    if (perguntasDisponiveis.length === 0) {

        palavra.textContent = "🏆 Fim do jogo! Todas as perguntas foram respondidas.";
        palavra.classList.add("fim-jogo");

        letras.forEach(letra => {
            const botao = document.getElementById(letra);
            botao.textContent = "";
            botao.disabled = true;
        });

        conferirResposta.disabled = true;
        proximaPergunta.disabled = true;

        return;
    }

    palavra.classList.remove("fim-jogo");

    indicePerguntaAtual = 0;
    perguntaAtual = perguntasDisponiveis[0];

    palavra.textContent = perguntaAtual.pergunta;

    letras.forEach((letra, i) => {

        const botao = document.getElementById(letra);

        botao.textContent = `${letra} - ${perguntaAtual.alternativas[i]}`;

        botao.classList.remove(
            "selecionada",
            "correta",
            "errada"
        );

        botao.disabled = false;

    });

    respostaSelecionada = null;

    conferirResposta.disabled = true;
    proximaPergunta.disabled = false;

}



conferirResposta.onclick = ()=>{

    if(respostaSelecionada == null)
        return;

    // Marca a pergunta como utilizada
    const indiceOriginal = perguntas.indexOf(perguntaAtual);

    if (!perguntasUsadas.includes(indiceOriginal)) {
        perguntasUsadas.push(indiceOriginal);

        localStorage.setItem(
            "perguntasUsadas",
            JSON.stringify(perguntasUsadas)
        );
    }

    perguntasDisponiveis.shift();

    letras.forEach((letra,i)=>{

        const botao = document.getElementById(letra);

        botao.disabled = true;

        if(i == perguntaAtual.correta){

            botao.classList.add("correta");

        }

    });

    if(respostaSelecionada != perguntaAtual.correta){

        document
            .getElementById(letras[respostaSelecionada])
            .classList.add("errada");
            somErro.currentTime = 0;
            somErro.play();

    }else{
        somAcerto.currentTime = 0;
        somAcerto.play();
        adicionarPonto(selectTime.value, pontos);
        atualizarPlacar();

    }

    
    conferirResposta.disabled = true;
    proximaPergunta.disabled = false;

};

proximaPergunta.onclick = () => {

    // Move a pergunta atual para o fim da fila
    perguntasDisponiveis.push(perguntasDisponiveis.shift());

    carregarPergunta();
};


destacarEquipe();  
atualizarPlacar();
carregarPergunta();