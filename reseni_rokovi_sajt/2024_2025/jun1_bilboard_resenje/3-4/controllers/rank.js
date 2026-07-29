const model = require('../models/rank');

// 3. zadatak pod b
async function prikaziPocetnuStranicu(req, res, next) {
    try {
        let datumi = await model.dohvatiDatume()
        res.render('index.ejs', {datumi})
    } catch (err) {
        next(err);
    }
}

// 3. zadatak 
async function prikaziNedeljniIzvestaj(req, res, next) {
    try {
        let data = req.query
        let izvestaj = await model.dohvatiIzvestaj(data.datum)
        res.render('izvestaj.ejs', {izvestaj, date: data.datum})
    } catch (err) {
        next(err);
    }
}

// 4. zadatak
async function izmeniRank(req, res, next){
    try {
        let data = req.query
        let date = data.datum 
        let rank = data.rank 
        let inc = data.inc 
        let id = data.id 
        await model.promeniRang(date, rank, inc, id)
        let izvestaj = await model.dohvatiIzvestaj(date)
        res.render('izvestaj.ejs', {izvestaj, date})
    } catch (err) {
        next(err);
    }
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziNedeljniIzvestaj,
    izmeniRank
};


