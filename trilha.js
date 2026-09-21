var API_URL = 'https://historia-app-api.onrender.com/api';
var usuarioAtual = null;
var progressoTrilha = [];

var etapas = [
    { tipo: 'aula', icone: '📖', nome: 'Proclamação', conteudo: '<h2>A Proclamação da República</h2><p>A República foi proclamada em <strong>15 de novembro de 1889</strong>, marcando o fim do Império Brasileiro.</p><h3>Causas principais:</h3><ul><li>Questão Militar - conflitos entre oficiais e o governo</li><li>Abolicionismo - fim da escravatura enfraqueceu a elite rural</li><li>Republicanismos - influência do positivismo</li><li>Crise econômica - queda do preço do café</li></ul><p>Marechal <strong>Deodoro da Fonseca</strong> liderou o golpe que depôs D. Pedro II.</p>' },
    { tipo: 'aula', icone: '⚔️', nome: 'República da Espada', conteudo: '<h2>República da Espada (1889-1894)</h2><p>Período dominado pelos militares.</p><h3>Deodoro da Fonseca:</h3><ul><li>Governo provisório (1889-1891)</li><li>Primeira Constituição Republicana</li><li>Tentativa de fechar o Congresso</li><li>Renúncia em 1891</li></ul><h3>Floriano Peixoto:</h3><ul><li>"Marechal de Ferro"</li><li>Repressão à Revolta da Armada</li></ul>' },
    { tipo: 'aula', icone: '☕', nome: 'República Oligárquica', conteudo: '<h2>República do Café com Leite</h2><p>Período de 1894 a 1930, com poder alternado entre São Paulo e Minas Gerais.</p><h3>Características:</h3><ul><li>Café com leite - alternância de poder</li><li>Política dos governadores</li><li>Coronelismo - controle local</li></ul>' },
    { tipo: 'desafio', icone: '🎯', nome: 'Desafio 1' },
    { tipo: 'aula', icone: '🔄', nome: 'Revolução de 1930', conteudo: '<h2>A Revolução de 1930</h2><p>Movimento que depôs Washington Luís e impediu a posse de Júlio Prestes.</p><h3>Causas:</h3><ul><li>Fraude eleitoral</li><li>Aliança Liberal</li><li>Crise econômica internacional</li></ul><h3>Líderes:</h3><ul><li><strong>Getúlio Vargas</strong> - candidato derrotado</li><li><strong>João Pessoa</strong> - assassinado</li></ul>' },
    { tipo: 'aula', icone: '🏭', nome: 'Era Vargas', conteudo: '<h2>A Era Vargas (1930-1945)</h2><p>15 anos no poder, o mais longo período da história brasileira.</p><h3>Fases:</h3><ul><li>Governo Provisório (1930-1934)</li><li>Governo Constitucional (1934-1937)</li><li>Estado Novo (1937-1945)</li></ul><h3>Feitos:</h3><ul><li>CLT e direitos trabalhistas</li><li>Industrialização</li><li>Criação da Petrobras</li></ul>' },
    { tipo: 'aula', icone: '🏗️', nome: 'Redemocratização', conteudo: '<h2>Redemocratização (1945-1964)</h2><p>Retorno às eleições diretas e crescimento econômico.</p><h3>Presidentes:</h3><ul><li>Dutra - retorno à democracia</li><li>Vargas - segundo governo</li><li>JK - Plano de Metas, Brasília</li><li>Jânio Quadros - renúncia</li><li>Jango - golpe militar</li></ul>' },
    { tipo: 'desafio', icone: '🎯', nome: 'Desafio 2' },
    { tipo: 'aula', icone: '🔒', nome: 'Ditadura Militar', conteudo: '<h2>Ditadura Militar (1964-1985)</h2><p>21 anos de regime autoritário.</p><h3>Fases:</h3><ul><li>Governos militares</li><li>"Milagre Econômico"</li><li>Anos de Chumbo</li><li>Abertura gradual</li></ul><h3>Consequências:</h3><ul><li>Desaparecimentos forçados</li><li>Censura</li><li>AI-5 (1968)</li></ul>' },
    { tipo: 'aula', icone: '🗳️', nome: 'Nova República', conteudo: '<h2>Nova República (1985-atual)</h2><p>Retorno à democracia com a Constituição de 1988.</p><h3>Presidentes:</h3><ul><li>Tancredo/Itamar - transição</li><li>FHC - Plano Real</li><li>Lula - programas sociais</li><li>Dilma - impeachment</li><li>Temer, Bolsonaro, Lula</li></ul>' },
    { tipo: 'desafio', icone: '🎯', nome: 'Desafio Final' }
];

