let albums = [
  {
    "album": "Taylor Swift",
    "year": 2006,
    "tracks": 15,
    "color": "rgb(245, 222, 179)",
    "textColor": "black"
  },
  {
    "album": "Fearless",
    "year": 2008,
    "tracks": 13,
    "color": "rgb(255, 215, 0)",
    "textColor": "black"
  },
  {
    "album": "Speak Now",
    "year": 2010,
    "tracks": 14,
    "color": "rgb(186, 85, 211)",
    "textColor": "white"
  },
  {
    "album": "Red",
    "year": 2012,
    "tracks": 16,
    "color": "rgb(220, 20, 60)",
    "textColor": "white"
  },
  {
    "album": "1989",
    "year": 2014,
    "tracks": 13,
    "color": "rgb(70, 130, 180)",
    "textColor": "white"
  },
  {
    "album": "reputation",
    "year": 2017,
    "tracks": 15,
    "color": "rgb(20, 20, 20)",
    "textColor": "white"
  },
  {
    "album": "Lover",
    "year": 2019,
    "tracks": 18,
    "color": "rgb(255, 182, 193)",
    "textColor": "black"
  },
  {
    "album": "folklore",
    "year": 2020,
    "tracks": 16,
    "color": "rgb(112, 123, 105)",
    "textColor": "white"
  },
  {
    "album": "evermore",
    "year": 2020,
    "tracks": 15,
    "color": "rgb(101, 67, 33)",
    "textColor": "white"
  },
  {
    "album": "Midnights",
    "year": 2022,
    "tracks": 13,
    "color": "rgb(25, 25, 112)",
    "textColor": "white"
  },
  {
    "album": "The Tortured Poets Department",
    "year": 2024,
    "tracks": 17,
    "color": "rgb(88, 24, 69)",
    "textColor": "white"
  },
  {
    "album": "The Life of a Showgirl",
    "year": 2025,
    "tracks": 12,
    "color": "rgb(255, 140, 0)",
    "textColor": "black"
  }
];

const tabela = document.getElementById('tabela');

// postavljamo sirinu same tabele
tabela.style.width = "80%";
tabela.style.fontFamily = "Arial, sans-serif";
tabela.style.margin = "auto";

// stilzacija zaglavlja
let zaglavlja = tabela.querySelectorAll('th');
zaglavlja.forEach(th => {
    th.style.padding = "20px";
    th.style.textAlign = "center";
});

albums.forEach(stavka => {
    let red = document.createElement('tr');

    // boje reda iz niza
    red.style.backgroundColor = stavka.color;
    red.style.color = stavka.textColor;
    
    // celija za album
    let celijaAlbum = document.createElement('td');
    celijaAlbum.textContent = stavka.album;
    celijaAlbum.style.padding = "15px"; 
    celijaAlbum.style.fontWeight = "bold";

    // celija za broj pesama
    let celijaPesma = document.createElement('td');
    celijaPesma.textContent = stavka.tracks;
    celijaPesma.style.padding = "15px";
    celijaPesma.style.textAlign = "left";

    red.appendChild(celijaAlbum);
    red.appendChild(celijaPesma);
    tabela.appendChild(red);
});