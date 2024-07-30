const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' }, // Referência ao cliente
    itens: [{
        produto: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto' },
        quantidade: Number,
        valorUnitario: Number
    }],
    dataPedido: { type: Date, default: Date.now },
    status: { type: String, enum: ['pendente', 'emPreparo', 'entregue', 'cancelado'], default: 'pendente' },
    enderecoEntrega: {
        rua: String,
        numero: Number,
        bairro: String,
        cidade: String,
        estado: String,
        cep: String
    },
    rota: { type: mongoose.Schema.Types.ObjectId, ref: 'Rota' } // Referência à rota de entrega
});

module.exports = mongoose.model('Pedido', pedidoSchema);
