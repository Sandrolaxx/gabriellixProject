function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemVida = loadImage('imagens/assets/coracao.png')
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    cartucho = loadJSON('cartuchos/fase1.json');
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf')
    somJogo = loadSound('sons/trilha_jogo.mp3');
    somPulo = loadSound('sons/jump_song.mp3');
    somGameOver = loadSound('sons/game_over_song.mp3');
  }