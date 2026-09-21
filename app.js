const API_URL = 'https://historia-app-api.onrender.com/api';

let usuarioAtual = null;
let disciplinaAtual = null;
let moduloAtual = null;
let aulaAtual = null;
let quizAtual = null;
let perguntasQuiz = [];
let perguntaAtualIndex = 0;
let respostasQuiz = [];
let xpGanhoQuiz = 0;

// ============ UTILITÁRIOS ============
function $(seletor) {
    return document.querySelector(seletor);
}

function $$(seletor) {
    return document.querySelectorAll(seletor);
}

function mostrarTela(telaId) {
    $$('.tela').forEach(t => t.classList.remove('ativa'));
    $(`#${telaId}`).classList.add('ativa');
}

function mostrarErro(seletor, mensagem) {
    const el = $(seletor);
    el.textContent = mensagem;
    el.classList.add('visivel');
    setTimeout(() => el.classList.remove('visivel'), 5000);
}

function mostrarLoading(mostrar) {
    var el = $('#loading-overlay');
    if (el) {
        el.style.display = mostrar ? 'flex' : 'none';
    }
}

function fetchComTimeout(url, options, timeout) {
    timeout = timeout || 20000;
    var controller = new AbortController();
    var timer = setTimeout(function() { controller.abort(); }, timeout);
    return fetch(url, Object.assign({}, options || {}, { signal: controller.signal })).then(function(res) {
        clearTimeout(timer);
        return res;
    }).catch(function(err) {
        clearTimeout(timer);
        if (err.name === 'AbortError') {
            throw new Error('Servidor demorando para responder. Tente novamente.');
        }
        throw err;
    });
}

async function apiGet(caminho) {
    mostrarLoading(true);
    try {
        const res = await fetchComTimeout(`${API_URL}${caminho}`);
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.erro || 'Erro na requisição');
        }
        return await res.json();
    } finally {
        mostrarLoading(false);
    }
}

async function apiPost(caminho, dados) {
    mostrarLoading(true);
    try {
        const res = await fetchComTimeout(`${API_URL}${caminho}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.erro || 'Erro na requisição');
        }
        return await res.json();
    } finally {
        mostrarLoading(false);
    }
}

function atualizarHeaderXP() {
    const xpEls = $$('.xp-val, #xp-display');
    const nivelEls = $$('.nivel-val, #nivel-display');
    xpEls.forEach(el => el.textContent = usuarioAtual?.xp_total || 0);
    nivelEls.forEach(el => el.textContent = usuarioAtual?.nivel || 1);
}

// ============ AUTH ============
function setupAuth() {
    $$('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.tab-btn').forEach(b => b.classList.remove('ativa'));
            btn.classList.add('ativa');
            $$('.auth-form').forEach(f => f.classList.remove('ativa'));
            $(`#form-${btn.dataset.tab}`).classList.add('ativa');
        });
    });

    $('#form-login').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = $('#login-email').value;
        const senha = $('#login-senha').value;

        try {
            const dados = await apiPost('/auth/login', { email, senha });
            usuarioAtual = dados;
            localStorage.setItem('usuario', JSON.stringify(dados));
            iniciarApp();
        } catch (err) {
            mostrarErro('#auth-erro', err.message);
        }
    });

    $('#form-cadastro').addEventListener('submit', async (e) => {
        e.preventDefault();
        const nome = $('#cad-nome').value;
        const email = $('#cad-email').value;
        const senha = $('#cad-senha').value;

        try {
            const dados = await apiPost('/auth/registro', { nome, email, senha });
            usuarioAtual = dados;
            localStorage.setItem('usuario', JSON.stringify(dados));
            iniciarApp();
        } catch (err) {
            mostrarErro('#auth-erro', err.message);
        }
    });

    $('#btn-logout').addEventListener('click', () => {
        localStorage.removeItem('usuario');
        usuarioAtual = null;
        mostrarTela('tela-auth');
    });
}

