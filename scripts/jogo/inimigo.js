class Inimigo extends Animacao {
    constructor(imagem, x, variacaoY, valorSprite, largura, altura, larguraSprite, alturaSprite,tamanhoSprite, velocidade) {
        super(imagem, x, variacaoY, valorSprite, largura, altura, larguraSprite, alturaSprite,tamanhoSprite, velocidade)
    
        this.velocidade = velocidade;
        this.x = width;
    }

    move() {
        this.x = this.x - this.velocidade;
    }

    reaparecer() {
       this.x = width; 
    }
}