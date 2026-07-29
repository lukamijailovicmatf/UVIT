document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#formular')
    
    form.addEventListener('submit', function (ev) {
        let validacija = true;
        let polje;

        polje = document.querySelector('#id');
        const id = polje.value.trim();

        if (id.trim() === '') {
            validacija = false;
        }

        if (!validacija) {
            ev.preventDefault();
            window.alert('Identifikator nije ispravan');
            polje.focus();
            return false;
        }

        polje = document.querySelector('#ime_prezime');
        const ime_prezime = polje.value.trim();
        let beline = 0;
        if (ime_prezime === '') {
            validacija = false;
        }
        else {
            for (let i=0; i<ime_prezime.length; i++) {
                let c = ime_prezime.charAt(i);
                
                if (c == ' ') {
                    beline++;
                } 
                else if (c != '-' && (c < 'a' || c > 'z') && (c < 'A' || c > 'Z')) {
                    validacija = false;
                    break;
                }
            }
        }

        if (beline != 1) {
            validacija = false;
        }
        
        if (!validacija) {
            ev.preventDefault();
            window.alert('Polje za ime i prezime nije validno');
            polje.focus();
            return false;
        }

        polje = document.querySelector('#broj_artikala');
        const broj = Number.parseInt(polje.value.trim());
        console.log(broj);
        if (broj <= 0 || Number.isNaN(broj)) {
            validacija = false;
        }

        if (!validacija) {
            ev.preventDefault();
            window.alert('Broj artikala nije ispravan');
            polje.focus();
            return false;
        }

        polje = document.querySelector('#datum_isporuke');
        let datum_isporuke = polje.value.trim();

        if (datum_isporuke === '') {
            validacija = false;
        }

        else {
            datum_isporuke = new Date(datum_isporuke);
            const trenutni_datum = new Date();
    
            let razlika = datum_isporuke.getTime() - trenutni_datum.getTime();
    
            if (razlika < 0 || razlika / (1000*3600*24) < 2) {
                validacija = false;
            }
        }

        if (!validacija) {
            ev.preventDefault();
            window.alert('Datum isporuke nije ispravan');
            polje.focus();
            return false;
        }
    });
});