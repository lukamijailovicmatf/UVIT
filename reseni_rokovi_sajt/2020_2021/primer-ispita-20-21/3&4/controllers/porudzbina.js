const model_porudzbina = require('../models/porudzbina');
const model_artikal = require('../models/artikal');

module.exports.prikaziPorudzbinu = async function(req, res, next) {
    try {
        return res.render('prikaziPorudzbinu.ejs', {
            id_artikla: req.query.id
        });
    } catch (err) {
        next(err);
    }
};

module.exports.kreirajPorudzbinu = async function(req, res, next) {
    try {
        const id_artikla = req.body.id;
        const ime_prezime = req.body.ime_prezime;
        const broj_artikala = req.body.broj_artikala;
        const datum_isporuke = req.body.datum_isporuke;
        const datum_narudzbine = new Date();

        // Proverava da li za artikal čiji je identifikator prosleđen postoji dovoljno količine (broja artikala) da bi naručivanje bilo uspešno. 
        // Ukoliko ne postoji, prikazuje se stranica sa informacijama o grešci. Na toj stranici takođe postoji veza ka početnoj stranici.
        const imaArtikala = await model_artikal.imaLiDovoljnoArtikala(id_artikla, broj_artikala);
        if (!imaArtikala) {
            return res.render('kreirajPorudzbinu.ejs', {
                id_artikla: id_artikla,
                status: false,
                razlog: 'Nema dovoljno artikala'
            });
        }

        // Ukoliko ima dovoljno artikala, ažurira informaciju o datom artiklu tako što se količina umanjuje za onoliko koliko je korisnik naručio u formularu.
        await model_artikal.smanjiBrojArtikala(id_artikla, broj_artikala);

        // Nakon toga, dodaje novu porudžbinu na osnovu podataka koje je korisnik uneo na prethodnoj stranici.
        await model_porudzbina.kreirajPorudzbinu(id_artikla, ime_prezime, broj_artikala, datum_isporuke, datum_narudzbine);

        // Prikazuje stranicu sa informacijama o uspešnosti naručivanja. 
        return res.render('kreirajPorudzbinu.ejs', {
            id_artikla: id_artikla,
            status: true
        });
    } catch (err) {
        next(err);
    }
};
