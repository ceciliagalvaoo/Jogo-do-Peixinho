// configurações do jogo
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }

};

var game = new Phaser.Game(config);

var peixinho;


//carregar os elementos do jogo
function preload(){
    //carregar o fundo
    this.load.image('mar', 'assets/bg_azul-claro.png');
    // carregar a logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    // carregar alga marinha (tarefa adicional 3)
    this.load.image('alga', 'assets/alga-marinha.png');
    // carregar o peixe
    this.load.image('peixe', 'assets/peixes/peixinho_azul.png');
}

// adicionar e configurar os elementos do jogo
function create(){
    // adicionar o fundo na tela
    this.add.image(400,300,'mar');
    // adicionar a logo na tela
    this.add.image(400,525,'logo').setScale(0.5);
    // adicionar algas marinhas na tela (tarefa adicional 3)
    this.add.image(100,510,'alga').setScale(0.4);
    this.add.image(700,510,'alga').setScale(0.4);
    // adicionar o peixe na tela, por meio de uma variável
    peixinho = this.add.image(400,300,'peixe');
    // transformando a variável
    peixinho.setFlip(true,false);
    
    
    
}

// atualização em tempo real do jogo
function update(){
    // adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}