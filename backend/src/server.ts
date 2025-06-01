import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import docRoutes from './routes/doc.routes';
import { errorHandler } from './middlewares/error.middleware';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/docs', docRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);


});
