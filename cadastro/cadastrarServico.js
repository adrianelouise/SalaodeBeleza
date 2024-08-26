   const { servicos} = require('../data');

   function cadastrarServico(servico){
       servico.id = servicos.lenght + 1;
       servico.push(servico);
   };

   module.exports = cadastrarServico;