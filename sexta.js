
let indice = 0;
let videos;

if (JSON.parse(localStorage.getItem('indiceSexta')) > 0) {
  videos = JSON.parse(localStorage.getItem('sextaNotas'));
  indice = JSON.parse(localStorage.getItem('indiceSexta'));
  //console.log('to no if')
   if (indice >= 45 ) {
    indice = 0;
    //console.log('to no segundo if')
   }

} else {
  //console.log('to no else')
  videos = [
{ link: "https://www.youtube.com/embed/pg5foEhBW2c", nome: "Beltran", style: "Deephouse", palco: "Essence by Beck's", horario: "14:00 - 15:30", nota: "" },
{ link: "https://www.youtube.com/embed/rPRSIizQ6t0", nome: "Due", style: "House", palco: "CORE", horario: "14:00 - 15:30", nota: "" },
{ link: "https://www.youtube.com/embed/2SMxKLTJAy4", nome: "Jessica Brankka", style: "House/Techno", palco: "Mainstage", horario: "14:00 - 15:30", nota: "" },
{ link: "https://www.youtube.com/embed/ihkNRJD7Nng", nome: "Doozie", style: "Deephouse", palco: "Youphoria", horario: "15:00 - 16:00", nota: "" },
{ link: "https://www.youtube.com/embed/hf0YbhqY-Ew?t=4875", nome: "Fernanda Pistelli", style: "Psy Trance", palco: "Tulip", horario: "15:00 - 16:00", nota: "" },
{ link: "https://www.youtube.com/embed/BHwvMQeQVME", nome: "KVSH ", style: "Deephouse", palco: "Mainstage", horario: "15:30 - 16:30", nota: "" },
{ link: "https://www.youtube.com/embed/yi6d1kWsHSM?t=1272", nome: "Gabe ", style: "Deephouse", palco: "Essence by Beck's", horario: "15:30 - 17:00", nota: "" },
{ link: "https://www.youtube.com/embed/IygyK03E1bY", nome: "Mila Journée", style: "Melodic/Deep House", palco: "CORE", horario: "15:30 - 17:00", nota: "" },
{ link: "https://www.youtube.com/embed/E-CdJFlKyNc?t=1865", nome: "Aura Vortex", style: "Psy Trance", palco: "Tulip", horario: "16:00 - 17:00", nota: "" },
{ link: "https://www.youtube.com/embed/ZPhcmTsh1FQ", nome: "Dj Glen", style: "House Classics/DeepHouse", palco: "Youphoria", horario: "16:00 - 17:00", nota: "" },
{ link: "https://www.youtube.com/embed/o8UEQXwfXIQ", nome: "Carola", style: "Deephouse", palco: "Mainstage", horario: "16:30 - 17:30", nota: "" },
{ link: "https://www.youtube.com/embed/3wRtMN19JLM?t=2651", nome: "Freedom Fighters", style: "Psy Trance", palco: "Tulip", horario: "17:00 - 18:00", nota: "" },
{ link: "https://www.youtube.com/embed/UT_66xW3lck", nome: "Jørd ", style: "Deephouse", palco: "Youphoria", horario: "17:00 - 18:00", nota: "" },
{ link: "https://www.youtube.com/embed/_Lum1rSjs6w?t=1160", nome: "Capoon ", style: "Underground/Organic", palco: "CORE", horario: "17:00 - 18:30", nota: "" },
{ link: "https://www.youtube.com/embed/n6ei2S1t6tI", nome: "Layla Benitez ", style: "Indie/Dance", palco: "Essence by Beck's", horario: "17:00 - 18:30", nota: "" },
{ link: "https://www.youtube.com/embed/sK54sgHQBDc", nome: "Cat Dealers", style: "Deephouse", palco: "Mainstage", horario: "17:35 - 18:35", nota: "" },
{ link: "https://www.youtube.com/embed/6GHiYo3530o?t=4154", nome: "Liquid Soul", style: "Psy Trance", palco: "Tulip", horario: "18:00 - 19:00", nota: "" },
{ link: "https://www.youtube.com/embed/4y9BzMAE3FY?t=346", nome: "Meca ", style: "Melodic/Deep House", palco: "Youphoria", horario: "18:00 - 19:00", nota: "" },
{ link: "https://www.youtube.com/embed/4r-M7lqUSKo", nome: "Dino Lenny", style: "Techno/Underground", palco: "CORE", horario: "18:30 - 20:00", nota: "" },
{ link: "https://www.youtube.com/embed/0XgH-zAGvwA", nome: "Francis Mercier", style: "Dance", palco: "Essence by Beck's", horario: "18:30 - 20:00", nota: "" },
{ link: "https://www.youtube.com/embed/U0rD-PMKAt4", nome: "B Jones", style: "Deephouse", palco: "Mainstage", horario: "18:40 - 19:40", nota: "" },
{ link: "https://www.youtube.com/embed/CVKBlYp62M8", nome: "Chapeleiro", style: "Psy Trance", palco: "Tulip", horario: "19:00 - 20:00", nota: "" },
{ link: "https://www.youtube.com/embed/P9mnmm-zxcI", nome: "Liu", style: "Deephouse", palco: "Youphoria", horario: "19:00 - 20:00", nota: "" },
{ link: "https://www.youtube.com/embed/r9O_lNCx5EA", nome: "Nervo", style: "House/Psy/ElectroHouse/ProgressiveHouse", palco: "Mainstage", horario: "19:40 - 20:40", nota: "" },
{ link: "https://www.youtube.com/embed/tyoSiO9Iccw", nome: "Blastoyz", style: "Psy Trance", palco: "Tulip", horario: "20:00 - 21:00", nota: "" },
{ link: "https://www.youtube.com/embed/5hZzU7Jhr0I?t=1035", nome: "Chemical Surf", style: "Deephouse", palco: "Youphoria", horario: "20:00 - 21:00", nota: "" },
{ link: "https://www.youtube.com/embed/6dB0n_mLqJA", nome: "Jaguar", style: "House", palco: "CORE", horario: "20:00 - 22:00", nota: "" },
{ link: "https://www.youtube.com/embed/9ynMx2qAYAE", nome: "Korolova ", style: "Melodic Trance", palco: "Essence by Beck's", horario: "20:00 - 22:00", nota: "" },
{ link: "https://www.youtube.com/embed/0Settohf92Q", nome: "ANNA ", style: "Dance/EDM", palco: "Mainstage", horario: "20:40 - 21:40", nota: "" },
{ link: "https://www.youtube.com/embed/psHA5maXX_4?t=1464", nome: "Coone", style: "HardStyle", palco: "Tulip", horario: "21:00 - 22:00", nota: "" },
{ link: "https://www.youtube.com/embed/MPt3z9ISwCs?t=2726", nome: "Pretty Pink", style: "Trance/Melodic Trance/AjunaDeeps", palco: "Youphoria", horario: "21:00 - 22:00", nota: "" },
{ link: "https://www.youtube.com/embed/aAnHOnEF_PI", nome: "Vintage Culture", style: "Deephouse/Future House/Trance/Tropical House", palco: "Mainstage", horario: "21:45 - 22:45", nota: "" },
{ link: "https://www.youtube.com/embed/cCOJdwxpme8", nome: "Gordo ", style: "Deephouse", palco: "Essence by Beck's", horario: "22:00 - 00:00", nota: "" },
{ link: "https://www.youtube.com/embed/NgetGgcdEd4", nome: "Skepta", style: "raper ? Wtf tml", palco: "CORE", horario: "22:00 - 00:00", nota: "" },
{ link: "https://www.youtube.com/embed/rMzSGJLYkCM", nome: "Mandy", style: "HardStyle", palco: "Tulip", horario: "22:00 - 23:00", nota: "" },
{ link: "https://www.youtube.com/embed/z0yYfuTqxn4", nome: "Ownboss", style: "Deephouse", palco: "Youphoria", horario: "22:00 - 23:00", nota: "" },
{ link: "https://www.youtube.com/embed/7DE0TAz5xbg?t=1480", nome: "Sebastian Ingrosso", style: "House/Dance/Progressive House", palco: "Mainstage", horario: "22:50 - 23:50", nota: "" },
{ link: "https://www.youtube.com/embed/U7JKifvBAbQ", nome: "Bakermat", style: "Dance/Pop/SoulHouse", palco: "Youphoria", horario: "23:00 - 00:00", nota: "" },
{ link: "https://www.youtube.com/embed/jO7_r2nf__k", nome: "Da Tweekaz", style: "HardStyle", palco: "Tulip", horario: "23:00 - 00:00", nota: "" },
{ link: "https://www.youtube.com/embed/A4lTUgJWNIw", nome: "Dimitri vegas & Like mike", style: "Big Room/Trance/Techno", palco: "Mainstage", horario: "23:50 - 00:50", nota: "" },
{ link: "https://www.youtube.com/embed/IajHfZrqS4w", nome: "Lost Frequencies", style: "Tropical House/DownTempo", palco: "Youphoria", horario: "00:00 - 01:00", nota: "" },
{ link: "https://www.youtube.com/embed/iIQVr40Mnw4?t=787", nome: "Sub Zero Project", style: "Drum And Bass/Hardstyle", palco: "Tulip", horario: "00:00 - 01:00", nota: "" },
{ link: "https://www.youtube.com/embed/Gy0RM9yjyhM&t=1127s", nome: "Âme", style: "House/Techno", palco: "CORE", horario: "00:00 - 02:00", nota: "" },
{ link: "https://www.youtube.com/embed/emEARENszec", nome: "Purple Disco Machine", style: "Nu-disco/House", palco: "Essence by Beck's", horario: "00:00 - 02:00", nota: "" },
{ link: "https://www.youtube.com/embed/5LlAC5FN59Y", nome: "Steve Aoki", style: "EDM/Progressive House/Big Room/Future Bass", palco: "Mainstage", horario: "00:50 - 01:50", nota: "" },
{ link: "https://www.youtube.com/embed/geU67GxTIFg", nome: "Acraze", style: "Deephouse", palco: "Youphoria", horario: "01:00 - 02:00", nota: "" }
  ];
}

