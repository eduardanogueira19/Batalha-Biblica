let placar = JSON.parse(localStorage.getItem("placar"));

if (!placar) {
    placar = {
        reinoSul: 0,
        reinoNorte: 0
    };
}

placar.reinoSul = Number(placar.reinoSul) || 0;
placar.reinoNorte = Number(placar.reinoNorte) || 0;

function salvarPlacar() {
    localStorage.setItem("placar", JSON.stringify(placar));
}

function atualizarPlacar() {

    document.getElementById("placarA").textContent =
        placar.reinoSul + " pts";

    document.getElementById("placarB").textContent =
        placar.reinoNorte + " pts";

    atualizarRanking();
}

function adicionarPonto(time, pontos) {

    placar.reinoSul = Number(placar.reinoSul) || 0;
    placar.reinoNorte = Number(placar.reinoNorte) || 0;

    if (time === "equipeA") {
        placar.reinoSul += pontos;
    } else {
        placar.reinoNorte += pontos;
    }

    salvarPlacar();
    atualizarPlacar();
}

function alterarPontuacao(acao) {

    const time = document.getElementById("timeSelecionado").value;
    let quantidade = parseInt(document.getElementById("quantidade").value);

    if (isNaN(quantidade) || quantidade < 1) {
        quantidade = 1;
    }

    if (time === "equipeA") {

        if (acao === "adicionar") {
            placar.reinoSul += quantidade;
        } else {
            placar.reinoSul = Math.max(0, placar.reinoSul - quantidade);
        }

    } else {

        if (acao === "adicionar") {
            placar.reinoNorte += quantidade;
        } else {
            placar.reinoNorte = Math.max(0, placar.reinoNorte - quantidade);
        }

    }

    salvarPlacar();
    atualizarPlacar();
    document.getElementById("quantidade").value = "";
}

function zerarPlacar() {

    if (!confirm("Deseja realmente zerar o placar?")) {
        return;
    }

    placar.reinoSul = 0;
    placar.reinoNorte = 0;

    salvarPlacar();
    atualizarPlacar();
}

function atualizarRanking() {

    const primeiro = document.querySelector(".primeiro");
    const segundo = document.querySelector(".segundo");

    if (placar.reinoSul > placar.reinoNorte) {

        primeiro.innerHTML = `
            <span>🥇 Reino do Sul</span>
            <span id="placarA">${placar.reinoSul} pts</span>
        `;

        segundo.innerHTML = `
            <span>🥈 Reino do Norte</span>
            <span id="placarB">${placar.reinoNorte} pts</span>
        `;

    } else if (placar.reinoNorte > placar.reinoSul) {

        primeiro.innerHTML = `
            <span>🥇 Reino do Norte</span>
            <span id="placarB">${placar.reinoNorte} pts</span>
        `;

        segundo.innerHTML = `
            <span>🥈 Reino do Sul</span>
            <span id="placarA">${placar.reinoSul} pts</span>
        `;

    } else {

        primeiro.innerHTML = `
            <span>🤝 Reino do Sul</span>
            <span id="placarA">${placar.reinoSul} pts</span>
        `;

        segundo.innerHTML = `
            <span>🤝 Reino do Norte</span>
            <span id="placarB">${placar.reinoNorte} pts</span>
        `;

    }

}

// Atualiza quando a página abrir
atualizarPlacar();