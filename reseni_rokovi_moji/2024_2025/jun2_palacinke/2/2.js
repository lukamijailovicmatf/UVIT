slike = {
    "nutela" : "nutela.jpg",
    "plazma" : "plazma.png",
    "dzem" : "dzem.jpg",
    "banana" : "banana.jpg",
    "visnja" : "visnja.jpg",
    "eurokrem" : "eurokrem.jpg"
}

/* =====================================================
   Prolazimo kroz svaki par (id -> naziv slike) iz
   objekta "slike" i za svaki:
     1. pronadjemo odgovarajuci div u HTML-u po id-u
     2. kreiramo <img> element i postavimo mu src
     3. kreiramo <span> sa nazivom (id-em) elementa
     4. ubacimo i sliku i natpis u taj div
   ===================================================== */
for (let id in slike) {
 
    /* Pronalazimo div ciji id odgovara trenutnom kljucu */
    let div = document.getElementById(id);
 
    /* Div postavljamo kao blok element kako bi slike bile
       jedna ispod druge, i relativno pozicioniran
       da natpis moze biti apsolutno unutar njega */
    div.style.position    = "relative";
    div.style.display     = "block";
    div.style.marginBottom = "15px";  /* razmak ispod svakog diva, odvaja slike */
 
    /* --- Kreiranje elementa slike --- */
    let slika = document.createElement("img");
    slika.src    = slike[id];       /* putanja do slike iz objekta */
    slika.alt    = id;              /* alternativni tekst = naziv priloga */
    slika.width  = 120;             /* sirina slike u pikselima */
    slika.height = 120;             /* visina slike u pikselima */
    slika.style.display = "block";  /* uklanja podrazumevani razmak ispod slike */
 
    /* --- Kreiranje natpisa sa nazivom (id-em) --- */
    let natpis = document.createElement("span");
    natpis.textContent = id;        /* tekst natpisa je sam id elementa */
 
    /* Beli bold tekst u gornjem levom uglu, bez ikakve pozadine */
    natpis.style.position   = "absolute";
    natpis.style.top        = "4px";
    natpis.style.left       = "4px";
    natpis.style.color      = "#ffffff";
    natpis.style.fontWeight = "bold";
    natpis.style.fontSize   = "20px";
 
    /* --- Ubacivanje slike i natpisa u pronadjeni div --- */
    div.appendChild(slika);
    div.appendChild(natpis);
}
  