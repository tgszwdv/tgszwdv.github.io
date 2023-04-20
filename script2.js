let indice;
let videos;

if (JSON.parse(localStorage.getItem('indiceSalvo')) > 0) {
 //let indice
  videos = JSON.parse(localStorage.getItem('notasSalvas'));
  console.log('ta certo')
  indice = JSON.parse(localStorage.getItem('indiceSalvo')) - 1;
}else{


  const videos = [
 
{ link: "https://www.youtube.com/embed/U7JKifvBAbQ", nome: "Bakermat", style: "Dance/Pop/SoulHouse", nota: "" },
{ link: "https://www.youtube.com/embed/uVINeFCjgFg?t=1290", nome: "BassJackers", style: "Big Room/Progressive House/FutureHouse", nota: "" },
{ link: "https://www.youtube.com/embed/8Pl3j5xQFlU?t=869", nome: "BlastoyzA", style: "Psy Trance", nota: "" },
{ link: "https://www.youtube.com/embed/hgfJoV5Lmbw?t=596", nome: "Brennan Heart", style: "HardStyle", nota: "" },
{ link: "https://www.youtube.com/embed/i9StkfKg0SQ?t=1269", nome: "Brina Knauss", style: "Melodic House/Liquid/Electro", nota: "" },
{ link: "https://www.youtube.com/embed/E8Y-N9OT01U?t=1012", nome: "Bruno Be", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/Z9eDJndet_c?t=391", nome: "Bruno martini ", style: "House/Deephouse/Dance Pop", nota: "" },
{ link: "https://www.youtube.com/embed/9JTFHc6U8jc?t=503", nome: "Carola", style: "Deephouse", nota: "" }
]

//console.log(indice)


let indice = 0

const meuIframe = document.querySelector('#meu-iframe');
meuIframe.src = videos[indice].link;

const tabelaNotas = document.querySelector('#tabela-notas');

document.querySelector('#proximo').addEventListener('click', () => {
  const notaInput = document.querySelector('#nota');
  const nota = notaInput.value;
  if (nota < 0 || nota > 10) {
    alert('A nota deve estar entre 0 e 10.');
    return;
  }
  videos[indice].nota = nota;
console.log(indice) 
console.log(videos[indice])
console.log('Nome:'+ videos[indice].nome)
console.log('Nota:'+videos[indice].nota)
  atualizarTabela();
  indice++;
  console.log('Indice Atual:'+indice)
  localStorage.setItem('notasSalvas', JSON.stringify(videos));
  localStorage.setItem('indiceSalvo', JSON.stringify(indice));
  if (indice >= videos.length) {
    alert('Você avaliou todos os vídeos!');
    return;
  }
  meuIframe.src = videos[indice].link;
  notaInput.value = '';
  //console.log(notas);
});

function atualizarTabela() {
  videos.sort((a, b) => b.nota - a.nota);
  tabelaNotas.innerHTML = '';
  for (const video of videos) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${video.nome}</td>
      <td>${video.nota}</td>
      <td>${video.style}</td>
    `;
    tabelaNotas.appendChild(tr);

  }
}

atualizarTabela();


}








console.log(indice)
console.log(videos[indice])
console.log('Nome:'+ videos[indice].nome)
console.log('Nota:'+videos[indice].nota)
const meuIframe = document.querySelector('#meu-iframe');
meuIframe.src = videos[indice].link;

const tabelaNotas = document.querySelector('#tabela-notas');

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
  localStorage.setItem('notasSalvas', JSON.stringify(videos));
  localStorage.setItem('indiceSalvo', JSON.stringify(indice));
  if (indice >= videos.length) {
    alert('Você avaliou todos os vídeos!');
    return;
  }
  meuIframe.src = videos[indice].link;
  notaInput.value = '';
  //console.log(notas);
});

function atualizarTabela() {
  videos.sort((a, b) => b.nota - a.nota);
  tabelaNotas.innerHTML = '';
  for (const video of videos) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${video.nome}</td>
      <td>${video.nota}</td>
      <td>${video.style}</td>
    `;
    tabelaNotas.appendChild(tr);

  }
}

atualizarTabela();



