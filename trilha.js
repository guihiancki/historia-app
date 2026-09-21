var API_URL = 'https://historia-app-api.onrender.com/api';
var usuarioAtual = null;
var progressoTrilha = [];
var trilhaAtual = null;

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

function getTrilhaId() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id') || 'republica';
}

function atualizarHeader() {
    var xp = usuarioAtual ? (usuarioAtual.xp_total || 0) : 0;
    var nivel = usuarioAtual ? (usuarioAtual.nivel || 1) : 1;
    $('#xp-display').textContent = xp;
    $('#nivel-display').textContent = nivel;
    $('#trilha-titulo').textContent = trilhaAtual ? (trilhaAtual.icone + ' ' + trilhaAtual.titulo) : 'Trilha';
}

function carregarProgresso() {
    if (!usuarioAtual || !trilhaAtual) return;

    var trilhaId = getTrilhaId();

    apiGet('/progresso/' + usuarioAtual.id).then(function(dados) {
        if (dados && dados.progresso_json) {
            var todo = JSON.parse(dados.progresso_json);
            if (todo[trilhaId]) {
                progressoTrilha = todo[trilhaId];
            }
        }
        if (!progressoTrilha || progressoTrilha.length === 0) {
            progressoTrilha = trilhaAtual.etapas.map(function(e, i) {
                return { index: i, tipo: e.tipo, completa: false };
            });
        }
        renderizarCaminho();
    }).catch(function() {
        progressoTrilha = trilhaAtual.etapas.map(function(e, i) {
            return { index: i, tipo: e.tipo, completa: false };
        });
        renderizarCaminho();
    });
}

function salvarProgresso() {
    if (!usuarioAtual) return;

    var trilhaId = getTrilhaId();
    var todo = {};
    todo[trilhaId] = progressoTrilha;

    apiPost('/progresso/' + usuarioAtual.id + '/trilha', {
        modulo_id: 99,
        progresso_json: JSON.stringify(todo)
    }).then(function() {
        console.log('Progresso salvo no banco');
    }).catch(function(err) {
        console.error('Erro ao salvar progresso:', err);
    });
}

function salvarXpNoBanco(xpGanho) {
    if (!usuarioAtual) return;

    apiPost('/xp/' + usuarioAtual.id, {
        xp_ganho: xpGanho
    }).then(function(res) {
        if (res && res.xp_total !== undefined) {
            usuarioAtual.xp_total = res.xp_total;
            usuarioAtual.nivel = res.nivel;
            localStorage.setItem('usuario', JSON.stringify(usuarioAtual));
            atualizarHeader();
        }
    }).catch(function(err) {
        console.error('Erro ao salvar XP:', err);
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
    var etapas = trilhaAtual.etapas;

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
    var etapa = trilhaAtual.etapas[index];
    if (etapa.tipo === 'aula') {
        abrirFlashcards(etapa, index);
    } else if (etapa.tipo === 'desafio') {
        abrirDesafio(etapa, index);
    }
}

function abrirFlashcards(etapa, indexEtapa) {
    var flashcards = trilhaAtual.flashcards || {};
    var lista = flashcards[etapa.nome] || [];
    if (lista.length === 0) {
        concluirAula(etapa, indexEtapa);
        return;
    }
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
        salvarXpNoBanco(xpGanho);
    }

    $('#btn-proxima-etapa').onclick = function() {
        $('#modal-concluir-aula').style.display = 'none';
        renderizarCaminho();
    };
}

function abrirDesafio(etapa, indexEtapa) {
    var trilhaId = getTrilhaId();
    var desafios = DESAFIOS[trilhaId];
    if (!desafios) {
        alert('Desafios não encontrados para esta trilha');
        return;
    }

    var ehBossFight = (indexEtapa === trilhaAtual.etapas.length - 1);
    var perguntasDesafio;

    if (ehBossFight) {
        perguntasDesafio = desafios.bossFight.slice();
    } else {
        var desafiosIntermediarios = desafios.intermediarios;
        var quantDesafiosFeitos = 0;
        for (var d = 0; d < indexEtapa; d++) {
            if (trilhaAtual.etapas[d].tipo === 'desafio' && d < indexEtapa) {
                quantDesafiosFeitos++;
            }
        }
        var indiceDesafio = quantDesafiosFeitos % desafiosIntermediarios.length;
        perguntasDesafio = desafiosIntermediarios[indiceDesafio].slice();
    }

    perguntasDesafio = perguntasDesafio.sort(function() { return Math.random() - 0.5; });
    var desafioIndex = 0;
    var acertouCount = 0;
    var respostas = [];

    function mostrarDesafioPergunta() {
        var p = perguntasDesafio[desafioIndex];
        $('#desafio-contador').textContent = (desafioIndex + 1) + '/' + perguntasDesafio.length;
        $('#desafio-barra-fill').style.width = ((desafioIndex / perguntasDesafio.length) * 100) + '%';
        $('#desafio-enunciado').textContent = (ehBossFight ? '🔥 ' : '') + p.enunciado;

        var html = '';
        for (var i = 0; i < p.opcoes.length; i++) {
            var letra = String.fromCharCode(65 + i);
            html += '<button class="desafio-opcao-modal" data-letra="' + letra + '">';
            html += '<span class="desafio-letra-modal">' + letra + '</span>';
            html += '<span>' + p.opcoes[i] + '</span></button>';
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
                    if (b.getAttribute('data-letra') === p.resposta) b.classList.add('correta');
                });

                var acertou = this.getAttribute('data-letra') === p.resposta;
                if (!acertou) this.classList.add('errada');
                if (acertou) acertouCount++;

                respostas.push({ pergunta_id: desafioIndex, resposta: this.getAttribute('data-letra') });

                var fb = $('#desafio-feedback');
                fb.className = 'desafio-feedback visivel ' + (acertou ? 'correto' : 'errado');
                fb.textContent = acertou ? '✅ Correto!' : '❌ ' + p.explicacao;

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
            finalizarDesafio(etapa, indexEtapa, acertouCount, perguntasDesafio.length, respostas, ehBossFight);
        }
    };

    mostrarDesafioPergunta();
}

