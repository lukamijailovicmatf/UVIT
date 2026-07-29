const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        title: {
            type: String,
            required: true
        },
        author: String,
        pages: Number,
        year: Number,
        read: {
            type: Boolean,
            default: false
        }
    },
    {collection: "knjige"}
)

const model = mongoose.model('Knjiga', schema)


async function dohvatiKnjige() {
    let ret = await model.find({}).sort({read:1, godina:-1}).exec();
    // console.log(ret)
    return ret
} 


async function unesiKnjigu(naslov, pisac, godina, strane) {
    const novi = new model(
        {_id: new mongoose.Types.ObjectId() ,
            title: naslov,
            author: pisac,
            year: godina,
            pages: strane
        }
    );
    await novi.save()
}

async function dohvatiKnjigu(id) {
    // return await model.findOne({naslov: naslov}).exec();
    return await model.findById(id).exec();
} 

module.exports = {
    dohvatiKnjige, 
    unesiKnjigu,
    dohvatiKnjigu
};