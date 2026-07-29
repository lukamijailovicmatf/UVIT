const model = require('../models/rank');

async function prikaziPocetnuStranicu(req, res, next) {
    try {
        const datumi = await model.dohvatiDatume();
        res.render('index.ejs', {datumi});
    } catch (err) {
        next(err);
    }
}

async function prikaziNedeljniIzvestaj(req, res, next) {
    try {
        const datum = req.query.datum;
        const izvestaj = await model.dohvatiIzvestaj(datum);
        res.render('izvestaj.ejs', {izvestaj});
    } catch (err) {
        next(err);
    }
}

async function izmeniRank(req, res, next){
    try {
        const id = req.body.id;
        const datum = req.body.datum;
        const rank = parseInt(req.body.rank);
        const inc = parseInt(req.body.inc);
        await model.promeniRang(datum, rank, inc, id);
        res.redirect('izvestaj.ejs');
    } catch (err) {
        next(err);
    }
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziNedeljniIzvestaj,
    izmeniRank
};