// ============ ÚLTIMA TRILHA ============
async function carregarUltimaTrilha() {
    if (!usuarioAtual) return;

    var trilhasMap = {
        'republica': { nome: 'República', icone: '🇧🇷' },
        'geopolitica': { nome: 'Geopolítica do Século XXI', icone: '🌍' },
        'filosofia-grega': { nome: 'Filosofia Grega', icone: '📚' },
        'idade-media': { nome: 'Idade Média', icone: '🏰' },
        'sociologia': { nome: 'Sociologia', icone: '👥' },
        'brasil-colonial': { nome: 'Brasil Colonial', icone: '🇧🇷' },
        'literatura-brasileira': { nome: 'Literatura Brasileira', icone: '📖' },
        'atualidades': { nome: 'Atualidades', icone: '📰' }
    };

    try {
        const progresso = await apiGet('/progresso/' + usuarioAtual.id);

        if (!progresso || !progresso.progresso_json) {
            $('#trilha-disciplina').textContent = 'Nenhuma trilha iniciada';
            $('#trilha-modulo').textContent = 'Escolha uma trilha de estudo abaixo para começar';
            $('#trilha-percentual').textContent = '0%';
            $('#trilha-barra-fill').style.width = '0%';
            $('#ultima-trilha').style.display = 'block';
            $('#btn-continuar-trilha').style.display = 'none';
            return;
        }

        var todo = JSON.parse(progresso.progresso_json);
        var trilhas = Object.keys(todo);

        $$('.trilha-estudo-card').forEach(function(card) {
            var href = card.getAttribute('href') || '';
            var match = href.match(/id=([^&]+)/);
            if (match) {
                var trilhaId = match[1];
                var etapas = todo[trilhaId];
                if (etapas && etapas.length > 0) {
                    card.classList.add('iniciada');
                }
            }
        });

        var melhorTrilha = null;
        var maiorProgresso = -1;

        for (var t = 0; t < trilhas.length; t++) {
            var trilhaId = trilhas[t];
            var etapas = todo[trilhaId];
            if (etapas && etapas.length > 0) {
                var completas = etapas.filter(function(e) { return e.completa; }).length;
                var percentual = (completas / etapas.length) * 100;
                var estaCompleta = completas === etapas.length;

                var deveAtualizar = false;
                if (melhorTrilha === null) {
                    deveAtualizar = true;
                } else if (!estaCompleta && maiorProgresso === 100) {
                    deveAtualizar = true;
                } else if (!estaCompleta && percentual > maiorProgresso) {
                    deveAtualizar = true;
                } else if (estaCompleta && maiorProgresso === 100 && percentual > maiorProgresso) {
                    deveAtualizar = true;
                }

                if (deveAtualizar) {
                    maiorProgresso = percentual;
                    melhorTrilha = {
                        id: trilhaId,
                        nome: (trilhasMap[trilhaId] || { nome: trilhaId, icone: '📚' }).nome,
                        icone: (trilhasMap[trilhaId] || { icone: '📚' }).icone,
                        percentual: percentual
                    };
                }
            }
        }

        if (!melhorTrilha) {
            $('#trilha-disciplina').textContent = 'Nenhuma trilha iniciada';
            $('#trilha-modulo').textContent = 'Escolha uma trilha de estudo abaixo para começar';
            $('#trilha-percentual').textContent = '0%';
            $('#trilha-barra-fill').style.width = '0%';
            $('#ultima-trilha').style.display = 'block';
            $('#btn-continuar-trilha').style.display = 'none';
            return;
        }

        $('#trilha-disciplina').textContent = melhorTrilha.icone + ' ' + melhorTrilha.nome;
        $('#trilha-modulo').textContent = Math.round(melhorTrilha.percentual) + '% concluído';
        $('#trilha-percentual').textContent = Math.round(melhorTrilha.percentual) + '%';
        $('#trilha-barra-fill').style.width = melhorTrilha.percentual + '%';
        $('#ultima-trilha').style.display = 'block';
        $('#btn-continuar-trilha').style.display = 'block';

        $$('.trilha-estudo-card').forEach(function(card) {
            card.classList.remove('ativa');
            var href = card.getAttribute('href') || '';
            if (href.indexOf(melhorTrilha.id) !== -1) {
                card.classList.add('ativa');
            }
        });

        $('#btn-continuar-trilha').onclick = function() {
            window.location.href = 'trilha.html?id=' + melhorTrilha.id;
        };
    } catch (err) {
        console.error('Erro ao carregar última trilha:', err);
        $('#ultima-trilha').style.display = 'none';
    }
}

// ============ DASHBOARD ============
async function carregarDashboard() {
    if (usuarioAtual?.xp_total !== undefined) {
        atualizarHeaderXP();
    }

    $('#saudacao-texto').textContent = `Olá, ${usuarioAtual.nome}!`;

    try {
        const dados = await apiGet('/progresso/' + usuarioAtual.id + '/resumo');
        if (dados && dados.usuario) {
            usuarioAtual.xp_total = dados.usuario.xp_total || 0;
            usuarioAtual.nivel = dados.usuario.nivel || 1;
            localStorage.setItem('usuario', JSON.stringify(usuarioAtual));
            atualizarHeaderXP();
        }
    } catch(e) {}

    await carregarUltimaTrilha();
    carregarRanking();

    $$('.trilha-estudo-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            var href = card.getAttribute('href');
            if (href) {
                window.location.href = href;
            }
        });
    });
}

// ============ MÓDULOS ============
async function carregarModulos(disciplina) {
    mostrarTela('tela-modulos');
    $('#disciplina-nome').textContent = disciplina.nome;
    atualizarHeaderXP();

    try {
        var url = '/modulos';
        if (disciplina.id) {
            url += '?disciplina_id=' + disciplina.id;
        }
        const modulos = await apiGet(url);
        const lista = $('#lista-modulos');

        if (modulos.length === 0) {
            lista.innerHTML = '<p style="color: var(--cinza); text-align: center; padding: 40px;">Nenhum módulo disponível</p>';
            return;
        }

        lista.innerHTML = modulos.map(m => `
            <div class="modulo-card" data-id="${m.id}">
                <div class="modulo-icone">${m.icone || '&#128214;'}</div>
                <div class="modulo-info">
                    <div class="modulo-nome">${m.nome}</div>
                    <div class="modulo-desc">${m.descricao || ''}</div>
                    <div class="modulo-progresso">
                        <div class="barra-progresso-mini">
                            <div class="barra-progresso-mini-fill" style="width: 0%"></div>
                        </div>
                        <span class="progresso-texto">0%</span>
                    </div>
                </div>
                <span class="modulo-seta">&#8250;</span>
            </div>
        `).join('');

        carregarProgressoModulos(modulos);

        $$('.modulo-card').forEach(card => {
            card.addEventListener('click', () => {
                moduloAtual = modulos.find(m => m.id === parseInt(card.dataset.id));
                mostrarOpcoesModulo(moduloAtual);
            });
        });
    } catch (err) {
        console.error('Erro ao carregar módulos:', err);
    }
}

