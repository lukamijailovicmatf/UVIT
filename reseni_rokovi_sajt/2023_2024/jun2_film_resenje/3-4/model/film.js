const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        naslov: {
            type: String,
            required: true
        },
        godina: Number,
        zanr: [String],
        duzina: String,
        glumci: {
            type: [String],
            default: []  
        },
        imdb: Number
    },
    {collection: "film"}
)

const model = mongoose.model('Film', schema)


async function dohvatiFilmove() {
    let filmovi = await model.find({}).sort({godina:-1, imdb: 1}).exec();
    console.log(filmovi.length)
    return filmovi
} 


async function dodajFilm(naslov, godina, duzina, imdb, zanr) {
    const novi = new model(
        {_id: new mongoose.Types.ObjectId() ,naslov, godina, duzina, imdb, zanr}
    );
    await novi.save()
    return novi
}

async function dodajGlumca(id, noviGlumac){
    let film = await dohvatiFilm(id)

    if(noviGlumac.split(' ').length <2){
        return film
    }

    film.glumci.push(noviGlumac)
    const izmenjen = await model.updateOne({_id: id},{glumci: film.glumci}).exec()
    console.log(izmenjen)
    return film
}

async function dohvatiFilm(id) {
    // return await model.findOne({naslov: naslov}).exec();
    return await model.findById(id).exec();
} 

module.exports = {
    dohvatiFilmove, 
    dodajFilm,
    dohvatiFilm,
    dodajGlumca
};