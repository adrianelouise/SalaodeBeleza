  const { servicos } = require('../data');

  function removerServico(delServico){
    let index = servicos.findIndex(servico => servico.id ===delServico);
   if (index !== -1){
    servicos.splice(index, 1);
   } 
}  

module.exports = removerServico;