async function carregarProgressoModulos(modulos) {
    if (!usuarioAtual) return;

    try {
        const dados = await apiGet(`/progresso/${usuarioAtual.id}`);

        if (!dados || !dados.progresso_json) return;

        const todo = JSON.parse(dados.progresso_json);

        $$('.modulo-card').forEach(card => {
            const moduloId = parseInt(card.dataset.id);
            const etapas = todo[String(moduloId)] || [];
            const total = etapas.length;
            const completas = etapas.filter(e => e.completa).length;
            const percentual = total > 0 ? (completas / total) * 100 : 0;

            card.querySelector('.barra-progresso-mini-fill').style.width = `${percentual}%`;
            card.querySelector('.progresso-texto').textContent = `${Math.round(percentual)}%`;
        });
    } catch (err) {
        console.error('Erro ao carregar progresso:', err);
    }
}

function mostrarOpcoesModulo(modulo) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-conteudo">
            <h3>${modulo.nome}</h3>
            <p>${modulo.descricao || ''}</p>
            <div class="modal-botoes">
                <button class="btn btn-primario" id="modal-aula">Estudar Aula</button>
                <button class="btn btn-azul" id="modal-quiz">Fazer Quiz</button>
                <button class="btn btn-secundario" id="modal-fechar">Fechar</button>
            </div>
        </div>
    `;

    modal.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.7); display: flex; align-items: center;
        justify-content: center; z-index: 200; padding: 20px;
    `;

    const conteudo = modal.querySelector('.modal-conteudo');
    conteudo.style.cssText = `
        background: var(--card); border-radius: 16px; padding: 30px;
        max-width: 400px; width: 100%; text-align: center;
        border: 2px solid var(--borda);
    `;

    const botoes = modal.querySelector('.modal-botoes');
    botoes.style.cssText = `
        display: flex; flex-direction: column; gap: 10px; margin-top: 20px;
    `;

    modal.querySelector('#modal-fechar').style.cssText = `
        background: var(--borda); color: var(--texto); border: none;
        padding: 12px; border-radius: 8px; cursor: pointer; font-weight: 700;
    `;

    modal.querySelector('#modal-quiz').style.cssText = `
        background: var(--azul); color: white; border: none;
        padding: 12px; border-radius: 8px; cursor: pointer; font-weight: 700;
        box-shadow: 0 4px 0 var(--azul-escuro);
    `;

    document.body.appendChild(modal);

    modal.querySelector('#modal-fechar').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    modal.querySelector('#modal-aula').addEventListener('click', () => {
        modal.remove();
        carregarAulas(modulo);
    });

    modal.querySelector('#modal-quiz').addEventListener('click', () => {
        modal.remove();
        iniciarQuiz(modulo);
    });
}

// ============ AULAS ============
async function carregarAulas(modulo) {
    try {
        const aulas = await apiGet(`/aulas?modulo_id=${modulo.id}`);

        if (aulas.length === 0) {
            alert('Nenhuma aula disponível neste módulo');
            return;
        }

        mostrarAula(aulas[0]);
    } catch (err) {
        console.error('Erro ao carregar aulas:', err);
    }
}

function mostrarAula(aula) {
    aulaAtual = aula;
    mostrarTela('tela-aula');
    $('#aula-titulo').textContent = aula.titulo;

    let html = aula.conteudo;

    if (aula.resumo) {
        html += `<h3>Resumo</h3><p>${aula.resumo}</p>`;
    }

    $('#conteudo-aula').innerHTML = html;
}

$('#btn-concluir-aula')?.addEventListener('click', async () => {
    if (!aulaAtual || !usuarioAtual) return;

    try {
        const resultado = await apiPost(`/progresso/${usuarioAtual.id}/aula/${aulaAtual.id}/concluir`);

        usuarioAtual.xp_total = resultado.xp_total;
        usuarioAtual.nivel = resultado.nivel;
        localStorage.setItem('usuario', JSON.stringify(usuarioAtual));

        alert(`Aula concluída! +${resultado.xp_ganho} XP`);

        mostrarTela('tela-modulos');
        carregarModulos(disciplinaAtual);
    } catch (err) {
        console.error('Erro ao concluir aula:', err);
    }
});

// ============ QUIZ ============
async function iniciarQuiz(modulo) {
    moduloAtual = modulo;
    mostrarTela('tela-quiz');
    perguntaAtualIndex = 0;
    respostasQuiz = [];
    xpGanhoQuiz = 0;

    try {
        const dados = await apiGet(`/quiz/gerar/${modulo.id}?quantidade=10`);
        perguntasQuiz = dados.perguntas;

        if (perguntasQuiz.length === 0) {
            alert('Nenhuma pergunta disponível para este módulo');
            mostrarTela('tela-modulos');
            return;
        }

        mostrarPergunta();
    } catch (err) {
        console.error('Erro ao gerar quiz:', err);
        alert('Erro ao iniciar quiz');
        mostrarTela('tela-modulos');
    }
}

