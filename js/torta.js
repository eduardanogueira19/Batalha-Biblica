const perguntas = [

    {
        pergunta: "Quem construiu a arca?",
        alternativas: [
            "Abraão",
            "Noé",
            "Moisés",
            "Davi"
        ],
        correta: 1
    },

    {
        pergunta: "Quem derrotou Golias?",
        alternativas: [
            "Samuel",
            "Davi",
            "Saul",
            "Salomão"
        ],
        correta: 1
    },

    {
        pergunta: "Quem foi lançado na cova dos leões?",
        alternativas: [
            "Daniel",
            "José",
            "Elias",
            "Pedro"
        ],
        correta: 0
    }

];

const selectTime = document.getElementById("timeSelecionado");

let perguntasDisponiveis = [...perguntas];


let perguntaAtual;
let indicePerguntaAtual;

let respostaSelecionada = null;

let pontos = 3;

const letras = ["A","B","C","D"];
const timeA = document.getElementById("timeA");
const timeB = document.getElementById("timeB");

const conferirResposta = document.getElementById("conferirResposta");
const proximaPergunta = document.getElementById("proximaPergunta");


const alternativas = document.querySelectorAll(".alternativas button");

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

        document.getElementById("palavra").textContent = "Fim do jogo!";

        alternativas.forEach(botao => {
            botao.disabled = true;
        });

        conferirResposta.disabled = true;
        proximaPergunta.disabled = true;

        return;
    }

    indicePerguntaAtual = Math.floor(
        Math.random() * perguntasDisponiveis.length
    );

    // Guarda a pergunta sorteada
    perguntaAtual = perguntasDisponiveis[indicePerguntaAtual];

    // Mostra a pergunta
    document.getElementById("palavra").textContent =
        perguntaAtual.pergunta;

    // Atualiza as alternativas
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
    proximaPergunta.disabled = true;

}



conferirResposta.onclick = ()=>{

    if(respostaSelecionada == null)
        return;

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

    }else{

        adicionarPonto(selectTime.value, pontos);
        atualizarPlacar();

    }

    // Descarta a pergunta
    perguntasDisponiveis.splice(indicePerguntaAtual,1);

    conferirResposta.disabled = true;
    proximaPergunta.disabled = false;

};

proximaPergunta.onclick = ()=>{
    pontos = 3;

    if(perguntasDisponiveis.length == 0){

        alert("Fim do jogo!");

        return;

    }

    carregarPergunta();

};


destacarEquipe();  
atualizarPlacar();
carregarPergunta();