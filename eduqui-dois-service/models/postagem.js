//importando o pacote
const mongoose = require ('mongoose');


const postagemSchema = mongoose.Schema ({
titulo: {type: String, required: true},
conteudo: {type: String, required: true}
});


module.exports = mongoose.model('Postagem', postagemSchema);