function mostrarPergunta() {
    const pergunta = perguntasQuiz[perguntaAtualIndex];
    const total = perguntasQuiz.length;

    $('#quiz-progresso').textContent = `${perguntaAtualIndex + 1}/${total}`;
    $('#barra-progresso').style.width = `${((perguntaAtualIndex) / total) * 100}%`;

    $('#quiz-pergunta').textContent = pergunta.enunciado;

    let opcoes = [
        { letra: 'A', texto: pergunta.opcao_a },
        { letra: 'B', texto: pergunta.opcao_b },
        { letra: 'C', texto: pergunta.opcao_c },
        { letra: 'D', texto: pergunta.opcao_d },
        { letra: 'E', texto: pergunta.opcao_e }
    ].filter(o => o.texto);

    for (let i = opcoes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
    }

    $('#quiz-opcoes').innerHTML = opcoes.map(o => `
        <button class="opcao-btn" data-letra="${o.letra}">
            <span class="opcao-letra">${o.letra}</span>
            <span>${o.texto}</span>
        </button>
    `).join('');

    $('#quiz-feedback').classList.remove('visivel', 'correto', 'errado');
    $('#btn-proxima').style.display = 'none';

    $$('.opcao-btn').forEach(btn => {
        btn.addEventListener('click', () => selecionarResposta(btn, pergunta));
    });
}

function selecionarResposta(btn, pergunta) {
    if (btn.classList.contains('selecionada')) return;

    $$('.opcao-btn').forEach(b => b.classList.remove('selecionada'));
    btn.classList.add('selecionada');

    const resposta = btn.dataset.letra;
    const acertou = resposta === pergunta.resposta_correta;

    respostasQuiz.push({
        pergunta_id: pergunta.id,
        resposta: resposta
    });

    $$('.opcao-btn').forEach(b => {
        b.style.pointerEvents = 'none';
        if (b.dataset.letra === pergunta.resposta_correta) {
            b.classList.add('correta');
        }
    });

    if (!acertou) {
        btn.classList.add('errada');
    }

    const feedback = $('#quiz-feedback');
    feedback.className = `quiz-feedback visivel ${acertou ? 'correto' : 'errado'}`;
    feedback.innerHTML = `
        <h3>${acertou ? '&#10004; Correto!' : '&#10008; Errado!'}</h3>
        ${pergunta.explicacao ? `<p>${pergunta.explicacao}</p>` : ''}
    `;

    $('#btn-proxima').style.display = 'block';
    $('#btn-proxima').textContent = perguntaAtualIndex < perguntasQuiz.length - 1
        ? 'Próxima Pergunta' : 'Ver Resultado';
}

$('#btn-proxima')?.addEventListener('click', () => {
    perguntaAtualIndex++;

    if (perguntaAtualIndex < perguntasQuiz.length) {
        mostrarPergunta();
    } else {
        finalizarQuiz();
    }
});

async function finalizarQuiz() {
    if (!usuarioAtual || !moduloAtual) return;

    try {
        const resultado = await apiPost(`/quiz/submeter/${usuarioAtual.id}`, {
            modulo_id: moduloAtual.id,
            respostas: respostasQuiz,
            tempo_segundos: null
        });

        xpGanhoQuiz = resultado.resultado.xp_ganho;
        usuarioAtual.xp_total += xpGanhoQuiz;
        usuarioAtual.nivel = resultado.resultado.nivel_atual;
        localStorage.setItem('usuario', JSON.stringify(usuarioAtual));

        mostrarResultado(resultado.resultado);
    } catch (err) {
        console.error('Erro ao submeter quiz:', err);
    }
}

function mostrarResultado(resultado) {
    mostrarTela('tela-resultado');

    $('#stat-acertou').textContent = resultado.acertou;
    $('#stat-errou').textContent = resultado.errou;
    $('#stat-xp').textContent = `+${resultado.xp_ganho}`;

    if (resultado.percentual >= 80) {
        $('#resultado-icon').innerHTML = '&#127942;';
        $('#resultado-titulo').textContent = 'Excelente!';
    } else if (resultado.percentual >= 50) {
        $('#resultado-icon').innerHTML = '&#128170;';
        $('#resultado-titulo').textContent = 'Bom trabalho!';
    } else {
        $('#resultado-icon').innerHTML = '&#128221;';
        $('#resultado-titulo').textContent = 'Continue praticando!';
    }
}

$('#btn-quiz-novamente')?.addEventListener('click', () => {
    iniciarQuiz(moduloAtual);
});

$('#btn-voltar-modulos-resultado')?.addEventListener('click', () => {
    mostrarTela('tela-modulos');
    carregarModulos(disciplinaAtual);
});

// ============ NAVEGAÇÃO ============
$('#btn-voltar-dashboard')?.addEventListener('click', () => {
    mostrarTela('tela-dashboard');
    carregarDashboard();
});

$('#btn-voltar-modulos')?.addEventListener('click', () => {
    mostrarTela('tela-modulos');
});

