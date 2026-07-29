const modelDela = require('../models/dela');

// 3. zadatak pod b
async function prikaziPocetnuStranicu(req, res, next) {
    try {
        let dela = await modelDela.dohvatiDela()
        res.render('index.ejs', {dela})
    } catch (err) {
        next(err);
    }
}

// 3. zadatak pod c
async function prikaziDete(req, res, next) {
    try {
        const data = req.query
        let dela = await modelDela.dohvatiDelaPoImenu(data.ime)
        res.render('kid.ejs', {delo: dela})     
    } catch (err) {
        next(err);
    }
}

// 4. zadatak pod a
async function unesiDelo(req, res, next) {
    let data = req.body
    let ime = data.dete 
    let delo = data.delo 
    let poeni = data.poeni 
    await modelDela.sacuvajDelo(ime, delo, poeni);
    res.redirect('/pocetna')
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziDete,
    unesiDelo
};