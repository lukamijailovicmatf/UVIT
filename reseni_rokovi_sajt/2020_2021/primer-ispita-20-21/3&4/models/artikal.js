const mongoose = require('mongoose');

const shema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    naziv: {
        type: String,
        required: true
    },
    cena: {
        type: Number,
        required: true
    },
    broj_artikala: {
        type: Number,
        default: 0
    }
});

const Artikal = mongoose.model('Artikal', shema);

module.exports.Artikal = Artikal;

module.exports.dohvatiSveArtikle = async function() {
    const upit = { broj_artikala: { $gt: 0 } };

    const artikli = await Artikal.find(upit).exec();
    return artikli;
};

module.exports.imaLiDovoljnoArtikala = async function(id_artikla, broj_artikala) {
    const upit = { _id: id_artikla };
    
    const artikal = await Artikal.findOne(upit).exec();
    if (artikal === null || artikal.broj_artikala < broj_artikala) {
        return false;
    }
    return true;
};

module.exports.smanjiBrojArtikala = async function(id_artikla, broj_artikala) {
    const upitZaPronalazenje = { _id: id_artikla };
    const upitZaAzuriranje = { $inc: { broj_artikala: -broj_artikala } };
    
    await Artikal.updateOne(upitZaPronalazenje, upitZaAzuriranje);
};