var flashcards = {
    'Proclamação': [
        { frente: 'Quando foi proclamada a República?', verso: '15 de novembro de 1889. O golpe militar liderado por Deodoro da Fonseca depôs o Imperador D. Pedro II, que estava doente e sem apoio político. O evento ocorreu no Rio de então Capital Federal, sem grande resistência popular.' },
        { frente: 'Quem liderou o golpe da República?', verso: 'Marechal Deodoro da Fonseca, que era amigo pessoal do Imperador mas foi convencido pelos republicanos. Inicialmente, ele queria apenas mudar o gabinete ministerial, mas foi levado a proclamar a República. Tornou-se o primeiro presidente do Brasil.' },
        { frente: 'Qual ideologia influenciou os republicanos?', verso: 'O Positivismo, corrente filosófica de Auguste Comte, que pregava o progresso através da ciência e da razão. Seu lema "Ordem e Progresso" está na bandeira brasileira. Os militares da Escola Militar da Praia Vermelha eram adeptos dessa ideologia.' },
        { frente: 'Qual crise enfraqueceu o Império?', verso: 'A crise do café, com queda dos preços no mercado internacional, afetou a elite cafeeira que apoiava o Imperador. Somada à questão abolicionista (fim da escravatura em 1888), os cafeicultores withdraw apoio político, pois perderam a mão de obra escrava sem indenização.' },
        { frente: 'Quem foi o último Imperador do Brasil?', verso: 'D. Pedro II, que governou por 49 anos (1840-1889). Foi um governo de modernização e estabilidade, mas ele estava doente (diabetes) e sem herdeiros homens. Sua filha, a Princesa Isabel, assinou a Lei Áurea, mas foi afastada do poder pela República.' }
    ],
    'República da Espada': [
        { frente: 'Quando durou a República da Espada?', verso: 'De 1889 a 1894, um período de 5 anos dominado por militares. Foi uma transição conturbada entre o Império e a República civil, com governos autoritários e tentativas de estabilização institucional.' },
        { frente: 'Como era apelidado Floriano Peixoto?', verso: 'Marechal de Ferro, por sua rigidez e autoritarismo. Governou de 1891 a 1894, reprimindo duramente todas as revoltas contra o governo, incluindo a Revolta da Armada e a Revolução Federalista no sul do país.' },
        { frente: 'O que foi a Revolta da Armada?', verso: 'Rebelião de marinheiros e oficiais da Marinha contra o governo de Floriano Peixoto em 1893. Os rebeldes bombardearam o Rio de Janeiro, mas foram derrotados. Floriano usou artilharia do Exército para reprimir os marinheiros.' },
        { frente: 'Por que Deodoro renunciou em 1891?', verso: 'Tentou fechar o Congresso Nacional por decreto, mas oposição forte obrigou-o a renunciar em 23 de novembro de 1891, após apenas 9 meses no governo. O vice-presidente Floriano Peixoto assumiu o poder.' },
        { frente: 'Qual foi a primeira Constituição da República?', verso: 'A Constituição de 1891, inspirada nos EUA, com federalismo, separação de poderes e presidencialismo. Estabeleceu o voto direto (mas sem voto feminista e analfabetos), e deu grande autonomia aos estados, favorecendo as oligarquias regionais.' }
    ],
    'República Oligárquica': [
        { frente: 'O que significa "Café com Leite"?', verso: 'A alternância de poder entre as oligarquias de São Paulo (cafeicultores) e Minas Gerais (leiteiros/pecuária). De 1894 a 1930, presidentes eram desses dois estados, exceto Hermes da Fonseca (RS) e Nilo Peçanha (RJ). Isso garantia estabilidade política e econômica.' },
        { frente: 'O que era o coronelismo?', verso: 'Sistema político local onde os "coronéis" (latifundiários ricos) controlavam votos e favores nas cidades do interior. Em troca de votos, recebiam cargos públicos e privilégios do governo. Era o clientelismo em sua forma mais marcante na República Velha.' },
        { frente: 'O que era a Política dos Governadores?', verso: 'Acordo político entre o governo federal e os governadores estaduais, formalizado por Campos Sales. O presidente apoiava os governadores, que por sua vez garantiam a eleição dos presidentes. Isso criava uma corrente de apoio que mantinha o sistema oligárquico estável.' },
        { frente: 'Qual época durou de 1894 a 1930?', verso: 'A República Oligárquica, também chamada de República Velha ou República do Café com Leite. Foi o período mais longo de estabilidade política da República, mas com grande exclusão social e concentração de renda.' },
        { frente: 'Qual produto sustentava a economia?', verso: 'O café, que respondia por mais de 70% das exportações brasileiras. São Paulo era o maior produtor, e a economia dependia dos preços internacionais. Quando a crise de 1929 derrubou o preço do café, todo o sistema oligárquico entrou em colapso.' }
    ],
    'Revolução de 1930': [
        { frente: 'Quem foi deposto em 1930?', verso: 'Washington Luís, presidente de 1926 a 1930. Era paulista e indicou Júlio Prestes (também paulista) para sucedê-lo, quebrando a alternância café com leite. Isso gerou revolta em Minas Gerais, que se aliou ao Rio Grande do Sul para derrubá-lo.' },
        { frente: 'Quem era o candidato derrotado?', verso: 'Getúlio Vargas, governador do Rio Grande do Sul, candidato da Aliança Liberal. Mesmo com forte apoio popular, perdeu as eleições que foram consideradas fraudulentas. A revolução de outubro de 1930 o levou ao poder como presidente provisório.' },
        { frente: 'O que foi a Aliança Liberal?', verso: 'Coalizão política formada por Partido Republicano Paulista (PRP), Partido Republicano Mineiro (PRM) e partidos do Nordeste. Uniu estados contra o predomínio paulista, com o objetivo de impedir a eleição de Júlio Prestes e levar Vargas ao poder.' },
        { frente: 'Quem foi assassinado antes da revolução?', verso: 'João Pessoa, vice-candidato de Vargas, governador da Paraíba. Foi assassinado em julho de 1930 por motivações políticas e pessoais. Sua morte gerou comoção nacional e acelerou o movimento revolucionário. A capital Paraíba leva seu nome até hoje.' },
        { frente: 'Qual crise internacional ajudou o golpe?', verso: 'A Grande Depressão de 1929, que derrubou drasticamente o preço do café. Isso causou desemprego em massa, quebra de fazendeiros e instabilidade social. O governo Washington Luís não conseguiu lidar com a crise, enfraquecendo ainda mais seu apoio político.' }
    ],
    'Era Vargas': [
        { frente: 'Quanto tempo Vargas governou?', verso: '15 anos no total: Governo Provisório (1930-1934), Governo Constitucional (1934-1937) e Estado Novo (1937-1945). É o presidente que mais tempo ficou no poder na história do Brasil. Foi deposto por golpe militar em 1945, mas retornou eleito em 1951.' },
        { frente: 'O que foi o Estado Novo?', verso: 'Regime ditatorial instaurado por Vargas em 1937, inspirado no fascismo europeu. Não havia eleições, partidos políticos eram banidos, imprensa era censurada e oposição era reprimida. Vargas governou por decreto, concentrando todo o poder no Executivo.' },
        { frente: 'O que a CLT trouxe para os trabalhadores?', verso: 'A Consolidação das Leis do Trabalho (1943) garantiu direitos como: férias remuneradas, 13º salário, FGTS, aviso prévio, estabilidade no emprego, regulamentação do trabalho da mulher e dos menores. Foi uma das maiores conquistas trabalhistas da América Latina.' },
        { frente: 'Qual estatal foi criada por Vargas?', verso: 'A Petrobras (1953), estatal do petróleo que monopolyzou a exploração e refino do petróleo no Brasil. O slogan "O petróleo é nosso" mobilizou a população. A criação foi um marco do nacionalismo econômico e da industrialização brasileira.' },
        { frente: 'Como era o governo de Vargas?', verso: 'Centralizado, autoritário e populista. Vargas usava o trabalhismo como base de apoio social, criando leis trabalhistas em troca de lealdade. Era inteligente politicamente, negociando com diferentes grupos para manter o poder. Sua morte em 1954 foi um Drama nacional.' }
    ],
    'Redemocratização': [
        { frente: 'O que JK construiu no Brasil?', verso: 'Brasília, a nova capital inaugurada em 21 de abril de 1960. Projetada por Lúcio Costa e Oscar Niemeyer, foi um símbolo de modernização e desenvolvimento. O Plano de Metas "50 anos em 5" industrializou o país e expandiu a infraestrutura nacional.' },
        { frente: 'O que foi o Plano de Metas?', verso: 'Programa de desenvolvimento econômico de JK (1956-1961) que visava industrializar o Brasil em 5 anos. Priorizou energia, transportes, indústria de base, alimentação e educação. O PIB cresceu 75% e a inflação caiu, mas a dívida externa aumentou muito.' },
        { frente: 'Por que Jânio Quadros renunciou?', verso: 'Após apenas 7 meses no poder (jan-ago 1961), renunciou alegando "forças terríveis" que o impediam de governar. Na verdade, era inabilidade política e conflitos com o Congresso. Sua renúncia gerou crise, pois o vice João Goulart (Jango) era considerado radical pela direita.' },
        { frente: 'Quem foi o último presidente antes do golpe?', verso: 'João Goulart (Jango), vice-presidente que assumiu após renúncia de Jânio. Governou de 1961 a 1964, tentando reformas de base (reforma agrária, urbana, bancária). Foi deposto pelo golpe militar de 31 de março de 1964, indo para o exílio no Uruguai.' },
        { frente: 'Quando ocorreu o golpe militar?', verso: '31 de março de 1964, com apoio dos EUA (Operação Brother Sam). O Exército depôs Jango, que estava no Rio Grande do Sul. Iniciou-se a ditadura militar que duraria 21 anos, com cassação de direitos, censura e perseguição política.' }
    ],
    'Ditadura Militar': [
        { frente: 'Quantos anos durou a ditadura no Brasil?', verso: '21 anos, de 1964 a 1985. Foi um dos regimes militares mais longos da América Latina. O Brasil passou por 5 generais como presidentes: Castelo Branco, Costa e Silva, Médici, Geisel e Figueiredo. A abertura foi gradual e lenta.' },
        { frente: 'O que foi o AI-5?', verso: 'O Ato Institucional nº 5, de dezembro de 1968. Foi o mais repressivo da ditadura: fechou o Congresso, cassou mandatos, suspendeu habeas corpus, permitiu censura prévia e prisões sem ordem judicial. Institucionalizou a tortura e os desaparecimentos forçados.' },
        { frente: 'Como era chamado o crescimento da época?', verso: 'Milagre Econômico (1969-1973). O PIB crescia 10% ao ano, mas com enorme desigualdade social. O crescimento era baseado em empréstimos externos, obras faraônicas e repressão salarial. A dívida externa quadruplicou e o povo não participou dos lucros.' },
        { frente: 'O que acontecia com os opositores do regime?', verso: 'Desaparecimentos forçados, tortura em centros de detenção (DOI-CODI), exílio forçado e assassinatos. Estima-se que mais de 400 pessoas foram mortas ou desapareceram. Muitos foram enterrados em valas comuns ou tiveram corpos despejados no mar.' },
        { frente: 'O que significava "Anos de Chumbo"?', verso: 'O período de 1968 a 1974, com maior repressão da ditadura. Nome vem do chumbo das balas usadas contra manifestantes. Houve guerrilha urbana e rural, repressão violenta, Operação Condor (cooperação entre ditaduras sul-americanas) e mortes de estudantes e operários.' }
    ],
    'Nova República': [
        { frente: 'Quando foi promulgada a Constituição Cidadã?', verso: '5 de outubro de 1988, após 20 meses de trabalho da Assembleia Nacional Constituinte. É considerada a mais democrática do Brasil, com garantias de direitos sociais, individuais e políticos. Instituiu eleições diretas, voto obrigatório e separação de poderes.' },
        { frente: 'O que foi o Plano Real?', verso: 'Programa de estabilização econômica implantado em 1994, pelo ministro da Fazenda Fernando Henrique Cardoso (que depois virou presidente). Criou a Unidade Real de Valor (URV) e depois o Real, acabando com a inflação galopante que atingia mais de 2.000% ao ano.' },
        { frente: 'Quem foi o primeiro presidente eleito pela Constituição de 88?', verso: 'Fernando Henrique Cardoso (FHC), eleito em 1994 e reeleito em 1998. Ex-sociólogo e senador, implementou o Plano Real, privatizações e reformas administrativas. Seu governo trouxe estabilidade econômica, mas também aumento da desigualdade social.' },
        { frente: 'O que aconteceu com Dilma Rousseff em 2016?', verso: 'Sofreu impeachment pela Câmara dos Deputados e Senado, sob alegação de pedaladas fiscais (empréstimos de bancos públicos para cobrir despesas). Foi a primeira mulher presidente do Brasil (2011-2016). O processo gerou enorme polarização política no país.' },
        { frente: 'Qual a marca principal da Nova República?', verso: 'A democracia e eleições diretas, depois de 21 anos de ditadura. O Brasil teve múltiplos partidos, liberdade de imprensa e alternância no poder. Porém, enfrentou crises políticas (impeachment de Dilma), econômicas (recessão de 2015) e sociais (desigualdade persistente).' }
    ]
};

