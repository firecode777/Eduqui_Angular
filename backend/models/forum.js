const mongoose = require ('mongoose');


const forumSchema = mongoose.Schema ({
nome: {type: String, required: true},
descricao:{type: String, required: true}
});


module.exports = mongoose.model('Forum', forumSchema);
