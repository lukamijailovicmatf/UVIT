/* =====================================================
   OBJEKAT NIZ - dato u zadatku, ne menjati
   ===================================================== */
let niz = {
     0: "1.jpeg",
     1: "2.webp",
     2: "1.jpeg",
     3: "5.webp",
     4: "7.webp",
     5: "3.jpeg",
     6: "2.webp",
     7: "4.jpg",
     8: "6.jpeg",
     9: "5.webp",
    10: "8.jpg",
    11: "4.jpg",
    12: "6.jpeg",
    13: "3.jpeg",
    14: "8.jpg",
    15: "7.webp"
};

/* =====================================================
   GLOBALNE PROMENLJIVE ZA PRACENJE STANJA IGRICE

   otvorene  - niz koji cuva najvise 2 trenutno
               otvorene celije (one koje korisnik klikne)
   blokirano - boolean koji sprecava klikove dok se
               ceka zatvaranje neuskladjenih kartica
   ===================================================== */
let otvorene  = [];   /* ovde cuvamo do 2 kliknute celije */
let blokirano = false; /* dok je true, klikovi se ignorisu */

/* =====================================================
   KORAK 1: KREIRAMO SLIKE I PRAVOUGAONIKE U SVAKOJ CELIJI

   Za svaku od 16 celija (td1 - td16) radimo sledece:
     - Kreiramo <img> element sa odgovarajucom slikom
     - Kreiramo <div> koji prekriva sliku (pravougaonik)
     - Celiji postavljamo position:relative da div
       moze biti apsolutno pozicioniran preko slike
     - Na div dodajemo osluskivac za klik
   ===================================================== */
for (let i = 0; i < 16; i++) {

    /* Pronalazimo celiju po id-u */
    let celija = document.getElementById("td" + (i + 1));

    /* Kreiranje slike */
    let slika = document.createElement("img");
    slika.src    = niz[i];
    slika.width  = 140;
    slika.height = 180;
    slika.style.display = "block";

    /* Kreiranje pravougaonika koji prekriva sliku
       Pravougaonik je div koji je apsolutno pozicioniran
       tacno preko slike. Korisnik ga vidi umesto slike. */
    let pokrivac = document.createElement("div");
    pokrivac.style.position        = "absolute";       /* ako nema ovoga pokrivac ode ispod svake slike */ 
    pokrivac.style.top             = "0";
    pokrivac.style.left            = "0";
    pokrivac.style.width           = "140px";
    pokrivac.style.height          = "180px";
    pokrivac.style.backgroundColor = "#0f5db1";       /* plavi pravougaonik */
    pokrivac.style.cursor          = "pointer";
    pokrivac.style.border          = "2px solid #e2e6e9";

    /* Na celiju postavljamo position:relative kako bi
       apsolutno pozicionirani div bio relativan prema njoj */
    celija.style.position = "relative";

    /* Ubacujemo sliku i pokrivac u celiju */
    celija.appendChild(slika);
    celija.appendChild(pokrivac);


    /* =================================================
       OSLUSKIVAC ZA KLIK NA POKRIVAC

       addEventListener("click", funkcija) kaze browseru:
       "kada korisnik klikne na ovaj element, pozovi ovu funkciju"

       Svaki pokrivac ima svoj osluskivac koji zna:
        - koja je to celija (celija)
        - koji je njen indeks (i)
        - koja slika se krije ispod (niz[i])
       ================================================= */
    pokrivac.addEventListener("click", function() {

        /* PROVERA 1: Da li je igrica blokirana?
           Blokirana je dok cekamo 1 sekundu nakon sto
           korisnik otvori dva razlicita polja.
           Ako je blokirana, klik se potpuno ignorise. */
        if (blokirano) 
            return;

        /* PROVERA 2: Da li je ovo polje vec otvoreno?
           Sprecavamo dvostruki klik na isto polje. */
        if (otvorene.includes(celija)) 
            return;

        /* OTKRIVANJE SLIKE
           Sakrivamo pokrivac postavljanjem display na "none".
           Sada je slika vidljiva. */
        pokrivac.style.display = "none";

        /* Pamtimo ovu celiju kao otvorenu */
        otvorene.push(celija);

        /* ==============================================
           DA LI SU OTVORENA DVA POLJA?
           Tek kada korisnik otvori tacno 2 polja
           proveravamo da li se slike poklapaju.
           ============================================== */
        if (otvorene.length === 2) {

            /* Uzimamo indekse obe otvorene celije iz njihovog id-a.
               id je npr. "td5", parseInt("5") = 5, indeks = 5-1 = 4 */
            let indeks1 = parseInt(otvorene[0].id.replace("td", "")) - 1;   // otvorene[0].id je npr. "td5", replace("td", "") daje "5", parseInt("5") daje 5, oduzimamo 1 da dobijemo indeks 4
            let indeks2 = parseInt(otvorene[1].id.replace("td", "")) - 1;

            /* Uzimamo nazive slika za obe celije */
            let slika1 = niz[indeks1];
            let slika2 = niz[indeks2];

            /* ===========================================
               SLUCAJ A: SLIKE SU ISTE -> POKLAPANJE!
               Brisemo pokrivace trajno - slike ostaju vidljive.
               Resetujemo niz otvorenih celija.
               =========================================== */
            if (slika1 === slika2) {
                
                /* Brisemo kompletno sadrzaj obe celije -
                   i slika i pokrivac nestaju, celija ostaje prazna */
                otvorene[0].innerHTML = "";
                otvorene[1].innerHTML = "";

                /* Resetujemo niz otvorenih celija */
                otvorene = [];

            } else {

                /* ===========================================
                   SLUCAJ B: SLIKE SU RAZLICITE
                   Blokiramo dalje klikove (blokirano = true)
                   i nakon 1000ms (1 sekunde) zatvaramo oba
                   polja i deblokiramo igru.
                   =========================================== */
                blokirano = true;

                /* setTimeout poziva funkciju nakon zadatog
                   broja milisekundi. Ovde: 1000ms = 1 sekunda */
                setTimeout(function() {

                    /* Pronalazimo pokrivace obe otvorene celije
                       i ponovo ih prikazujemo (vracamo display na "block") */
                    let pokrivac1 = otvorene[0].querySelector("div");
                    let pokrivac2 = otvorene[1].querySelector("div");

                    pokrivac1.style.display = "block";
                    pokrivac2.style.display = "block";

                    /* Resetujemo niz i deblokiramo igru */
                    otvorene  = [];
                    blokirano = false;

                }, 1000); /* 1000 milisekundi = 1 sekunda */
            }
        }
    });
    /* kraj addEventListener */
}