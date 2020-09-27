class Jogo {
    constructor() {
        this.indice = 0;

        this.mapa = cartucho.mapa;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        vida = new Vida(cartucho.configuracoes.vidaMax, cartucho.configuracoes.vidaInicial);
        pontuacao = new Pontuacao();
        personagem = new Personagem(imagemPersonagem, 0, 30, 4, 110, 135, 220, 270,16);
        const inimigo = new Inimigo(imagemInimigo, width - 52, 30, 4, 52, 56, 104, 104, 28, 10);
        const inimigoGrande = new Inimigo(imagemInimigoGrande, width - 53, 0, 4, 200, 200, 400, 400, 24, 10);
        const inimigoVoador = new Inimigo(imagemInimigoVoador, width - 52, 250, 3, 100, 75, 200, 150, 16, 10);

        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);

        somJogo.loop();
    }

    keyPressed(keyCode) {
        if (keyCode === 32 || keyCode === 38) {
            personagem.pula();
            somPulo.play();
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();

        vida.draw();
        pontuacao.exibe();
        pontuacao.adicionaPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        const linhaAtual = this.mapa[this.indice]
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < - inimigo.largura;//Aqui ele já está trazendo o true ou false, ai não precisa validar no if
        inimigo.velocidade = linhaAtual.velocidade;  

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.indice++;
            inimigo.reaparecer();

            if (this.inimigoAtual > this.mapa.length - 1) {
                this.indice = 0;
            }

            if (this.mapa.length - 1 < this.indice) {
                    textFont(fonteTelaInicial);
                    fill('#FFBB00');
                    textAlign(CENTER);
                    textSize(100);
                    text('Congrats you zered the jame!', width / 2, height / 6 * 2);
                    somJogo.stop();
                    noLoop();
            }
        }
        
        if (personagem.estaColidindo(inimigo)) {
            vida.perderVida();
            personagem.tornarInvencivel();
            if (vida.vidas === 0) {
                setInterval(()=>{
                    textFont(fonteTelaInicial);
                    textAlign(CENTER);
                    fill('#F54B43');
                    textSize(120);
                    text('Game Over!', width / 2, height / 6 * 2);

                    noLoop();
                },100);
                somJogo.stop();
                somGameOver.play();                
            }
        }
    }
}
