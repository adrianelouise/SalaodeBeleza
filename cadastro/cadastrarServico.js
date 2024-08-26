   const { servicos} = require('../data');

   function cadastrarServico(servico){
       servico.id = servicos.length + 1;
       servicos.push(servico);
   };

   module.exports = cadastrarServico;