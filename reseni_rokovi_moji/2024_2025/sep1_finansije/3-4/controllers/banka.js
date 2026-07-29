const userModel = require("../models/banka");

async function showLogin(req, res, next) {
    try {
        res.render('index.ejs')
    } catch (err) {
        next(err);
    }
}

async function loginUser(req, res, next) {
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        const korisnik = await userModel.nadjiIliKreirajKorisnika(firstName, lastName, email, password);
        const aktivni = await userModel.dohvatiAktivneSortirano();
        res.render('finance.ejs', {korisnik, aktivni});
    } catch (err) {
        next(err);
    }
}


async function azurirajTabelu(req, res, next) {
    try {
        const email = req.body.email;
        const iznos = req.body.iznos;
        const tip = req.body.tip;
        const azuriraniKorisnik = await userModel.azurirajTransakciju(email, iznos, tip);
        const aktivni = await userModel.dohvatiAktivneSortirano();
        res.render('finance.ejs', {korisnik: azuriraniKorisnik, aktivni});
    } catch (err) {
        next(err);
    }
}

module.exports = { 
    showLogin, 
    loginUser, 
    azurirajTabelu 
};