$('#btn-sair-quiz')?.addEventListener('click', () => {
    if (confirm('Tem certeza que quer sair do quiz?')) {
        mostrarTela('tela-modulos');
    }
});

// ============ POPUP DE BOAS-VINDAS ============
const temasPreferidos = [
    { id: 'historia-brasil-republica', nome: 'História do Brasil - República', icone: '🇧🇷', descricao: 'Da proclamação à atualidade' },
    { id: 'guerra-fria', nome: 'Guerra Fria', icone: '🌍', descricao: 'EUA vs URSS e o mundo bipolar' },
    { id: 'atualidades', nome: 'Atualidades', icone: '📰', descricao: 'Questões sociais e políticas atuais' },
    { id: 'filosofia-grega', nome: 'Filosofia Grega', icone: '📚', descricao: 'De Tales a Aristóteles' },
    { id: 'sociologia', nome: 'Sociologia', icone: '👥', descricao: 'Sociedade, cultura e estruturas sociais' },
    { id: 'geografia', nome: 'Geografia', icone: '🌎', descricao: 'Mundo, Brasil e questões ambientais' },
    { id: 'literatura', nome: 'Literatura', icone: '📖', descricao: 'Movimentos literários brasileiros' },
    { id: 'gramatica', nome: 'Gramática', icone: '✏️', descricao: 'Norma culta e interpretação de texto' }
];

function mostrarPopupBoasVindas() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'modal-boas-vindas';
    
    let temasHtml = '';
    temasPreferidos.forEach(function(t) {
        temasHtml += '<button class="tema-btn" data-tema="' + t.id + '">';
        temasHtml += '<span class="tema-icone">' + t.icone + '</span>';
        temasHtml += '<span class="tema-nome">' + t.nome + '</span>';
        temasHtml += '<span class="tema-desc">' + t.descricao + '</span>';
        temasHtml += '</button>';
    });
    
    modal.innerHTML = '<div class="modal-conteudo boas-vindas-modal">' +
        '<div class="boas-vindas-header">' +
        '<span class="boas-vindas-icon">🎓</span>' +
        '<h2>Bem-vindo ao HistóriaApp!</h2>' +
        '<p>Por onde você quer começar? Escolha um tema:</p>' +
        '</div>' +
        '<div class="temas-grid">' + temasHtml + '</div>' +
        '<button class="btn btn-secundario" id="pular-escolha" style="margin-top: 15px; width: 100%;">Pular por agora</button>' +
        '</div>';

    document.body.appendChild(modal);

    var temaBtns = modal.querySelectorAll('.tema-btn');
    temaBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var temaId = btn.getAttribute('data-tema');
            localStorage.setItem('temaPreferido', temaId);
            localStorage.setItem('onboardingCompleto', 'true');
            modal.remove();
            mostrarTela('tela-dashboard');
            carregarDashboard();
        });
    });

    modal.querySelector('#pular-escolha').addEventListener('click', function() {
        localStorage.setItem('onboardingCompleto', 'true');
        modal.remove();
    });
}

// ============ RANKING ============
async function carregarRanking() {
    var ficticios = [
        { nome: 'Ana Clara', nivel: 12, xp: 1150, avatar: '👩‍🎓' },
        { nome: 'Pedro Henrique', nivel: 10, xp: 980, avatar: '🧑‍💻' },
        { nome: 'Maria Eduarda', nivel: 9, xp: 870, avatar: '👩‍🏫' },
        { nome: 'Lucas Oliveira', nivel: 8, xp: 760, avatar: '🧔' },
        { nome: 'Juliana Costa', nivel: 7, xp: 650, avatar: '👩‍🔬' },
        { nome: 'Rafael Santos', nivel: 6, xp: 540, avatar: '🧑‍🎨' },
        { nome: 'Camila Lima', nivel: 5, xp: 430, avatar: '💁‍♀️' },
        { nome: 'Thiago Almeida', nivel: 4, xp: 320, avatar: '🧑‍🚒' }
    ];

    try {
        var rankings = await apiGet('/ranking');
        if (rankings && rankings.length > 0) {
            ficticios = [];
            var avatares = ['👩‍🎓', '🧑‍💻', '👩‍🏫', '🧔', '👩‍🔬', '🧑‍🎨', '💁‍♀️', '🧑‍🚒', '👨‍⚕️', '👩‍⚖️'];
            for (var i = 0; i < rankings.length; i++) {
                ficticios.push({
                    nome: rankings[i].nome,
                    nivel: rankings[i].nivel || 1,
                    xp: rankings[i].xp_total || 0,
                    avatar: avatares[i % avatares.length],
                    eu: rankings[i].id === usuarioAtual.id
                });
            }
        }
    } catch(e) {
        console.error('Erro ao carregar ranking:', e);
    }

    var meuXp = usuarioAtual ? (usuarioAtual.xp_total || 0) : 0;
    var meuNivel = usuarioAtual ? (usuarioAtual.nivel || 1) : 1;
    var meuNome = usuarioAtual ? usuarioAtual.nome : 'Você';

    var jaTemUsuario = ficticios.some(function(u) { return u.eu; });
    if (!jaTemUsuario) {
        ficticios.push({ nome: meuNome, nivel: meuNivel, xp: meuXp, avatar: '⭐', eu: true });
    }

    ficticios.sort(function(a, b) { return b.xp - a.xp; });

    var html = '';
    for (var i = 0; i < Math.min(ficticios.length, 10); i++) {
        var u = ficticios[i];
        var pos = i + 1;
        var posClasse = 'ranking-pos';
        if (pos === 1) posClasse += ' um';
        else if (pos === 2) posClasse += ' dois';
        else if (pos === 3) posClasse += ' tres';

        html += '<div class="ranking-item' + (u.eu ? ' eu' : '') + '">';
        html += '  <div class="' + posClasse + '">' + pos + 'º</div>';
        html += '  <div class="ranking-avatar">' + u.avatar + '</div>';
        html += '  <div class="ranking-info">';
        html += '    <div class="ranking-nome">' + u.nome + (u.eu ? ' (Você)' : '') + '</div>';
        html += '    <div class="ranking-nivel">Nível ' + u.nivel + '</div>';
        html += '  </div>';
        html += '  <div class="ranking-xp">' + u.xp + ' XP</div>';
        html += '</div>';
    }

    document.getElementById('lista-ranking').innerHTML = html;
}

