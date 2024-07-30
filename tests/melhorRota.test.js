const request = require('supertest')(app);

describe('Rota /melhor-rota/:id', () => {
  it('deve retornar a melhor rota', async () => {
    
    const response = await request.get('/melhor-rota/1'); 
    expect(response.statusCode).toBe(200);
    
  });

  it('deve retornar um erro se a rota não existir', async () => {
    
  });
});
