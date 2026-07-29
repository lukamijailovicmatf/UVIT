Predstave = [
    {
        'naslov' : 'Edip',
        'dostupno' : 0
    },
    {
        'naslov' : 'Pučina',
        'dostupno' : 12
    },
    {
        'naslov' : 'Razvojni put Bore šnajdera',
        'dostupno' : 24
    },
    {
        'naslov' : 'Vrat od stakla',
        'dostupno' : 0
    },
    {
        'naslov' : 'Muška suza',
        'dostupno' : 17
    },
    {
        'naslov' : 'Ujka Vanja',
        'dostupno' : 21
    },
    {
        'naslov' : 'Limeni Doboš',
        'dostupno' : 32
    }
]

const lista = document.querySelector('ul');
Predstave.forEach(predstava => {
    const li = document.createElement('li');
    li.textContent = predstava.naslov;
    if (predstava.dostupno === 0) {
        li.style.color = 'red';
    }
    lista.appendChild(li);
});