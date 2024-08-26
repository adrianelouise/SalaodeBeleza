const { agendamentos } = require('../data');

function listarTodosAgendamentos(){
    if (agendamentos.length === 0){
        console.log('Nenhum agendamento encontrado.');
    } else {
        agendamentos.forEach(agendamento => {
            console.log(`
            ID Agendamento: ${agendamento.id},
            ID Serviço: ${agendamento.idServico},
            ID Cliente: ${agendamento.idCliente},
            Data: ${agendamento.data},
            Horário: ${agendamento.horario}`);
        })
    }
}

module.exports = listarTodosAgendamentos;