class BotaoGerenciador {
    constructor(texto, x, y){
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.botao = createButton(this.texto);
        this.botao.mousePressed(() => this._alteraFase());
        this.botao.addClass('botao-tela-inicial');
    }

    draw() {
        this.botao.position(this.x, this.y);
        this.botao.center();
        // this.botao.center('horizontal'); Para definir uma localizaçao personalizada
    }

    _alteraFase() {
        this.botao.remove();
        faseAtual = 'jogo';
    }
}