const meuIframe = document.querySelector('#meu-iframe');
meuIframe.src = videos[indice].link;

const tabelaNotas = document.querySelector('#tabela-notas');
const videoInfo = document.getElementById('video-info');
 videoInfo.textContent = `${videos[indice].nome} - ${videos[indice].style}`;

document.querySelector('#proximo').addEventListener('click', () => {
  const notaInput = document.querySelector('#nota');
  const nota = notaInput.value;
  if (nota < 0 || nota > 10) {
    alert('A nota deve estar entre 0 e 10.');
    return;
  }
  videos[indice].nota = nota;
  atualizarTabela();
  indice++;
  localStorage.setItem('sextaNotas', JSON.stringify(videos));
  localStorage.setItem('indiceSexta', JSON.stringify(indice));
  if (indice >= videos.length) {
    alert('Você avaliou todos os vídeos!');
    //
    indice = 0;
    JSON.parse(localStorage.getItem('indiceSexta')) = indice ;
    //
    return;
  }
  videoInfo.textContent = `${videos[indice].nome} -${videos[indice].style}`
  meuIframe.src = videos[indice].link;
  notaInput.value = '';
});

function atualizarTabela() {
  //videos.sort((a, b) => b.nota - a.nota);
  tabelaNotas.innerHTML = '';
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    document.getElementById("nota").focus();
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${video.nome}</td>
      <td>${video.nota}</td>
      <td>${video.style}</td>
      <td>${video.palco}</td>	
      <td>${video.horario}</td>
    `;
    const btn = document.createElement('button2');
    btn.textContent = 'Editar';
    btn.addEventListener('click', () => {
      const novaNota = prompt('Insira a nova nota para o vídeo:');
      if (novaNota !== null && !isNaN(novaNota)) {
        video.nota = Number(novaNota);
        atualizarTabela();
      }
    });

    tr.addEventListener('click', () => {
      indice = i;
      meuIframe.src = videos[indice].link;
      videoInfo.textContent = `${videos[indice].nome} - ${videos[indice].style}`;
    });

    tr.insertCell().appendChild(btn);
    tabelaNotas.appendChild(tr);
  }
}
  

  document.querySelector('#resetar').addEventListener('click', () => {
    indice = 0
    for (const video of videos) {
      video.nota = "";
    }
    atualizarTabela();
    localStorage.setItem('sextaNotas', JSON.stringify(videos));
  });

function exportarTabela() {
  console.log('Exportando tabela...');

  const tabela = document.createElement('table');
  tabela.classList.add('tabela-export');

  // cabeçalho
  const cabecalho = tabela.createTHead();
  const rowCabecalho = cabecalho.insertRow(0);
  const colNome = rowCabecalho.insertCell(0);
  const colNota = rowCabecalho.insertCell(1);
  const colStyle = rowCabecalho.insertCell(2);
  const colPalco = rowCabecalho.insertCell(3); 
  const colHorario = rowCabecalho.insertCell(4); 
  colNome.innerHTML = '<strong>Nome</strong>';
  colNota.innerHTML = '<strong>Nota</strong>';
  colStyle.innerHTML = '<strong>Estilo</strong>';
  colPalco.innerHTML = '<strong>Palco</strong>'; 
  colHorario.innerHTML = '<strong>Horario</strong>'; 

  // alterando a cor do texto para branco
  colNome.style.color = '#FFFACD';
  colNota.style.color = '#FFFACD';
  colStyle.style.color = '#FFFACD';
  colPalco.style.color = '#FFFACD'; 
  colHorario.style.color = '#FFFACD'; 

  // conteúdo
  const corpoTabela = tabela.createTBody();
  for (const video of videos) {
    const tr = corpoTabela.insertRow();
    const colNome = tr.insertCell();
    const colNota = tr.insertCell();
    const colStyle = tr.insertCell();
    const colPalco = tr.insertCell(); 
    const colHorario = tr.insertCell(); 
    colNome.textContent = video.nome;
    colNota.textContent = video.nota;
    colStyle.textContent = video.style;
    colPalco.textContent = video.palco; 
    colHorario.textContent = video.horario; 

    // alterando a cor do texto para branco
    colNome.style.color = '#FFFACD';
    colNota.style.color = '#FFFACD';
    colStyle.style.color = '#FFFACD';
    colPalco.style.color = '#FFFACD'; 
    colHorario.style.color = '#FFFACD'; 
  }

  document.body.appendChild(tabela);

  html2canvas(tabela, { backgroundColor: '#000000' }).then(function (canvas) {
    const link = document.createElement('a');
    link.download = 'tabela.png';
    link.href = canvas.toDataURL('image/png');
    link.click();

    document.body.removeChild(tabela);
  });
}

document.querySelector('#exportar').addEventListener('click', exportarTabela);


document.getElementById("headerNota").addEventListener('click', () => {
  // Sort the videos array by 'nota' property in descending order
  videos.sort((a, b) => b.nota - a.nota);
  atualizarTabela(); // Update the table
});

document.getElementById("headerPalco").addEventListener('click', () => {
  // Sort the videos array by 'palco' property in alphabetical order
  videos.sort((a, b) => a.palco.localeCompare(b.palco));
  atualizarTabela(); // Update the table
});

document.getElementById("headerHorario").addEventListener('click', () => {
  // Reload the page when the "Horario" header is clicked
  window.location.reload();
});

document.getElementById("headerStyle").addEventListener('click', () => {
  // Sort the videos array by 'Style' property in alphabetical order
  videos.sort((a, b) => a.style.localeCompare(b.style));
  atualizarTabela(); // Update the table
});
  




atualizarTabela();