// ============ DESAFIO ROLETA ============
function salvarXpNoBanco(xpGanho) {
    if (!usuarioAtual) return;

    usuarioAtual.xp_total = (usuarioAtual.xp_total || 0) + xpGanho;
    usuarioAtual.nivel = Math.floor(usuarioAtual.xp_total / 100) + 1;
    localStorage.setItem('usuario', JSON.stringify(usuarioAtual));
    atualizarHeaderXP();

    apiPost('/xp/' + usuarioAtual.id, { xp_ganho: xpGanho }).then(function(res) {
        if (res && res.xp_total !== undefined) {
            usuarioAtual.xp_total = res.xp_total;
            usuarioAtual.nivel = res.nivel;
            localStorage.setItem('usuario', JSON.stringify(usuarioAtual));
            atualizarHeaderXP();
        }
    }).catch(function() {
        setTimeout(function() {
            apiPost('/xp/' + usuarioAtual.id, { xp_ganho: xpGanho }).then(function(res) {
                if (res && res.xp_total !== undefined) {
                    usuarioAtual.xp_total = res.xp_total;
                    usuarioAtual.nivel = res.nivel;
                    localStorage.setItem('usuario', JSON.stringify(usuarioAtual));
                    atualizarHeaderXP();
                }
            }).catch(function() {});
        }, 2000);
    });
}

var temasRoleta = [
    { nome: 'República', cor: '#05f2af', trailId: 'republica' },
    { nome: 'Geopolítica', cor: '#595451', trailId: 'geopolitica' },
    { nome: 'Filosofia', cor: '#ff9600', trailId: 'filosofia-grega' },
    { nome: 'Idade Média', cor: '#ce82ff', trailId: 'idade-media' },
    { nome: 'Sociologia', cor: '#ff4b4b', trailId: 'sociologia' },
    { nome: 'Colonial', cor: '#ffc800', trailId: 'brasil-colonial' },
    { nome: 'Literatura', cor: '#bfbaa3', trailId: 'literatura-brasileira' },
    { nome: 'Atualidades', cor: '#1cb0f6', trailId: 'atualidades' }
];

var girando = false;
var anguloAtual = 0;

