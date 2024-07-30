const mongoose = require('mongoose');

const rotaSchema = new mongoose.Schema({
    nome: String,
    pontos: [{
        latitude: Number,
        longitude: Number
    }],
    veiculo: String,
    motorista: { type: mongoose.Schema.Types.ObjectId, ref: 'Motorista' }
});

module.exports = mongoose.model('Rota', rotaSchema);
