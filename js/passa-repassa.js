let perguntasDisponiveis = [...perguntas];

// Carrega as perguntas já utilizadas
let perguntasUsadas = JSON.parse(localStorage.getItem("perguntasUsadas")) || [];

// Remove da lista as perguntas que já foram utilizadas
perguntasDisponiveis = perguntas.filter((_, indice) => !perguntasUsadas.includes(indice));

// Se todas já foram utilizadas, reinicia o ciclo
if (perguntasDisponiveis.length === 0) {
    localStorage.removeItem("perguntasUsadas");
    perguntasUsadas = [];
    perguntasDisponiveis = [...perguntas];
}

let perguntaAtual;
let indicePerguntaAtual;

let respostaSelecionada = null;

let equipeAtual = estado.equipeAtual;
let pontos = 3;

const letras = ["A","B","C","D"];
const timeA = document.getElementById("timeA");
const timeB = document.getElementById("timeB");

const conferirResposta = document.getElementById("conferirResposta");
const proximaPergunta = document.getElementById("proximaPergunta");
const passarPergunta = document.getElementById("passarPergunta");

const alternativas = document.querySelectorAll(".alternativas button");

const somAcerto = new Audio("../sons/acerto.mp3");
const somErro = new Audio("../sons/letraErro.mp3");
const somPassar = new Audio("../sons/passar.mp3")

alternativas.forEach((botao, indice) => {
    botao.classList.remove("selecionada");
    botao.addEventListener("click", () => {

        alternativas.forEach(btn => {
            btn.classList.remove("selecionada");
        });

        botao.classList.add("selecionada");

        respostaSelecionada = indice;

        conferirResposta.disabled = false;
    });

});


function destacarEquipe() {

    timeA.classList.remove("ativa");
    timeB.classList.remove("ativa");

    if (equipeAtual === "equipeA") {
        timeA.classList.add("ativa");
    } else {
        timeB.classList.add("ativa");
    }

}

function trocarEquipe() {

    equipeAtual =
        equipeAtual === "equipeA"
            ? "equipeB"
            : "equipeA";

    estado.equipeAtual = equipeAtual;
    salvarEstado();

    destacarEquipe();

}

function carregarPergunta(){
    indicePerguntaAtual = Math.floor(
        Math.random() * perguntasDisponiveis.length
    );

    perguntaAtual = perguntasDisponiveis[indicePerguntaAtual];

    // Salva a pergunta como utilizada (apenas uma vez)
    if (!perguntasUsadas.includes(perguntaAtual.id)) {
        perguntasUsadas.push(perguntaAtual.id);

        localStorage.setItem(
            "perguntasUsadas",
            JSON.stringify(perguntasUsadas)
        );
    }

    document.getElementById("palavra").textContent =
    perguntaAtual.pergunta;

    // Remove da lista desta partida
    perguntasDisponiveis.splice(indicePerguntaAtual, 1);

    const letras = ["A","B","C","D"];

    letras.forEach((letra,i)=>{

        const botao = document.getElementById(letra);

        botao.textContent =
            `${letra} - ${perguntaAtual.alternativas[i]}`;

        botao.classList.remove(
            "selecionada",
            "correta",
            "errada"
        );

        botao.disabled = false;

    });

    respostaSelecionada = null;

    conferirResposta.disabled = true;
    proximaPergunta.disabled = true;
    passarPergunta.disabled = false;

}


conferirResposta.onclick = ()=>{

    if(respostaSelecionada == null)
        return;

    const letras = ["A","B","C","D"];

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

        adicionarPonto(estado.equipeAtual, pontos);
        atualizarPlacar();

    }

    conferirResposta.disabled = true;
    proximaPergunta.disabled = false;

};

proximaPergunta.onclick = ()=>{
    pontos = 3;
    trocarEquipe();

    if(perguntasDisponiveis.length == 0){

        alert("Fim do jogo!");

        return;

    }

    carregarPergunta();

};

passarPergunta.onclick = ()=>{
    somPassar.currentTime = 0;
    somPassar.play();
    trocarEquipe();
    
    pontos--;

    if (pontos === 1){
        proximaPergunta.disabled = false;
        passarPergunta.disabled = true;
    } 

};


destacarEquipe();  
atualizarPlacar();
carregarPergunta();