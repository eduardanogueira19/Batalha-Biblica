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

const pergunta = document.getElementById("palavra");

const botoes = [
    document.getElementById("A"),
    document.getElementById("B"),
    document.getElementById("C"),
    document.getElementById("D")
];

const btnConfirmar = document.getElementById("conferirResposta");
const btnProxima = document.getElementById("proximaPergunta");
const btnPassar = document.getElementById("passarPergunta");

const selectTime = document.getElementById("timeSelecionado");

const timeA = document.getElementById("timeA");
const timeB = document.getElementById("timeB");

let perguntasDisponiveis = [...perguntas];

let perguntaAtual;

let respostaSelecionada = null;

function destacarEquipe(){

    if(selectTime.value === "equipeA"){

        timeA.classList.add("ativo");
        timeB.classList.remove("ativo");

    }else{

        timeB.classList.add("ativo");
        timeA.classList.remove("ativo");

    }

}

selectTime.addEventListener("change", destacarEquipe);

destacarEquipe();

function mostrarPergunta(){

    if(perguntasDisponiveis.length === 0){

        pergunta.textContent = "Fim do jogo!";

        botoes.forEach(botao=>botao.disabled = true);

        btnConfirmar.disabled = true;
        btnProxima.disabled = true;
        btnPassar.disabled = true;

        return;

    }

    const indice = Math.floor(Math.random()*perguntasDisponiveis.length);

    perguntaAtual = perguntasDisponiveis.splice(indice,1)[0];

    pergunta.textContent = perguntaAtual.pergunta;

    respostaSelecionada = null;

    botoes.forEach((botao,i)=>{

        botao.textContent =
            String.fromCharCode(65+i)+" - "+perguntaAtual.alternativas[i];

        botao.disabled = false;

        botao.style.background = "";

    });

    btnConfirmar.disabled = true;
    btnProxima.disabled = false;

}

botoes.forEach((botao,indice)=>{

    botao.addEventListener("click",()=>{

        respostaSelecionada = indice;

        botoes.forEach(b=>b.style.background="");

        botao.style.background = "dodgerblue";

        btnConfirmar.disabled = false;

    });

});

btnConfirmar.addEventListener("click",()=>{

    botoes.forEach(b=>b.disabled=true);

    if(respostaSelecionada === perguntaAtual.correta){

        botoes[respostaSelecionada].style.background = "#2ecc71";

        adicionarPonto(selectTime.value,5);

    }else{

        botoes[respostaSelecionada].style.background = "#e74c3c";

        botoes[perguntaAtual.correta].style.background = "#2ecc71";
    

    }

    btnConfirmar.disabled = true;
    btnProxima.disabled = false;

});

btnProxima.addEventListener("click",()=>{

    mostrarPergunta();

});


mostrarPergunta();