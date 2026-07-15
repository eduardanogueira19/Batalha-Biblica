const perguntas = [
    {
        pergunta: "Quem construiu o templo em Jerusalém?",
        alternativas: [
            "Davi",
            "Salomão",
            "Josias",
            "Elias"
        ],
        resposta: 1
    },

    {
        pergunta: "Quem dividiu o reino de Israel?",
        alternativas: [
            "Roboão",
            "Acabe",
            "Josafá",
            "Jeú"
        ],
        resposta: 0
    },

    {
        pergunta: "Quem construiu o templo em Jerusalém?",
        alternativas: [
            "Davi",
            "Salomão",
            "Josias",
            "Elias"
        ],
        resposta: 1
    },

    {
        pergunta: "Quem dividiu o reino de Israel?",
        alternativas: [
            "Roboão",
            "Acabe",
            "Josafá",
            "Jeú"
        ],
        resposta: 0
    },

    {
        pergunta: "Quem construiu o templo em Jerusalém?",
        alternativas: [
            "Davi",
            "Salomão",
            "Josias",
            "Elias"
        ],
        resposta: 1
    },

    {
        pergunta: "Quem dividiu o reino de Israel?",
        alternativas: [
            "Roboão",
            "Acabe",
            "Josafá",
            "Jeú"
        ],
        resposta: 0
    }
];

let perguntasDisponiveis = [...perguntas];


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

    document.getElementById("palavra").textContent =
        perguntaAtual.pergunta;

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

        if(i == perguntaAtual.resposta){

            botao.classList.add("correta");

        }

    });

    if(respostaSelecionada != perguntaAtual.resposta){

        document
            .getElementById(letras[respostaSelecionada])
            .classList.add("errada");

    }else{

        adicionarPonto(estado.equipeAtual, pontos);
        atualizarPlacar();

    }

    // Descarta a pergunta
    perguntasDisponiveis.splice(indicePerguntaAtual,1);

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