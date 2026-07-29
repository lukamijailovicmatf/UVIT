//let niz = ["matf", "uvit", "dugme", "tastatura", "mis"];

/* =====================================================
   NIZ RECI - dato u zadatku, ne menjati.
   Svakoj reci dodajemo hint koji ce biti prikazan
   kao pomoc korisniku tokom igre.
   ===================================================== */
let niz = [
    { rec: "matf",       hint: "Mathematics and natural sciences faculty." },
    { rec: "uvit",       hint: "Introduction to web and internet technologies." },
    { rec: "dugme",      hint: "You click it to trigger an action." },
    { rec: "tastatura",  hint: "You use it to type text." },
    { rec: "mis",        hint: "You move it to control the cursor." }
];

/* =====================================================
   GLOBALNE PROMENLJIVE
   Ove promenljive cuvaju trenutno stanje igre i
   dostupne su svim funkcijama ispod.
   ===================================================== */
let trenutnaRec      = "";   /* rec koja se pogadja (string) */
let trenutniHint     = "";   /* hint za trenutnu rec */
let otkrivenaSlova   = [];   /* niz slova koja je korisnik vec pogodio */
let pogresniPokusaji = 0;    /* broj neuspesnih pokusaja */
const MAX_POGRESNIH  = 6;    /* maksimalan broj gresaka pre kraja igre */

/* =====================================================
   KORAK 1: GRADIMO HTML STRUKTURU STRANICE
   Posto html fajl ima samo <script> tag, sve elemente
   moramo kreirati kroz JavaScript.
   ===================================================== */

/* Opsti stil za body */
document.body.style.fontFamily  = "Arial, sans-serif";
document.body.style.display     = "flex";
document.body.style.justifyContent = "center";
document.body.style.padding     = "30px";

/* Glavni kontejner koji drzi levu i desnu kolonu */
let kontejner = document.createElement("div");
kontejner.style.display    = "flex";
kontejner.style.gap        = "80px";
document.body.appendChild(kontejner);

/* LEVA KOLONA: slika vislice i dugme "HANGMAN GAME" */
let levaKolona = document.createElement("div");
levaKolona.style.display        = "flex";
levaKolona.style.flexDirection  = "column";
levaKolona.style.gap            = "30px";
kontejner.appendChild(levaKolona);

/* Slika vislice */
let slikaVislice = document.createElement("img");
slikaVislice.src    = "3.webp";
slikaVislice.width  = 220;
slikaVislice.alt    = "Hangman";
levaKolona.appendChild(slikaVislice);

/* Dugme "HANGMAN GAME" - klik na njega pokree igru */
let dugmeStart = document.createElement("button");
dugmeStart.textContent         = "HANGMAN GAME";
dugmeStart.style.padding       = "15px 25px";
dugmeStart.style.fontSize      = "15px";
dugmeStart.style.fontWeight    = "bold";
dugmeStart.style.cursor        = "pointer";
dugmeStart.style.backgroundColor = "#4a4a8a";
dugmeStart.style.color         = "white";
dugmeStart.style.border        = "none";
dugmeStart.style.borderRadius  = "6px";
levaKolona.appendChild(dugmeStart);

/* DESNA KOLONA: rec, hint, greske, tastatura */
let desnaKolona = document.createElement("div");
desnaKolona.style.display       = "flex";
desnaKolona.style.flexDirection = "column";
desnaKolona.style.gap           = "20px";
kontejner.appendChild(desnaKolona);

/* Prikaz reci (crticama i slovima) */
let prikazReci = document.createElement("div");
prikazReci.style.fontSize      = "30px";
prikazReci.style.letterSpacing = "5px";
prikazReci.style.fontWeight    = "bold";
prikazReci.style.color         = "#222";
prikazReci.textContent         = "Klikni HANGMAN GAME da pocnes!";
desnaKolona.appendChild(prikazReci);