function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

function apiGet(caminho) {
    return fetch(API_URL + caminho).then(function(r) {
        if (!r.ok) throw new Error('Erro');
        return r.json();
    });
}

function apiPost(caminho, dados) {
    return fetch(API_URL + caminho, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    }).then(function(r) {
        if (!r.ok) throw new Error('Erro');
        return r.json();
    });
}

function atualizarHeader() {
    var xp = usuarioAtual ? (usuarioAtual.xp_total || 0) : 0;
    var nivel = usuarioAtual ? (usuarioAtual.nivel || 1) : 1;
    $$('#xp-display').forEach(function(el) { el.textContent = xp; });
    $$('#nivel-display').forEach(function(el) { el.textContent = nivel; });
}

function carregarProgresso() {
    if (!usuarioAtual) return;

    apiGet('/progresso/' + usuarioAtual.id).then(function(dados) {
        var encontrado = false;
        for (var i = 0; i < dados.length; i++) {
            if (dados[i].modulo_id === 99) {
                progressoTrilha = JSON.parse(dados[i].progresso_json || '[]');
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            progressoTrilha = etapas.map(function(e, i) {
                return { index: i, tipo: e.tipo, completa: false };
            });
        }
        renderizarCaminho();
    }).catch(function() {
        progressoTrilha = etapas.map(function(e, i) {
            return { index: i, tipo: e.tipo, completa: false };
        });
        renderizarCaminho();
    });
}

function salvarProgresso() {
    if (!usuarioAtual) return;

    apiPost('/progresso/' + usuarioAtual.id + '/trilha', {
        modulo_id: 99,
        progresso_json: JSON.stringify(progressoTrilha)
    }).catch(function(err) {
        console.error('Erro ao salvar progresso:', err);
    });
}

function getProximaEtapaAberta() {
    for (var i = 0; i < progressoTrilha.length; i++) {
        if (!progressoTrilha[i].completa) return i;
    }
    return -1;
}

function renderizarCaminho() {
    var container = $('#caminho-trilho');
    container.innerHTML = '';
    var proximaAberta = getProximaEtapaAberta();

    for (var i = 0; i < etapas.length; i++) {
        var etapa = etapas[i];
        var prog = progressoTrilha[i];
        var ehDesafio = etapa.tipo === 'desafio';
        var completa = prog.completa;
        var ehAtual = (i === proximaAberta);
        var bloqueada = (i > proximaAberta);

        var divEtapa = document.createElement('div');
        divEtapa.className = 'etapa' + (bloqueada && !completa ? ' bloqueada' : '');

        if (i > 0) {
            var linha = document.createElement('div');
            linha.className = 'etapa-linha' + (completa ? ' completa' : '');
            divEtapa.appendChild(linha);
        }

        var no = document.createElement('div');
        no.className = 'etapa-no';
        if (ehDesafio) no.className += ' desafio';
        if (completa) no.className += ' completa';
        else if (ehAtual) no.className += ' atual';
        else if (bloqueada) no.className += ' bloqueada';

        no.innerHTML = '<span class="etapa-icone">' + etapa.icone + '</span>';
        divEtapa.appendChild(no);

        var label = document.createElement('div');
        label.className = 'etapa-label';
        label.textContent = etapa.nome;
        divEtapa.appendChild(label);

        container.appendChild(divEtapa);

        if (ehAtual && !completa) {
            no.addEventListener('click', (function(idx) {
                return function() { iniciarEtapa(idx); };
            })(i));

            setTimeout(function() {
                var noAtual = container.querySelector('.etapa-no.atual');
                if (noAtual) {
                    noAtual.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }
    }

    posicionarAvatar();
}

function posicionarAvatar() {
    var avatar = $('#caminho-avatar');
    var noAtual = document.querySelector('.etapa-no.atual');

    if (noAtual) {
        var rect = noAtual.getBoundingClientRect();
        var containerRect = $('.caminho-container').getBoundingClientRect();
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var topo = rect.top + scrollTop - 30;
        avatar.style.position = 'absolute';
        avatar.style.top = topo + 'px';
        avatar.style.left = (containerRect.left + containerRect.width / 2 + rect.width / 2 + 10) + 'px';
        avatar.style.transform = 'none';
    } else {
        var ultimaCompleta = document.querySelector('.etapa-no.completa:last-of-type');
        if (ultimaCompleta) {
            var rect2 = ultimaCompleta.getBoundingClientRect();
            var containerRect2 = $('.caminho-container').getBoundingClientRect();
            var scrollTop2 = window.pageYOffset || document.documentElement.scrollTop;
            var topo2 = rect2.top + scrollTop2 - 30;
            avatar.style.position = 'absolute';
            avatar.style.top = topo2 + 'px';
            avatar.style.left = (containerRect2.left + containerRect2.width / 2 + rect2.width / 2 + 10) + 'px';
            avatar.style.transform = 'none';
        }
    }
}

window.addEventListener('scroll', posicionarAvatar);
window.addEventListener('resize', posicionarAvatar);

function iniciarEtapa(index) {
    var etapa = etapas[index];
    if (etapa.tipo === 'aula') {
        abrirFlashcards(etapa, index);
    } else if (etapa.tipo === 'desafio') {
        abrirDesafio(etapa, index);
    }
}

function abrirFlashcards(etapa, indexEtapa) {
    var lista = flashcards[etapa.nome] || flashcards['Proclamação'];
    var flashcardIndex = 0;

    function mostrarFlashcard() {
        var fc = lista[flashcardIndex];
        $('#flashcard-contador').textContent = (flashcardIndex + 1) + ' de ' + lista.length;
        $('#flashcard-frente-texto').textContent = fc.frente;
        $('#flashcard-verso-texto').textContent = fc.verso;
        $('#flashcard').classList.remove('virado');
        $('#modal-flashcard').style.display = 'flex';
    }

    $('#flashcard').onclick = function() {
        this.classList.toggle('virado');
    };

    $('#flashcard-fechar').onclick = function() {
        $('#modal-flashcard').style.display = 'none';
    };

    $('#flashcard-ruim').onclick = function() {
        flashcardIndex++;
        if (flashcardIndex < lista.length) {
            mostrarFlashcard();
        } else {
            $('#modal-flashcard').style.display = 'none';
            concluirAula(etapa, indexEtapa);
        }
    };

    $('#flashcard-bom').onclick = function() {
        flashcardIndex++;
        if (flashcardIndex < lista.length) {
            mostrarFlashcard();
        } else {
            $('#modal-flashcard').style.display = 'none';
            concluirAula(etapa, indexEtapa);
        }
    };

    mostrarFlashcard();
}

function concluirAula(etapa, indexEtapa) {
    progressoTrilha[indexEtapa].completa = true;
    salvarProgresso();

    var xpGanho = 10;
    $('#concluir-xp').textContent = '+' + xpGanho + ' XP';
    $('#concluir-texto').textContent = 'Você completou: ' + etapa.nome;
    $('#modal-concluir-aula').style.display = 'flex';

    if (usuarioAtual) {
        usuarioAtual.xp_total = (usuarioAtual.xp_total || 0) + xpGanho;
        usuarioAtual.nivel = Math.floor(usuarioAtual.xp_total / 100) + 1;
        localStorage.setItem('usuario', JSON.stringify(usuarioAtual));
        atualizarHeader();
    }

    $('#btn-proxima-etapa').onclick = function() {
        $('#modal-concluir-aula').style.display = 'none';
        renderizarCaminho();
    };
}

function abrirDesafio(etapa, indexEtapa) {
    var perguntasDesafio = [];
    var perguntasOriginais = [];

    apiGet('/perguntas').then(function(todas) {
        if (!todas || todas.length === 0) {
            alert('Nenhuma pergunta disponível');
            return;
        }

        perguntasOriginais = todas.sort(function() { return Math.random() - 0.5; }).slice(0, 5);
        perguntasDesafio = perguntasOriginais;
        var desafioIndex = 0;
        var acertouCount = 0;
        var respostas = [];

        function mostrarDesafioPergunta() {
            var p = perguntasDesafio[desafioIndex];
            $('#desafio-contador').textContent = (desafioIndex + 1) + '/' + perguntasDesafio.length;
            $('#desafio-barra-fill').style.width = ((desafioIndex / perguntasDesafio.length) * 100) + '%';
            $('#desafio-enunciado').textContent = p.enunciado;

            var opcoes = [
                { letra: 'A', texto: p.opcao_a },
                { letra: 'B', texto: p.opcao_b },
                { letra: 'C', texto: p.opcao_c },
                { letra: 'D', texto: p.opcao_d },
                { letra: 'E', texto: p.opcao_e }
            ].filter(function(o) { return o.texto; });

            var html = '';
            for (var i = 0; i < opcoes.length; i++) {
                html += '<button class="desafio-opcao-modal" data-letra="' + opcoes[i].letra + '">';
                html += '<span class="desafio-letra-modal">' + opcoes[i].letra + '</span>';
                html += '<span>' + opcoes[i].texto + '</span></button>';
            }
            $('#desafio-opcoes').innerHTML = html;
            $('#desafio-feedback').className = 'desafio-feedback';
            $('#btn-proximo-desafio').style.display = 'none';
            $('#modal-desafio').style.display = 'flex';

            $$('.desafio-opcao-modal').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    var botoes = $$('.desafio-opcao-modal');
                    botoes.forEach(function(b) {
                        b.style.pointerEvents = 'none';
                        if (b.getAttribute('data-letra') === p.resposta_correta) b.classList.add('correta');
                    });

                    var acertou = this.getAttribute('data-letra') === p.resposta_correta;
                    if (!acertou) this.classList.add('errada');
                    if (acertou) acertouCount++;

                    respostas.push({ pergunta_id: p.id, resposta: this.getAttribute('data-letra') });

                    var fb = $('#desafio-feedback');
                    fb.className = 'desafio-feedback visivel ' + (acertou ? 'correto' : 'errado');
                    fb.textContent = acertou ? '✅ Correto!' : '❌ Resposta: ' + p.resposta_correta.toUpperCase();

                    $('#btn-proximo-desafio').style.display = 'block';
                    $('#btn-proximo-desafio').textContent = desafioIndex < perguntasDesafio.length - 1 ? 'Próxima' : 'Ver Resultado';
                });
            });
        }

        $('#btn-proximo-desafio').onclick = function() {
            desafioIndex++;
            if (desafioIndex < perguntasDesafio.length) {
                mostrarDesafioPergunta();
            } else {
                $('#modal-desafio').style.display = 'none';
                finalizarDesafio(etapa, indexEtapa, acertouCount, perguntasDesafio.length, respostas);
            }
        };

        mostrarDesafioPergunta();
    });
}

