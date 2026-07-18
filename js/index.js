const musica = new Audio("../sons/ambienteInicial.mp3");
musica.loop = true;
musica.volume = 0.2;

const somClique = new Audio("../sons/click.mp3");
somClique.currentTime = 10;
somClique.volume = 0.6;

const btnMusica = document.getElementById("btnMusica");

const botoes = document.querySelectorAll("button");




btnMusica.addEventListener("click", () => {

    if (musica.paused) {
        musica.loop = true
        musica.play();
        btnMusica.textContent = "🔊";
    } else {
        musica.pause();
         // opcional: volta para o início
        btnMusica.textContent = "🔇";
    }

});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {

        e.preventDefault();

        somClique.currentTime = 0;
        somClique.play();

        setTimeout(() => {
            window.location.href = link.href;
        }, 900);
    });
});

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        somClique.currentTime = 0;
        somClique.play();
    });
});

