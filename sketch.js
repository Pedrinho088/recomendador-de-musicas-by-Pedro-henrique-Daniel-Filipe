let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de musicas by: Pedro Henrique e Daniel Filipe");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de TrapGospel?");
  campoAventura = createCheckbox("Gosta de Gospel?");
}

function draw() {
  background("#000000");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(200, 0, 0))
  textAlign(CENTER, CENTER);
  textSize(40);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Hino da Harpa: Porque ele vive";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia) {
          return "Victin";          
        } else{
         return "MARANATA";
        }
      } else {
        if (gostaDeFantasia) {
          return "Biel sales";
        } else {
          return "Preto no Branco";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "2 METRO ";
    } else {
      return "Thalles Roberto ";
    }
  }
}
