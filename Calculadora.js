var numero = parseFloat(prompt("Digite o valor investido: "));
// Quantidade de visuzliações = 70 a cada R$ 1,00.
// Para chegar ao valor de 70 visualizações foi considerado que se R$ 1,00 
// investido gera 30 visualizações, então 12% do público que visualiza clica no anúncio.

// De 30 pessoas que vizualizam, 3 clicam no anuncio, e uma delas compartilha, então 15% das pessoas 
// que clicam no anúncio efetuam o compartilhamento, gerando assim mais 40 visualizações.

// Sendo assim, para cada R$ 1,00 investido, ocorrem 70 visualizações. 
// 30 iniciais + 40 devido ao compartilhamento efetuado por esta única pessoa.

var multiplicacao = numero * 70;
var mensagem;

if (numero >= 0) {
  mensagem = `O total será de ${multiplicacao} visualizações!`;
} else {
  mensagem = `Número inválido`;
}

alert(mensagem);
