import express from 'express';

import logger from './middlewares/logger.js';
import authRoutes from './routes/auth.routes.js';

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware para entender JSON
app.use(express.json());

// Middleware de loggeo
app.use(logger);

// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Hola Mundo Este es mi primor servidor con express');
});

// Cargar rutas
app.use('/auth', authRoutes);



// Escuchar en el puerto 80
app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto: ' + PORT);
})
