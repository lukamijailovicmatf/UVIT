const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    prilog: String,
    slatko: Boolean,
    vegan: Boolean,
    popularnost: Number
}, {collection: 'prilozi'})

const model = mongoose.model('Prilog', schema);

async function prikaziPriloge() {
    return await model.find().sort({popularnost: -1}).exec();
}

async function filterSlatko(slatko) {
    return await model.find({slatko: slatko}).exec();
}

async function filterVegan() {
    return await model.find({vegan: true}).exec();
}

async function azurirajPopularnost(nazivPriloga) {
    if (Array.isArray(nazivPriloga)) {
        await model.updateMany({prilog: {$in: nazivPriloga}}, {$inc: {popularnost: 1}}).exec();
    } else if (nazivPriloga) {
        await model.updateOne({prilog: nazivPriloga}, {$inc: {popularnost: 1}}).exec();
    }
}

module.exports = {
    prikaziPriloge,
    filterSlatko,
    filterVegan,
    azurirajPopularnost
};