const express = require("express");
const router = express.Router();
const Cliente = require ('../models/cliente');


//GET localhost:3000/api/clientes
router.get('', (req, res, next) => {
  // res.status(200).json({
  //   mensagem: "DEU CERTOOO",
  //   clientes: clientes});
  Cliente.find().then(documents => {
    console.log(documents)
    res.status(200).json({
      mensagem: "Tudo certo",
      clientes: documents
    });
  });
});

//POST localhost:3000/api/clientes
router.post('', (req, res) => {
  const cliente = new Cliente({
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email
  })
  cliente.save()
  .then(clienteInserido => {
    console.log(cliente)
    res.status(201).json({mensagem: "Cliente inserido", id: clienteInserido._id})
  })
})

//DELETE localhost:3000/api/clientes/identificador do cliente a ser removido: na execução -> o parâmetro
//DELETE localhost:3000/api/clientes/1234546
router.delete('/:id', (req, res, next) => {
  Cliente.deleteOne({_id: req.params.id})
  .then((resultado) => {
    console.log(resultado)
    res.status(200).end();
  })
})

router.put('/:id', (req, res, next) => {
  const cliente = new Cliente({
    _id: req.params.id,
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email
  });
  Cliente.updateOne({_id: req.params.id}, cliente)
  .then((resultado) => {
    console.log(resultado)
  });
  res.status(200).json({mensagem: 'Atualização realizada com sucesso'})
})

//fazer a busca para um único cliente pelo seu id
router.get('/:id', (req, res, next) => {
  Cliente.findById(req.params.id).then(cli => {
    if (cli) {
      res.status(200).json(cli);
    }
    else {
      res.status(404).json({mensagem: "Cliente não encontrado."});
    }
  })
})

module.exports = router;
