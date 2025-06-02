// backend/src/server.ts
import express from 'express';
import cors from 'cors';
import 'dotenv/config';


import userRoutes from './routes/userRoutes';
import docRoutes from './routes/docRoutes';
import { errorHandler } from './middlewares/error.middleware';

// Importando o Prisma Client
const app = express();
const PORT = process.env.PORT || 3000;

// Configurações do servidor
app.use(cors());
app.use(express.json());


//Routes
app.use('/users', userRoutes);
app.use('/docs', docRoutes);

// Middleware de erro (sempre por último)
app.use(errorHandler);


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);

// });
