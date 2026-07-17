const palavras = [
    "Pequeno", "água", "livro", "Salomão","Nabote",
    "Davi", "Deus","templo", "machado", "arca",
    "Taça", "parque", "rei", "corvo","Monte",
    "Ar", "bicicleta", "vitória", "Israel", "pão",
    "Colher", "lepra", "bíblia", "Jezabel", "laranja",
    "Chave", "gelado", "Bahia", "família","profeta",
    "Hélice", "Justo", "boneca", "céu", "exército",
    "Língua", "motorista", "povo", "Babilônia",
    "Atraso", "mosca", "divisão", "celular", "terça",
    "Quadro", "queda", "socorro", "aplicativo", "obreiro",
    "Refresco", "vida", "história", "violão", "porta",
    "Sal", "microfone", "espião", "ovelha", "som",
    "Pimenta", "pé", "filho", "inimigo", "cantina",
    "Gravata", "Eliseu", "milagre", "viúva", "pastor",
    "Chocolate", "banco", "tapete", "vaso", "biscoito",
    "Manga", "escuridão", "cura", "mesa", "teclado",
    "Café", "cadeira", "Elias", "Guerra", "criança",
    "Ataque", "rio", "caneta", "fone", "mapa",
    "Conquista", "acampamento", "tanque", "barco",
    "Mulher", "papel", "música", "direção", "mídia"

];

const somAcerto = new Audio("../sons/acerto.mp3");
const somTimer = new Audio("../sons/timer.mp3");
const somInicio = new Audio("../sons/inicio.mp3");
const somPassar = new Audio("../sons/passar.mp3")

const somErro = new Audio("sons/erro.mp3");
const somFim = new Audio("../sons/fim.mp3");
const somTroca = new Audio("sons/troca.mp3");
const somVitoria = new Audio("sons/vitoria.mp3");




class Jogo {

    constructor(){
        this.tempo = 60;
        this.intervalo = null;

        this.equipeAtual = estado.equipeAtual;
        this.timeA = document.getElementById("timeA");
        this.timeB = document.getElementById("timeB");
        this.listaSul = document.getElementById("listaSul");
        this.listaNorte = document.getElementById("listaNorte");

        this.limitePalavras = 5;
        this.palavrasMostradas = 0;
        this.indicePalavra = 0;
        

        this.pendentes = [];

        this.palavraAtual = "";
        this.contadorPalavras = document.getElementById("contadorPalavras");
        this.palavraAtualEhPendente = false;

        this.palavrasDisponiveis = [...palavras];

        this.palavra = document.getElementById("palavra");
        this.timer = document.querySelector(".timer");

        this.btnIniciar = document.getElementById("iniciar");
        this.btnAcertou = document.getElementById("acertou");
        this.btnProxima = document.getElementById("proxima");

        this.placarA = document.getElementById("placarA");
        this.placarB = document.getElementById("placarB");


        this.btnIniciar.addEventListener("click", () => {
            this.iniciarRodada();
        });

        this.btnAcertou.addEventListener("click", () => {
            this.acertou();
        });

        this.btnProxima.addEventListener("click", () => {
            somPassar.currentTime = 0;
            somPassar.play();
            this.proximaPalavra();
        });

        this.destacarEquipe();
        this.carregarPalavrasDaRodada();
        this.equipesDaRodada = 0;
        this.limparNaProximaRodada = false;


    }

    

    destacarEquipe() {

        this.timeA.classList.remove("ativa");
        this.timeB.classList.remove("ativa");

        if (this.equipeAtual === "equipeA") {
            this.timeA.classList.add("ativa");
        } else {
            this.timeB.classList.add("ativa");
        }

    }

    carregarPalavrasDaRodada() {

        this.palavrasDisponiveis = palavras.slice(
            this.indicePalavra,
            this.indicePalavra + this.limitePalavras
        );

        this.indicePalavra += this.limitePalavras;

    }

