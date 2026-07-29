const mongoose = require('mongoose');

const shema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ime_prezime: {
        type: String,
        required: true  
    },
    broj_artikala: {
        type: Number,
        required: true  
    },
    datum_nar: {
        type: Date,
        required: true  
    },
    datum_isp: {
        type: Date,
        required: true  
    },
    id_artikla: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artikal',
        required: true
    }
});

const Porudzbina = mongoose.model('Porudzbina', shema);

module.exports.Porudzbina = Porudzbina;

module.exports.kreirajPorudzbinu = async function (id_artikla, ime_prezime, broj_artikala, datum_isporuke, datum_narudzbine) {
    const godina = Number.parseInt(datum_isporuke.substr(0, 4));
    const mesec = Number.parseInt(datum_isporuke.substr(5, 2));
    const dan = Number.parseInt(datum_isporuke.substr(8, 2));

    const novaPorudzbina = new Porudzbina({
        _id: new mongoose.Types.ObjectId(),
        id_artikla: id_artikla,
        ime_prezime: ime_prezime,
        broj_artikala: broj_artikala,
        datum_isp: new Date(godina, mesec - 1, dan),
        datum_nar: datum_narudzbine
    });

    await novaPorudzbina.save();
};