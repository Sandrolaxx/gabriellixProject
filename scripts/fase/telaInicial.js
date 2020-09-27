class TelaInicial {
    constructor() {

    }

    draw() {
        this._imagemFundo();
        this._texto();
        this._botao();
    }
    
    _imagemFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    } 

    _texto() {
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        textSize(60);
        text('As aventuras de', width / 2,  height / 10 * 2);
        textSize(150);
        text('Gabrielix', width / 2, height / 6 * 2);
    }

    _botao() {
        //botaoGerenciador.y = height / 7 * 4;Caso queira personalizar a localização do botão
        botaoGerenciador.draw();
    }
}