    iniciarRodada(){

       if (this.limparNaProximaRodada) {

            this.listaSul.innerHTML = "";
            this.listaNorte.innerHTML = "";

            this.limparNaProximaRodada = false;

        }


        if (this.palavrasDisponiveis.length === 0) {
            this.carregarPalavrasDaRodada();
        }

        this.destacarEquipe();

        this.btnIniciar.disabled = true;
        this.palavrasMostradas = 0;
        this.contadorPalavras.textContent = "0";

        this.tempo = 60;

        this.palavrasMostradas = 0;
        this.pendentes = [];

        this.btnAcertou.disabled = false;
        this.btnProxima.disabled = false;

        this.mostrarPalavra();

        this.iniciarTimer();

    }

    trocarEquipe() {
        

        this.equipeAtual =
            this.equipeAtual === "equipeA"
                ? "equipeB"
                : "equipeA";

        estado.equipeAtual = this.equipeAtual;

        salvarEstado();

        this.destacarEquipe();
        
    }

   mostrarPalavra(){

        if(
            this.palavrasMostradas >= this.limitePalavras &&
            this.pendentes.length == 0
        ){
            this.finalizarRodada();
            return;
        }

        // Ainda existem palavras novas
        if(this.palavrasMostradas < this.limitePalavras){

            const indice = Math.floor(
                Math.random() * this.palavrasDisponiveis.length
            );

            this.palavraAtual = this.palavrasDisponiveis[indice];

            this.palavrasDisponiveis.splice(indice,1);

            this.palavrasMostradas++;

            this.contadorPalavras.textContent = this.palavrasMostradas;

        }
        // Agora só mostram as pendentes
        else{

            this.palavraAtual =
                this.pendentes.shift();

            this.palavraAtualEhPendente = true;

        }

        this.palavra.textContent = this.palavraAtual;

    }



    registrarPalavra(acertou, palavra){

        const li = document.createElement("li");

        li.textContent = palavra;

        if(acertou){
            li.classList.add("acerto");
        }else{
            li.classList.add("erro");
        }

        if(this.equipeAtual == "equipeA"){
            this.listaSul.appendChild(li);
        }else{
            this.listaNorte.appendChild(li);
        }

    }

    iniciarTimer(){

        somTimer.currentTime = 0;
        somTimer.loop = true;
        somTimer.play();

        clearInterval(this.intervalo);

        this.intervalo = setInterval(()=>{

            let minutos = Math.floor(this.tempo/60);
            let segundos = this.tempo%60;

            this.timer.textContent =
            `${String(minutos).padStart(2,"0")}:${String(segundos).padStart(2,"0")}`;

            this.tempo--;

            if(this.tempo < 0){

            clearInterval(this.intervalo);

            
            if(this.palavraAtual !== ""){
                this.pendentes.push(this.palavraAtual);
            }

            

            this.finalizarRodada();

        }

        },1000);

    }

    proximaPalavra(){

       

        this.pendentes.push(this.palavraAtual);

        this.mostrarPalavra();

    }

    acertou(){
        somAcerto.currentTime = 0;
        somAcerto.play();

        this.registrarPalavra(true, this.palavraAtual);

        adicionarPonto(this.equipeAtual, 1);

        atualizarPlacar();

        this.mostrarPalavra();

    }

   
    finalizarRodada(){

        somTimer.pause();
        somTimer.currentTime = 0;
        somTimer.loop = false;

        somFim.currentTime = 0;
        somFim.play();


       this.equipesDaRodada++;

        if (this.equipesDaRodada === 2) {

            this.equipesDaRodada = 0;
            this.carregarPalavrasDaRodada();

            this.limparNaProximaRodada = true;

        }

        clearInterval(this.intervalo);

        this.btnAcertou.disabled = true;
        this.btnProxima.disabled = true;

        this.palavra.innerHTML = "Fim da rodada";

        this.timer.textContent = "01:00";
        this.pendentes.forEach(palavra => {
            this.registrarPalavra(false, palavra);
        });

        this.pendentes = [];

        if (this.palavrasDisponiveis.length === 0) {
            this.carregarPalavrasDaRodada();
        }

  

        this.trocarEquipe();

        this.btnIniciar.disabled = false;
        this.contadorPalavras.textContent = "0";

        

        
        

    }

    
}



const jogo = new Jogo();

atualizarPlacar();