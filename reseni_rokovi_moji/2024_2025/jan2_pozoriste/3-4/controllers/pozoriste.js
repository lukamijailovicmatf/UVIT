const pozoristeModel = require('../models/pozoriste');

async function prikaziRepertoar(req, res, next) {
    try {
        const predstave = await pozoristeModel.prikaziRepertoar();
        res.render('repertoar.ejs', {predstave});
    } catch (err) {
        next(err);
    }
}

async function prikaziPredstavu(req, res, next) {
    try {
        const id = req.query.id;
        const predstava = await pozoristeModel.prikaziPredstavu(id);
        res.render('predstava.ejs', {predstava});
    } catch (err) {
        next(err);
    }
}

async function kupiUlaznice(req, res, next) {
    try {
        const id = req.body.id;
        const lokacija = req.body.lokacija;
        const broj = req.body.broj;
        if (!lokacija) {
            return res.render('greska.ejs', {poruka: 'Morate odabrati tip ulaznice (parter ili balkon).'})
        }
        const brojInt = parseInt(broj);
        if (!broj || isNaN(brojInt) || brojInt <= 0) {
            return res.render('greska.ejs', {poruka: 'Unesite validan broj ulaznica (mora biti pozitivan ceo broj).'})
        }
        const predstava = await pozoristeModel.prikaziPredstavu(id);
        if (predstava.slobodnaMesta < brojInt) {
            return res.render('greska.ejs', {
                poruka: 'Nije dostupan zeljeni broj ulaznica. Preostalo ${predstava.slobodnaMesta} slobodnih mesta.'
            })
        }
        const cenaPoUlaznici = lokacija === parter ? predstava.cenaParter : predstava.cenaBalkon;
        const cenaUkupno = cenaPoUlaznici * brojInt;
        await pozoristeModel.kupiUlaznice(id, lokacija, brojInt);
        res.render('ulaznica.ejs', {predstava, cenaUkupno});
    } catch (err) {
        next(err);
    }
}

module.exports = {
    prikaziRepertoar,
    prikaziPredstavu,
    kupiUlaznice
};