/* Hint tekst */
let prikazHinta = document.createElement("p");
prikazHinta.style.fontSize = "15px";
prikazHinta.style.color    = "#444";
desnaKolona.appendChild(prikazHinta);

/* Brojac pogresnih pokusaja */
let prikazGresaka = document.createElement("p");
prikazGresaka.style.fontSize = "15px";
desnaKolona.appendChild(prikazGresaka);

/* Kontejner za tastaturne dugmice (26 slova abecede) */
let tastatura = document.createElement("div");
tastatura.style.display   = "flex";
tastatura.style.flexWrap  = "wrap";     /* da nema ovoga bilo bi sve u jednom redu */ 
tastatura.style.gap       = "6px";      /* razmak izmedju svakog dugmica u odnosu na ostale dugmice */ 
tastatura.style.width  = "420px";
desnaKolona.appendChild(tastatura);

/* Poruka o kraju igre (pobeda/poraz) */
let porukaKraja = document.createElement("p");
porukaKraja.style.fontSize   = "18px";
porukaKraja.style.fontWeight = "bold";
desnaKolona.appendChild(porukaKraja);

/* =====================================================
   KORAK 2: KREIRAMO 26 DUGMICA ZA SLOVA (A-Z)

   Prolazimo kroz kodove slova od 65 (A) do 90 (Z).
   String.fromCharCode(65) vraca "A", itd.
   Na svako dugme dodajemo osluskivac za klik.
   ===================================================== */
for (let kod = 65; kod <= 90; kod++) {

    let slovo = String.fromCharCode(kod);  /* npr. kod 65 -> "A" */

    let dugme = document.createElement("button");
    dugme.textContent           = slovo;
    dugme.style.width           = "46px";
    dugme.style.height          = "46px";
    dugme.style.fontSize        = "15px";
    dugme.style.fontWeight      = "bold";
    dugme.style.cursor          = "pointer";
    dugme.style.backgroundColor = "#6c63d6";
    dugme.style.color           = "white";
    dugme.style.border          = "none";
    dugme.style.borderRadius    = "6px";

    /* -----------------------------------------------
       OSLUSKIVAC ZA KLIK NA SLOVO

       Kada korisnik klikne na slovo, poziva se
       funkcija pogodi() sa tim slovom.
       Nakon klika dugme se onemogucava (disabled = true)
       da se isto slovo ne moze kliknuti dva puta.
       ----------------------------------------------- */
    dugme.addEventListener("click", function() {
        pogodi(slovo.toLowerCase(), dugme);
    });

    tastatura.appendChild(dugme);
}

/* =====================================================
   KORAK 3: OSLUSKIVAC NA DUGMETU "HANGMAN GAME"

   Kada korisnik klikne na "HANGMAN GAME", poziva se
   funkcija pocniIgru() koja resetuje sve i bira novu rec.
   ===================================================== */
dugmeStart.addEventListener("click", function() {
    pocniIgru();
});

/* =====================================================
   FUNKCIJA: pocniIgru()

   Resetuje sve promenljive na pocetne vrednosti,
   nasumicno bira rec iz niza, i osvezava prikaz.
   ===================================================== */
function pocniIgru() {

    /* Biramo nasumican indeks iz niza reci */
    let randomIndeks   = Math.floor(Math.random() * niz.length);
    trenutnaRec        = niz[randomIndeks].rec;
    trenutniHint       = niz[randomIndeks].hint;
    otkrivenaSlova     = [];
    pogresniPokusaji   = 0;
    porukaKraja.textContent = "";

    /* Aktiviramo sva slovna dugmica (moglo je biti disabled) */
    let sviDugmici = tastatura.querySelectorAll("button");
    sviDugmici.forEach(function(d) {
        d.disabled              = false;
        d.style.backgroundColor = "#6c63d6";
        d.style.opacity         = "1";
    });

    /* Osvezavamo prikaz */
    osvezi();
}

