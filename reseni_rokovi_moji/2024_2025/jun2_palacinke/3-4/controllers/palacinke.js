const priloziModel = require('../models/prilozi');

async function prikaziPocetnu(req, res, next) {
    try {
        const prilozi = await priloziModel.prikaziPriloge();
        res.render('pocetna.ejs', {prilozi});
    } catch (err) {
        next(err);
    }
}

async function filterPriloga(req, res, next) {
    try {
        const tip = req.query.tip;
        let filtriraniPrilozi = [];
        if (tip === 'vegan') {
            filtriraniPrilozi = await priloziModel.filterVegan();
        } else if (tip === 'slatko') {
            filtriraniPrilozi = await priloziModel.filterSlatko(true);
        } else if (tip === 'slano') {
            filtriraniPrilozi = await priloziModel.filterSlatko(false);
        } else {
            filtriraniPrilozi = await priloziModel.prikaziPriloge();
        }
        res.render('pocetna.ejs', {prilozi: filtriraniPrilozi});
    } catch (err) {
        next(err);
    }
}

async function dostava(req, res, next) {
    try {
        let izabrani = req.body.izabrani;
        if (!izabrani) {
            izabrani = [];
        } else if (!Array.isArray(izabrani)) {
            izabrani = [izabrani];
        }
        await priloziModel.azurirajPopularnost(izabrani);
        res.render('dostava.ejs', {izabrani});
    } catch (err) {
        next(err);
    }
}


module.exports = {
    prikaziPocetnu,
    filterPriloga,
    dostava
};