     let servicos= [{id: 1, nomeServico: 'Corte de cabelo Feminino, preco: 100.00'},
        {id: 2, nomeServico: 'Barba', preco: 20.00},
        {id:3, nomeServico:'Corte de cabelo Masculino', preco: 50.00},
];
let clientes = [{id: 1, nomeCliente: 'Adriane', cpf: '12334400066', email:'adriane@gmail.com',telefone:'42999007788'},
     {id: 2, nomeCliente: 'Rosana', cpf: '12345609888', email:'rosana@gmail.com', telefone: '42999664499'},

    ];
    let agendamentos = [{id:1, idCliente:1, idServico:1, data:'22/08/24', horario: '19:00'},
        {id:2, idCliente:1, idServico:1, data:'30/11/24',horario: '11:00'}
];



module.exports= {servicos, clientes, agendamentos};
