  const { clientes } = require('../data');

  function listarClientes(){
    if(clientes.length === 0){
    throw new Error('Nenhum cliente encontrado');
  } else {
    clientes.forEach(cliente =>{
        console.log(`ID Cliente: ${cliente.id}
         Nome : ${cliente.nomeCliente},
         CPF: ${cliente.cpf},
         Email: ${cliente.email}
         Telefone:${cliente.telefone}`);

    })
  }
}

module.exports = listarClientes;