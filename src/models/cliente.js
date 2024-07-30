class Cliente {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

let clientes = [];

module.exports = { Cliente, clientes };
