const perguntas = [
    {
        id: 1,
        pergunta: "Quem sucedeu Davi como rei de Israel?",
        alternativas: [
            "Absalão",
            "Salomão",
            "Adonias",
            "Roboão"
        ],
        correta: 1,
        referencia: "Referência: 1 Reis 2:12"
    },

    {
        id: 2,
        pergunta: "O que Salomão pediu a Deus no início do seu reinado?",
        alternativas: [
            "Muitas riquezas",
            "Vitória sobre os inimigos",
            "Sabedoria para governar",
            "Uma vida sem dificuldades"
        ],
        correta: 2,
        referencia: "Referência: 1 Reis 3:7-12"
    },

    {
        id: 3,
        pergunta: "Como Salomão descobriu quem era a verdadeira mãe da criança disputada por duas mulheres?",
        alternativas: [
            "Perguntou aos sacerdotes",
            "Mandou dividir a criança",
            "Consultou o profeta Natã",
            "Esperou a criança escolher"
        ],
        correta: 1,
        referencia: "Referência: 1 Reis 3:16-28"
    },

    {
        id: 4,
        pergunta: "Qual grande construção Salomão realizou em Jerusalém?",
        alternativas: [
            "Uma torre",
            "Uma fortaleza",
            "O Templo do Senhor",
            "Um novo palácio para Davi"
        ],
        correta: 2,
        referencia: "Referência: 1 Reis 6:1,14"
    },    

    {
        id: 5,
        pergunta: "Quantos anos foram necessários para construir o Templo?",
        alternativas: [
            "Três anos",
            "Cinco anos",
            "Sete anos",
            "Doze anos"
        ],
        correta: 2,
        referencia: "Referência: 1 Reis 6:37-38"
    },  

    {
        id: 6,
        pergunta: "Onde a Arca da Aliança foi colocada dentro do Templo?",
        alternativas: [
            "No pátio exterior",
            "No Santo dos Santos",
            "Junto ao altar de bronze",
            "Na entrada do Templo"
        ],
        correta: 1,
        referencia: "Referência: 1 Reis 8:6"
    },  

    {
        id: 7,
        pergunta: "Qual rainha visitou Salomão para provar sua sabedoria com perguntas difíceis?",
        alternativas: [
            "Rainha de Sabá",
            "Rainha Ester",
            "Rainha Atalia",
            "Rainha Jezabel"
        ],
        correta: 0,
        referencia: "Referência: 1 Reis 10:1-10"
    },  

    {
        id: 8,
        pergunta: "O que afastou o coração de Salomão do Senhor durante sua velhice?",
        alternativas: [
            "O excesso de trabalho",
            "As guerras constantes",
            "Suas mulheres estrangeiras",
            "A oposição do povo"
        ],
        correta: 2,
        referencia: "Referência: 1 Reis 11:3-4"
    },  

    {
        id: 9,
        pergunta: "Qual profeta anunciou que dez tribos seriam entregues a Jeroboão?",
        alternativas: [
            "Elias",
            "Natã",
            "Eliseu",
            "Aías"
        ],
        correta: 3,
        referencia: "Referência: 1 Reis 11:29-31"
    },  

    {
        id: 10,
        pergunta: "Durante o reinado de quem o reino de Israel foi dividido?",
        alternativas: [
            "Salomão",
            "Roboão",
            "Acabe",
            "Asa"
        ],
        correta: 1,
        referencia: "Referência: 1 Reis 12:16-20"
    },  

    {
        id: 11,
        pergunta: "Onde Jeroboão colocou os dois bezerros de ouro?",
        alternativas: [
            "Jerusalém e Samaria",
            "Betel e Dã",
            "Jericó e Hebrom",
            "Siquém e Gilgal"
        ],
        correta: 1,
        referencia: "Referência: 1 Reis 12:28-29"
    },  

    {
        id: 12,
        pergunta: "Em qual monte Elias desafiou os profetas de Baal?",
        alternativas: [
            "Monte Sinai",
            "Monte Carmelo",
            "Monte das Oliveiras",
            "Monte Gerizim"
        ],
        correta: 1,
        referencia: "Referência: 1 Reis 18:19-20"
    },  

    {
        id: 13,
        pergunta: "Quantos profetas de Baal participaram do confronto com Elias?",
        alternativas: [
            "120",
            "300",
            "450",
            "850"
        ],
        correta: 2,
        referencia: "Referência: 1 Reis 18:22"
    },  

    {
        id: 14,
        pergunta: "Como Deus respondeu à oração de Elias no Monte Carmelo?",
        alternativas: [
            "Com um terremoto",
            "Com uma forte chuva",
            "Com fogo do céu",
            "Com uma voz suave"
        ],
        correta: 2,
        referencia: "Referência: 1 Reis 18:36-39"
    },  

    {
        id: 15,
        pergunta: "Qual sinal indicou a Elias que a chuva estava chegando?",
        alternativas: [
            "Um vento muito forte",
            "Uma nuvem pequena como a mão de um homem",
            "Um grande trovão",
            "Um arco-íris"
        ],
        correta: 1,
        referencia: "Referência: 1 Reis 18:44-45"
    },
    
    {
        id: 16,
        pergunta: "Como Elias foi levado ao céu?",
        alternativas: [
            "Em uma carruagem comum",
            "Em um navio",
            "Em um redemoinho",
            "Por uma nuvem escura"
        ],
        correta: 2,
        referencia: "Referência: 2 Reis 2:11"
    },

    {
        id: 17,
        pergunta: "O que Eliseu recolheu depois que Elias foi levado ao céu?",
        alternativas: [
            "A espada de Elias",
            "O manto de Elias",
            "O cajado de Elias",
            "As sandálias de Elias"
        ],
        correta: 1,
        referencia: "Referência: 2 Reis 2:13-15"
    },

    {
        id: 18,
        pergunta: "O que Eliseu lançou nas águas ruins de Jericó para purificá-las?",
        alternativas: [
            "Farinha",
            "Óleo",
            "Sal",
            "Cinzas"
        ],
        correta: 2,
        referencia: "Referência: 2 Reis 2:19-22"
    },

    {
        id: 19,
        pergunta: "O que foi multiplicado para ajudar uma viúva a pagar suas dívidas?",
        alternativas: [
            "Farinha",
            "Pães",
            "Moedas",
            "Azeite"
        ],
        correta: 3,
        referencia: "Referência: 2 Reis 4:1-7"
    },

    {
        id: 20,
        pergunta: "Quantas vezes Naamã deveria mergulhar no rio Jordão para ser curado?",
        alternativas: [
            "Três vezes",
            "Cinco vezes",
            "Sete vezes",
            "Doze vezes"
        ],
        correta: 2,
        referencia: "Referência: 2 Reis 5:10-14"
    },

    {
        id: 21,
        pergunta: "Qual doença atingiu Geazi depois que ele enganou Naamã?",
        alternativas: [
            "Cegueira",
            "Lepra",
            "Paralisia",
            "Febre"
        ],
        correta: 1,
        referencia: "Referência: 2 Reis 5:20-27"
    },

    {
        id: 22,
        pergunta: "Qual objeto Eliseu fez flutuar na água?",
        alternativas: [
            "Uma espada",
            "Uma corrente",
            "Um machado de ferro",
            "Um escudo"
        ],
        correta: 2,
        referencia: "Referência: 2 Reis 6:5-7"
    },

    {
        id: 23,
        pergunta: "Quem ordenou que Jezabel fosse lançada da janela?",
        alternativas: [
            "Eliseu",
            "Jeú",
            "Joás",
            "Ezequias"
        ],
        correta: 1,
        referencia: "Referência: 2 Reis 9:30-33"
    },

    {
        id:24 ,
        pergunta: "Por quanto tempo Joás ficou escondido no Templo para escapar de Atalia?",
        alternativas: [
            "Três anos",
            "Quatro anos",
            "Seis anos",
            "Sete anos"
        ],
        correta: 2,
        referencia: "Referência: 2 Reis 11:2-4"
    },

    {
        id: 25,
        pergunta: "Qual objeto de bronze Ezequias destruiu porque o povo lhe oferecia incenso?",
        alternativas: [
            "Um bezerro de bronze",
            "Uma serpente de bronze",
            "Uma estátua de Salomão",
            "Um altar de bronze"
        ],
        correta: 1,
        referencia: "Referência: 2 Reis 18:4"
    },

    {
        id: 26,
        pergunta: "Quantos soldados assírios foram mortos pelo anjo do Senhor?",
        alternativas: [
            "20 mil",
            "120 mil",
            "300 mil",
            "185 mil"
        ],
        correta: 3,
        referencia: "Referência: 2 Reis 19:35"
    },

    {
        id: 27,
        pergunta: "Quantos anos Deus acrescentou à vida do rei Ezequias?",
        alternativas: [
            "Cinco anos",
            "Dez anos",
            "Quinze anos",
            "Vinte anos"
        ],
        correta: 2,
        referencia: "Referência: 2 Reis 20:1-6"
    },

    {
        id: 28,
        pergunta: "Durante o reinado de qual rei o Livro da Lei foi encontrado no Templo?",
        alternativas: [
            "Acabe",
            "Josias",
            "Manassés",
            "Jeoaquim"
        ],
        correta: 1,
        referencia: "Referência: 2 Reis 22:8-11"
    },

    {
        id: 29,
        pergunta: "Qual profetisa foi consultada depois que o Livro da Lei foi encontrado?",
        alternativas: [
            "Débora",
            "Miriã",
            "Hulda",
            "Ana"
        ],
        correta: 2,
        referencia: "Referência: 2 Reis 22:14-20"
    },

    {
        id: 30,
        pergunta: "Qual povo conquistou Jerusalém e levou os habitantes de Judá ao exílio?",
        alternativas: [
            "Egípcios",
            "Filisteus",
            "Assírios",
            "Babilônios"
        ],
        correta: 3,
        referencia: "Referência: 2 Reis 25:1-11"
    },

    {
        id: 31,
        pergunta: "Quem construiu uma arca para sobreviver ao dilúvio?",
        alternativas: [
            "Abraão",
            "Moisés",
            "Noé",
            "Ló"
        ],
        correta: 2,
        referencia: "Referência: Gênesis 6:13-14"
    },

    {
        id: 32,
        pergunta: "A qual divisão sacerdotal pertencia Zacarias, pai de João Batista?",
        alternativas: [
            "Divisão de Abias",
            "Divisão de Arão",
            "Divisão de Moisés",
            "Divisão de Zadoque"
        ],
        correta: 0,
        referencia: "Referência: Lucas 1:5"
    },

    {
        id: 33,
        pergunta: "O que Davi utilizou para derrubar Golias?",
        alternativas: [
            "Uma espada",
            "Uma pedra e uma funda",
            "Uma lança",
            "Um arco e uma flecha"
        ],
        correta: 1,
        referencia: "Referência: 1 Samuel 17:48-50"
    },

    {
        id: 34,
        pergunta: "Qual foi o novo nome dado por Deus a Jacó?",
        alternativas: [
            "Judá",
            "Israel",
            "Efraim",
            "Isaque"
        ],
        correta: 1,
        referencia: "Referência: Gênesis 32:27-28"
    },

    {
        id: 35,
        pergunta: "Qual foi o primeiro milagre realizado por Jesus segundo o Evangelho de João?",
        alternativas: [
            "A multiplicação dos pães",
            "A cura de um cego",
            "A ressurreição de Lázaro",
            "A transformação da água em vinho"
        ],
        correta: 3,
        referencia: "Referência: João 2:1-11"
    },

    {
        id: 36,
        pergunta: "Quantos apóstolos foram escolhidos por Jesus?",
        alternativas: [
            "Sete",
            "Dez",
            "Doze",
            "Setenta"
        ],
        correta: 2,
        referencia: "Referência: Marcos 3:13-19"
    },

    {
        id: 37,
        pergunta: "Qual sacerdote encontrou o Livro da Lei no Templo durante o reinado de Josias?",
        alternativas: [
            "Abiatar",
            "Joiada",
            "Hilquias",
            "Zadoque"
        ],
        correta: 2,
        referencia: "Referência: 2 Reis 22:8-10"
    },

    {
        id: 38,
        pergunta: "Em qual árvore Zaqueu subiu para conseguir ver Jesus?",
        alternativas: [
            "Oliveira",
            "Cedro",
            "Palmeira",
            "Figueira brava ou sicômoro"
        ],
        correta: 3,
        referencia: "Referência: Lucas 19:3-4"
    },

    {
        id: 39,
        pergunta: "Quantos anos viveu Matusalém?",
        alternativas: [
            "200 anos",
            "326 anos",
            "864 anos",
            "969 anos"
        ],
        correta: 3,
        referencia: "Referência: Gênesis 5:27"
    },

    {
        id: 40,
        pergunta: "Quem foi escolhido para ocupar o lugar de Judas Iscariotes entre os apóstolos?",
        alternativas: [
            "Barnabé",
            "Matias",
            "Silas",
            "Estêvão"
        ],
        correta: 1,
        referencia: "Referência: Atos 1:23-26"
    },

    {
        id: 41,
        pergunta: "Em qual rio Jesus foi batizado?",
        alternativas: [
            "Rio Nilo",
            "Rio Jordão",
            "Rio Eufrates",
            "Rio Tigre"
        ],
        correta: 1,
        referencia: "Referência: Mateus 3:13-17"
    },

    {
        id: 42,
        pergunta: "Qual discípulo negou Jesus três vezes?",
        alternativas: [
            "João",
            "André",
            "Tomé",
            "Pedro"
        ],
        correta: 3,
        referencia: "Referência: Mateus 26:69-75"
    },

    {
        id: 43,
        pergunta: "Próximo de qual ribeiro Elias foi alimentado por corvos?",
        alternativas: [
            "Jaboque",
            "Cedrom",
            "Querite",
            "Giom"
        ],
        correta: 2,
        referencia: "Referência: 1 Reis 17:2-6"
    },

    {
        id: 44,
        pergunta: "Qual mulher ressuscitada por Pedro também era conhecida como Dorcas?",
        alternativas: [
            "Lídia",
            "Tabita",
            "Rode",
            "Priscila"
        ],
        correta: 1,
        referencia: "Referência: Atos 9:36-41"
    },

    {
        id: 45,
        pergunta: "Quem foi o primeiro juiz levantado por Deus para libertar Israel?",
        alternativas: [
            "Otniel",
            "Eúde",
            "Gideão",
            "Sansão"
        ],
        correta: 0,
        referencia: "Referência: Juízes 3:7-11"
    },

    {
        id: 46,
        pergunta: "O que aconteceu com as muralhas de Jericó depois que o povo gritou?",
        alternativas: [
            "Foram queimadas",
            "Foram reconstruídas",
            "Caíram",
            "Ficaram cobertas de água"
        ],
        correta: 2,
        referencia: "Referência: Josué 6:20"
    },

    {
        id: 47,
        pergunta: "Qual era o nome do servo do sumo sacerdote que teve a orelha cortada por Pedro?",
        alternativas: [
            "Malco",
            "Cléopas",
            "Bartimeu",
            "Jairo"
        ],
        correta: 0,
        referencia: "Referência: João 18:10; Lucas 22:50-51"
    },

    {
        id: 48,
        pergunta: "Qual profeta foi lançado na cova dos leões?",
        alternativas: [
            "Jeremias",
            "Isaías",
            "Daniel",
            "Ezequiel"
        ],
        correta: 2,
        referencia: "Referência: Daniel 6:16-23"
    },

    {
        id: 49,
        pergunta: "Em Listra, com qual deus grego Paulo foi confundido?",
        alternativas: [
            "Zeus",
            "Hermes",
            "Apolo",
            "Ares"
        ],
        correta: 1,
        referencia: "Referência: Atos 14:11-12"
    },

    {
        id: 50,
        pergunta: "Qual rainha perdeu sua posição antes de Ester se tornar rainha?",
        alternativas: [
            "Bate-Seba",
            "Jezabel",
            "Atalia",
            "Vasti"
        ],
        correta: 3,
        referencia: "Referência: Ester 1:10-12,19; 2:17"
    },

    {
        id: 51,
        pergunta: "Qual mulher liderou as mulheres de Israel com tamborins e danças após a travessia do Mar Vermelho?",
        alternativas: [
            "Miriã",
            "Zípora",
            "Débora",
            "Joquebede"
        ],
        correta: 0,
        referencia: "Referência: Êxodo 15:20-21"
    },

    {
        id: 52,
        pergunta: "De qual andar Êutico caiu enquanto Paulo pregava?",
        alternativas: [
            "Segundo andar",
            "Terceiro andar",
            "Quarto andar",
            "Quinto andar"
        ],
        correta: 1,
        referencia: "Referência: Atos 20:7-12"
    },

    {
        id: 53,
        pergunta: "Quem é chamado de “amigo de Deus” nas Escrituras?",
        alternativas: [
            "Moisés",
            "Davi",
            "Abraão",
            "Salomão"
        ],
        correta: 2,
        referencia: "Referência: Isaías 41:8; Tiago 2:23"
    },

    {
        id: 54,
        pergunta: "Quem é apresentado como autor de grande parte do livro de Provérbios?",
        alternativas: [
            "Davi",
            "Moisés",
            "Salomão",
            "Samuel"
        ],
        correta: 2,
        referencia: "Provérbios 1:1; 10:1"
    },

    {
        id: 55,
        pergunta: "Em qual ilha João estava quando recebeu a revelação do Apocalipse?",
        alternativas: [
            "Creta",
            "Malta",
            "Chipre",
            "Patmos"
        ],
        correta: 3,
        referencia: "Referência: Apocalipse 1:9"
    },

    {
        id: 56,
        pergunta: "Qual foi a última praga enviada sobre o Egito?",
        alternativas: [
            "Trevas",
            "Gafanhotos",
            "Morte dos primogênitos",
            "Águas transformadas em sangue"
        ],
        correta: 2,
        referencia: "Referência: Êxodo 12:29-31"
    }
];
