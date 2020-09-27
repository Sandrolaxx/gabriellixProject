class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    exibe() {
        textFont(fonteTelaInicial);
        textSize(75);
        fill('#fff');
        text(parseInt(this.pontos), width - 665, 135);
    }

    adicionaPonto() { 
        this.pontos = this.pontos + 0.1;
    }
} 