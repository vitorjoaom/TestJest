import app from './src/app.js';
import dotenv from 'dotenv';
import dbconect from './src/config/db.js';

dotenv.config();

const port = process.env.PORT ;

dbconect().then(() => console.log("Banco conectado!")).catch((error) => console.log(error));
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});