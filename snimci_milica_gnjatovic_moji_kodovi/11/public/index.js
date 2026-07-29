let form = document.getElementsByTagName('form')

if (form.length != 0) {
    form = form[0];
    form.addEventListener('submit', function(event) {
        let ime = document.getElementById('ime')
        let sifra = document.getElementById('sifra')
        if (ime == null || sifra == null) {
            console.log("Greska, fale polja.")
            event.preventDefault()
            return
        }
        let imeStr = ime.value.trim()
        let sifraStr = sifra.value.trim()
        if (imeStr == "" || sifraStr == "") {
            event.preventDefault()
            console.log("Greska, prazna polja.")
            return
        }
    })
}