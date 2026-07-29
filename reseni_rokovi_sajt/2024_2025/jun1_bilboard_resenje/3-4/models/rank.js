const mongoose = require('mongoose');

const shema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Date: String,
    Song: String,
    Artist: String,
    Rank: Number,
    'Last Week': Number,
    'Peak Position': Number,
    'Weeks in Charts': Number
},{collection:'top100'})

const model = mongoose.model('pesme',shema)
//----------------------------------------

// 3. zadatak pod b
async function dohvatiDatume(){
    let nedelje = await model.find({Rank: 1}).sort({Date: 1}).exec()
    return nedelje
}

// 3. zadatak pod c
async function dohvatiIzvestaj(date) {
    let data = await model.find({Date: date}).sort({Rank: 1}).exec()
    return data
}

// ne znam za sta niti gde se koristi iskreno
async function dohvatiSvePesme(){
    let pesme = await model.find().sort({Date: 1}).exec()
    return pesme
}

async function promeniRang(datum, rank, inc, id) {
    // console.log(datum, rank, inc, id, typeof inc)
    // console.log(inc == true)
    // console.log(inc == 'true')
    if(inc == 'true') {
        console.log('Uvecaj')
        // await model.updateOne({ Date: datum, Rank: rank - 1}, { $inc: { Rank: 1 } }).exec()
        await model.updateOne({ _id: id}, { $inc: { Rank : -1 } }).exec()
    } else {
        console.log('Umanji')
        // await model.updateOne({ Date: datum, Rank: rank + 1}, { $inc: { Rank: -1 } }).exec()
        await model.updateOne({ _id: id}, { $inc: { Rank: 1 } }).exec()
    }
}

module.exports = {
    dohvatiSvePesme,
    dohvatiDatume,
    dohvatiIzvestaj,
    promeniRang
};
