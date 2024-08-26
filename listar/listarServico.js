const { servicos } = require('../data');

function listarServicos(){
    if (servicos.length === 0){
        console.log('Nenhum serviço encontrado.');
    } else {
        servicos.forEach(servico => {
            console.log(`
            ID Serviço: ${servico.id}
            Tipo de serviço: ${servico.nomeServico}
            Preço: ${servico.preco}`);
        })
    }
}

module.exports = listarServicos;