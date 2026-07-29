const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    status: {
        type: String,
        default: 'active'
    },
    savings: Number,
    loan: Number
}, {collection: 'users'})

const model = mongoose.model('User', schema);

async function nadjiIliKreirajKorisnika(firstName, lastName, email, password) {
    let korisnik = await model.findOne({email: email}).exec();
    if (!korisnik) {
        korisnik = new model();
        korisnik._id = new mongoose.Types.ObjectId();
        korisnik.firstName = firstName;
        korisnik.lastName = lastName;
        korisnik.email = email;
        korisnik.password = password;
        korisnik.status = 'active';
        korisnik.savings = 0;
        korisnik.loan = 0;
        await korisnik.save();
    }
    return korisnik;
}

async function dohvatiAktivneSortirano() {
    return await model.find({status: 'active'}).sort({savings: -1}).exec();
}

async function azurirajTransakciju(email, amount, type) {
    const iznos = parseFloat(amount);
    const promena = type === 'stednja' ? {$inc: {savings: iznos}} : {$inc: {loan: iznos}};
    return await model.findOneAndUpdate({email: email}, promena, {new: true}).exec();
}

module.exports = {
    nadjiIliKreirajKorisnika,
    azurirajTransakciju,
    dohvatiAktivneSortirano
};