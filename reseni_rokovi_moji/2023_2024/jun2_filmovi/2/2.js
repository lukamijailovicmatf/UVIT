/* =====================================================
   NIZ SABLONA - dato u zadatku, ne menjati
   Svaki sablon je matrica 10x10.
   1 = krug ce biti obojen izabranom bojom
   0 = krug ostaje prazan (bela pozadina)
   ===================================================== */
let opcije = [
    {tabela: [
        [1,0,0,0,0,0,0,0,0,1],
        [0,1,0,0,0,0,0,0,1,0],
        [0,0,1,0,0,0,0,1,0,0],
        [0,0,0,1,0,0,1,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,1,0,0,1,0,0,0],
        [0,0,1,0,0,0,0,1,0,0],
        [0,1,0,0,0,0,0,0,1,0],
        [1,0,0,0,0,0,0,0,0,1]
    ]},
    {tabela: [
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1]
    ]},
    {tabela: [
        [1,1,0,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,0,0,0,1,0],
        [0,0,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,0,0,1,1,1,0,1],
        [1,1,0,0,1,1,0,0,1,0],
        [0,1,0,1,0,1,1,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1]
    ]},
    {tabela: [
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1]
    ]}
];

/* =====================================================
   UZIMAMO REFERENCE NA HTML ELEMENTE
   ===================================================== */
const inputBoja   = document.getElementById('boja');    /* color picker */
const dugmeClear  = document.getElementById('clear');   /* dugme "new"  */
const dugmeOp1    = document.getElementById('op1');     /* dugme "1"    */
const dugmeOp2    = document.getElementById('op2');     /* dugme "2"    */
const dugmeOp3    = document.getElementById('op3');     /* dugme "3"    */
const dugmeOp4    = document.getElementById('op4');     /* dugme "4"    */
const tabela      = document.querySelector('table');    /* tabela u html-u */

/* =====================================================
   FUNKCIJA: generisiTabelu()
   Kreira 10x10 mrezu krugova unutar <table> elementa.
   Svaki krug je <td> stilizovan kao krug (border-radius).
   Svakom krugu se dodaje klik dogadjaj koji ga boji
   trenutno izabranom bojom.
   ===================================================== */
function generisiTabelu() {

    /* Brisemo prethodni sadrzaj tabele pre nego sto je ponovo crtamo */
    tabela.innerHTML = '';

    /* Spoljasnja petlja: kreira redove (tr) */
    for (let r = 0; r < 10; r++) {

        const red = document.createElement('tr');

        /* Unutrasnja petlja: kreira celije (td) unutar reda */
        for (let k = 0; k < 10; k++) {

            const celija = document.createElement('td');

            /* Stilizujemo celiju kao krug */
            celija.style.width           = '30px';
            celija.style.height          = '30px';
            celija.style.borderRadius    = '50%';        /* krug */
            celija.style.border          = '2px solid black';
            celija.style.backgroundColor = 'white';
            celija.style.cursor          = 'pointer';

            /* Na klik: boji krug trenutno izabranom bojom */
            celija.addEventListener('click', function() {
                celija.style.backgroundColor = inputBoja.value;
            });

            red.appendChild(celija);
        }

        tabela.appendChild(red);
    }
}

/* =====================================================
   FUNKCIJA: primeniSablon(indeksSablona)
   Prima broj od 0 do 3 (indeks u nizu opcije).
   Na svaki krug cija je vrednost u matrici 1,
   primenjuje trenutno izabranu boju.
   Krugovi sa vrednoscu 0 ostaju nepromenjeni.
   ===================================================== */
function primeniSablon(indeksSablona) {

    /* Uzimamo matricu izabranog sablona */
    const matrica = opcije[indeksSablona].tabela;

    /* Uzimamo sve redove iz tabele koju smo mi dinamicki kreirali */
    const redovi = tabela.querySelectorAll('tr');

    /* Prolazimo kroz svaki red i svaku celiju tabele koju smo dinamicki kreirali */
    for (let r = 0; r < redovi.length; r++) {

        const celije = redovi[r].querySelectorAll('td');

        for (let k = 0; k < celije.length; k++) {

            /* Ako je vrednost u matrici 1, bojimo krug */
            if (matrica[r][k] === 1) {
                celije[k].style.backgroundColor = inputBoja.value;
            }
        }
    }
}

/* =====================================================
   DOGADJAJI NA DUGMADIMA
   ===================================================== */

/* Dugme "new": generise sveze praznu mrezu krugova */
dugmeClear.addEventListener('click', function() {
    generisiTabelu();
});

/* Dugme "1": primenjuje prvi sablon (indeks 0) */
dugmeOp1.addEventListener('click', function() {
    primeniSablon(0);
});

/* Dugme "2": primenjuje drugi sablon (indeks 1) */
dugmeOp2.addEventListener('click', function() {
    primeniSablon(1);
});

/* Dugme "3": primenjuje treci sablon (indeks 2) */
dugmeOp3.addEventListener('click', function() {
    primeniSablon(2);
});

/* Dugme "4": primenjuje cetvrti sablon (indeks 3) */
dugmeOp4.addEventListener('click', function() {
    primeniSablon(3);
});

/* =====================================================
   POKRETANJE: generisemo tabelu odmah kada se
   stranica ucita, bez cekanja na klik dugmeta "new"
   ===================================================== */
generisiTabelu();