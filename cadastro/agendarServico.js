   const { agendamentos} = require('../data');
 
   function agendarServico(agendamento){
    agendamento.id = agendamentos.length +1;
    agendamentos.push(agendamento);
   };

  module.exports = agendarServico;
