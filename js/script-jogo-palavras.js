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
},

{
    dica: "Lugar",
    palavras: [
        "Jardim do Éden",
        "Jerusalém",
        "Ilha de Patmos"
    ]
},

{
    dica: "Profissão",
    palavras: [
        "Carpinteiro",
        "Engenheiro",
        "Farmacêutico",
        "Juíz"
    ]
},

{
    dica: "Escola",
    palavras: [
        "Cantina",
        "Diretoria",
        "Biblioteca",
        "Carteira"
    ]
}

];

let rodadaAtual;
let palavrasAtual = [];
let letrasDescobertas = [];
let letrasErradas = [];
let novasLetras = [];
let indiceRodada = estadoRoda.indiceRodada;
let equipeAtual = estado.equipeAtual;


const painel = document.getElementById("painelPalavra");
const dica = document.getElementById("dica");
const input = document.getElementById("letra");
const btnChutar = document.getElementById("btnChutar");
const painelErradas = document.getElementById("letrasErradas");
const somAcerto = new Audio("../sons/letraAcerto.mp3");
const somErro = new Audio("../sons/letraErro.mp3");
const somVitoria = new Audio("../sons/vitoria.mp3");
const modalResposta = document.getElementById("modalResposta");
const camposResposta = document.getElementById("camposResposta");
const btnResposta = document.getElementById("btnResposta");
const btnConfirmarResposta = document.getElementById("btnConfirmarResposta");
const btnCancelarResposta = document.getElementById("btnCancelarResposta");


btnChutar.addEventListener("click", chutarLetra);
btnResposta.addEventListener("click", abrirModalResposta);
btnCancelarResposta.addEventListener("click", ()=>{

    modalResposta.classList.add("oculto");

});
btnConfirmarResposta.addEventListener("click", confirmarResposta);

input.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        chutarLetra();

    }

});

const modalVitoria = document.getElementById("modalVitoria");
const btnProximaPalavra = document.getElementById("btnProximaPalavra");


btnProximaPalavra.addEventListener("click", () => {

    modalVitoria.style.display = "none";

    proximaRodada();
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

    palavrasAtual = palavrasAtual.map(p => p.toUpperCase());

    dica.textContent = rodadaAtual.dica;

    letrasErradas = [];

    letrasDescobertas = [];

    for (let palavra of palavrasAtual) {

        const descoberta = [];

        for (let letra of palavra) {
            if (letra === " ") {
                descoberta.push(" "); // espaço já revelado
            } else {
                descoberta.push("");
            }
        }

        letrasDescobertas.push(descoberta);

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

            if (palavrasAtual[i][j] === " ") {
                continue;
            }

            const caixa = document.createElement("div");
            caixa.className = "letra";

            if (j > 0 && palavrasAtual[i][j - 1] === " ") {
                caixa.classList.add("inicio-palavra");
            }

            caixa.textContent = letrasDescobertas[i][j];

            linha.appendChild(caixa);
        }

        painel.appendChild(linha);
    }
}

function abrirModalResposta(){

    camposResposta.innerHTML = "";

    palavrasAtual.forEach((palavra, indice)=>{

        const input = document.createElement("input");

        input.placeholder = `Palavra ${indice+1}`;

        camposResposta.appendChild(input);

    });

    modalResposta.classList.remove("oculto");

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

    novasLetras = []; // limpa as letras reveladas nesta jogada

    letra = removerAcentos(letra.toUpperCase());

    for(let i=0;i<palavrasAtual.length;i++){

        for(let j=0;j<palavrasAtual[i].length;j++){

            const atual = removerAcentos(palavrasAtual[i][j].toUpperCase());

            if(atual === letra &&
               letrasDescobertas[i][j] === ""){

                letrasDescobertas[i][j] = palavrasAtual[i][j];
                quantidade++;

                novasLetras.push({
                    linha: i,
                    coluna: j
                });

            }

        }

    }

    if (quantidade > 0) {
        somAcerto.currentTime = 0; // Reinicia o áudio
        somAcerto.play();

        adicionarPonto(equipeAtual, quantidade);

        atualizarPlacar();

    }else{

        somErro.currentTime = 0;
        somErro.play();

        if(!letrasErradas.includes(letra))
            letrasErradas.push(letra);

    }

    desenharPainel();

    novasLetras.forEach(pos => {

        const linha = painel.children[pos.linha];

        let indiceVisual = 0;

        for (let k = 0; k < pos.coluna; k++) {
            if (palavrasAtual[pos.linha][k] !== " ") {
                indiceVisual++;
            }
        }

        linha.children[indiceVisual].classList.add("revelada");

    });

    desenharErradas();

    console.log("Chamando verificar vitória");

    const venceu = verificarVitoria();

    console.log("Voltou da verificar vitória");

    if (!venceu) {
        trocarEquipe();
    }

}

function verificarVitoria() {

    for (let i = 0; i < palavrasAtual.length; i++) {
        for (let j = 0; j < palavrasAtual[i].length; j++) {

            if (letrasDescobertas[i][j] === "") {
                return false;
            }
        }
    }

    desenharPainel();

    somVitoria.currentTime = 0;
    somVitoria.play();

    abrirModalVitoria();
    trocarEquipe();

    return true;
}

function proximaRodada() {

    indiceRodada++;
    estadoRoda.indiceRodada = indiceRodada;
    salvarEstadoRoda();

    if (indiceRodada >= rodadas.length) {
        alert("Fim do jogo!");
        indiceRodada = 0;
        estadoRoda.indiceRodada = indiceRodada;
        salvarEstadoRoda();
    }

    iniciarRodada();

}

function confirmarResposta() {

    const inputs = camposResposta.querySelectorAll("input");

    // Respostas digitadas
    const respostas = [...inputs]
        .map(input => removerAcentos(input.value.trim().toUpperCase()))
        .sort();

    // Palavras corretas
    const corretas = palavrasAtual
        .map(p => removerAcentos(p.toUpperCase()))
        .sort();

    const acertou = JSON.stringify(respostas) === JSON.stringify(corretas);

    if (acertou) {

        let pontos = 0;

        // Revela todas as letras que ainda estavam escondidas
        for (let i = 0; i < palavrasAtual.length; i++) {

            for (let j = 0; j < palavrasAtual[i].length; j++) {

                if (letrasDescobertas[i][j] === "") {

                    letrasDescobertas[i][j] = palavrasAtual[i][j];
                    pontos++;

                }

            }

        }

        adicionarPonto(equipeAtual, pontos);
        atualizarPlacar();

        desenharPainel();

        modalResposta.classList.add("oculto");

        // Usa a mesma lógica de vitória das letras
        verificarVitoria();

    } else {

        modalResposta.classList.add("oculto");

        alert("Resposta incorreta!");

        trocarEquipe();

    }

}

function abrirModalVitoria(){

    console.log("Abrindo modal");

    modalVitoria.style.display = "flex";
}



destacarEquipe();  
atualizarPlacar();
iniciarRodada();


