  const {agendamentos } = require('../data');

  function removerAgendamento(delAgendamento){
    let index = agendamentos.findIndex(agendamento => agendamento.id ===delAgendamento);
    if (index !== -1){
        agendamentos.splice(index, 1);
    }else if (agendamentos === 0){
        console.log('Nenhum agendamento encontrado');
    
    }
  }

  module.exports =removerAgendamento;