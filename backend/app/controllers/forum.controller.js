const db = require("../models");
const Forum = db.forums;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
   if (!req.body.title) {
    res.status(400).send({
      message: "O conteúdo não pode estar vazio"
    });
    return;
  }

  const forum = {
    title: req.body.title,
    description: req.body.description
  };

  Forum.create(forum)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro ao criar a sua dúvida."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro ao pegar todas as perguntas."
      });
    });
};
