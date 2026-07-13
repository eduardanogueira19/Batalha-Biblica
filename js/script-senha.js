const palavras = [

    // Reis
    "Salomão",
    "Roboão",
    "Jeroboão",
    "Acabe",
    "Acazias",
    "Jorão",
    "Jeú",
    "Joás",
    "Amazias",
    "Uzias",
    "Jotão",
    "Acaz",
    "Ezequias",
    "Manassés",
    "Amom",
    "Josias",
    "Jeoaquim",
    "Zedequias",

    // Profetas
    "Elias",
    "Eliseu",
    "Natã",
    "Aías",
    "Micaías",
    "Isaías",
    "Hulda",

    // Mulheres
    "Jezabel",
    "Atalia",
    "Rainha de Sabá",
    "Viúva",
    "Sunamita",

    // Lugares
    "Jerusalém",
    "Samaria",
    "Israel",
    "Judá",
    "Monte Carmelo",
    "Jordão",
    "Jericó",
    "Damasco",
    "Babilônia",
    "Egito",
    "Sarepta",

    // Objetos e construções
    "Templo",
    "Altar",
    "Arca da Aliança",
    "Trono",
    "Carruagem",
    "Carro de fogo",
    "Machado",
    "Azeite",
    "Lenha",

    // Acontecimentos
    "Divisão do Reino",
    "Cativeiro",
    "Exílio",
    "Sacrifício",
    "Milagre",
    "Profecia",
    "Fome",
    "Seca",
    "Chuva",
    "Ressurreição",

    // Histórias
    "Monte Carmelo",
    "Profetas de Baal",
    "Corvos",
    "Farinha",
    "Azeite",
    "Naamã",
    "Lepra",
    "Machado Flutuou",
    "Urso",
    "Carro de Fogo",
    "Caverna",
    "Monte Horebe",
    "Fonte de Jericó",

    // Pessoas
    "Baal",
    "Obadias",
    "Geazi",
    "Ben-Hadade",
    "Senaqueribe",
    "Rabsaqué",
    "Joabe",
    "Abiatar",
    "Adonias",
    "Absalão",

    // Conceitos
    "Ídolos",
    "Arrependimento",
    "Obediência",
    "Aliança",
    "Sabedoria",
    "Justiça",
    "Fidelidade",
    "Pecado",
    "Oração",
    "Unção"
];

class Jogo {

    constructor(){
        this.tempo = 60;
        this.intervalo = null;

        this.equipeAtual = "equipeA";
        this.timeA = document.getElementById("timeA");
        this.timeB = document.getElementById("timeB");
        this.listaSul = document.getElementById("listaSul");
        this.listaNorte = document.getElementById("listaNorte");

        this.limitePalavras = 5;
        this.palavrasMostradas = 0;

        this.pendentes = [];

        this.palavraAtual = "";
        this.contadorPalavras = document.getElementById("contadorPalavras");
        this.palavraAtualEhPendente = false;

        this.pontuacao = {
            equipeA:0,
            equipeB:0
        };

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
            this.proximaPalavra();
        });

    }

    destacarEquipe(){

        this.timeA.classList.remove("ativa");
        this.timeB.classList.remove("ativa");

        if(this.equipeAtual == "equipeA"){

            this.timeA.classList.add("ativa");

        }else{

            this.timeB.classList.add("ativa");

        }

    }

    iniciarRodada(){

        this.btnIniciar.disabled = true;
        this.palavrasMostradas = 0;
        this.contadorPalavras.textContent = "0";

        this.tempo = 60;

        this.palavrasMostradas = 0;
        this.pendentes = [];

        this.btnAcertou.disabled = false;
        this.btnProxima.disabled = false;

        this.destacarEquipe();

        this.mostrarPalavra();

        this.iniciarTimer();

    }

    trocarEquipe(){
       
        if(this.equipeAtual == "equipeA"){

            this.equipeAtual = "equipeB";

        }else{

            this.equipeAtual = "equipeA";

        }
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

        clearInterval(this.intervalo);

        this.intervalo = setInterval(()=>{

            let minutos = Math.floor(this.tempo/60);
            let segundos = this.tempo%60;

            this.timer.textContent =
            `${String(minutos).padStart(2,"0")}:${String(segundos).padStart(2,"0")}`;

            this.tempo--;

            if(this.tempo < 0){

            clearInterval(this.intervalo);

            // Se a palavra atual ainda não foi registrada,
            // coloca ela junto das pendentes
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

        this.registrarPalavra(true, this.palavraAtual);

        this.pontuacao[this.equipeAtual]++;

        this.atualizarPlacar();

        this.mostrarPalavra();

    }

    atualizarPlacar(){

        this.placarA.innerHTML =
            this.pontuacao.equipeA + " pts";

        this.placarB.innerHTML =
            this.pontuacao.equipeB + " pts";

    }

    finalizarRodada(){

        this.destacarEquipe();

        clearInterval(this.intervalo);

        this.btnAcertou.disabled = true;
        this.btnProxima.disabled = true;

        this.palavra.innerHTML = "Fim da rodada";

        this.timer.textContent = "01:00";
        this.pendentes.forEach(palavra => {
            this.registrarPalavra(false, palavra);
        });

        this.pendentes = [];


        

        this.trocarEquipe();

        this.btnIniciar.disabled = false;
        this.contadorPalavras.textContent = "0";

    }
}


const jogo = new Jogo();
