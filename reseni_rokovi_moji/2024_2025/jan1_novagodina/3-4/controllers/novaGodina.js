const modelDela = require('../models/dela');

async function prikaziPocetnuStranicu(req, res, next) {
    try {
        let dela = await modelDela.dohvatiDela();
        res.render('index.ejs', {dela});
    } catch (err) {
        next(err);
    }
}

async function prikaziDete(req, res, next) {
    try {
        let data = req.query;
        let dela = await modelDela.dohvatiDelaPoImenu(data.ime);
        res.render('kid.ejs', {delo: dela});
    } catch (err) {
        next(err);
    }
}

async function unesiDelo(req, res, next) {
    try {
        let data = req.body;
        let ime = data.dete;
        let delo = data.delo;
        let poeni = data.poeni;
        await modelDela.sacuvajDelo(ime, delo, poeni);
        res.redirect('/pocetna');
    } catch (err) {
        next(err);
    }
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziDete,
    unesiDelo
};