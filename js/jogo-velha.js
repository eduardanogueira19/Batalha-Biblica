const casas = document.querySelectorAll(".casa");
const resultado = document.getElementById("resultado");
const vez = document.getElementById("vez");
const reiniciar = document.getElementById("reiniciar");

let jogador = "A";
let jogoAtivo = true;

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



function jogar(){

    if(!jogoAtivo) return;

    const indice = this.dataset.index;

    if(tabuleiro[indice] != "") return;

    tabuleiro[indice] = jogador;

    const img = document.createElement("img");

    if(jogador == "A"){
        img.src = imagemA;
    }else{
        img.src = imagemB;
    }

    this.appendChild(img);

    verificar();

    if(!jogoAtivo) return;

    jogador = jogador == "A" ? "B" : "A";

    vez.textContent = jogador == "A"
        ? "Vez: Reino do Sul"
        : "Vez: Reino do Norte";
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
                tabuleiro[a] == "A"
                ? "Reino do Sul venceu!"
                : "Reino do Norte venceu!";

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

