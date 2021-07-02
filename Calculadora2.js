
var totalDias;
var investimento;
var totalDeVisualizacoes;
var cliques;
var compartilhamentos;

var clientes = [];

function verificarAnuncio(evento){
evento.preventDefault();

var cliente = {
  anuncio: evento.target.anuncio.value,
  cliente: evento.target.nomeCliente.value,
  dataInicio: new Date (evento.target.dataInicio.value),
  dataFim: new Date (evento.target.dataFim.value),
  valor: evento.target.valor.value,
}
clientes.push(cliente);

evento.target.anuncio.value = '';
evento.target.nomeCliente.value ='';
evento.target.dataInicio.value = '';
evento.target.dataFim.value = '';
evento.target.valor.value = '';

document.write(`Anúncio: ${cliente.anuncio}<br>`);
document.write(`Cliente: ${cliente.cliente}<br>`);
document.write(`Investimento diário de: R$${cliente.valor},00<br>`);
document.write(`Inicio em: ${cliente.dataInicio}<br>`);
document.write(`Encerra em: ${cliente.dataFim}<br>`);

totalDias = (cliente.dataInicio - cliente.dataFim) / 1000 / 60 / 60 / -24;
investimento = (totalDias * cliente.valor);
document.write(` Investimento total de: R$ ${investimento},00 <br>`);

totalDeVisualizacoes = (investimento * 70);
document.write(`Quantidade máxima de visualizações: ${totalDeVisualizacoes} <br>`)

cliques = (investimento * 3);
document.write(`A quantidade máxima de cliques será de: ${cliques} <br>`);

compartilhamentos = investimento * 1;
document.write(`A quantidade máxima de compartilhamentos será de: ${compartilhamentos}`);
}















