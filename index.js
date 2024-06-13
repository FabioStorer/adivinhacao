let random = Math.floor(Math.random() * 200 + 1);
let numero = ''
let tentativas = 3
let i = 2

console.log('Olá, vamos brincar? Vou gerar um número aleatório entre 1 e 100, e você terá 3 chances para adivinhá-lo.');
console.log('Digite agora um número entre 1 e 100:');
console.log('Ou Digite "Sair" para fechar o jogo da adivinhação.')
    process.stdin.on('data', function (data){
    numero = data.toString().trim();
    if(data.toString().trim() == 'Sair'){
        process.exit();
    }
    
    // Aqui eu coloquei esse console.log(random) para ver o número aleatório durante a construção do jogo.
    console.log(random);
    if (numero == random){
        console.log('Não é possível, você acertou. Parabéns! :D');
        process.exit();
    } else {
        tentativas--
        if (tentativas == 0){
            console.log('Suas tentativas acabaram. Agora vou escolher um número diferente. Vamos lá?');
            console.log('O número aleatório era ' + random + '!');
            console.log('Se quiser parar de jogar, basta digitar "Sair".');
            random = Math.floor(Math.random() * 200 + 1);
            tentativas = 3;
            i = 2;
        } else {
        console.log('Número errado! Você tem mais ' + i + ' tentativas.');
        i--
        if (Math.abs(numero - random) < 10){
            console.log('Você está perto!');
        } else {
            console.log('Você está bem longe.');
        }
        }
    }
})