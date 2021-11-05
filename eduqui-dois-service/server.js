'use strict'
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const propriedades = require('./config/propriedades')
const DB = require('./config/db')
DB()


const app = express()
const router = express.Router();

app.use('/api', router);
authRoutes(router);

router.get('/', (req, res) => {
    res.send('Hello from home');
})

app.listen(propriedades.PORT, ()=> console.log('Server rodando na porta ${propriedades.PORT}'))