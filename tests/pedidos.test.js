const request = require('supertest')(app); 

describe('Rota /pedidos', () => {
  it('deve retornar uma lista de pedidos', async () => {
    const response = await request.get('/pedidos');
    expect(response.statusCode).toBe(200);
   
  });

  it('deve criar um novo pedido', async () => {
    const novoPedido = {
      endereco: { latitude: -23.5505, longitude: -46.6333 },
      produto: 'Pizza',
      quantidade: 2
    };

    const response = await request.post('/pedidos').send(novoPedido);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('_id'); 
  });
});
