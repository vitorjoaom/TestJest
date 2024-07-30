import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function dbconect(){ 
    try {
        await mongoose.connect("mongodb+srv://admin:admin@cluster0.enupdmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") 
            .then(() => console.log('Connected to database'))
            .catch((error) => console.log('Erro na autenticação',error))    
        
        
    }catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
}

export default dbconect;