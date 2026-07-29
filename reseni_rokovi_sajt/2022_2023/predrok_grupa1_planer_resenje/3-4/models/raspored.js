const mongoose = require('mongoose')

const planoviSchema = new mongoose.Schema({
  mesec: String,
  dogadjaj: String,
  datum: Date,
  celodnevna_aktivnost: Boolean
}, 
  {collection: 'planovi'});

const planoviModel = mongoose.model(
  'planovi', planoviSchema
)

// Za 3. zadatak
async function dohvatiMeseceIzPlanera() {
  const planovi = await planoviModel.find().sort({datum:1}).exec();
  let meseci = [];
  for(let plan of planovi){
    if(meseci.length == 0) {
      meseci.push(plan.mesec);
    } else if (meseci[meseci.length-1] != plan.mesec){
      meseci.push(plan.mesec);
    }
  }
  return meseci;
} 

async function dohvatiPlanoveZaMesec(mesec) {
  return await planoviModel.find({mesec: mesec}).sort({datum:1}).exec();
  // return await planoviModel.find({}).sort({datum:1}).exec();
}

async function obrisiDogadjaj(id) {
  await planoviModel.deleteOne({_id: id}).exec();
} 

module.exports = {
  dohvatiMeseceIzPlanera,
  dohvatiPlanoveZaMesec,
  obrisiDogadjaj
};
