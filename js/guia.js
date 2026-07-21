let equipeAtual = estado.equipeAtual;
const timeA = document.getElementById("timeA");
const timeB = document.getElementById("timeB");

function destacarEquipe() {

    timeA.classList.remove("ativa");
    timeB.classList.remove("ativa");

    if (equipeAtual === "equipeA") {
        timeA.classList.add("ativa");
    } else {
        timeB.classList.add("ativa");
    }

}

destacarEquipe();