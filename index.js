import express from 'express';
import db from './config/database.js';
import productRoutes from './routes/index.js';
import cors from 'cors';

const app = express();
const port = 5000;

try {
    await db.authenticate();
    console.log('Database connected.');
} catch (error) {
    console.error('Database not connect.');
}

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

app.listen(port, () => console.log(`Apps run on http://localhost:${port}`));