const rodadas = [

{
    dica: "Mulheres",
    palavras: [
        "MARIA",
        "ISABEL",
        "ESTER",
        "RAABE"
    ]
},

{
    dica: "Pais",
    palavras: [
        "JOSÉ",
        "DEUS",
        "ISAQUE",
        "ABRAÃO"
    ]
},

{
    dica: "Orou",
    palavras: [
        "ELIAS",
        "JESUS",
        "ANA"
    ]
},

{
    dica: "Não morreu",
    palavras: [
        "ENOQUE",
        "ELIAS"
    ]
},

{
    dica: "Princípios da Assembleia",
    palavras: [
        "BATISMO",
        "ENSINO",
        "CEIA",
        "ORAÇÃO"
    ]
},

{
    dica: "Igreja",
    palavras: [
        "PEDESTAL",
        "CADEIRA",
        "SONOPLASTA",
        "PASTOR"
    ]
},

{
    dica: "Países",
    palavras: [
        "NORUEGA",
        "FILIPINAS",
        "ESLOVAQUIA",
        "REINO UNIDO"
    ]
},

{
    dica: "Comida",
    palavras: [
        "ACEROLA",
        "PITAIA",
        "CACAU",
        "FRAMBOESA"
    ]
}

];

let rodadaAtual;
let palavrasAtual = [];

let letrasDescobertas = [];

let letrasErradas = [];

let indiceRodada = 0;

let equipeAtual = estado.equipeAtual;



const painel = document.getElementById("painelPalavra");

const dica = document.getElementById("dica");

const input = document.getElementById("letra");

const btnChutar = document.getElementById("btnChutar");

const painelErradas = document.getElementById("letrasErradas");

btnChutar.addEventListener("click", chutarLetra);


input.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        chutarLetra();

    }

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

function iniciarRodada() {

    

    rodadaAtual = rodadas[indiceRodada];

    palavrasAtual = rodadaAtual.palavras;

    dica.textContent = rodadaAtual.dica;

    letrasErradas = [];

    letrasDescobertas = [];

    for (let palavra of palavrasAtual) {

        letrasDescobertas.push(new Array(palavra.length).fill(""));

    }

    input.value = "";

    desenharPainel();

    desenharErradas();

}

function desenharPainel() {

    painel.innerHTML = "";

    for (let i = 0; i < palavrasAtual.length; i++) {

        const linha = document.createElement("div");
        linha.className = "linha";

        for (let j = 0; j < palavrasAtual[i].length; j++) {

            const caixa = document.createElement("div");

            caixa.className = "letra";

            caixa.textContent = letrasDescobertas[i][j];

            linha.appendChild(caixa);

        }

        painel.appendChild(linha);

    }

}

function desenharErradas() {

    painelErradas.innerHTML = "";

    letrasErradas.forEach(letra => {

        const caixa = document.createElement("div");

        caixa.className = "errada";

        caixa.textContent = letra;

        painelErradas.appendChild(caixa);

    });

}

function chutarLetra() {

    const letra = input.value.toUpperCase();

    if (letra === "") return;

    revelarLetra(letra);

    input.value = "";

    input.focus();

}
function removerAcentos(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function revelarLetra(letra){

    let quantidade = 0;

    letra = removerAcentos(letra.toUpperCase());

    for(let i=0;i<palavrasAtual.length;i++){

        for(let j=0;j<palavrasAtual[i].length;j++){

            const atual = removerAcentos(palavrasAtual[i][j]);

            if(atual === letra &&
               letrasDescobertas[i][j] === ""){

                letrasDescobertas[i][j] = palavrasAtual[i][j];

                quantidade++;

            }

        }

    }

    if (quantidade > 0) {

        adicionarPonto(equipeAtual, quantidade);

        atualizarPlacar();

    }else{

        if(!letrasErradas.includes(letra))
            letrasErradas.push(letra);

    }

    desenharPainel();
    desenharErradas();

    verificarVitoria();

    trocarEquipe();

}

function verificarVitoria() {

    for (let i = 0; i < palavrasAtual.length; i++) {

        for (let j = 0; j < palavrasAtual[i].length; j++) {

            if (letrasDescobertas[i][j] === "") {

                return;

            }

        }

    }

    alert("Parabéns! Você completou a rodada!");

    proximaRodada();
}

function proximaRodada() {

    indiceRodada++;

    if (indiceRodada >= rodadas.length) {
        alert("Fim do jogo!");
        indiceRodada = 0;
    }

    iniciarRodada();

}
destacarEquipe();  
atualizarPlacar();
iniciarRodada();


