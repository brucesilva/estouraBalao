// pega o tamanho da tela, para posicionar os balões
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 10;
 
// essa função é para pegar o tamanho da tela
function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth; 
}
// estou chamado a função, para atualizar a altura e largura da tela
ajustaTamanhoPalcoJogo();
 

// console.log(posicaoX); 
// criar posição randomica na tela para add o balão
function positionRandom(){ 
    // verificando se o mosquito existe, se existe remove
    if(document.getElementById('ballon')){
        document.getElementById('ballon').remove();
        
        // aqui estou pegando o id da imagem do coração e substituindo por coração vazio, quando a pessoa não 
        // clicar no balão para remover
        // estou colocando a variavel vidas para ser dinamico, e toda vez que entrar aqui ela incrementar mais 1
        // assim conseguimos passar por todas as vidas
        if(vidas >3){ 
            // função para parar o relogio
            clearInterval(createBallon);
            alert("Game Over");
            window.location.href = 'gameOver.html';
        }else{
            document.getElementById('v' + vidas).src='assets/img/coracao_vazio.png';
        }  
        vidas++;
    }

// gerando posição randomica na vertical
let posicaoX = Math.floor(Math.random() * largura) -70;
let posicaoY = Math.floor(Math.random() * altura) -100 ;

// caso a posiçao for 0 Ele recebe zero, sem tirar os 90px
posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;  

console.log(posicaoX); 
console.log(posicaoY); 

// criar elementos no html
let balloon = document.createElement('img'); 
balloon.src = randomBalloon(); 
// console.log(caminhoImg);
balloon.id = 'ballon';
balloon.className = heightRandom();


balloon.style.position = 'absolute';
balloon.style.left = posicaoX + 'px';
balloon.style.top = posicaoY + 'px';
balloon.style.position = 'absolute';
balloon.style.display = 'flex';

 // aqui é para qdo clicar no mosquito remover
 balloon.onclick = function(){
    console.log(this.remove());
  }

// aqui estou colocando ele para aparecer na página
document.body.appendChild(balloon); 
 
}

// função para gerar o mosquito aleatorio na tela
// positionRandom(); 
let createBallon = setInterval(function(){
    positionRandom()
}, 1110);

 
// aqui estou fazendo o tempo do cronometro dos balões
let cronometro = setInterval(function(){ 

    // qdo a pessoa ganhar eu preciso parar a função que criar os balões na tela
    if(tempo <0){
        clearInterval(cronometro);
        clearInterval(createBallon);
        alert("Congratulation you Winner");
        window.location.href = 'winner.html';
        
    }else{
        document.getElementById('relogio').innerHTML = tempo ;
    }  
    tempo -= 1;
}, 1000);


 

 
// gerando tamanho aleatorio do balão
function heightRandom(){
    // aqui vou gerar 1 número de 0 a 3
    let classe = Math.floor(Math.random() * 3); 
    console.log("O valor da classe é " +classe);

    // vou pegar esse número, e de acordo com o valor eu vou atribuir uma classe pra ele
    switch(classe){
        case 0:
            return 'ballon1';

        case 1:
            return 'ballon2';

        case 2: 
            return 'ballon3';
    }

}
 
// gerando balões de cores aleatorias
function randomBalloon(){
    // aqui vou gerar 1 número de 0 a 3
    let imgBallon = Math.floor(Math.random() * 3); 
    // console.log("O valor da classe é " +classe);

    // vou pegar esse número, e de acordo com o valor eu vou atribuir uma classe pra ele
    switch(imgBallon){
        case 0:
            return 'assets/img/balao1.png';

        case 1:
            return 'assets/img/balao2.png';

        case 2: 
            return 'assets/img/yellowBalloon.png';
    }

}

