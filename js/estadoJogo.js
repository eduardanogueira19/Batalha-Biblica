let estado = JSON.parse(localStorage.getItem("estado"));

if (!estado) {

    estado = {
        equipeAtual: "equipeA"
    };

}

function salvarEstado() {

    localStorage.setItem("estado", JSON.stringify(estado));

}