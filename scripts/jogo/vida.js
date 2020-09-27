class Vida {
    constructor(totalVida, vidaInicial) {
        this.totalVida = totalVida;
        this.vidaInicial = vidaInicial;
        this.vidas = this.vidaInicial;

        this.largura = 50;
        this.altura = 50;
        this.xInicial = 20;
        this.y = 20;
    }

    draw() {
        for (let i = 0; i < this.vidas; i++) {
            const margem = i * 35;
            const posicao = this.xInicial * (i + 1);
            image(imagemVida, margem + posicao, this.y, this.largura, this.altura);
        }
    }
    ganharVida() {
        if (this.vidas <= this.totalVida) {
            this.vidas++;
        }
    }

    perderVida() {
        this.vidas--;
    }
}