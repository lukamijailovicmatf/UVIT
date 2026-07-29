const proizvodi = [
  { naziv: "Plazma keks 100g", cena: 120, brojArtikala: 7 },
  { naziv: "Dugotrajno mleko bez laktoze 1l", cena: 126.85, brojArtikala: 9 },
  { naziv: "Prolom voda 1l", cena: 40, brojArtikala: 32 },
  { naziv: "Nescafe 3u1", cena: 15.99, brojArtikala: 25 },
  { naziv: "Sok od pomorandže 1.5l", cena: 144.47, brojArtikala: 14 },
  { naziv: "Bebi spanać 500g", cena: 180, brojArtikala: 6 },
];

const prikaziProizvode = document.querySelector("#prikaziProizvode");
if (prikaziProizvode != null) {
  prikaziProizvode.addEventListener("click", function () {
    setTimeout(function () {
      const katalogProizvoda = document.getElementById("katalogProizvoda");
      if (katalogProizvoda != null) {
        stilizujTabelu(katalogProizvoda);
        obrisiDecuIzTabele(katalogProizvoda);
        const tHead = napraviZaglavljeTabele();
        const tBody = napraviTeloTabele();
        katalogProizvoda.appendChild(tHead);
        katalogProizvoda.appendChild(tBody);
      }
    }, 1500);
  });
}

function stilizujTabelu(katalogProizvoda) {
  katalogProizvoda.style.border = "1px solid black";
  katalogProizvoda.style.borderCollapse = "collapse";
}

function obrisiDecuIzTabele(katalogProizvoda) {
  const deca = katalogProizvoda.children;
  for (let i = deca.length - 1; i >= 0; --i) {
    katalogProizvoda.removeChild(deca[i]);
  }
}

function napraviZaglavljeTabele() {
  const tHead = document.createElement("thead");
  const tr = document.createElement("tr");
  tHead.appendChild(tr);

  const zaglavlja = ["Broj", "Naziv", "Cena", "Broj artikala"];
  for (const zaglavlje of zaglavlja) {
    const th = document.createElement("th");
    const thText = document.createTextNode(zaglavlje);
    th.appendChild(thText);
    tr.appendChild(th);
    th.style.backgroundColor = "lightgray";
    th.style.padding = '10px';
  }

  return tHead;
}

function napraviTeloTabele() {
  const tBody = document.createElement("tbody");

  for (const redniBroj in proizvodi) {
    const proizvod = proizvodi[redniBroj];
    const tr = document.createElement("tr");
    tBody.appendChild(tr);

    if (parseInt(redniBroj) % 2 === 0) {
        tr.style.backgroundColor = 'violet';
    }

    const broj = document.createElement("td");
    const brojText = document.createTextNode(parseInt(redniBroj) + 1);
    broj.appendChild(brojText);
    tr.appendChild(broj);
    broj.style.textAlign = 'center';

    const polja = ["naziv", "cena", "brojArtikala"];
    for (const polje of polja) {
        const td = document.createElement("td");
        const tdText = document.createTextNode(proizvod[polje]);
        td.appendChild(tdText);
        tr.appendChild(td);
        td.style.padding = '10px';

        if (polje !== 'naziv') {
            td.style.textAlign = 'center';
        }
    }
  }

  return tBody;
}
