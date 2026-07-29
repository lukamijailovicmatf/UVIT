const podaci = [
    { "ime": "Pinokio", "dobro": true },
    { "ime": "Uršula", "dobro": false },
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
    { "ime": "Snežana", "dobro": true },
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
    { "ime": "Uršula", "dobro": false },
    { "ime": "Alisa", "dobro": true },
    { "ime": "Kruela de Vil", "dobro": false },
    { "ime": "Merida", "dobro": true },
    { "ime": "Zla kraljica", "dobro": false },
    { "ime": "Pepeljuga", "dobro": true },
    { "ime": "Vuk", "dobro": false },
    { "ime": "Moana", "dobro": true },
    { "ime": "Pepeljuga", "dobro": true },
    { "ime": "Simba", "dobro": true },
    { "ime": "Snežana", "dobro": true }
];


const dobro = document.getElementById('dobra_deca')

for (const delo of podaci){
    let el = document.createElement('li')
    el.textContent = delo.ime
    dobro.append(el)

    if(delo.dobro){
        el.style.color = 'green'
        el
    } else {
        el.style.color = 'red'
        el.style.border = 'solid red 1px'
        el.style.width = '150px'
    }
}