/* =====================================================
   FUNKCIJA: pogodi(slovo, dugme)

   Poziva se kada korisnik klikne na slovo.
   Proverava da li se slovo nalazi u trenutnoj reci.

   Argumenti:
    slovo - malo slovo koje je korisnik kliknuo
    dugme - referenca na HTML element dugmeta
            da bismo ga mogli onemoguciti)
   ===================================================== */
function pogodi(slovo, dugme) {

    /* Onemogucavamo dugme da se ne moze kliknuti ponovo */
    dugme.disabled              = true;
    dugme.style.backgroundColor = "#aaa";
    dugme.style.opacity         = "0.6";

    /* Proveravamo da li se slovo nalazi u reci */
    if (trenutnaRec.includes(slovo)) {

        /* Slovo je tacno - dodajemo ga u niz otkrivenih */
        otkrivenaSlova.push(slovo);

    } else {

        /* Slovo nije u reci - povecavamo broj gresaka */
        pogresniPokusaji++;
    }

    /* Osvezavamo sve elemente na ekranu */
    osvezi();
}

/* =====================================================
   FUNKCIJA: osvezi()

   Osvezava sve vidljive elemente na osnovu
   trenutnog stanja igre:
     - prikaz reci sa crticama i slovima
     - hint
     - brojac gresaka
     - provera pobede ili poraza
   ===================================================== */
function osvezi() {

    /* Gradimo prikaz reci 
       Za svako slovo u reci proveravamo:
        - ako je slovo vec otkriveno -> prikazujemo ga
        - ako nije -> prikazujemo crticu " _ "
    */
    let prikazTekst = "";
    for (let i = 0; i < trenutnaRec.length; i++) {
        let slovo = trenutnaRec[i];
        if (otkrivenaSlova.includes(slovo)) {
            prikazTekst += slovo.toUpperCase() + " ";
        } else {
            prikazTekst += "_ ";
        }
    }
    prikazReci.textContent = prikazTekst.trim();

    /* Prikaz hinta */
    prikazHinta.innerHTML = "<b>Hint:</b> " + trenutniHint;

    /* Prikaz gresaka
       Crvenom bojom pokazujemo trenutni / maksimalni broj */
    prikazGresaka.innerHTML =
        "Incorrect guesses: <span style='color:red; font-weight:bold'>" +
        pogresniPokusaji + " / " + MAX_POGRESNIH + "</span>"; 

    /* Proveravamo pobedu
       Pobeda nastaje kada su sva slova otkrivena.
       Koristimo every() koji vraca true ako uslov
       vazi za svaki element niza. */
    let pobeda = trenutnaRec.split("").every(function(slovo) {
        return otkrivenaSlova.includes(slovo);
    });

    if (pobeda) {
        porukaKraja.style.color    = "green";
        porukaKraja.textContent    = "Cestitamo! Pogodili ste rec: " + trenutnaRec.toUpperCase();
        onemoguciTastaturu();
        return;
    }

    /* Proveravamo poraz
       Poraz nastaje kada se dostigne maksimalan broj gresaka. */
    if (pogresniPokusaji >= MAX_POGRESNIH) {
        porukaKraja.style.color    = "red";
        porukaKraja.textContent    = "Izgubili ste! Rec je bila: " + trenutnaRec.toUpperCase();
        onemoguciTastaturu();
    }
}

/* =====================================================
   FUNKCIJA: onemoguciTastaturu()

   Kada igra zavrsi (pobeda ili poraz), onemogucavamo
   sve dugmice da korisnik ne moze da nastavlja.
   ===================================================== */
function onemoguciTastaturu() {
    let sviDugmici = tastatura.querySelectorAll("button");
    sviDugmici.forEach(function(d) {
        d.disabled              = true;
        d.style.backgroundColor = "#aaa";
        d.style.opacity         = "0.6";
    });
}