function desenharRoleta() {
    var canvas = document.getElementById('canvas-roleta');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var centro = canvas.width / 2;
    var raio = centro - 4;
    var fatia = (2 * Math.PI) / temasRoleta.length;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < temasRoleta.length; i++) {
        var inicio = anguloAtual + i * fatia;
        var fim = inicio + fatia;

        ctx.beginPath();
        ctx.moveTo(centro, centro);
        ctx.arc(centro, centro, raio, inicio, fim);
        ctx.closePath();
        ctx.fillStyle = temasRoleta[i].cor;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.save();
        ctx.translate(centro, centro);
        ctx.rotate(inicio + fatia / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 11px Nunito, sans-serif';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 3;
        ctx.fillText(temasRoleta[i].nome, raio - 12, 4);
        ctx.shadowBlur = 0;
        ctx.restore();
    }

    ctx.beginPath();
    ctx.arc(centro, centro, 20, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.strokeStyle = '#d5d5d5';
    ctx.lineWidth = 3;
    ctx.stroke();
}

function girarRoleta() {
    if (girando) return;
    girando = true;

    var btnGirar = document.getElementById('btn-girar');
    btnGirar.disabled = true;
    btnGirar.textContent = 'Girando...';

    document.getElementById('desafio-pergunta').style.display = 'none';

    var giros = 5 + Math.random() * 5;
    var anguloFinal = anguloAtual + giros * 2 * Math.PI + Math.random() * 2 * Math.PI;
    var duracao = 3000 + Math.random() * 2000;
    var inicio = null;

    function animar(timestamp) {
        if (!inicio) inicio = timestamp;
        var progresso = timestamp - inicio;
        var percentual = Math.min(progresso / duracao, 1);
        var ease = 1 - Math.pow(1 - percentual, 3);

        anguloAtual = anguloAtual + (anguloFinal - anguloAtual) * ease / 100;
        desenharRoleta();

        if (percentual < 1) {
            requestAnimationFrame(animar);
        } else {
            anguloAtual = anguloFinal % (2 * Math.PI);
            girando = false;
            btnGirar.disabled = false;
            btnGirar.textContent = '⚙ Girar Roleta';

            var fatia = (2 * Math.PI) / temasRoleta.length;
            var anguloCorreto = (2 * Math.PI - anguloAtual + Math.PI / 2) % (2 * Math.PI);
            var index = Math.floor(anguloCorreto / fatia) % temasRoleta.length;
            var temaEscolhido = temasRoleta[index];

            setTimeout(function() {
                carregarDesafioAleatorio(temaEscolhido.nome);
            }, 500);
        }
    }

    requestAnimationFrame(animar);
}

async function carregarDesafioAleatorio(tema) {
    try {
        var perguntas = await apiGet('/perguntas');

        var perguntasFiltradas = [];
        if (perguntas && perguntas.length > 0) {
            perguntasFiltradas = perguntas.filter(function(p) {
                return p.disciplina && p.disciplina.nome &&
                    p.disciplina.nome.toLowerCase().indexOf(tema.toLowerCase()) !== -1;
            });
        }

        if (perguntasFiltradas.length === 0) {
            perguntasFiltradas = perguntas || [];
        }

        if (perguntasFiltradas.length === 0 && typeof desafiosData !== 'undefined') {
            var trailId = tema;
            for (var i = 0; i < temasRoleta.length; i++) {
                if (temasRoleta[i].nome === tema) {
                    trailId = temasRoleta[i].trailId;
                    break;
                }
            }
            if (desafiosData[trailId]) {
                var todosDesafios = [];
                var d = desafiosData[trailId];
                if (d.intermediarios) {
                    d.intermediarios.forEach(function(set) {
                        todosDesafios = todosDesafios.concat(set);
                    });
                }
                if (d.bossFight) {
                    todosDesafios = todosDesafios.concat(d.bossFight);
                }
                if (todosDesafios.length > 0) {
                    var p = todosDesafios[Math.floor(Math.random() * todosDesafios.length)];
                    mostrarDesafioLocal(p);
                    return;
                }
            }
        }

        if (perguntasFiltradas.length === 0) {
            alert('Nenhuma pergunta disponível para este tema');
            return;
        }

        var pergunta = perguntasFiltradas[Math.floor(Math.random() * perguntasFiltradas.length)];
        mostrarDesafio(pergunta);
    } catch (err) {
        if (typeof desafiosData !== 'undefined') {
            var trailId = tema;
            for (var i = 0; i < temasRoleta.length; i++) {
                if (temasRoleta[i].nome === tema) {
                    trailId = temasRoleta[i].trailId;
                    break;
                }
            }
            if (desafiosData[trailId]) {
                var todosDesafios = [];
                var d = desafiosData[trailId];
                if (d.intermediarios) {
                    d.intermediarios.forEach(function(set) {
                        todosDesafios = todosDesafios.concat(set);
                    });
                }
                if (d.bossFight) {
                    todosDesafios = todosDesafios.concat(d.bossFight);
                }
                if (todosDesafios.length > 0) {
                    var p = todosDesafios[Math.floor(Math.random() * todosDesafios.length)];
                    mostrarDesafioLocal(p);
                    return;
                }
            }
        }
        alert('Erro ao carregar desafio');
    }
}

function mostrarDesafioLocal(p) {
    var secao = document.getElementById('modal-desafio');
    secao.style.display = 'flex';

    document.getElementById('desafio-enunciado').textContent = p.enunciado;

    var opcoesEmbaralhadas = p.opcoes.map(function(opcao, i) {
        return { texto: opcao, letraOriginal: String.fromCharCode(65 + i) };
    });
    for (var i = opcoesEmbaralhadas.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = opcoesEmbaralhadas[i];
        opcoesEmbaralhadas[i] = opcoesEmbaralhadas[j];
        opcoesEmbaralhadas[j] = temp;
    }

    var html = '';
    for (var i = 0; i < opcoesEmbaralhadas.length; i++) {
        var letra = String.fromCharCode(65 + i);
        html += '<button class="desafio-opcao" data-letra="' + opcoesEmbaralhadas[i].letraOriginal + '">';
        html += '<span class="desafio-letra">' + letra + '</span>';
        html += '<span>' + opcoesEmbaralhadas[i].texto + '</span>';
        html += '</button>';
    }
    document.getElementById('desafio-opcoes').innerHTML = html;

    document.getElementById('desafio-feedback').className = 'desafio-feedback';
    document.getElementById('desafio-feedback').innerHTML = '';
    document.getElementById('btn-proximo-desafio').style.display = 'none';

    var botoes = document.querySelectorAll('.desafio-opcao');
    for (var j = 0; j < botoes.length; j++) {
        botoes[j].addEventListener('click', function() {
            var todosBotoes = document.querySelectorAll('.desafio-opcao');
            for (var k = 0; k < todosBotoes.length; k++) {
                todosBotoes[k].style.pointerEvents = 'none';
                if (todosBotoes[k].getAttribute('data-letra') === p.resposta) {
                    todosBotoes[k].classList.add('correta');
                }
            }

            var acertou = this.getAttribute('data-letra') === p.resposta;
            if (!acertou) this.classList.add('errada');

            var fb = document.getElementById('desafio-feedback');
            fb.className = 'desafio-feedback visivel ' + (acertou ? 'correto' : 'errado');
            fb.textContent = acertou ? '✅ Correto! +15 XP' : '❌ ' + p.explicacao;

            if (acertou && usuarioAtual) {
                salvarXpNoBanco(15);
            }

            document.getElementById('btn-proximo-desafio').style.display = 'block';
        });
    }
}

function mostrarDesafio(pergunta) {
    var secao = document.getElementById('modal-desafio');
    secao.style.display = 'flex';

    document.getElementById('desafio-enunciado').textContent = pergunta.enunciado;

    var opcoes = [
        { letra: 'A', texto: pergunta.opcao_a },
        { letra: 'B', texto: pergunta.opcao_b },
        { letra: 'C', texto: pergunta.opcao_c },
        { letra: 'D', texto: pergunta.opcao_d },
        { letra: 'E', texto: pergunta.opcao_e }
    ].filter(function(o) { return o.texto; });

    for (var i = opcoes.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = opcoes[i];
        opcoes[i] = opcoes[j];
        opcoes[j] = temp;
    }

    var html = '';
    for (var i = 0; i < opcoes.length; i++) {
        html += '<button class="desafio-opcao" data-letra="' + opcoes[i].letra + '">';
        html += '<span class="desafio-letra">' + opcoes[i].letra + '</span>';
        html += '<span>' + opcoes[i].texto + '</span>';
        html += '</button>';
    }
    document.getElementById('desafio-opcoes').innerHTML = html;

    document.getElementById('desafio-feedback').className = 'desafio-feedback';
    document.getElementById('desafio-feedback').innerHTML = '';
    document.getElementById('btn-proximo-desafio').style.display = 'none';

    var botoes = document.querySelectorAll('.desafio-opcao');
    for (var j = 0; j < botoes.length; j++) {
        botoes[j].addEventListener('click', function() {
            responderDesafio(this, pergunta);
        });
    }
}

async function responderDesafio(btn, pergunta) {
    var botoes = document.querySelectorAll('.desafio-opcao');
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].style.pointerEvents = 'none';
        if (botoes[i].getAttribute('data-letra') === pergunta.resposta_correta) {
            botoes[i].classList.add('correta');
        }
    }

    var acertou = btn.getAttribute('data-letra') === pergunta.resposta_correta;
    if (!acertou) {
        btn.classList.add('errada');
    }

    var feedback = document.getElementById('desafio-feedback');
    feedback.className = 'desafio-feedback visivel ' + (acertou ? 'correto' : 'errado');
    feedback.textContent = acertou ? '✅ Correto! +15 XP' : '❌ Errado! Resposta: ' + pergunta.resposta_correta.toUpperCase();

    if (acertou && usuarioAtual) {
        try {
            var resultado = await apiPost('/quiz/submeter/' + usuarioAtual.id, {
                modulo_id: pergunta.modulo_id || 1,
                respostas: [{ pergunta_id: pergunta.id, resposta: btn.getAttribute('data-letra') }],
                tempo_segundos: null
            });

            usuarioAtual.xp_total = resultado.resultado.xp_ganho > 0 ? (usuarioAtual.xp_total || 0) + resultado.resultado.xp_ganho : usuarioAtual.xp_total;
            localStorage.setItem('usuario', JSON.stringify(usuarioAtual));
            atualizarHeaderXP();
            carregarRanking();
        } catch (err) {
            console.error('Erro ao salvar desafio:', err);
        }
    }

    document.getElementById('btn-proximo-desafio').style.display = 'block';
}

