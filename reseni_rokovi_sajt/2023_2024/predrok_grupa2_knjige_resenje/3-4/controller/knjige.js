const knjigeModel = require('../model/knjige');


async function prikaziPocetnu(req, res, next) {
    try {
        const knjige = await knjigeModel.dohvatiKnjige();
        console.log('knjige')
        return res.render('pocetna.ejs', {knjige});
    } catch(err){
        next(err);
    }
}


async function dohvatiKnjigu(req, res, next) {
    try {
        console.log(req.query)
        const knjiga = await knjigeModel.dohvatiKnjigu(req.query.id);
        console.log(knjiga)
        return res.render('knjiga.ejs', {knjiga})        
    } catch(err){
        next(err);
    }
}


async function unesiKnjigu(req, res, next) {
    try {
        const data = req.body;
        console.log(data)
       
        
        await knjigeModel.unesiKnjigu(data.naslov, data.pisac, data.godina, data.br_strana);

        res.redirect('/')
    } catch(err){
        next(err);
    }
}


module.exports = {
    prikaziPocetnu,
    dohvatiKnjigu,
    unesiKnjigu
};