const podaci = [
    { "ime": "Pinokio", "dobro": true },
    { "ime": "Ursula", "dobro": false },
    { "ime": "Baymax", "dobro": true },
    { "ime": "Gaston", "dobro": false },
    { "ime": "Simba", "dobro": true },
    { "ime": "Zla kraljica", "dobro": false },
    { "ime": "Petar Pan", "dobro": true },
    { "ime": "Hans", "dobro": false },
    { "ime": "Elsa", "dobro": true },
    { "ime": "Skar", "dobro": false },
    { "ime": "Moana", "dobro": true },
    { "ime": "Kapetan Kuka", "dobro": false },
    { "ime": "Robin Hud", "dobro": true },
    { "ime": "Doktor Facilier", "dobro": false },
    { "ime": "Snezana", "dobro": true },
    { "ime": "Lotso", "dobro": false },
    { "ime": "Dory", "dobro": true },
    { "ime": "Zla vila Maleficent", "dobro": false },
    { "ime": "Miki Maus", "dobro": true },
    { "ime": "Zla kraljica", "dobro": false },
    { "ime": "Bambi", "dobro": true },
    { "ime": "Kruela de Vil", "dobro": false },
    { "ime": "Dambo", "dobro": true },
    { "ime": "Skar", "dobro": false },
    { "ime": "Aurora", "dobro": true },
    { "ime": "Ursula", "dobro": false },
    { "ime": "Alisa", "dobro": true },
    { "ime": "Kruela de Vil", "dobro": false },
    { "ime": "Merida", "dobro": true },
    { "ime": "Zla kraljica", "dobro": false },
    { "ime": "Pepeljuga", "dobro": true },
    { "ime": "Vuk", "dobro": false },
    { "ime": "Moana", "dobro": true },
    { "ime": "Pepeljuga", "dobro": true },
    { "ime": "Simba", "dobro": true },
    { "ime": "Snezana", "dobro": true }
];

const listaElement = document.getElementById('lista');

podaci.forEach(dete => {
    // kreiramo stavku liste (li)
    const stavka = document.createElement('li');
    stavka.textContent = dete.ime;
    
    // podesavamo stilove
    stavka.style.marginBottom = "2px";
    // da okvir ne ide celom sirinom ekrana
    stavka.style.width = "130px";

    if (dete.dobro) {
        // dobra deca: samo zelena boja, bez ikakvog okvira
        stavka.style.color = "green";
    } else {
        // losa deca: crvena boja i crveni okvir
        stavka.style.color = "red";
        stavka.style.border = "1px solid red"; 
    }

    // dodajemo stavku u listu
    listaElement.appendChild(stavka);
});