class Personagem extends Animacao {
    constructor(imagem, x, variacaoY, valorSprite, largura, altura, larguraSprite, alturaSprite, tamanhoSprite) {
        super(imagem, x,variacaoY, valorSprite, largura, altura, larguraSprite, alturaSprite, tamanhoSprite)
    
        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura -this.variacaoY;
        this.y = this.yInicial;

        this.velocidadePulo = 0;
        this.gravidade = 3;
        this.alturaPulo = -30;
        this.pulos = 0;
        this.invencivel = false;
    }

    pula() {
        if (this.pulos < 2) {
            this.velocidadePulo = this.alturaPulo;
            this.pulos++;
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadePulo;
        this.velocidadePulo = this.velocidadePulo + this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
            this.pulos = 0;
        }
    }
    
    tornarInvencivel() {
        this.invencivel = true;
        setTimeout(() => {
            this.invencivel = false;
        },1000)
    }

    estaColidindo(inimigo) {
        if(this.invencivel){
            return false;
        }

        const precisao = .6;

        //noFill()//Com isso conseguimos ver a hitbox dos elementos!!
        //rect(this.x, this.y, this.largura, this.altura)//Com isso conseguimos ver a hitbox dos elementos!!
        //rect(inimigo.x, inimigo.y,inimigo.largura,inimigo.altura )//Com isso conseguimos ver a hitbox dos elementos!!
        const colisao = collideRectRect(
            this.x,
            this.y,
            this.largura * precisao,
            this.altura * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * precisao
        )

        return colisao;
    }
}  