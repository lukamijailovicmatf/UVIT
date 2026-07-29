const model = require('../models/artikal');

module.exports.prikaziProdavnicu = async function(req, res, next) {
    try {
        const sviArtikli = await model.dohvatiSveArtikle();

        return res.render('prikaziProdavnicu.ejs', {
            artikli: sviArtikli
        });
    } catch (err) {
        next(err);
    }
};
