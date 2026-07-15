let estado = JSON.parse(localStorage.getItem("estado"));

if (!estado) {

    estado = {
        equipeAtual: "equipeA"
    };

}

function salvarEstado() {

    localStorage.setItem("estado", JSON.stringify(estado));

}

function reiniciarJogo() {

    if (!confirm("Deseja realmente reiniciar o jogo todo?")) {
        return;
    }

    localStorage.removeItem("estado");
    localStorage.removeItem("placar");
    localStorage.removeItem("palavrasUsadas");

    location.reload();

}