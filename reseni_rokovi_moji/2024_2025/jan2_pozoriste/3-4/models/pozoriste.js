const mongoose = require('mongoose');

const predstavaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    naziv: String,
    autor: String,
    datum: Number,
    dan: String,
    vreme: String,
    scena: String,
    rezija: String,
    glumci: [String],
    cenaParter: Number,
    cenaBalkon: Number,
    slobodnaMesta: Number,
    nazivSlike: String
}, {collection: 'repertoar'})

const model = mongoose.model('Predstava', predstavaSchema);

async function prikaziRepertoar() {
    return await model.find().exec();
}

async function prikaziPredstavu(id) {
    return await model.findById(id).exec();
}

async function kupiUlaznice(id, lokacija, broj) {
    return await model.findByIdAndUpdate(id, {$inc: {slobodnaMesta: -broj}});
}

module.exports = {
    prikaziRepertoar,
    prikaziPredstavu,
    kupiUlaznice

};