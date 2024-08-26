  const { agendamentos, servicos } = require('../data');

  function listarAgendamentos(idCliente){
    const agendamentosCliente = agendamentos.filter( a => a.idCliente === idCliente);

    if (agendamentosCliente.length === 0){
        console.log(`Nennhum agendamento encontrado para o cliente com ID ${idCliente}.`);
    return;
    }
    console.log(`Agendamentos para cliente ID ${idCliente}:`);
    agendamentosCliente.forEach(agendamento => {
        console.log(`
        ID: ${agendamento.idServico},
        Serviço ID: ${agendamento.idServico},
        Data: ${agendamento.data},
        Horario : ${agendamento.horario}`);
        
    });
  }

  module.exports = listarAgendamentos;