function setupDesafio() {
    var btnGirar = document.getElementById('btn-girar');
    if (btnGirar) {
        btnGirar.addEventListener('click', girarRoleta);
    }

    var btnProximo = document.getElementById('btn-proximo-desafio');
    if (btnProximo) {
        btnProximo.addEventListener('click', function() {
            document.getElementById('modal-desafio').style.display = 'none';
        });
    }

    desenharRoleta();
}

// ============ INICIALIZAÇÃO ============
function iniciarApp() {
    var onboardingCompleto = localStorage.getItem('onboardingCompleto');
    var jaViuRoleta = sessionStorage.getItem('roletaVista');

    mostrarTela('tela-dashboard');
    carregarDashboard();

    if (!jaViuRoleta) {
        sessionStorage.setItem('roletaVista', 'true');
        setTimeout(function() {
            var secaoDesafio = document.querySelector('.desafio-section');
            if (secaoDesafio) {
                secaoDesafio.scrollIntoView({ behavior: 'smooth' });
            }
        }, 1500);
    }

    if (!onboardingCompleto) {
        setTimeout(mostrarPopupBoasVindas, 500);
    }
}

function init() {
    setupAuth();
    setupDesafio();

    var usuarioSalvo = localStorage.getItem('usuario');
    if (usuarioSalvo) {
        usuarioAtual = JSON.parse(usuarioSalvo);
        iniciarApp();
    } else {
        mostrarTela('tela-auth');
    }
}

document.addEventListener('DOMContentLoaded', init);
