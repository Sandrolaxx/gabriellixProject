class Animacao {
    constructor(imagem, x, variacaoY, valorSprite, largura, altura, larguraSprite, alturaSprite, tamanhoSprite) {
        this.imagem = imagem;
        this.largura = largura;
        this.altura = altura;
        this.x = x;
        this.variacaoY = variacaoY;
        this.y = height - this.altura - this.variacaoY;
        this.valorSprite = valorSprite;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;
        this.tamanhoSprite = tamanhoSprite;

        this.frameAtual = 0;
    }

    exibe(){
        let pontoXMatriz = this.frameAtual % this.valorSprite * this.larguraSprite;
        let pontoYMatriz = Math.floor(this.frameAtual / this.valorSprite) * this.alturaSprite;

        image(this.imagem, this.x, this.y, this.largura, 
              this.altura, pontoXMatriz, pontoYMatriz, this.larguraSprite, this.alturaSprite);
              this.anima();
    }

    anima(){
        this.frameAtual++;

        if(this.frameAtual >= this.tamanhoSprite -1){
            this.frameAtual = 0;
        }
    }
}