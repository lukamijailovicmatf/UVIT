const mongoose = require('mongoose')

const shema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    igrac1: String,
    igrac2: String,
    vreme: String,
    poeni1: String,
    poeni2: String,
    turnir: String,
}, 
    {collection: 'turniri'})

const model = mongoose.model('Turnir', shema);

async function dohvatiIgreZaTurnir(turnir) {
    return await model.find({turnir: turnir}).exec();
} 


async function dohvatiTurnire() {
    let lst = await model.find({}, {turnir: true}).sort({turnir:1}).exec();
    let ret = [];

    for(let el of lst){
        if(ret.length == 0){
            ret.push(el.turnir);
        } else if(ret[ret.length-1] != el.turnir){
            ret.push(el.turnir)
        }
    }

    return ret;
}

async function unesiTurnir(igrac1, igrac2, poeni1, poeni2, vreme, turnir) {
  let newEl = new model();
  newEl._id = new mongoose.Types.ObjectId();
  newEl.igrac1 = igrac1;
  newEl.igrac2 = igrac2;
  newEl.poeni1 = poeni1;
  newEl.poeni2 = poeni2;
  newEl.vreme = vreme;
  newEl.turnir = turnir;

  await newEl.save();
} 

module.exports = {
    dohvatiTurnire,
    dohvatiIgreZaTurnir,
    unesiTurnir
};