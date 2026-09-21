var TRILHAS = {
    'republica': {
        titulo: 'República',
        icone: '🇧🇷',
        etapas: [
            { tipo: 'aula', icone: '📖', nome: 'Proclamação', conteudo: '<h2>A Proclamação da República</h2><p>A República foi proclamada em <strong>15 de novembro de 1889</strong>, marcando o fim do Império Brasileiro.</p><h3>Causas principais:</h3><ul><li>Questão Militar - conflitos entre oficiais e o governo</li><li>Abolicionismo - fim da escravatura enfraqueceu a elite rural</li><li>Republicanismos - influência do positivismo</li><li>Crise econômica - queda do preço do café</li></ul><p>Marechal <strong>Deodoro da Fonseca</strong> liderou o golpe que depôs D. Pedro II.</p>' },
            { tipo: 'aula', icone: '⚔️', nome: 'República da Espada', conteudo: '<h2>República da Espada (1889-1894)</h2><p>Período dominado pelos militares.</p><h3>Deodoro da Fonseca:</h3><ul><li>Governo provisório (1889-1891)</li><li>Primeira Constituição Republicana</li><li>Renúncia em 1891</li></ul><h3>Floriano Peixoto:</h3><ul><li>"Marechal de Ferro"</li><li>Repressão à Revolta da Armada</li></ul>' },
            { tipo: 'aula', icone: '☕', nome: 'República Oligárquica', conteudo: '<h2>República do Café com Leite</h2><p>Período de 1894 a 1930, com poder alternado entre SP e MG.</p><h3>Características:</h3><ul><li>Café com leite - alternância de poder</li><li>Política dos governadores</li><li>Coronelismo</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 1' },
            { tipo: 'aula', icone: '🔄', nome: 'Revolução de 1930', conteudo: '<h2>A Revolução de 1930</h2><p>Movimento que depôs Washington Luís.</p><h3>Causas:</h3><ul><li>Fraude eleitoral</li><li>Aliança Liberal</li><li>Crise econômica internacional</li></ul>' },
            { tipo: 'aula', icone: '🏭', nome: 'Era Vargas', conteudo: '<h2>A Era Vargas (1930-1945)</h2><p>15 anos no poder.</p><h3>Feitos:</h3><ul><li>CLT e direitos trabalhistas</li><li>Industrialização</li><li>Petrobras</li></ul>' },
            { tipo: 'aula', icone: '🏗️', nome: 'Redemocratização', conteudo: '<h2>Redemocratização (1945-1964)</h2><p>Retorno às eleições diretas.</p><h3>Presidentes:</h3><ul><li>JK - Brasília</li><li>Jânio Quadros</li><li>Jango</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 2' },
            { tipo: 'aula', icone: '🔒', nome: 'Ditadura Militar', conteudo: '<h2>Ditadura Militar (1964-1985)</h2><p>21 anos de regime autoritário.</p><h3>Marcos:</h3><ul><li>AI-5</li><li>Milagre Econômico</li><li>Anos de Chumbo</li></ul>' },
            { tipo: 'aula', icone: '🗳️', nome: 'Nova República', conteudo: '<h2>Nova República (1985-atual)</h2><p>Retorno à democracia.</p><h3>Marcos:</h3><ul><li>Constituição de 88</li><li>Plano Real</li><li>Impeachment Dilma</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio Final' }
        ],
        flashcards: {
            'Proclamação': [
                { frente: 'Quando foi proclamada a República?', verso: '15 de novembro de 1889. Golpe militar liderado por Deodoro da Fonseca depôs D. Pedro II, que estava doente e sem apoio político.' },
                { frente: 'Quem liderou o golpe?', verso: 'Marechal Deodoro da Fonseca, amigo pessoal do Imperador. Inicialmente queria mudar o gabinete, mas foi levado a proclamar a República.' },
                { frente: 'Qual ideologia influenciou os republicanos?', verso: 'O Positivismo de Auguste Comte. Seu lema "Ordem e Progresso" está na bandeira brasileira.' },
                { frente: 'Qual crise enfraqueceu o Império?', verso: 'A crise do café com queda dos preços. Somada à abolição da escravatura em 1888, os cafeicultores retiraram apoio.' },
                { frente: 'Quem foi o último Imperador?', verso: 'D. Pedro II, que governou por 49 anos (1840-1889). Estava doente (diabetes) e sem herdeiros homens.' }
            ],
            'República da Espada': [
                { frente: 'Quando durou a República da Espada?', verso: 'De 1889 a 1894, 5 anos dominados por militares.' },
                { frente: 'Como era apelidado Floriano Peixoto?', verso: 'Marechal de Ferro, por sua rigidez e autoritarismo.' },
                { frente: 'O que foi a Revolta da Armada?', verso: 'Rebelião de marinheiros contra Floriano em 1893. Foi reprimida com artilharia do Exército.' },
                { frente: 'Por que Deodoro renunciou?', verso: 'Tentou fechar o Congresso em 1891, mas a oposição o obrigou a renunciar após 9 meses.' },
                { frente: 'Qual foi a primeira Constituição?', verso: 'A Constituição de 1891, inspirada nos EUA, com federalismo e presidencialismo.' }
            ],
            'República Oligárquica': [
                { frente: 'O que significa "Café com Leite"?', verso: 'Alternância de poder entre São Paulo (café) e Minas Gerais (leite) de 1894 a 1930.' },
                { frente: 'O que era o coronelismo?', verso: 'Sistema onde latifundiários controlavam votos em troca de cargos e favores do governo.' },
                { frente: 'O que era a Política dos Governadores?', verso: 'Acordo entre governo federal e governadores para manter o sistema oligárquico estável.' },
                { frente: 'Qual produto sustentava a economia?', verso: 'O café, com mais de 70% das exportações. A crise de 1929 derrubou o sistema.' },
                { frente: 'Quais estados dominavam?', verso: 'São Paulo e Minas Gerais, exceto Hermes da Fonseca (RS) e Nilo Peçanha (RJ).' }
            ],
            'Revolução de 1930': [
                { frente: 'Quem foi deposto em 1930?', verso: 'Washington Luís, que indicou outro paulista quebrando a alternância café com leite.' },
                { frente: 'Quem era o candidato derrotado?', verso: 'Getúlio Vargas, governador do Rio Grande do Sul. Perdeu eleições consideradas fraudulentas.' },
                { frente: 'O que foi a Aliança Liberal?', verso: 'Coalizão de partidos de SP, MG e Nordeste contra o predomínio paulista.' },
                { frente: 'Quem foi assassinado antes da revolução?', verso: 'João Pessoa, vice-candidato de Vargas. Sua morte gerou comoção nacional.' },
                { frente: 'Qual crise ajudou o golpe?', verso: 'A Grande Depressão de 1929, que derrubou o preço do café e causou instabilidade.' }
            ],
            'Era Vargas': [
                { frente: 'Quanto tempo Vargas governou?', verso: '15 anos: Provisório (1930-34), Constitucional (1934-37) e Estado Novo (1937-45).' },
                { frente: 'O que foi o Estado Novo?', verso: 'Regime ditatorial inspirado no fascismo. Sem eleições, com censura e repressão.' },
                { frente: 'O que a CLT trouxe?', verso: 'Férias, 13º, FGTS, aviso prévio. Uma das maiores conquistas trabalhistas da América Latina.' },
                { frente: 'Qual estatal foi criada?', verso: 'A Petrobras em 1953. O slogan "O petróleo é nosso" mobilizou o país.' },
                { frente: 'Como era o governo de Vargas?', verso: 'Centralizado, autoritário e populista. Usava o trabalhismo como base de apoio.' }
            ],
            'Redemocratização': [
                { frente: 'O que JK construiu?', verso: 'Brasília, inaugurada em 1960. Projetada por Lúcio Costa e Oscar Niemeyer.' },
                { frente: 'O que foi o Plano de Metas?', verso: '"50 anos em 5" - programa de industrialização que cresceu o PIB em 75%.' },
                { frente: 'Por que Jânio renunciou?', verso: 'Após 7 meses, alegou "forças terríveis". Na verdade, era inabilidade política.' },
                { frente: 'Quem foi o último antes do golpe?', verso: 'João Goulart (Jango), deposto em 31 de março de 1964.' },
                { frente: 'Quando ocorreu o golpe?', verso: '31 de março de 1964, com apoio dos EUA (Operação Brother Sam).' }
            ],
            'Ditadura Militar': [
                { frente: 'Quantos anos durou?', verso: '21 anos (1964-1985). 5 generais como presidentes.' },
                { frente: 'O que foi o AI-5?', verso: 'Ato mais repressivo: fechou Congresso, cassou mandatos, permitiu tortura.' },
                { frente: 'O que foi o Milagre Econômico?', verso: 'Crescimento de 10% ao ano com enorme desigualdade. Baseado em empréstimos externos.' },
                { frente: 'O que acontecia com opositores?', verso: 'Desaparecimentos forçados, tortura, exílio. Mais de 400 mortos ou desaparecidos.' },
                { frente: 'O que significava "Anos de Chumbo"?', verso: 'Período de 1968 a 1974 com maior repressão e violência do regime.' }
            ],
            'Nova República': [
                { frente: 'Quando foi a Constituição Cidadã?', verso: '5 de outubro de 1988. Considerada a mais democrática do Brasil.' },
                { frente: 'O que foi o Plano Real?', verso: 'Estabilização econômica em 1994 que acabou com inflação de 2.000% ao ano.' },
                { frente: 'Quem foi o primeiro presidente eleito?', verso: 'Fernando Henrique Cardoso (1994-2002). Implementou Plano Real e privatizações.' },
                { frente: 'O que aconteceu com Dilma?', verso: 'Impeachment em 2016 por pedaladas fiscais. Primeira mulher presidente.' },
                { frente: 'Qual a marca da Nova República?', verso: 'Democracia e eleições diretas, mas com crises políticas e econômicas.' }
            ]
        }
    },

    'geopolitica': {
        titulo: 'Geopolítica do Século XXI',
        icone: '🌍',
        etapas: [
            { tipo: 'aula', icone: '🌐', nome: 'Mundo Unipolar', conteudo: '<h2>O Mundo Unipolar</h2><p>Após a Guerra Fria, os EUA tornaram-se a única superpotência.</p><h3>Características:</h3><ul><li>Hegemonia americana</li><li>Globalização acelerada</li><li>Intervenções militares no Oriente Médio</li></ul>' },
            { tipo: 'aula', icone: '🇨🇳', nome: 'Ascensão da China', conteudo: '<h2>A Ascensão da China</h2><p>A China tornou-se a segunda maior economia do mundo.</p><h3>Fatores:</h3><ul><li>Reformas econômicas de Deng Xiaoping</li><li>Manufatura global</li><li>Investimento em tecnologia</li></ul>' },
            { tipo: 'aula', icone: '🇷🇺', nome: 'Rússia Moderna', conteudo: '<h2>A Rússia de Putin</h2><p>A Rússia busca recuperar influência geopolítica.</p><h3>Ações:</h3><ul><li>Anexação da Crimeia (2014)</li><li>Guerra na Ucrânia</li><li>Aliança com China</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 1' },
            { tipo: 'aula', icone: '🇧🇷', nome: 'Brasil no Mundo', conteudo: '<h2>O Brasil na Geopolítica</h2><p>O Brasil é potência regional e membro dos BRICS.</p><h3>Relações:</h3><ul><li>Mercosul</li><li>BRICS</li><li>ONU</li></ul>' },
            { tipo: 'aula', icone: '⚖️', nome: 'Conflitos Modernos', conteudo: '<h2>Conflitos do Século XXI</h2><p>Guerras híbridas e cibernéticas.</p><h3>Tipos:</h3><ul><li>Guerras comerciais</li><li>Ataques cibernéticos</li><li>Guerras por procuração</li></ul>' },
            { tipo: 'aula', icone: '🛢️', nome: 'Petróleo e Energia', conteudo: '<h2>Geopolítica da Energia</h2><p>Controle de recursos energéticos é estratégico.</p><h3>Questões:</h3><ul><li>OPEP</li><li>Transição energética</li><li>Dependência europeia do gás russo</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 2' },
            { tipo: 'aula', icone: '🤖', nome: 'Tecnologia e Poder', conteudo: '<h2>Tecnologia como Poder</h2><p>Quem controla a tecnologia domina o futuro.</p><h3>Áreas:</h3><ul><li>Inteligência Artificial</li><li>5G</li><li>Semicondutores</li></ul>' },
            { tipo: 'aula', icone: '🌱', nome: 'Questões Ambientais', conteudo: '<h2>Geopolítica Ambiental</h2><p>Mudanças climáticas afetam relações internacionais.</p><h3>Acordos:</h3><ul><li>Acordo de Paris</li><li>COP28</li><li>Amazônia</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio Final' }
        ],
        flashcards: {
            'Mundo Unipolar': [
                { frente: 'O que é unipolaridade?', verso: 'Sistema internacional com uma única superpotência dominante, no caso os EUA após 1991.' },
                { frente: 'Quando terminou a Guerra Fria?', verso: '1991, com a dissolução da URSS. Os EUA ficaram como única superpotência.' },
                { frente: 'O que foi a Globalização?', verso: 'Integração econômica, cultural e política global acelerada após a Guerra Fria.' },
                { frente: 'Quais intervenções americanas ocorreram?', verso: 'Iraque (1991 e 2003), Afeganistão (2001), Líbia (2011) entre outras.' },
                { frente: 'O que é hegemonia?', verso: 'Domínio político, econômico e militar de um país sobre os demais no sistema internacional.' }
            ],
            'Ascensão da China': [
                { frente: 'Quando a China se abriu economicamente?', verso: 'Em 1978, com as reformas de Deng Xiaoping que implantaram o "socialismo de mercado".' },
                { frente: 'Qual a posição econômica da China?', verso: 'Segunda maior economia do mundo, superando o Japão em 2010.' },
                { frente: 'O que é a Rota da Seda?', verso: 'Projeto chinês de infraestrutura para conectar Asia, Europa e África por terra e mar.' },
                { frente: 'Como a China investe em tecnologia?', verso: 'Líder em 5G, IA, veículos elétricos e semicondutores. Empresas como Huawei e TikTok.' },
                { frente: 'Qual a população da China?', verso: 'Mais de 1,4 bilhão de habitantes, sendo o país mais populoso do mundo até 2023.' }
            ],
            'Rússia Moderna': [
                { frente: 'Quando Putin chegou ao poder?', verso: 'Em 2000, como presidente. Desde então domina a política russa alternando com Medvedev.' },
                { frente: 'O que foi a anexação da Crimeia?', verso: 'Em 2014, a Rússia anexou a Crimeia ucraniana, gerando sanções ocidentais.' },
                { frente: 'O que é a OTAN?', verso: 'Organização do Tratado do Atlântico Norte, aliança militar ocidental liderada pelos EUA.' },
                { frente: 'Qual o objetivo russo na Ucrânia?', verso: 'Impedir a entrada da Ucrânia na OTAN e manter influência sobre a região.' },
                { frente: 'O que são os BRICS?', verso: 'Bloco de países emergentes: Brasil, Rússia, Índia, China e África do Sul.' }
            ],
            'Brasil no Mundo': [
                { frente: 'O que é o Mercosul?', verso: 'Mercado Comum do Sul, bloco econômico sul-americano fundado em 1991.' },
                { frente: 'O Brasil é membro dos BRICS?', verso: 'Sim, desde 2010. O bloco busca alternativas ao domínio ocidental.' },
                { frente: 'Qual a importância da Amazônia?', verso: 'Maior floresta tropical do mundo, estratégica para clima e recursos naturais.' },
                { frente: 'O Brasil é potência regional?', verso: 'Sim, maior economia da América Latina e líder político na região.' },
                { frente: 'Qual o papel do Brasil na ONU?', verso: 'Membro permanente do Conselho de Segurança (desejo) e contribuições para paz.' }
            ],
            'Conflitos Modernos': [
                { frente: 'O que é guerra híbrida?', verso: 'Combina guerra convencional com cibernética, desinformação e influência política.' },
                { frente: 'O que são sanções econômicas?', verso: 'Restrições comerciais impostas por países contra nações que violam normas internacionais.' },
                { frente: 'O que é guerra cibernética?', verso: 'Ataques a sistemas de informática de países adversários para espionagem ou sabotagem.' },
                { frente: 'O que são guerras por procuração?', verso: 'Conflitos onde potências apoiam lados opostos sem entrar diretamente em guerra.' },
                { frente: 'Qual conflito marca o século XXI?', verso: 'A Guerra ao Terror (2001-2021), incluindo Afeganistão e Iraque.' }
            ],
            'Petróleo e Energia': [
                { frente: 'O que é a OPEP?', verso: 'Organização dos Países Exportadores de Petróleo, que controla a oferta global.' },
                { frente: 'Por que o petróleo é estratégico?', verso: 'Principal fonte de energia mundial, controla economias e relações geopolíticas.' },
                { frente: 'O que é a transição energética?', verso: 'Mudança de combustíveis fósveis para fontes renováveis (solar, eólica).' },
                { frente: 'Qual a dependência europeia da Rússia?', verso: 'A Europa importava 40% do gás russo antes da guerra na Ucrânia.' },
                { frente: 'O que é o shale gas?', verso: 'Gás de xisto, extraído por fracking. Revolucionou a energia americana.' }
            ],
            'Tecnologia e Poder': [
                { frente: 'Por que a tecnologia é poder?', verso: 'Quem controla IA, 5G e semicondutores domina a economia e a segurança.' },
                { frente: 'O que é a guerra dos semicondutores?', verso: 'Disputa entre EUA e China por chips, essenciais para toda tecnologia moderna.' },
                { frente: 'O que é a Huawei?', verso: 'Empresa chinesa de telecomunicações, líder em 5G, banida por EUA e aliados.' },
                { frente: 'O que é vigilância em massa?', verso: 'Coleta massiva de dados por governos e empresas, como revelado por Snowden.' },
                { frente: 'O que é soberania digital?', verso: 'Capacidade de um país controlar suas próprias tecnologias e dados sem dependência externa.' }
            ],
            'Questões Ambientais': [
                { frente: 'O que é o Acordo de Paris?', verso: 'Pacto global de 2015 para limitar o aquecimento a 1,5°C acima do nível pré-industrial.' },
                { frente: 'O que são as COPs?', verso: 'Conferências das Partes da ONU sobre mudanças climáticas, realizadas anualmente.' },
                { frente: 'Qual o papel da Amazônia no clima?', verso: 'Regula o ciclo hidrológico global e armazena bilhões de toneladas de carbono.' },
                { frente: 'O que é pegada de carbono?', verso: 'Quantidade de gases de efeito estufa emitidos por pessoa, empresa ou país.' },
                { frente: 'O que é energia renovável?', verso: 'Energia de fontes inesgotáveis: solar, eólica, hidrelétrica, geotérmica.' }
            ]
        }
    },

    'filosofia-grega': {
        titulo: 'Filosofia Grega',
        icone: '📚',
        etapas: [
            { tipo: 'aula', icone: '🏛️', nome: 'Pré-Socráticos', conteudo: '<h2>Filósofos Pré-Socráticos</h2><p>Primeiros pensadores que buscavam explicar o mundo pela razão.</p><h3>Principais:</h3><ul><li>Tales de Mileto - a água como origem</li><li>Anaximandro - o ilimitado</li><li>Parmênides - o Ser</li><li>Heraclito - o devir</li></ul>' },
            { tipo: 'aula', icone: '🤔', nome: 'Sócrates', conteudo: '<h2>Sócrates (470-399 a.C.)</h2><p>Pai da filosofia ocidental.</p><h3>Principais ideias:</h3><ul><li>Método socrático - perguntar</li><li>"Só sei que nada sei"</li><li>Exame da vida</li><li>Morte na democracia ateniense</li></ul>' },
            { tipo: 'aula', icone: '📜', nome: 'Platão', conteudo: '<h2>Platão (427-347 a.C.)</h2><p>Discípulo de Sócrates, criador da Academia.</p><h3>Obras principais:</h3><ul><li>A República</li><li>O Mito da Caverna</li><li>Teoria das Ideias</li><li>O Timeu</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 1' },
            { tipo: 'aula', icone: '🦁', nome: 'Aristóteles', conteudo: '<h2>Aristóteles (384-322 a.C.)</h2><p>Discípulo de Platão, mentor de Alexandre, o Grande.</p><h3>Contribuições:</h3><ul><li>Lógica formal</li><li>Ética a Nicômaco</li><li>Política</li><li>Biologia</li></ul>' },
            { tipo: 'aula', icone: '🌙', nome: 'Helenismo', conteudo: '<h2>Período Helenístico</h2><p>Expansão da cultura grega após Alexandre, o Grande.</p><h3>Escolas:</h3><ul><li>Estoicismo - Zenão</li><li>Epicurismo - Epicuro</li><li>Ceticismo - Pirro</li></ul>' },
            { tipo: 'aula', icone: '📖', nome: 'Legado Grego', conteudo: '<h2>O Legado da Filosofia Grega</h2><p>Base de toda a filosofia ocidental.</p><h3>Contribuições:</h3><ul><li>Razão como ferramenta</li><li>Democracia</li><li>Ciência</li><li>Ética</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 2' },
            { tipo: 'aula', icone: '🎭', nome: 'Tragédia Grega', conteudo: '<h2>A Tragédia na Grécia</h2><p>Teatro como forma filosófica e política.</p><h3>Autores:</h3><ul><li>Ésquilo</li><li>Sófocles</li><li>Eurípides</li></ul>' },
            { tipo: 'aula', icone: '⚖️', nome: 'Democracia Ateniense', conteudo: '<h2>A Democracia em Atenas</h2><p>Primeira democracia direta da história.</p><h3>Características:</h3><ul><li>Assembleia do povo</li><li>Sorteio para cargos</li><li>Ostracismo</li><li>Limitações (só homens livres)</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio Final' }
        ],
        flashcards: {
            'Pré-Socráticos': [
                { frente: 'Quem foi Tales de Mileto?', verso: 'Considerado o primeiro filósofo. Propôs que a água é o princípio de todas as coisas (arca).' },
                { frente: 'O que propôs Parmênides?', verso: 'O Ser é uno, imutável e eterno. O devir é apenas aparência dos sentidos.' },
                { frente: 'O que é o "devir" de Heráclito?', verso: 'Tudo está em constante mudança. "Não se pode banhar duas vezes no mesmo rio."' },
                { frente: 'O que é o ápeiron de Anaximandro?', verso: 'O ilimitado, o infinito, de onde tudo nasce e para onde tudo retorna.' },
                { frente: 'Por que são chamados "pré-socráticos"?', verso: 'Viveram antes de Sócrates e se preocupavam mais com a natureza (cosmologia) que com o homem.' }
            ],
            'Sócrates': [
                { frente: 'Qual o método de Sócrates?', verso: 'O método socrático: fazer perguntas para levar o interlocutor à contradição e descobrir a verdade.' },
                { frente: 'O que significava "Só sei que nada sei"?', verso: 'Humildade intelectual: reconhecer a própria ignorância é o início da sabedoria.' },
                { frente: 'Como Sócrates morreu?', verso: 'Condenado a beber cicuta em 399 a.C., acusado de corromper a juventude e não reconhecer os deuses.' },
                { frente: 'Qual a importância de Sócrates?', verso: 'Mudou o foco da filosofia da natureza para o homem. É o marco da filosofia ocidental.' },
                { frente: 'O que é a "missão de Atenas"?', verso: 'A crença de Sócrates de que os deuses o enviaram para despertar os atenienses para a vida examinada.' }
            ],
            'Platão': [
                { frente: 'O que é o Mito da Caverna?', verso: 'Alegoria que mostra a realidade como sombras. O filósofo é quem sai da caverna e vê a verdade.' },
                { frente: 'O que é a Teoria das Ideias?', verso: 'O mundo sensível é cópia imperfeita do mundo das Ideias (Formas), que são eternas e perfeitas.' },
                { frente: 'O que é A República?', verso: 'Obra que descreve o Estado ideal governado por filósofos-reis, com justiça como virtude central.' },
                { frente: 'O que é a Academia?', verso: 'Escola fundada por Platão em Atenas, considerada a primeira universidade do mundo ocidental.' },
                { frente: 'Qual a visão de Platão sobre o conhecimento?', verso: 'Conhecimento é Recordação (Anamnese): a alma já conhece as Ideias e lembra ao filosofar.' }
            ],
            'Aristóteles': [
                { frente: 'Quem foi o mentor de Aristóteles?', verso: 'Platão. Aristóteles estudou na Academia por 20 anos antes de criar sua própria escola.' },
                { frente: 'O que é a Lógica Formal?', verso: 'Sistema de raciocínio dedutivo com silogismos: premissa maior + premissa menor = conclusão.' },
                { frente: 'O que é a Ética a Nicômaco?', verso: 'Obra sobre a vida boa. A felicidade (eudaimonia) é atingida pela prática das virtudes.' },
                { frente: 'Qual a classificação de animais de Aristóteles?', verso: 'Dividiu animais em sangue quente (mamíferos, aves) e sangue frio (peixes, répteis, insetos).' },
                { frente: 'O que é a Política de Aristóteles?', verso: 'O homem é um "animal político". A cidade-estado (polis) é natural e necessária para a vida humana.' }
            ],
            'Helenismo': [
                { frente: 'O que é o Estoicismo?', verso: 'Escola que prega a virtude, a aceitação do destino e o domínio das pações. Fundada por Zenão.' },
                { frente: 'O que é o Epicurismo?', verso: 'Busca do prazer moderado (ataraxia) e ausência de dor. Epicuro viveu no Jardim de Atenas.' },
                { frente: 'O que é o Ceticismo?', verso: 'Dúvida metódica sobre tudo. Pirro dizia que devemos suspender o juízo (epokhé).' },
                { frente: 'Quem foi Alexandre, o Grande?', verso: 'Rei da Macedônia que expandiu a cultura grega até a Índia, criando o período helenístico.' },
                { frente: 'O que mudou no período helenístico?', verso: 'A filosofia focou mais na ética pessoal e na busca pela felicidade individual.' }
            ],
            'Legado Grego': [
                { frente: 'Qual o maior legado da Grécia?', verso: 'A razão como ferramenta de conhecimento. Base da ciência, filosofia e democracia ocidental.' },
                { frente: 'Como a Grécia influenciou a ciência?', verso: 'Hipócrates (medicina), Arquimedes (física), Euclides (geometria) entre outros.' },
                { frente: 'O que a Grécia deixou para a política?', verso: 'A democracia ateniense, o conceito de cidadania e participação política.' },
                { frente: 'Como a Grécia influenciou a arte?', verso: 'Proporções perfeitas, realismo, teatro, arquitetura (colunas, templos).' },
                { frente: 'Por que estudamos filosofia grega?', verso: 'Porque todas as questões fundamentais da filosofia ocidental começaram lá.' }
            ],
            'Tragédia Grega': [
                { frente: 'Quem escreveu Édipo Rei?', verso: 'Sófocles. A tragédia mais famosa da antiguidade, sobre destino e orgulho humano.' },
                { frente: 'O que é a catarse no teatro?', verso: 'Purificação emocional do público através da compaixão e do medo na tragédia.' },
                { frente: 'Quem foi Ésquilo?', verso: 'Pai da tragédia grega. Introduziu o segundo ator, criando o diálogo dramático.' },
                { frente: 'O que Eurípides retratava?', verso: 'Personagens mais humanos e realistas, questionando os deuses e as tradições.' },
                { frente: 'Qual a importância do teatro grego?', verso: 'Era forma de educação cívica, religiosa e artística. Todos participavam das festividades.' }
            ],
            'Democracia Ateniense': [
                { frente: 'Como funcionava a democracia ateniense?', verso: 'Direta: cidadãos votavam diretamente nas leis na Assembleia (Ekklesia). 6.000 cidadãos formavam quórum.' },
                { frente: 'Quem podia votar em Atenas?', verso: 'Apenas homens livres maiores de 18 anos. Mulheres, escravos e estrangeiros eram excluídos.' },
                { frente: 'O que era o ostracismo?', verso: 'Mecanismo para exilar por 10 anos cidadãos considerados ameaça à democracia.' },
                { frente: 'Como eram escolhidos os cargos?', verso: 'Por sorteio, exceto generais e finanças, que eram eleitos.' },
                { frente: 'Quem criou a democracia ateniense?', verso: 'Clístenes em 508 a.C., considerado o pai da democracia.' }
            ]
        }
    },

    'idade-media': {
        titulo: 'Idade Média',
        icone: '🏰',
        etapas: [
            { tipo: 'aula', icone: '⚔️', nome: 'Queda de Roma', conteudo: '<h2>A Queda do Império Romano</h2><p>O Império Romano do Ocidente caiu em <strong>476 d.C.</strong></p><h3>Causas:</h3><ul><li>Invasões bárbaras</li><li>Crise econômica</li><li>Divisão do império</li><li>Fraqueza militar</li></ul><p>Isso marcou o início da Idade Média.</p>' },
            { tipo: 'aula', icone: '⛪', nome: 'A Igreja', conteudo: '<h2>O Poder da Igreja Católica</h2><p>A Igreja era a maior autoridade da Idade Média.</p><h3>Poderes:</h3><ul><li>Espiritual - salvação das almas</li><li>Política - apoio a reis</li><li>Cultural - única instituição de ensino</li><li>Econômica - grandes propriedades</li></ul>' },
            { tipo: 'aula', icone: '🏰', nome: 'Feudalismo', conteudo: '<h2>O Sistema Feudal</h2><p>Organização política e econômica baseada em senhores e vassalos.</p><h3>Pirâmide Social:</h3><ul><li>Rei</li><li>Senhores feudais</li><li>Vassalos (cavaleiros)</li><li>Servos da gleba</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 1' },
            { tipo: 'aula', icone: '🗡️', nome: 'Cruzadas', conteudo: '<h2>As Cruzadas</h2><p>Guerras religiosas para reconquistar a Terra Santa.</p><h3>Principais:</h3><ul><li>1ª Cruzada (1096-1099) - conquista de Jerusalém</li><li>3ª Cruzada - Ricardo Coração de Leão vs Saladino</li><li>4ª Cruzada - saque de Constantinopla</li></ul>' },
            { tipo: 'aula', icone: '🌾', nome: 'Vida Medieval', conteudo: '<h2>A Vida no Medievo</h2><p>A vida girava em torno da terra e da Igreja.</p><h3>Aspectos:</h3><ul><li>Agricultura de subsistência</li><li>Feiras e comércio</li><li>Peste Negra (1347-1353)</li><li>Universidades medievais</li></ul>' },
            { tipo: 'aula', icone: '👑', nome: 'Reis e Impérios', conteudo: '<h2>Grandes Impérios Medievais</h2><p>Impérios moldaram a Europa medieval.</p><h3>Principais:</h3><ul><li>Sacro Império Romano-Germânico</li><li>Império Bizantino</li><li>Império Carolíngio (Carlos Magno)</li><li>Império Mongol</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 2' },
            { tipo: 'aula', icone: '📚', nome: 'Cultura Medieval', conteudo: '<h2>A Cultura Medieval</h2><p>Cultura dominada pela Igreja, mas com renascimento comercial.</p><h3>Marcos:</h3><ul><li>Escolas catedralícias</li><li>Sumes Teologia</li><li>Troubadours</li><li>Arte românica e gótica</li></ul>' },
            { tipo: 'aula', icone: '🚢', nome: 'Fim da Idade Média', conteudo: '<h2>O Fim do Medievo</h2><p>Fatores que encerraram a Idade Média.</p><h3>Mudanças:</h3><ul><li>Queda de Constantinopla (1453)</li><li>Descobrimentos marítimos</li><li>Renascimento</li><li>Reforma Protestante</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio Final' }
        ],
        flashcards: {
            'Queda de Roma': [
                { frente: 'Quando caiu o Império Romano do Ocidente?', verso: 'Em 476 d.C., quando Odoacro depôs Rômulo Augusto, último imperador romano do Ocidente.' },
                { frente: 'Quais povos invadiram Roma?', verso: 'Visigodos, Vândalos, Ostrogodos, Hunos, Lombardos e Francos entre outros.' },
                { frente: 'O que causou a queda de Roma?', verso: 'Crise econômica, inflação, superexploração, desemprego, corrupção e invasões bárbaras.' },
                { frente: 'O que aconteceu com Constantinopla?', verso: 'Sobreviveu como Império Bizantino até 1453, quando foi conquistada pelos otomanos.' },
                { frente: 'Como a queda de Roma mudou a Europa?', verso: 'Fragmentação política, ruralização, perda de urbanização e domínio da Igreja.' }
            ],
            'A Igreja': [
                { frente: 'Qual o papel da Igreja na Idade Média?', verso: 'Autoridade espiritual, política e cultural. Controlava educação, moral e até reis.' },
                { frente: 'O que eram os mosteiros?', verso: 'Comunidades de monges que preservaram o saber antigo e lideraram a agricultura.' },
                { frente: 'Quem era o Papa?', verso: 'Chefe da Igreja Católica, com poder sobre reis e imperadores. Mais forte que qualquer monarca.' },
                { frente: 'O que eram os dízimos?', verso: '10% da renda que os fieis deviam pagar à Igreja. Era uma obrigação religiosa.' },
                { frente: 'Como a Igreja controlava o conhecimento?', verso: 'Todos os livros passavam pelo crivo dela. Hereges eram perseguidos pela Inquisição.' }
            ],
            'Feudalismo': [
                { frente: 'O que é o feudalismo?', verso: 'Sistema político-econômico baseado em relações de senhorio e vassalagem, com terras como moeda de troca.' },
                { frente: 'Quem eram os servos da gleba?', verso: 'Camponeses ligados à terra do senhor. Não podiam sair e trabalhavam em troca de proteção.' },
                { frente: 'O que era a vassalagem?', verso: 'Relação de fidelidade entre vassalo (que servia) e senhor (que protegia e dava terras).' },
                { frente: 'O que era um feudo?', verso: 'Propriedade rural fortificada, auto-suficiente, era a unidade básica do sistema feudal.' },
                { frente: 'Qual a pirâmide social feudal?', verso: 'Rei → Senhores feudais → Vassalos (cavaleiros) → Clero → Servos da gleba.' }
            ],
            'Cruzadas': [
                { frente: 'O que foram as Cruzadas?', verso: 'Expedições militares religiosas para reconquistar Jerusalém e a Terra Santa dos muçulmanos.' },
                { frente: 'Quando foi a 1ª Cruzada?', verso: '1096-1099. Os cristãos conquistaram Jerusalém e criaram estados cruzados no Oriente.' },
                { frente: 'Quem era Saladino?', verso: 'Sultão muçulmano que reconquistou Jerusalém em 1187. Oposto a Ricardo Coração de Leão.' },
                { frente: 'O que a 4ª Cruzada causou?', verso: 'O saque de Constantinopla (1204) por cruzados, enfraquecendo o Império Bizantino.' },
                { frente: 'Qual o legado das Cruzadas?', verso: 'Troca cultural entre Oriente e Ocidente, comércio, medicina, matemática e especiarias.' }
            ],
            'Vida Medieval': [
                { frente: 'Como era a alimentação medieval?', verso: 'Pão, cereal, legumes. Carne apenas para os ricos. Água ou cerveja (mais segura que água).' },
                { frente: 'O que foi a Peste Negra?', verso: 'Pandemia de peste bubônica (1347-1353) que matou 1/3 da população europeia (25 milhões).' },
                { frente: 'Como funcionavam as feiras medievais?', verso: 'Eventos periódicos onde mercadores vendiam produtos. Surgiram cidades ao redor delas.' },
                { frente: 'O que eram as universidades medievais?', verso: 'Centros de ensino superior em Bolonha, Paris, Oxford. Estudavam teologia, direito e medicina.' },
                { frente: 'Como era o dia a dia de um servo?', verso: 'Trabalho na terra do senhor, pagamento em trabalho ou produto, sem liberdade de ir e vir.' }
            ],
            'Reis e Impérios': [
                { frente: 'Quem foi Carlos Magno?', verso: 'Rei dos Francos (768-814), unificou grande parte da Europa Ocidental. Coroado imperador pelo Papa.' },
                { frente: 'O que era o Sacro Império?', verso: 'Império germânico que durou de 800 a 1806. Reivindicava a herança de Roma.' },
                { frente: 'O que era o Império Bizantino?', verso: 'Herdeiro oriental de Roma, com capital em Constantinopla. Dominou 1.000 anos.' },
                { frente: 'O que foi o Império Mongol?', verso: 'Maior império contíguo da história, liderado por Genghis Khan no século XIII.' },
                { frente: 'Como os reis mantinham o poder?', verso: 'Através da lealdade dos vassalos, da Igreja e do controle das terras e exércitos.' }
            ],
            'Cultura Medieval': [
                { frente: 'O que eram as escolas catedralícias?', verso: 'Escolas ligadas às catedrais, formando clérigos e preserve o saber antigo.' },
                { frente: 'O que é o Escolasticismo?', verso: 'Corrente filosófica que unia fé e razão. São Tomás de Aquino é o maior expoente.' },
                { frente: 'O que eram os trovadores?', verso: 'Poetas-músicos que cantavam amor cortês, cavalaria e feitos heroicos.' },
                { frente: 'O que é a arte românica?', verso: 'Estilo arquitetônico com arcos semicirculares, muros grossos e poucas janelas.' },
                { frente: 'O que é a arte gótica?', verso: 'Arcos apontados, vitrais coloridos, catedrais altas como Notre-Dame de Paris.' }
            ],
            'Fim da Idade Média': [
                { frente: 'Quando caiu Constantinopla?', verso: 'Em 1453, para os otomanos. Marco simbólico do fim da Idade Média.' },
                { frente: 'O que foram os Descobrimentos?', verso: 'Viagens marítimas europeias que abriram rotas comerciais (Portugal e Espanha).' },
                { frente: 'O que foi o Renascimento?', verso: 'Renascimento cultural que valorizou o homem, a ciência e a arte. Nasceu na Itália no século XIV.' },
                { frente: 'O que foi a Reforma Protestante?', verso: 'Lutero questionou a Igreja em 1517, dividindo o cristianismo europeu.' },
                { frente: 'O que mudou com o fim da Idade Média?', verso: 'Fim do feudalismo, início do capitalismo, centralização política e novas descobertas.' }
            ]
        }
    },

    'sociologia': {
        titulo: 'Sociologia',
        icone: '👥',
        etapas: [
            { tipo: 'aula', icone: '📖', nome: 'O que é Sociologia?', conteudo: '<h2>Introdução à Sociologia</h2><p>Ciência que estuda a sociedade e as relações sociais.</p><h3>Pai da Sociologia:</h3><ul><li>Auguste Comte - criou o termo</li><li>Émile Durkheim - fundador científico</li></ul>' },
            { tipo: 'aula', icone: '🏭', nome: 'Marx e o Capitalismo', conteudo: '<h2>Karl Marx (1818-1883)</h2><p>Crítico do capitalismo, pai do socialismo científico.</p><h3>Principais ideias:</h3><ul><li>Luta de classes</li><li>Materialismo histórico</li><li>Alienação do trabalho</li><li>Comunismo</li></ul>' },
            { tipo: 'aula', icone: '🔬', nome: 'Durkheim', conteudo: '<h2>Émile Durkheim (1858-1917)</h2><p>Fundador da Sociologia como ciência.</p><h3>Contribuições:</h3><ul><li>Fatos sociais</li><li>Divisão do trabalho social</li><li>Suicídio - estudo sociológico</li><li>Consciência coletiva</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 1' },
            { tipo: 'aula', icone: '📊', nome: 'Weber', conteudo: '<h2>Max Weber (1864-1920)</h2><p>Pai da Sociologia compreensiva.</p><h3>Conceitos:</h3><ul><li>Ação social</li><li>Tipos ideais</li><li>Racionalização</li><li>Ética protestante</li></ul>' },
            { tipo: 'aula', icone: '🏛️', nome: 'Instituições Sociais', conteudo: '<h2>Instituições Sociais</h2><p>Organizações que regulam o comportamento.</p><h3>Principais:</h3><ul><li>Família</li><li>Escola</li><li>Religião</li><li>Estado</li></ul>' },
            { tipo: 'aula', icone: '🔄', nome: 'Mudança Social', conteudo: '<h2>Mudança Social</h2><p>Como as sociedades transformam-se.</p><h3>Teorias:</h3><ul><li>Conflito (Marx)</li><li>Funcionalismo (Durkheim)</li><li>Interação simbólica (Mead)</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 2' },
            { tipo: 'aula', icone: '⚖️', nome: 'Desigualdade Social', conteudo: '<h2>Desigualdade Social</h2><p>Distribuição desigual de riqueza e poder.</p><h3>Indicadores:</h3><ul><li>Gini</li><li>IDH</li><li>Renda per capita</li></ul>' },
            { tipo: 'aula', icone: '🌐', nome: 'Globalização', conteudo: '<h2>Globalização</h2><p>Integração mundial econômica, cultural e política.</p><h3>Aspectos:</h3><ul><li>Comércio internacional</li><li>Cultura global</li><li>Migrações</li><li>Tecnologia</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio Final' }
        ],
        flashcards: {
            'O que é Sociologia': [
                { frente: 'O que estuda a Sociologia?', verso: 'A sociedade, as relações sociais, instituições e processos de mudança social.' },
                { frente: 'Quem criou o termo Sociologia?', verso: 'Auguste Comte em 1838. Mas Émile Durkheim a fundou como ciência.' },
                { frente: 'O que é um fato social?', verso: 'Modos de agir, pensar e sentir externos ao indivíduo e que exercem coerção (Durkheim).' },
                { frente: 'Qual a importância da Sociologia?', verso: 'Compreender as relações sociais, explicar fenômenos e pensar soluções para problemas.' },
                { frente: 'O que é a ação social?', verso: 'Conduta humana com sentido subjetivo, definida por Weber como base da Sociologia.' }
            ],
            'Marx e o Capitalismo': [
                { frente: 'O que é a luta de classes?', verso: 'Conflito entre burguesia (dona dos meios de produção) e proletariado (vende força de trabalho).' },
                { frente: 'O que é alienação do trabalho?', verso: 'O trabalhador se torna estranho ao produto, ao processo, a si mesmo e aos outros.' },
                { frente: 'O que é materialismo histórico?', verso: 'Teoria de que a base econômica (forças produtivas) determina a superestrutura (cultura, política).' },
                { frente: 'O que Marx previu?', verso: 'A revolução do proletariado e o fim do capitalismo, com a abolição da propriedade privada.' },
                { frente: 'Quais são as obras principais de Marx?', verso: 'O Manifesto Comunista (1848) e O Capital (1867-1894).' }
            ],
            'Durkheim': [
                { frente: 'O que Durkheim estudou sobre o suicídio?', verso: 'Que taxas de suicídio variam entre sociedades, mostrando influência de fatores sociais.' },
                { frente: 'O que é a consciência coletiva?', verso: 'Conjunto de crenças e sentimentos comuns aos membros de uma sociedade.' },
                { frente: 'O que é a divisão do trabalho social?', verso: 'Especialização de tarefas que aumenta a solidariedade orgânica em sociedades modernas.' },
                { frente: 'Como Durkheim definia os fatos sociais?', verso: 'Como exteriores ao indivíduo, coercitivos e gerais em uma sociedade.' },
                { frente: 'Qual a obra-prima de Durkheim?', verso: 'Da Divisão do Trabalho Social (1893) e As Regras do Método Sociológico (1895).' }
            ],
            'Weber': [
                { frente: 'O que é ação social para Weber?', verso: 'Ação humana com sentido subjetivo, orientada para o comportamento de outros.' },
                { frente: 'O que são tipos ideais?', verso: 'Modelos conceituais puros para analisar a realidade social.' },
                { frente: 'O que é racionalização?', verso: 'Processo pelo qual a sociedade substitui tradições por razão e cálculo.' },
                { frente: 'O que é a ética protestante?', verso: 'A ideia de que o protestantismo incentivou o trabalho árduo e a acumulação de capital.' },
                { frente: 'Quais os tipos de ação social?', verso: 'Tradicional, afetiva, por valores e racional com relação a fins.' }
            ],
            'Instituições Sociais': [
                { frente: 'O que são instituições sociais?', verso: 'Organizações estáveis que regulam comportamentos e expectativas na sociedade.' },
                { frente: 'Qual o papel da família?', verso: 'Socialização primária, reprodução, afeto e sustento dos membros.' },
                { frente: 'Qual o papel da escola?', verso: 'Socialização secundária, transmissão de conhecimentos e valores sociais.' },
                { frente: 'Qual o papel da religião?', verso: 'Dar sentido à existência, coesão social e legitimar ordens sociais.' },
                { frente: 'Qual o papel do Estado?', verso: 'Regular conflitos, manter ordem, fornecer serviços e legitimar o poder.' }
            ],
            'Mudança Social': [
                { frente: 'O que causa mudança social?', verso: 'Conflitos, inovações tecnológicas, crises, movimentos sociais e transformações culturais.' },
                { frente: 'Como Marx via a mudança?', verso: 'Através da luta de classes e revolução, com o proletariado tomando o poder.' },
                { frente: 'Como Durkheim via a mudança?', verso: 'Como evolução orgânica: da solidariedade mecânica para a orgânica.' },
                { frente: 'O que é ação coletiva?', verso: 'Ações de grupos para atingir objetivos comuns, como movimentos sociais e greves.' },
                { frente: 'O que é revolução?', verso: 'Mudança radical e rápida nas estruturas sociais, políticas e econômicas.' }
            ],
            'Desigualdade Social': [
                { frente: 'O que mede o coeficiente de Gini?', verso: 'A distribuição de renda: 0 (igualdade perfeita) a 1 (desigualdade total). Brasil: ~0,53.' },
                { frente: 'O que é o IDH?', verso: 'Índice de Desenvolvimento Humano: mede renda, educação e expectativa de vida.' },
                { frente: 'Quais fatores geram desigualdade?', verso: 'Educação, acesso a emprego, herança, discriminação e políticas públicas.' },
                { frente: 'Qual a desigualdade do Brasil?', verso: 'Um dos países mais desiguais do mundo. Rico-pobre 20x mais rico que o mais pobre.' },
                { frente: 'Como reduzir desigualdades?', verso: 'Educação pública, reforma tributária, programas sociais e geração de emprego.' }
            ],
            'Globalização': [
                { frente: 'O que é globalização?', verso: 'Integração econômica, política e cultural entre países, com fluxo global de informações e bens.' },
                { frente: 'Quais os aspectos da globalização?', verso: 'Econômico (comércio), político (governos), cultural (valores) e tecnológico (internet).' },
                { frente: 'O que é a McDonaldização?', verso: 'Conceito de Ritzer: aplicação da lógica da fast-food a todas as áreas da vida.' },
                { frente: 'O que são multinacionais?', verso: 'Empresas que operam em vários países, com poder econômico maior que许多estados.' },
                { frente: 'Quais críticas à globalização?', verso: 'Desigualdade, perda de identidade cultural, exploração e danos ambientais.' }
            ]
        }
    },

    'brasil-colonial': {
        titulo: 'Brasil Colonial',
        icone: '🇧🇷',
        etapas: [
            { tipo: 'aula', icone: '⛵', nome: 'Descobrimento', conteudo: '<h2>O Descobrimento do Brasil</h2><p>Em <strong>22 de abril de 1500</strong>, Pedro Álvares Cabral chegou ao Brasil.</p><h3>Contexto:</h3><ul><li>Tratado de Tordesilhas</li><li>Busca de especiarias</li><li>Rotas marítimas</li></ul>' },
            { tipo: 'aula', icone: '🪵', nome: 'Período do Pau-Brasil', conteudo: '<h2>O Período do Pau-Brasil</h2><p>Exploração do pau-brasil para tingimento de tecidos.</p><h3>Características:</h3><ul><li>Extrativismo</li><li>Escambo com indígenas</li><li>Feitorias</li><li>Crise do comércio</li></ul>' },
            { tipo: 'aula', icone: '🏭', nome: 'Capitanias Hereditárias', conteudo: '<h2>As Capitanias Hereditárias</h2><p>Divisão do litoral em 1534.</p><h3>Organização:</h3><ul><li>15 capitanias</li><li>Donatários</li><li>Foral de São Vicente</li><li>Sucesso parcial</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 1' },
            { tipo: 'aula', icone: '🏗️', nome: 'Geral do Brasil', conteudo: '<h2>O Governo Geral</h2><p>Criado em 1549 para centralizar.</p><h3>Elementos:</h3><ul><li>Geral (Tomé de Sousa)</li><li>Cidade de Salvador</li><li>Câmara, Ouvidor, Tesoureiro</li><li>Início da colonização efetiva</li></ul>' },
            { tipo: 'aula', icone: '⛽', nome: 'Ciclo da Cana-de-açúcar', conteudo: '<h2>O Ciclo do Açúcar</h2><p>Principal atividade econômica do século XVI-XVII.</p><h3>Estrutura:</h3><ul><li>Engenhos de açúcar</li><li>Trabalho escravo africano</li><li>Conselho Ultramarino</li><li>Exportação para Europa</li></ul>' },
            { tipo: 'aula', icone: '⚔️', nome: 'Invasões Estrangeiras', conteudo: '<h2>Invasões Holandesas</h2><p>Holandeses atacaram o Nordeste (1630-1654).</p><h3>Marcos:</h3><ul><li>Captura de Salvador (1624)</li><li>Conquista de Pernambuco</li><li>Johan Maurício</li><li>Expulsão em 1654</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 2' },
            { tipo: 'aula', icone: '⛏️', nome: 'Minas Gerais', conteudo: '<h2>Ciclo do Ouro e Diamantes</h2><p>Descoberta de ouro em Minas Gerais (1690s).</p><h3>Impactos:</h3><ul><li>Capitação - imposto sobre ouro</li><li>Intensificação da escravidão</li><li>Distrito Diamantino</li><li>Esforço colossal</li></ul>' },
            { tipo: 'aula', icone: '🔨', nome: 'Grande Revolta', conteudo: '<h2>Revolta de Filipe dos Santos</h2><p>Movimento mineiro contra impostos (1720).</p><h3>Marcos:</h3><ul><li>Reforma administrativa</li><li>Perseguição a judeus</li><li>Controle fiscal</li><li>Reação dos mineradores</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio Final' }
        ],
        flashcards: {
            'Descobrimento': [
                { frente: 'Quando o Brasil foi descoberto?', verso: '22 de abril de 1500, quando Pedro Álvares Cabral chegou ao litoral da Bahia.' },
                { frente: 'O que era o Tratado de Tordesilhas?', verso: 'Acordo entre Espanha e Portugal (1494) que dividia as novas terras por uma linha imaginária.' },
                { frente: 'Por que Portugal buscava o caminho marítimo?', verso: 'Para chegar às Índias e obter especiarias, fugindo do controle muçulmano sobre o Mediterrâneo.' },
                { frente: 'Quem escreveu a Carta de Caminha?', verso: 'Pero Vaz de Caminha, escrivão da expedição. É o primeiro documento sobre o Brasil.' },
                { frente: 'O que Cabral achou que encontrou?', verso: 'Terra nova, batizada de "Ilha de Vera Cruz". Acreditavam que era uma ilha.' }
            ],
            'Período do Pau-Brasil': [
                { frente: 'O que era o pau-brasil?', verso: 'Árvore nativa usada para tingir tecidos de vermelho. Tinha alto valor na Europa.' },
                { frente: 'Como era o comércio do pau-brasil?', verso: 'Extrativismo com escambo: europeus trocavam produtos manufaturados por toras de pau-brasil.' },
                { frente: 'O que eram as feitorias?', verso: 'Postos comerciais nas praias para armazenar pau-brasil e produtos de escambo.' },
                { frente: 'Por que o pau-brasil entrou em crise?', verso: 'Sobrecarga, abandono, concorrência e caça desenfreada levaram à escassez.' },
                { frente: 'O que os portugueses trocavam pelo pau-brasil?', verso: 'Ferramentas, tecidos, espelhos e outros produtos manufaturados com os indígenas.' }
            ],
            'Capitanias Hereditárias': [
                { frente: 'O que foram as capitanias hereditárias?', verso: 'Sistema de colonização onde Portugal dividiu o litoral em 15 lotes para nobres fidalgos.' },
                { frente: 'O que era um donatário?', verso: 'Nobre que recebia uma capitania, com direitos e deveres, como povoar e administrar.' },
                { frente: 'Quais capitanias tiveram sucesso?', verso: 'Pernambuco e São Vicente, por terem条件 geográficas favoráveis e资金 suficiente.' },
                { frente: 'O que era o Foral?', verso: 'Documento com direitos e deveres do donatário, criado pelo rei D. João III.' },
                { frente: 'Por que o sistema fracassou parcialmente?', verso: 'Falta de资金, ataques indígenas e dificuldades de gestão fizeram muitas falharem.' }
            ],
            'Geral do Brasil': [
                { frente: 'Quando foi criado o Governo Geral?', verso: 'Em 1549, com Tomé de Sousa como primeiro governador, sediado em Salvador.' },
                { frente: 'Qual o objetivo do Governo Geral?', verso: 'Centralizar a administração, coibir abusos dos donatários e fortalecer a colonização.' },
                { frente: 'Quais órgãos auxiliavam o governador?', verso: 'Câmara, Ouvidor (justiça), Tesoureiro (fazenda) e Bispo (religião).' },
                { frente: 'O que Salvador representava?', verso: 'Capital do Brasil até 1763. Centro administrativo e comercial do Nordeste.' },
                { frente: 'Qual a importância de Tomé de Sousa?', verso: 'Organizou a colônia, trouxe jesuítas e fundou a primeira cidade planejada do Brasil.' }
            ],
            'Ciclo da Cana-de-açúcar': [
                { frente: 'O que eram os engenhos?', verso: 'Unidades de produção de açúcar com moenda, caldeira e casa de purga. Eram a base da economia.' },
                { frente: 'Como era o trabalho escravo?', verso: 'Brutal, com castigos, longas jornadas e alta mortalidade. Milhões de africanos foram trazidos.' },
                { frente: 'Qual o principal produto de exportação?', verso: 'O açúcar, que gerou riqueza para Portugal e miséria para os escravizados.' },
                { frente: 'O que era o Conselho Ultramarino?', verso: 'Órgão português que administrava as colônias e tomava decisões sobre o comércio.' },
                { frente: 'Por que o Nordeste dominou?', verso: 'Clima favorável à cana, portos naturais e proximidade com a Europa.' }
            ],
            'Invasões Estrangeiras': [
                { frente: 'Quando os holandeses invadiram o Brasil?', verso: 'Primeira vez em 1624 (Salvador), depois de 1630 a 1654 em Pernambuco.' },
                { frente: 'O que os holandeses queriam?', verso: 'O controle do comércio de açúcar, que era lucrativo e dominado por Portugal e Espanha.' },
                { frente: 'Quem era Johan Maurício?', verso: 'Príncipe holandês que governou Pernambuco (1641-1644). Revogou impostos e trouxe liberdade religiosa.' },
                { frente: 'Como o Brasil foi libertado?', verso: 'Através da Insurreição Pernambucana (1645-1654), liderada por João Fernandes Vieira.' },
                { frente: 'Qual o legado holandês?', verso: 'Cultura, pintura (Frans Post), ciência e tolerância religiosa no Nordeste.' }
            ],
            'Minas Gerais': [
                { frente: 'Quando o ouro foi descoberto?', verso: 'Por volta de 1690, na região de Ouro Preto. Começou o ciclo do ouro no Brasil.' },
                { frente: 'O que era a capitação?', verso: 'Imposto de 20% sobre o ouro extraído. Era difícil de controlar e causou revolta.' },
                { frente: 'O que foi o Distrito Diamantino?', verso: 'Região onde apenas o rei podia extrair diamantes. Controlada rigorosamente.' },
                { frente: 'Quais cidades surgiram do ouro?', verso: 'Ouro Preto, Mariana, Diamantina, Tiradentes, Congonhas.' },
                { frente: 'Como a mineração afetou a colônia?', verso: 'Deslocou a economia para o Sudeste, intensificou a escravidão e enriqueceu Portugal.' }
            ],
            'Grande Revolta': [
                { frente: 'O que foi a Revolta de Filipe dos Santos?', verso: 'Movimento mineiro em 1720 contra os impostos excessivos sobre o ouro.' },
                { frente: 'Quem liderou a revolta?', verso: 'Filipe dos Santos, líder popular que denunciava a exploração colonial.' },
                { frente: 'O que causou a revolta?', verso: 'Novos impostos, envio de ouro para Portugal e miséria dos mineradores.' },
                { frente: 'Como a revolta terminou?', verso: 'Com a execução de Filipe dos Santos e repressão do governo colonial.' },
                { frente: 'Qual a importância histórica?', verso: 'Primeiro grande movimento de resistência contra o domínio português no Brasil.' }
            ]
        }
    },

    'literatura-brasileira': {
        titulo: 'Literatura Brasileira do Século XX',
        icone: '📖',
        etapas: [
            { tipo: 'aula', icone: '📜', nome: 'Pré-Modernismo', conteudo: '<h2>Pré-Modernismo (1902-1922)</h2><p>Transição do Romantismo para o Modernismo.</p><h3>Autores:</h3><ul><li>Euclides da Cunha - Os Sertões</li><li>Raul Pompeia - O Ateneu</li><li>Olavo Bilac - Parnasianismo</li></ul>' },
            { tipo: 'aula', icone: '🎨', nome: 'Modernismo', conteudo: '<h2>Modernismo (1922-)</h3><p>Movimento surgido com a Semana de Arte Moderna.</p><h3>Características:</h3><ul><li>Quebra de normas</li><li>Linguagem coloquial</li><li>Nacionalismo</li><li>Antropofagia cultural</li></ul>' },
            { tipo: 'aula', icone: '✍️', nome: 'Machado de Assis', conteudo: '<h2>Machado de Assis (1839-1908)</h2><p>Maior escritor brasileiro.</p><h3>Obras:</h3><ul><li>Memórias Póstumas de Brás Cubas</li><li>Dom Casmurro</li><li>Quincas Borba</li><li>Alienista</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 1' },
            { tipo: 'aula', icone: '📚', nome: 'Graciliano Ramos', conteudo: '<h2>Graciliano Ramos (1892-1953)</h2><p>Escritor regionalista nordestino.</p><h3>Obras:</h3><ul><li>Vidas Secas</li><li>São Bernardo</li><li>Angústia</li><li>Infância</li></ul>' },
            { tipo: 'aula', icone: '🎭', nome: 'Clarice Lispector', conteudo: '<h2>Clarice Lispector (1920-1977)</h2><p>Escritora modernista existential.</p><h3>Obras:</h3><ul><li>A Hora da Estrela</li><li>Perto do Coração Selvagem</li><li>A Paixão Segundo G.H.</li><li>Laços de Família</li></ul>' },
            { tipo: 'aula', icone: '🌿', nome: 'Regionalismo', conteudo: '<h2>Regionalismo Nordestino</h2><p>Literatura que retrata o sertão nordestino.</p><h3>Autores:</h3><ul><li>Graciliano Ramos</li><li>Rachel de Queiroz</li><li>José Lins do Rego</li><li>Rachel de Queiroz - O Quinze</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 2' },
            { tipo: 'aula', icone: '📖', nome: 'Borges & Cortázar', conteudo: '<h2>Literatura Latino-Americana</h2><p>Boom da literatura latino-americana.</p><h3>Autores:</h3><ul><li>Jorge Luis Borges - Ficções</li><li>Julio Cortázar - Rayuela</li><li>Gabriel García Márquez - Cem Anos de Solidão</li></ul>' },
            { tipo: 'aula', icone: '📖', nome: 'Contemporâneos', conteudo: '<h2>Literatura Contemporânea</h2><p>Novas vozes e temas.</p><h3>Autores:</h3><ul><li>Chico Buarque - Budapeste</li><li>Raduan Nassar - Lavoura Arcaica</li><li>Itamar Vieira Junior - Torto Arado</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio Final' }
        ],
        flashcards: {
            'Pré-Modernismo': [
                { frente: 'O que é Os Sertões de Euclides?', verso: 'Obra sobre a Revolta de Canudos, analisando sertão,Homem e Deus. Marco do Pré-Modernismo.' },
                { frente: 'O que é O Ateneu?', verso: 'Romance de Raul Pompeia sobre um colégio interno, retratando crítica social.' },
                { frente: 'Quem foi Olavo Bilac?', verso: 'Parnasiano, fundador da Academia Brasileira de Letras. Símbolo do parnasianismo no Brasil.' },
                { frente: 'O que é o Parnasianismo?', verso: 'Estilo poético que valoriza forma, métrica, arte pela arte e temas clássicos.' },
                { frente: 'Como era a literatura no início do séc. XX?', verso: 'aindadominada pelo Romantismo, com influência europeia e temas patrióticos.' }
            ],
            'Modernismo': [
                { frente: 'O que foi a Semana de Arte Moderna?', verso: 'Evento de 1922 em São Paulo que marcou o início do Modernismo brasileiro.' },
                { frente: 'Quais as características do Modernismo?', verso: 'Linguagem coloquial, quebra de normas, nacionalismo, humor e irreverência.' },
                { frente: 'O que é a Antropofagia?', verso: 'Conceito de Oswald de Andrade: devorar a cultura estrangeira e produzir algo novo.' },
                { frente: 'Quais são as fases do Modernismo?', verso: '1ª fase (1922-1930): iconoclasta; 2ª fase (1930-1945): engajada; 3ª fase: regionalista.' },
                { frente: 'Quem são os três grandes do Modernismo?', verso: 'Mário de Andrade, Oswald de Andrade e Manuel Bandeira.' }
            ],
            'Machado de Assis': [
                { frente: 'Quem é considerado o maior escritor brasileiro?', verso: 'Machado de Assis, por sua profundidade psicológica e maestria literária.' },
                { frente: 'O que são Memórias Póstumas?', verso: 'Narrativa em 1ª pessoa de um defunto que narra sua vida. Ironia e crítica social.' },
                { frente: 'O que é Dom Casmurro?', verso: 'Romance sobre ciúmes e traição. Narrador não é confiável (Bento Santiago).' },
                { frente: 'Como Machado retratava a sociedade?', verso: 'Com ironia, crítica social e psicologia profunda dos personagens.' },
                { frente: 'Quais estilos Machado misturava?', verso: 'Romantismo e Realismo, com uso magistral da ironia e do narrador autodiegético.' }
            ],
            'Graciliano Ramos': [
                { frente: 'O que retrata Vidas Secas?', verso: 'A miséria de uma família sertaneja no Nordeste seco. Romance regionalista e social.' },
                { frente: 'Como era o estilo de Graciliano?', verso: 'Seco, direto, sem adjetivos desnecessários. Refletia a aridez do sertão.' },
                { frente: 'O que é São Bernardo?', verso: 'Romance sobre um fazendeiro que narra sua ascensão e queda. Crítica à moral burguesa.' },
                { frente: 'Por que Graciliano foi preso?', verso: 'Acusado de comunismo em 1936. Escreveu Memórias do Cárcere sobre essa experiência.' },
                { frente: 'Qual a importância de Graciliano?', tłumacz: 'Definiu a literatura regionalista nordestina e denunciou a miséria social.' }
            ],
            'Clarice Lispector': [
                { frente: 'O que é A Hora da Estrela?', verso: 'Último romance de Clarice, sobre Macabéa, uma mulher pobre e ingênua no Rio.' },
                { frente: 'Como Clarice abordava a existência?', verso: 'De forma existencial, introspectiva, com questionamentos filosóficos profundos.' },
                { frente: 'O que é Perto do Coração Selvagem?', verso: 'Primeiro romance de Clarice, sobre identidade e liberdade feminina.' },
                { frente: 'O que é A Paixão Segundo G.H.?', verso: 'Romance experimental sobre uma mulher que devora uma barata. Questões existenciais.' },
                { frente: 'Por que Clarice é única?', verso: 'Sua escrita introspectiva e filosófica não se encaixa em nenhum movimento literário.' }
            ],
            'Regionalismo': [
                { frente: 'O que é o Regionalismo?', verso: 'Literatura que retrata regiões específicas do Brasil, seus costumes e paisagens.' },
                { frente: 'Quem escreveu O Quinze?', verso: 'Rachel de Queiroz, sobre a seca de 1915 no Ceará. Primeira mulher na ABL.' },
                { frente: 'O que retrata Menino de Engenho?', verso: 'José Lins do Rego narra a infância no engenho de açúcar nordestino.' },
                { frente: 'Como o regionalismo retratava o sertão?', verso: 'Com realismo, denunciando miséria, seca e exploração social.' },
                { frente: 'Qual a importância do regionalismo?', verso: 'Deu voz ao povo sertanejo e denunciou desigualdades sociais.' }
            ],
            'Contemporâneos': [
                { frente: 'O que é Budapeste de Chico Buarque?', verso: 'Romance sobre um tradutor que se identifica com outro homem. Identidade e linguagem.' },
                { frente: 'O que é Lavoura Arcaica?', verso: 'Raduan Nassar narra a história de uma família patriarcal. Linguagem poética e sensual.' },
                { frente: 'O que é Torto Arado?', verso: 'Itamar Vieira Junior retrata a luta de trabalhadores rurais em Minas Gerais.' },
                { frente: 'O que é o "Boom" latino-americano?', verso: 'Explosão de literatura de qualidade na América Latina nos anos 1960-70.' },
                { frente: 'Quais temas dominam a literatura atual?', verso: 'Identidade, memória, violência, desigualdade e diversidade cultural.' }
            ]
        }
    },

    'atualidades': {
        titulo: 'Atualidades',
        icone: '📰',
        etapas: [
            { tipo: 'aula', icone: '🌍', nome: 'Geopolítica', conteudo: '<h2>Geopolítica Contemporânea</h2><p>Relações de poder entre nações no séc. XXI.</p><h3>Foco:</h3><ul><li>Guerra Ucrânia-Rússia</li><li>Tensão EUA-China</li><li>Oriente Médio</li><li>BRICS</li></ul>' },
            { tipo: 'aula', icone: '💰', nome: 'Economia Global', conteudo: '<h2>Economia Contemporânea</h2><p>Desafios econômicos globais.</p><h3>Temas:</h3><ul><li>Inflação global</li><li>Dívida pública</li><li>Desemprego tecnológico</li><li>Criptomoedas</li></ul>' },
            { tipo: 'aula', icone: '🌱', nome: 'Meio Ambiente', conteudo: '<h2>Crise Ambiental</h2><p>Mudanças climáticas e sustentabilidade.</p><h3>Questões:</h3><ul><li>Desmatamento</li><li>Acordo de Paris</li><li>Energias renováveis</li><li>Economia verde</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 1' },
            { tipo: 'aula', icone: '🤖', nome: 'Tecnologia', conteudo: '<h2>Revolução Digital</h2><p>Impacto da tecnologia na sociedade.</p><h3>Temas:</h3><ul><li>Inteligência Artificial</li><li>Privacidade</li><li>Trabalho remoto</li><li>Redes sociais</li></ul>' },
            { tipo: 'aula', icone: '🏥', nome: 'Saúde Global', conteudo: '<h2>Questões de Saúde</h2><p>Desafios sanitários mundiais.</p><h3>Temas:</h3><ul><li>Pandemias</li><li>SUS brasileiro</li><li>Antibioticorresistência</li><li>Envelhecimento</li></ul>' },
            { tipo: 'aula', icone: '🤝', nome: 'Direitos Humanos', conteudo: '<h2>Direitos Humanos</h2><p>Lutas por igualdade e justiça.</p><h3>Movimentos:</h3><ul><li>Feminismo</li><li>LGBTQIA+</li><li>Racial</li><li>Indígena</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio 2' },
            { tipo: 'aula', icone: '🇧🇷', nome: 'Brasil Atual', conteudo: '<h2>O Brasil Hoje</h2><p>Desafios nacionais contemporâneos.</p><h3>Temas:</h3><ul><li>Reforma tributária</li><li>Desigualdade</li><li>Educação</li><li>Amazônia</li></ul>' },
            { tipo: 'aula', icone: '🗳️', nome: 'Democracia', conteudo: '<h2>Desafios da Democracia</h2><p>Ameaças e fortalecimento democrático.</p><h3>Questões:</h3><ul><li>Desinformação</li><li>Extrema-direita</li><li>Participação cidadã</li><li>Instituições</li></ul>' },
            { tipo: 'desafio', icone: '🎯', nome: 'Desafio Final' }
        ],
        flashcards: {
            'Geopolítica': [
                { frente: 'Por que a guerra Ucrânia-Rússia é importante?', verso: 'Reconfigura alianças, energia global e ordem internacional. Afeta toda a Europa e além.' },
                { frente: 'O que são os BRICS?', verso: 'Bloco de países emergentes (Brasil, Rússia, Índia, China, África do Sul) que busca multipolaridade.' },
                { frente: 'Qual a tensão EUA-China?', verso: 'Disputa por tecnologia, comércio e influência global. Especialmente sobre Taiwan e semicondutores.' },
                { frente: 'Por que o Oriente Médio é instável?', verso: 'Conflitos Israel-Palestina, petróleo, religião e interesses de potências mundiais.' },
                { frente: 'O que é ordem multipolar?', verso: 'Mundo com vários polos de poder (EUA, China, Europa, Índia), não apenas um.' }
            ],
            'Economia Global': [
                { frente: 'O que causou a inflação global?', verso: 'Pandemia, guerra na Ucrânia, cadeia de suprimentos e estímulo monetário excessivo.' },
                { frente: 'O que é dívida pública?', verso: 'Valor que o governo deve. No Brasil, ultrapassa 80% do PIB, limitando investimentos.' },
                { frente: 'O que é desemprego tecnológico?', verso: 'Perda de empregos por automação e IA, exigindo requalificação profissional.' },
                { frente: 'O que são criptomoedas?', verso: 'Moedas digitais descentralizadas como Bitcoin. Voláteis e sem regulamentação clara.' },
                { frente: 'O que é estagflação?', verso: 'Combinação de inflação alta, estagnação econômica e desemprego elevado.' }
            ],
            'Meio Ambiente': [
                { frente: 'O que é o Acordo de Paris?', verso: 'Pacto global de 2015 para limitar aquecimento a 1,5°C. Brasil é signatário.' },
                { frente: 'Por que o desmatamento é grave?', verso: 'Destrói biodiversidade, libera carbono e afeta o ciclo hidrológico global.' },
                { frente: 'O que são energias renováveis?', verso: 'Solar, eólica, hidrelétrica. Não emitem carbono e são essenciais para transição energética.' },
                { frente: 'O que é economia verde?', verso: 'Modelo econômico que compatibiliza crescimento com sustentabilidade ambiental.' },
                { frente: 'Qual a urgência climática?', verso: 'Temperaturas já subiram 1,1°C. Sem ação, pode chegar a 3°C até 2100.' }
            ],
            'Tecnologia': [
                { frente: 'Como a IA está mudando o mundo?', verso: 'Automatiza tarefas, gera conteúdo, diagnósticos médicos e transforma indústrias.' },
                { frente: 'O que é privacidade digital?', verso: 'Direito de controlar seus dados. Ameaçado por vigilância massiva e uso comercial.' },
                { frente: 'O que é trabalho remoto?', verso: 'Trabalho fora do escritório, popularizado pela pandemia. Muda dinâmicas sociais.' },
                { frente: 'Como as redes sociais afetam a democracia?', verso: 'Podem mobilizar, mas também espalhar desinformação e ódio.' },
                { frente: 'O que é soberania tecnológica?', verso: 'Capacidade de um país controlar suas tecnologias sem dependência externa.' }
            ],
            'Saúde Global': [
                { frente: 'O que a pandemia revelou?', verso: 'Desigualdades, fragilidade de sistemas de saúde e importância da ciência.' },
                { frente: 'Como funciona o SUS?', verso: 'Sistema público universal, mas subfinanciado. Garante acesso, mas com filas.' },
                { frente: 'O que é antibioticorresistência?', verso: 'Bactérias que sobrevivem aos antibióticos. Pode tornar doenças comuns incuráveis.' },
                { frente: 'Como o envelhecimento afeta a sociedade?', verso: 'Mais idosos = mais gastos com saúde e previdência, menos força de trabalho.' },
                { frente: 'O que é saúde mental?', verso: 'Bem-estar emocional, psicológico e social. Depressão afeta 280 milhões no mundo.' }
            ],
            'Direitos Humanos': [
                { frente: 'O que é o feminismo hoje?', verso: 'Luta por igualdade de gênero: equal salarial, direitos reprodutivos, fim da violência.' },
                { frente: 'O que é a marchedas mulheres?', verso: '2018 e 2019, maiores mobilizações femininas da história brasileira.' },
                { frente: 'O que é a pauta LGBTQIA+?', verso: 'Igualdade de direitos: casamento, adoção, combate à discriminação e violência.' },
                { frente: 'O que é justiça racial?', verso: 'Combate ao racismo estrutural, cotas, igualdade de oportunidades.' },
                { frente: 'Quais direitos indígenas são ameaçados?', verso: 'Demarcação de terras, autonomia, cultura e meio ambiente.' }
            ],
            'Brasil Atual': [
                { frente: 'O que é a reforma tributária?', verso: 'Simplificação do sistema de impostos (IBS + CBS). Aprovada em 2023 para entrar em vigor em 2026.' },
                { frente: 'Qual a maior desigualdade do Brasil?', verso: 'Renda: 1% mais rico concentra 50% da riqueza. Nordeste e Norte são mais pobres.' },
                { frente: 'O que falta na educação brasileira?', verso: 'Investimento, formação de professores, infraestrutura e equidade regional.' },
                { frente: 'Por que a Amazônia é estratégica?', verso: 'Recursos naturais, biodiversidade, clima global e soberania nacional.' },
                { frente: 'O que são os vídeos de desinformação?', verso: 'Fake news que manipulam opinião política, especialmente nas redes sociais.' }
            ],
            'Democracia': [
                { frente: 'O que ameaça a democracia?', verso: 'Desinformação, extremismo, desinteresse político e fragilização institucional.' },
                { frente: 'O que é extrema-direita?', verso: 'Movimentos nacionalistas, autoritários e conservadores que crescem globalmente.' },
                { frente: 'O que é participação cidadã?', verso: 'Engajamento político além do voto: protestos, conselhos, petições, fiscalização.' },
                { frente: 'Qual a importância das instituições?', verso: 'Garantem separação de poderes, direitos e estabilidade. Essenciais para democracia.' },
                { frente: 'Como fortalecer a democracia?', verso: 'Educação, transparência, fiscalização, participação e defesa dos direitos fundamentais.' }
            ]
        }
    }
};
