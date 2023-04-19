const videos = [
  //{ link: "https://www.youtube.com/embed/yo4pmauhugo", nome: "Tiesto", style: "Trance", nota: "" },
  //{ link: "https://www.youtube.com/embed/9Sc-ir2UwGU", nome: "Armin van Buuren", style: "Trance", nota: "" },
 // { link: "https://www.youtube.com/embed/fzQ6gRAEoy0", nome: "David Guetta", style: "Electro House", nota: "" }
/*{ link: "https://www.youtube.com/embed/qrOCRqYjebI?t=415", nome: "Acraze", style: "Deephouse", nota: "" },
{ link: "https://www.youtube.com/embed/Evz8iIl5yrM?t=1607", nome: "Afrojack", style: "Pop/House/Progressive/Big Room", nota: "" },
{ link: "https://www.youtube.com/embed/1FHngx3GvJA?t=181", nome: "Aline Rocha", style: "Soulful & House", nota: "" },
{ link: "https://www.youtube.com/embed/j1ZZOuxtzrc?t=582", nome: "Alok", style: "DeepHouse/House/Brazilian Bass", nota: "" },
{ link: "https://www.youtube.com/embed/yrU-zBOGZPw?t=961", nome: "Amber Bross", style: "Trance/Liquid Trance", nota: "" },
{ link: "https://www.youtube.com/embed/EF9JTFq8ErY?t=2940", nome: "aname", style: "Trance/Liquid Trance", nota: "" },
*/
{ link: "https://youtu.be/qrOCRqYjebI?t=415", nome: "Acraze", style: "Deephouse", nota: "" },
{ link: "https://youtu.be/Evz8iIl5yrM?t=1607", nome: "Afrojack", style: "Pop/House/Progressive/Big Room", nota: "" },
{ link: "https://youtu.be/1FHngx3GvJA?t=181", nome: "Aline Rocha", style: "Soulful & House", nota: "" },
{ link: "https://youtu.be/j1ZZOuxtzrc?t=582", nome: "Alok", style: "DeepHouse/House/Brazilian Bass", nota: "" },
{ link: "https://youtu.be/yrU-zBOGZPw?t=961", nome: "Amber Bross", style: "Trance/Liquid Trance", nota: "" },
{ link: "https://youtu.be/EF9JTFq8ErY?t=2940", nome: "Anamê", style: "Trance/Liquid Trance", nota: "" },
{ link: "https://youtu.be/n5y0nPPUAQc?t=2561", nome: "Andromedik", style: "Drum And Bass", nota: "" },
{ link: "https://youtu.be/E-CdJFlKyNc?t=1865", nome: "Aura Vortex", style: "Psy Trance", nota: "" },
{ link: "https://youtu.be/taJKkbv0jq0?t=1637", nome: "B Jones", style: "PopHouse/Trance", nota: "" },
{ link: "https://youtu.be/U7JKifvBAbQ", nome: "Bakermat", style: "Dance/Pop/SoulHouse", nota: "" },
{ link: "https://youtu.be/uVINeFCjgFg?t=1290", nome: "BassJackers", style: "Big Room/Progressive House/FutureHouse", nota: "" },
{ link: "https://youtu.be/8Pl3j5xQFlU?t=869", nome: "BlastoyzA", style: "Psy Trance", nota: "" },
{ link: "https://youtu.be/hgfJoV5Lmbw?t=596", nome: "Brennan Heart", style: "HardStyle", nota: "" },
{ link: "https://youtu.be/i9StkfKg0SQ?t=1269", nome: "Brina Knauss", style: "Melodic House/Liquid/Electro", nota: "" },
{ link: "https://youtu.be/E8Y-N9OT01U?t=1012", nome: "Bruno Be", style: "Deephouse", nota: "" },
{ link: "https://youtu.be/Z9eDJndet_c?t=391", nome: "Bruno martini ", style: "House/Deephouse/Dance Pop", nota: "" },
{ link: "https://youtu.be/9JTFHc6U8jc?t=503", nome: "Carola", style: "Deephouse", nota: "" },
{ link: "https://youtu.be/UxsQ4_ZH870?t=6752", nome: "Cat Dealers", style: "Deephouse", nota: "" },
{ link: "https://youtu.be/xOqULY4ZBT0?t=1200", nome: "Chapeleiro", style: "Psy Trance", nota: "" },
{ link: "https://youtu.be/5hZzU7Jhr0I?t=1035", nome: "Chemical Surf", style: "Deephouse", nota: "" },
{ link: "https://youtu.be/psHA5maXX_4?t=1464", nome: "Coone", style: "HardStyle", nota: "" },
{ link: "https://youtu.be/U6YBRoq2zEU?t=2993", nome: "Da Tweekaz", style: "HardStyle", nota: "" },
{ link: "https://youtu.be/nsNCK3EJpao?t=407", nome: "Dimitri vegas & Like mike", style: "Big Room/Trance/Techno", nota: "" },
{ link: "https://youtu.be/4QfLqcvnwWg?t=816", nome: "Dino Lenny", style: "Techno/Underground", nota: "" },
{ link: "https://youtu.be/xMQKQz6H2RA?t=1319", nome: "Dj Glen", style: "House Classics/DeepHouse", nota: "" },
{ link: "https://youtu.be/WZCQlZsHkHo?t=1957", nome: "Dj Marky ", style: "Drum And Bass", nota: "" },
{ link: "https://youtu.be/pLqipJNItIo?t=1366", nome: "Don Diablo", style: "EDM/Electro House/Future House", nota: "" },
{ link: "https://youtu.be/mfcylo7DZfQ?t=1187", nome: "Doozie", style: "Deephouse", nota: "" },
{ link: "https://youtu.be/8NwFL49cSjw?t=1437", nome: "Dubdogz", style: "Deephouse", nota: "" },
{ link: "https://youtu.be/2hjOVynhTGA?t=2071", nome: "Fancy Inc", style: "Deephouse", nota: "" },
{ link: "https://youtu.be/hf0YbhqY-Ew?t=4875", nome: "Fernanda Pistelli", style: "Psy Trance", nota: "" },
{ link: "https://youtu.be/3wRtMN19JLM?t=2651", nome: "Freedom Fighters", style: "Psy Trance", nota: "" },
{ link: "https://youtu.be/vK45BvHWcOU?t=862", nome: "Gui Boratto ", style: "Techno/House", nota: "" },
{ link: "https://youtu.be/6WqatqyeBqk?t=1783", nome: "Inndrive", style: "Groove/Techno", nota: "" },
{ link: "https://youtu.be/bkwfc7uR2yw?t=378", nome: "Jessica Audifrfred", style: "Dubstep", nota: "" },
{ link: "https://youtu.be/dgz2eVXWWAM?t=857", nome: "John Newman", style: "House/Progressive House", nota: "" },
{ link: "https://youtu.be/lXxtONrGqxk?t=842", nome: "Jord", style: "Deephouse", nota: "" },
{ link: "https://youtu.be/6GHiYo3530o?t=4154", nome: "Liquid Soul", style: "Psy Trance", nota: "" },
{ link: "https://youtu.be/w3yRKiJ9Vqk?t=491", nome: "Lost Frequencies", style: "Tropical House/DownTempo", nota: "" },
{ link: "https://youtu.be/TC2HMhU2sr8?t=320", nome: "Malifoo", style: "Deephouse", nota: "" },
{ link: "https://youtu.be/AhIElZvdRjY?t=1597", nome: "Mandy", style: "HardStyle", nota: "" },
{ link: "https://youtu.be/GdMtN5Ifm-I?t=1163", nome: "Martin Garrix", style: "Progressive House/Big Room/Future Bass", nota: "" },
{ link: "https://youtu.be/OsZ9Ik0G_KE?t=2322", nome: "Mattn", style: "House/Big Room", nota: "" },
{ link: "https://youtu.be/rKmeiBDUWt8?t=1377", nome: "Nervo", style: "House/Psy/ElectroHouse/ProgressiveHouse", nota: "" },
{ link: "https://youtu.be/t-YvpDRBnJk?t=761", nome: "Netsky", style: "Drum And Bass", nota: "" },
{ link: "https://youtu.be/6GIA7hXhwNI?t=2260", nome: "Nightmre", style: "Dubstep", nota: "" },
{ link: "https://youtu.be/0fKRazDggq8?t=4370", nome: "Ownboss", style: "Deephouse", nota: "" },
{ link: "https://youtu.be/QKxGGpJNU1w?t=1695", nome: "Paul Kalbrenner", style: "Techno/Trance", nota: "" },
{ link: "https://youtu.be/iA1aGTood8c?t=934", nome: "Pontifexx", style: "DeepHouse/House/", nota: "" },
{ link: "https://youtu.be/MPt3z9ISwCs?t=2726", nome: "Pretty Pink", style: "Trance/Melodic Trance/AjunaDeeps", nota: "" },
{ link: "https://youtu.be/Nm-I3ey4Wf4?t=1348", nome: "Scorz ", style: "Trance/Progressive Trance", nota: "" },
{ link: "https://youtu.be/7DE0TAz5xbg?t=1480", nome: "Sebastian Ingrosso", style: "House/Dance/Progressive House", nota: "" },
{ link: "https://youtu.be/DtLJ-is6koo?t=835", nome: "Seveenn", style: "Slap House/ Melodic House", nota: "" },
{ link: "https://youtu.be/L3ZNg6zDAAo?t=2244", nome: "Steve Angelo", style: "EDM/Progressive House/Big Room/Future Bass", nota: "" },
{ link: "https://youtu.be/ErSIEdbe1DU?t=2812", nome: "Steve Aoki", style: "EDM/Progressive House/Big Room/Future Bass", nota: "" },
{ link: "https://youtu.be/iIQVr40Mnw4?t=787", nome: "Sub Zero Project", style: "Drum And Bass/Hardstyle", nota: "" },
{ link: "https://youtu.be/PVKDEzGeGyw?t=1036", nome: "Sunnery James & Ryan Marciano", style: "House/Progressive House/ ElectroHouse", nota: "" },
{ link: "https://youtu.be/7iP5zNyXtnw?t=2006", nome: "Tiesto", style: "Deephouse/Future House/Trance/Tropical House", nota: "" },
{ link: "https://youtu.be/r5jKJBhk3aY?t=194", nome: "Vinne", style: "Deephouse/Brazilian Bass", nota: "" },
{ link: "https://youtu.be/KgO7--NuCfs?t=1490", nome: "Yves V", style: "Indie/Progressive House/ElectroHouse", nota: "" },
{ link: "https://youtu.be/Lb0SitkYgbo?t=1935", nome: "Zac", style: "House/Electro/DeepHouse", nota: "" },

];

let indice = 0;
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
  if (indice >= videos.length) {
    alert('Você avaliou todos os vídeos!');
    return;
  }
  meuIframe.src = videos[indice].link;
  notaInput.value = '';
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
