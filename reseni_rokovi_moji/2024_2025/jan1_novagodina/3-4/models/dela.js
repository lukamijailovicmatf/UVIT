const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ime: {
        type: String,
        required: true
    },
    dobro: Boolean,
    delo: String,
    poeni: Number,
    pismo: String,
    poslato: Boolean
}, {collection: 'dela'})

const model = mongoose.model('Dela', schema);

async function dohvatiDela() {
    return await model.find().sort({poeni: -1}).exec();
}

async function dohvatiDelaPoImenu(ime) {
    let dela = await model.find({ime: ime}).sort({poeni: 1}).exec();
    return dela[0];
}

async function sacuvajDelo(dete, delo, poeni) {
    let red = new model();
    red._id = new mongoose.Types.ObjectId();
    red.ime = dete;
    red.delo = delo;
    red.poeni = poeni;
    red.dobro = poeni < 0 ? false : true;
    await red.save();
}

module.exports = {
    dohvatiDela,
    dohvatiDelaPoImenu,
    sacuvajDelo
};