let estado = JSON.parse(localStorage.getItem("estado"));

if (!estado) {

    estado = {
        equipeAtual: "equipeA"
    };

}

function salvarEstado() {

    localStorage.setItem("estado", JSON.stringify(estado));

}

// =====================
// Estado do jogo de palavras
// =====================

let estadoJogo = JSON.parse(localStorage.getItem("estadoJogo"));

if (!estadoJogo) {
        equipesDaRodada: 0,
        limparNaProximaRodada: false
    };
}


let estadoRoda = JSON.parse(localStorage.getItem("estadoRoda"));

if (!estadoRoda) {

    estadoRoda = {
        indiceRodada: 0
    };

}

function salvarEstadoRoda() {

    localStorage.setItem(
        "estadoRoda",
        JSON.stringify(estadoRoda)
    );

}

function reiniciarJogo() {

    if (!confirm("Deseja realmente reiniciar o jogo todo?")) {
        return;
    }

    localStorage.removeItem("estado");
    localStorage.removeItem("estadoJogo"); // novo
    localStorage.removeItem("estadoRoda");//novo
    localStorage.removeItem("placar");
    localStorage.removeItem("palavrasUsadas");
    localStorage.removeItem("perguntasUsadas");

    location.reload();

}