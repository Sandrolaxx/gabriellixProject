class Cenario {
    constructor(imagem, velociade) {
      this.imagem = imagem;
      this.velociade = velociade;
      this.x1 = 0;
      this.x2 = width;
    }
  
    exibe() {
      image(this.imagem, this.x1, 0, width,height);
      image(this.imagem, this.x2, 0, width, height);
    }

    move() {
      this.x1 = this.x1 - this.velociade;
      this.x2 = this.x2 - this.velociade;
  
      if (this.x1 < -width){                             
        this.x1 = width;    
      }
  
      if (this.x2 < -width){
        this.x2 = width;
      }
    }
  }