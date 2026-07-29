const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Date: {
        type: String,
        required: true
    },
    Song: String,
    Artist: String,
    Rank: Number,
    'Last Week': Number,
    'Peak Position': Number
}, {collection: 'top100'})

const model = mongoose.model('Ranking', schema);

async function dohvatiDatume() {
    return await model.distinct('Date').exec();
}

async function dohvatiIzvestaj(date) {
    return await model.find({Date: date}).sort({Rank: 1}).exec();
}

async function promeniRang(datum, rank, inc, id) {
    await model.updateOne({_id: id}, {$inc: {Rank: inc}}).exec();
}

module.exports = {
    dohvatiDatume,
    dohvatiIzvestaj,
    promeniRang
};