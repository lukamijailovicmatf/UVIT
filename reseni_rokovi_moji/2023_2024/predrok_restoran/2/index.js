const recipes = [
    {
        name: 'Pizza Margherita', 
        image: 'pizza.jpg'
    },
    {
        name: 'Spaghetti alla Carbonara', 
        image: 'carbonara.jpg'
    },
    {
        name: 'Lasagne', 
        image: 'lasagne.jpg'
    },
    {
        name: 'Fettuccine Alfredo', 
        image: 'fettuccine.jpg'
    },
    {
        name: 'Spaghetti Bolognese', 
        image: 'bolognese.jpg'
    },
    {
        name: 'Spinach & Ricotta Cannelloni', 
        image: 'cannelloni.jpg'
    }
];

const wrapper = document.getElementById('wrapper');
 
/* 
    Prolazimo kroz svaki recept iz niza i za svaki:
    1. kreiramo <p> element sa nazivom recepta
    2. kreiramo <img> element sa slikom recepta
    3. ubacujemo ih u wrapper div 
*/
for (let i = 0; i < recipes.length; i++) {
 
    const recept = recipes[i];
 
    /* Naziv recepta u paragrafu */
    const naziv = document.createElement('p');
    naziv.textContent = recept.name;
    wrapper.appendChild(naziv);
 
    /* Slika recepta */
    const slika = document.createElement('img');
    slika.src   = recept.image;       /* putanja do slike */
    slika.alt   = recept.name;        /* alternativni tekst = naziv recepta */
    slika.width = 200;                /* sirina slike kao na prikazu sa roka */
    wrapper.appendChild(slika);
}