function finalizarDesafio(etapa, indexEtapa, acertou, total, respostas) {
    var xpGanho = acertou * 15 + (acertou === total ? 100 : 0);
    var percentual = (acertou / total) * 100;

    $('#rd-acertou').textContent = acertou + '/' + total;
    $('#rd-xp').textContent = '+' + xpGanho;

    if (percentual >= 80) {
        $('#resultado-desafio-icon').textContent = '🏆';
        $('#resultado-desafio-titulo').textContent = 'Excelente!';
        $('#resultado-desafio-sub').textContent = 'Você dominou este conteúdo!';
        progressoTrilha[indexEtapa].completa = true;
    } else if (percentual >= 60) {
        $('#resultado-desafio-icon').textContent = '💪';
        $('#resultado-desafio-titulo').textContent = 'Bom trabalho!';
        $('#resultado-desafio-sub').textContent = 'Quase lá! Continue praticando.';
        progressoTrilha[indexEtapa].completa = true;
    } else {
        $('#resultado-desafio-icon').textContent = '📚';
        $('#resultado-desafio-titulo').textContent = 'Precisa revisar!';
        $('#resultado-desafio-sub').textContent = 'Revise o conteúdo e tente novamente.';
    }

    salvarProgresso();

    if (usuarioAtual) {
        usuarioAtual.xp_total = (usuarioAtual.xp_total || 0) + xpGanho;
        usuarioAtual.nivel = Math.floor(usuarioAtual.xp_total / 100) + 1;
        localStorage.setItem('usuario', JSON.stringify(usuarioAtual));
        atualizarHeader();

        apiPost('/quiz/submeter/' + usuarioAtual.id, {
            modulo_id: indexEtapa + 1,
            respostas: respostas,
            tempo_segundos: null
        }).catch(function(err) {
            console.error('Erro ao salvar:', err);
        });
    }

    $('#modal-resultado-desafio').style.display = 'flex';

    $('#btn-continuar-trilha').onclick = function() {
        $('#modal-resultado-desafio').style.display = 'none';
        renderizarCaminho();
    };
}

function init() {
    var salvo = localStorage.getItem('usuario');
    if (salvo) {
        usuarioAtual = JSON.parse(salvo);
    } else {
        window.location.href = 'index.html';
        return;
    }

    carregarProgresso();
    atualizarHeader();
}

document.addEventListener('DOMContentLoaded', init);
