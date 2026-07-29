const mongoose = require('mongoose');

const shema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ime:{
        type: String,
        required: true
    },
    dobro: Boolean,
    delo: String,
    poeni: Number,
    pismo: String,
    poslato: Boolean
},{collection:'dela'})

const model = mongoose.model('Dela',shema)
//----------------------------------------

// 3. zadatak pod b
async function dohvatiDela() {
    let dela = await model.find().sort({poeni: -1}).exec()
    return dela
}

// 3. zadatak pod c
async function dohvatiDelaPoImenu(ime) {
    let dela = await model.find({ime: ime}).sort({poeni: 1}).exec()
    return dela[0]
}

// 4. zadatak pod a
async function sacuvajDelo(dete, delo, poeni) {
    const red = new model()
    red._id = new mongoose.Types.ObjectId()
    red.ime = dete 
    red.delo = delo 
    red.poeni = poeni 
    red.dobro = poeni < 0 ? false : true
    await red.save()
}

module.exports = {
    dohvatiDela,
    dohvatiDelaPoImenu,
    sacuvajDelo
};