function finalizarDesafio(etapa, indexEtapa, acertou, total, respostas, ehBossFight) {
    var xpGanho;
    var percentual = (acertou / total) * 100;

    if (ehBossFight) {
        xpGanho = acertou * 25 + (acertou === total ? 500 : 0);
    } else {
        xpGanho = acertou * 15 + (acertou === total ? 100 : 0);
    }

    $('#rd-acertou').textContent = acertou + '/' + total;
    $('#rd-xp').textContent = '+' + xpGanho;

    if (percentual >= 60) {
        $('#resultado-desafio-icon').textContent = ehBossFight ? '👑' : '🏆';
        $('#resultado-desafio-titulo').textContent = ehBossFight ? 'BOSS DERROTADO!' : 'Excelente!';
        $('#resultado-desafio-sub').textContent = ehBossFight ? 'Você dominou a trilha!' : 'Você dominou este conteúdo!';
        progressoTrilha[indexEtapa].completa = true;
    } else {
        $('#resultado-desafio-icon').textContent = ehBossFight ? '🔥' : '📚';
        $('#resultado-desafio-titulo').textContent = ehBossFight ? 'Boss resistiu!' : 'Precisa revisar!';
        $('#resultado-desafio-sub').textContent = 'Revise o conteúdo e tente novamente.';
    }

    salvarProgresso();

    if (usuarioAtual) {
        usuarioAtual.xp_total = (usuarioAtual.xp_total || 0) + xpGanho;
        usuarioAtual.nivel = Math.floor(usuarioAtual.xp_total / 100) + 1;
        localStorage.setItem('usuario', JSON.stringify(usuarioAtual));
        atualizarHeader();
        salvarXpNoBanco(xpGanho);
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

    var trilhaId = getTrilhaId();
    if (!TRILHAS || !TRILHAS[trilhaId]) {
        alert('Trilha não encontrada!');
        window.location.href = 'index.html';
        return;
    }

    trilhaAtual = TRILHAS[trilhaId];
    document.title = 'HistóriaApp - ' + trilhaAtual.titulo;
    carregarProgresso();
    atualizarHeader();
}

document.addEventListener('DOMContentLoaded', init);
