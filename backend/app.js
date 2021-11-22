require('dotenv').config()
const express = require ('express');
const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@eduqui.${process.env.DB_ADDRESS}.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`)
.then(() =>  console.log ("CONEXAO OK"))
.catch (e => console.log ("CONEXAO NOK: " + e))

app.use('/api/forum', );

module.exports = app;
