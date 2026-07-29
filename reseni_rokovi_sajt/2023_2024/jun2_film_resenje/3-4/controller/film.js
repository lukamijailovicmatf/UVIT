const filmModels = require('../model/film');
const zanrovi = require('../model/zanrovi')

async function prikaziPocetnu(req, res, next) {
    try {
        const filmovi = await filmModels.dohvatiFilmove();
        // console.log("Filmovi:" + filmovi)
        console.log('filmovi')
        console.log(zanrovi.zanrovi)
        return res.render('pocetna.ejs', {filmovi, zanrovi: zanrovi.zanrovi});
    } catch(err){
        next(err);
    }
}


async function dohvatiFilm(req, res, next) {
    try {
        console.log(req.query)
        const film = await filmModels.dohvatiFilm(req.query.naslov);
        console.log("Film:" + film)
        return res.render('film.ejs', {film})        
    } catch(err){
        next(err);
    }
}


async function unesiFilm(req, res, next) {
    try {
        const data = req.body;
        console.log(data)
       
  
        let film = await filmModels.dodajFilm(data.naslov, data.godina, data.duzina, data.imdb, data.zanr);
        console.log(film)
        res.render('film.ejs', {film})
    } catch(err){
        next(err);
    }
}

async function unesiGlumca(req, res, next){
    try {
        let data = req.body
        console.log(data)
        let izmena = await filmModels.dodajGlumca(data.id, data.glumac)
        console.log(izmena)
        res.render('film.ejs', {film: izmena})
    } catch(err){
        next(err)
    }
}

module.exports = {
    prikaziPocetnu,
    dohvatiFilm,
    unesiFilm,
    unesiGlumca
};