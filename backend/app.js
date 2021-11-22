const express = require ('express');
const app = express();

mongoose.connect('mongodb+srv://eduqui:eduqui123@eduqui.s90nm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() =>  console.log ("CONEXAO OK"))
.catch (e => console.log ("CONEXAO NOK: " + e))

app.use('/api/forum', (req, res, next) => {
  res.status(200).json({
      mensagem:"Tudo OK",
      forum: forum
    }
  );
});

module.exports = app;
