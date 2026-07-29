const rasporedModel = require('../models/raspored');

// months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

// Za 3. zadatak
async function prikaziPocetnu(req, res, next) {
    try {
        const months = await rasporedModel.dohvatiMeseceIzPlanera();
        res.render('calendar.ejs', {months})
    } catch(err){
        next(err);
    }
}

// Za 3. zadatak
async function prikaziMesec(req, res, next) {
    try {
        let data = req.body;
        console.log(data);
        const months = await rasporedModel.dohvatiMeseceIzPlanera();
        const tasks = await rasporedModel.dohvatiPlanoveZaMesec(data.mesec);
        // console.log(tasks)
        res.render('month.ejs', {month: data.mesec, tasks, months});
    } catch(err){
        next(err);
    }
}

// Za 4. zadatak
async function obrisiMesec(req, res, next) {
    try {
        let data = req.body;
        console.log(data);

        await rasporedModel.obrisiDogadjaj(data.id)

        // res.redirect('/calendar/month');

        next();
    } catch(err){
        next(err);
    }
}


module.exports = {
    prikaziPocetnu,
    prikaziMesec,
    obrisiMesec
};
