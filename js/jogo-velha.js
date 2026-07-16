const casas = document.querySelectorAll(".casa");
const resultado = document.getElementById("resultado");
const reiniciar = document.getElementById("reiniciar");

let equipeAtual = estado.equipeAtual;
const timeA = document.getElementById("timeA");
const timeB = document.getElementById("timeB");

let jogoAtivo = true;
let pontos = 5;
let tabuleiro = [
    "", "", "",
    "", "", "",
    "", "", ""
];

// coloque aqui as imagens das equipes
const imagemA = "../imagem/reino-sul.png";
const imagemB = "../imagem/reino-norte.png";

const combinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

casas.forEach(casa=>{
    casa.addEventListener("click", jogar);
});

reiniciar.addEventListener("click", resetar);


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

    estado.equipeAtual = equipeAtual;
    salvarEstado();

    destacarEquipe();

}


function jogar(){

    if(!jogoAtivo) return;

    const indice = this.dataset.index;

    if(tabuleiro[indice] != "") return;

    tabuleiro[indice] = equipeAtual;

    const img = document.createElement("img");

    if(equipeAtual == "equipeA"){
        img.src = imagemA;
    }else{
        img.src = imagemB;
    }

    this.appendChild(img);

    verificar();

    if(!jogoAtivo) return;

    equipeAtual = equipeAtual == "equipeA" ? "equipeB" : "equipeA";
    trocarEquipe()

}

function verificar(){

    for(const combo of combinacoes){

        const [a,b,c] = combo;

        if(
            tabuleiro[a] != "" &&
            tabuleiro[a] == tabuleiro[b] &&
            tabuleiro[a] == tabuleiro[c]
        ){

            jogoAtivo = false;

            resultado.textContent =
                tabuleiro[a] == "equipeA"
                ? "Reino do Sul venceu!"
                : "Reino do Norte venceu!";
                adicionarPonto(estado.equipeAtual, pontos);

            return;
        }
    }

    if(!tabuleiro.includes("")){
        jogoAtivo = false;
        resultado.textContent = "Empate!";
    }
}

function resetar(){

    tabuleiro = [
        "", "", "",
        "", "", "",
        "", "", ""
    ];

    jogador = "A";
    jogoAtivo = true;

    resultado.textContent = "";
    vez.textContent = "Vez: Reino do Sul";

    casas.forEach(casa=>{
        casa.innerHTML = "";
    });
}

destacarEquipe();