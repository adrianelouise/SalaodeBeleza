   const { agendamentos} = require('../data');
 
   function agendarServico(agendamento){
    agendamento.id = agendamentos.length +1;
    agendamento.push(agendamento);
   };

  module.exports = agendarServico;
