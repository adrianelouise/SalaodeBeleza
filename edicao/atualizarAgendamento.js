const { agendamentos} = require('../data');

function atualizarAgendamento(id, novoAgendamento){
    let index = agendamentos.findIndex(agendamento => agendamento.id ===id);
    if (index !== -1){
        agendamentos[index] = {id: id, ...novoAgendamento}

    }
}

module.exports = atualizarAgendamento;