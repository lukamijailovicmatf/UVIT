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
]




const tabela = document.getElementById('tabela')

tabela.style.width = '80%'
tabela.style.margin = 'auto'

for (let album of albums){
    let tr = document.createElement('tr')
    tabela.appendChild(tr)
    
    let td1 = document.createElement('td')
    tr.appendChild(td1)
    td1.textContent = album.album
    td1.style.fontWeight = 'bold'


    let td2 = document.createElement('td')
    tr.appendChild(td2)
    td2.textContent = album.tracks

    tr.style.backgroundColor = album.color
    tr.style.color = album.textColor
    td1.style.padding = '20px'
    td2.style.padding = '20px'
}