function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  //somJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  fases = {//Quando temos a chave como mesmo nome do valor podemos contruir o objeto assim.
    jogo,
    telaInicial
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(keyCode);
}

function draw() {
  fases[faseAtual].draw();
}                                                                                        