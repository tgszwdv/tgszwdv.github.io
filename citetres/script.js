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
      let tempoRestante = 7; // Tempo em segundos
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
            tempoRestante = 7;
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

