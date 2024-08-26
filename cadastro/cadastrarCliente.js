  const { clientes} = require('../data');

  function cadastrarCliente(cliente){
    cliente.id = clientes.length + 1;
    clientes.push(cliente);
  }
  module.exports = cadastrarCliente;