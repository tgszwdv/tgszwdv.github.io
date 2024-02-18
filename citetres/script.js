const fullscreenButton = document.getElementById('fullscreenButton');

function toggleFullscreen() {
    // Verifica se o navegador suporta o método requestFullscreen
    if (document.documentElement.requestFullscreen) {
        // Coloca o documento em modo de tela cheia
        document.documentElement.requestFullscreen()
            .then(() => {
                console.log('Entrou em modo de tela cheia.');
            })
            .catch((error) => {
                console.error('Erro ao entrar em modo de tela cheia:', error);
            });
    } else {
        console.error('O navegador não suporta o modo de tela cheia.');
    }
}

toggleFullscreen()


document.querySelector('.container1').style.display = 'none'; // Exibir o container1

function iniciarJogo () {

document.querySelector('.container1').style.display = 'block'; // Exibir o container1
document.querySelector('.IniciarJogo').style.display = 'none'; // Ocultar o botão "Iniciar Jogo"
const perguntasRespostas = [
    {
      "Pergunta": "Cite 3 cores primárias",
      "Resposta": []
    },
    {
      "Pergunta": "Cite três capitais do Brasil",
      "Resposta": []
    },
    {
      "Pergunta": "Cite 3 países da Europa",
      "Resposta": []
    },
    {
      "Pergunta": "Cite 3 elementos químicos gasosos",
      "Resposta": []
    },
    {
      "Pergunta": "Cite 3 marcas de carros",
      "Resposta": []
    },
    {
      "Pergunta": "Cite 3 tipos de frutas cítricas",
      "Resposta": []
    },
    {
      "Pergunta": "Cite 3 filmes dirigidos por Quentin Tarantino",
      "Resposta": []
    },
    {
      "Pergunta": "Cite 3 montanhas famosas",
      "Resposta": []
    },
    {
      "Pergunta": "Cite 3 tipos de animais marinhos",
      "Resposta": []
    },
    {
      "Pergunta": "Cite 3 estações do ano",
      "Resposta": []
    },
{
    "Pergunta": "Cite 3 cores primárias",
     "Resposta": []
},
{
    "Pergunta": "Cite três capitais do Brasil",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 países da Europa",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 elementos químicos gasosos",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 marcas de carros",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 tipos de frutas cítricas",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 filmes dirigidos por Quentin Tarantino",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 montanhas famosas",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 tipos de animais marinhos",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 estações do ano",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 marcas de smartphones",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 idiomas falados na América do Sul",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 rios famosos",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 atores vencedores do Oscar",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 estilos de dança",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 escritores famosos",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 tipos de música",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 instrumentos musicais",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 esportes olímpicos",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 marcas de roupas",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 personagens de desenhos animados",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 elementos do sistema solar",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 atores de filmes de ação",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 filósofos famosos",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 praias famosas",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 bandas de rock",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 gêneros literários",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 países da Ásia",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 cientistas famosos",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 museus famosos",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 formas geométricas",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 pintores famosos",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 filósofos gregos",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 estilos de arte",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 séries de TV populares",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 aplicativos de redes sociais",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 parques de diversões",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 cidades históricas",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 capitais europeias",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 capitais asiáticas",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 capitais africanas",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 capitais americanas",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 capitais oceânicas",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 jogos de tabuleiro",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 pedras preciosas",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 inventores famosos",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 monumentos históricos",
     "Resposta": []
},
{
    "Pergunta": "Cite 3 termos de informática",
     "Resposta": []
}

  ];
      
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      // Embaralhar o array de perguntas
      const perguntasEmbaralhadas = shuffleArray(perguntasRespostas);
      
      let indicePerguntaAtual = 0;
      let tempoRestante = 12; // Tempo em segundos
      let timerId;
      let respostasUsuario = []; // Array para armazenar as respostas do usuário
      
      const perguntaElement = document.getElementById('pergunta');
      const respostaInputs = document.querySelectorAll('.resposta');
      const btnResponder = document.getElementById('btnResponder');
      const tempoElement = document.getElementById('tempo');
      const gameOverElement = document.getElementById('gameOver');
      const resultadoElement = document.getElementById('resultado');
      
      function exibirProximaPergunta() {
        if (indicePerguntaAtual < perguntasEmbaralhadas.length) {
          const perguntaAtual = perguntasEmbaralhadas[indicePerguntaAtual];
          perguntaElement.textContent = perguntaAtual.Pergunta;
        } else {
          clearInterval(timerId);
          gameOverElement.style.display = 'block';
          exibirRespostas();
        }
      }
      
      function verificarRespostas() {
        if (indicePerguntaAtual < perguntasEmbaralhadas.length) {
          const perguntaAtual = perguntasEmbaralhadas[indicePerguntaAtual];
          const respostas = Array.from(respostaInputs).map(input => input.value.trim());
          const respostasComPergunta = { pergunta: perguntaAtual.Pergunta, respostas: respostas };
          respostasUsuario.push(respostasComPergunta);
      
          if (perguntaAtual.Resposta.every(resposta => resposta !== '')) {
            indicePerguntaAtual++;
            exibirProximaPergunta();
            tempoRestante = 12;
            atualizarTempo();
            limpaInputs();
          } else {
            resultadoElement.textContent = 'Por favor, responda todas as perguntas.';
          }
        }
      }
      
      function limpaInputs() {
        respostaInputs.forEach(input => input.value = '');
      }
      
      function exibirRespostas() {
        document.querySelector('.container1').style.display = 'none';
        resultadoElement.innerHTML = '<b>Respostas dadas:</b><br>';
        respostasUsuario.forEach((item, index) => {
          resultadoElement.innerHTML += `<br><b>Pergunta:</b> ${item.pergunta}`;
          item.respostas.forEach((resposta, i) => {
            resultadoElement.innerHTML += `<br>- Resposta ${i + 1}: ${resposta}`;
          });
          resultadoElement.innerHTML += '<br>';
        });
      }
      
      function atualizarTempo() {
        tempoElement.textContent = tempoRestante;
        if (tempoRestante === 0) {
          clearInterval(timerId);
          gameOverElement.style.display = 'block';
          exibirRespostas();
        } else {
          tempoRestante--;
        }
      }
      
      btnResponder.addEventListener('click', verificarRespostas);
      
      // Exibir a primeira pergunta
      exibirProximaPergunta();
      timerId = setInterval(atualizarTempo, 1000);



}

