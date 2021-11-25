const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
app.use (bodyParser.json());
const mongoose = require ('mongoose');

const Postagem = require('./models/postagem')

mongoose.connect('mongodb+srv://leonardo:leonardo@cluster0.kiw4k.mongodb.net/postagem?retryWrites=true&w=majority').then(() => {
  console.log ("Conexão OK")
  }).catch(() => {
  console.log("Conexão NOK")
  });


const postagens = [
  {
  id: '1',
  titulo: 'Jose',
  conteudo: 'seno e cosseno'
  },
  {
  id: '2',
  titulo: 'Jaqueline',
  conteudo: 'adição, subtração'
  }
  ]

  app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,OPTIONS');
    next();
    });

    app.post ('/api/postagens', (req, res, next) => {
      const postagem = new Postagem({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
      })
      postagem.save().then (postagemInserida => {
        res.status(201).json({
        mensagem: 'Cliente inserido',
        id: postagemInserida._id
        })
        })
      });

  app.get('/api/postagens', (req, res, next) => {
    Postagem.find().then(documents => {
      console.log (documents)
      res.status(200).json({
      mensagem: "Tudo OK",
      postagens: documents
      });
    })
  });

module.exports = app;