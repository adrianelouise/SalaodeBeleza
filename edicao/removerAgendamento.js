  const {agendamentos } = require('../data');

  function removerAgendamento(delAgendamento){
    let index = agendamentos.findIndex(agendamento => agendamento.id ===delAgendamento);
    if (index !== -1){
        agendamentos.splice(index, 1);
    }
  }

  module.exports =removerAgendamento;