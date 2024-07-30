const express = require('express');
const router = express.Router();
const { Cliente, clientes } = require('./models/cliente');

let pedidos = [];
let rotas = [];

router.get('/clientes', (req, res) => {
    res.json(clientes);
});

router.post('/clientes', (req, res) => {
    const { nome } = req.body;
    const cliente = new Cliente(clientes.length + 1, nome);
    clientes.push(cliente);
    res.status(201).json(cliente);
});

router.get('/pedidos', (req, res) => {
    res.json(pedidos);
});

router.post('/pedidos', (req, res) => {
    const { endereco, latitude, longitude, produto, quantidade } = req.body;
    const pedido = { id: pedidos.length + 1, endereco, latitude, longitude, produto, quantidade };
    pedidos.push(pedido);
    res.status(201).json(pedido);
});

router.get('/rotas', (req, res) => {
    res.json(rotas);
});

router.post('/rotas', (req, res) => {
    const { latitude, longitude } = req.body;
    const rota = { id: rotas.length + 1, latitude, longitude };
    rotas.push(rota);
    res.status(201).json(rota);
});

router.get('/melhor-rota/:id', (req, res) => {
    const rotaId = parseInt(req.params.id);
    const rota = rotas.find(r => r.id === rotaId);

    if (!rota) {
        return res.status(404).json({ error: 'Rota não encontrada' });
    }

    const melhorRota = pedidos.map(pedido => ({
        pedidoId: pedido.id,
        distancia: Math.sqrt(
            Math.pow(rota.latitude - pedido.latitude, 2) +
            Math.pow(rota.longitude - pedido.longitude, 2)
        )
    })).sort((a, b) => a.distancia - b.distancia);

    res.json(melhorRota);
});

module.exports = router;
