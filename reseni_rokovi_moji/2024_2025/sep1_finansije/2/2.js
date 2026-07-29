const slike = [
    ["img/1.jpg", "Ponuda kredita"],
    ["img/2.jpg", "Članska kartica"],
    ["img/3.jpg", "Program štednje"],
    ["img/4.jpg", "Garancija sigurnosti"]
];

/* =====================================================
   Uzimamo sve span elemente unutar #gallery diva.
   querySelectorAll vraca listu svih span-ova redom,
   sto odgovara redosledu slika u nizu "slike".
   ===================================================== */
const spanovi = document.querySelectorAll('#gallery span');

/* Prolazimo kroz svaki span i punimo ga slikom i natpisom */
for (let i = 0; i < spanovi.length; i++) {

    const span    = spanovi[i];
    const putanja = slike[i][0];          /* npr. "img/1.jpg" */
    const opis    = slike[i][1];          /* npr. "Ponuda kredita" */

    /* Izvlacimo samo naziv fajla iz putanje: "img/1.jpg" -> "1.jpg" */
    const nazivSlike = putanja.split('/').pop();

    /* Kreiranje img elementa */
    const slika = document.createElement('img');
    slika.src   = putanja;                /* putanja do slike */
    slika.alt   = opis;                   /* alternativni tekst */
    slika.width = 200;                    /* sirina slike */
    slika.height = 120;                   /* visina slike */

    /* Kreiranje natpisa ispod slike */
    const natpis = document.createElement('p');
    natpis.textContent = nazivSlike;      /* prikazuje npr. "1.jpg" */
    natpis.style.margin = '0 0 20px 0';

    /* Span postavljamo kao blok da slika i natpis budu jedna ispod druge, i cistimo placeholder tekst */
    span.style.display = 'block';
    span.innerHTML     = '';              /* uklanjamo "placeholder 1" tekst */

    /* Dodajemo sliku i natpis u span */
    span.appendChild(slika);
    span.appendChild(natpis);
}