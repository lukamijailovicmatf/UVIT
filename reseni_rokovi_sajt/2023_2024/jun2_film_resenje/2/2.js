let table = document.getElementsByTagName('table')[0]
let boja = document.getElementById('boja')
let clear = document.getElementById('clear')

let op1 = document.getElementById('op1')
let op2 = document.getElementById('op2')
let op3 = document.getElementById('op3')
let op4 = document.getElementById('op4')

let opcije = [
    {tabela: [
        [1,0,0,0,0,0,0,0,0,1],
        [0,1,0,0,0,0,0,0,1,0],
        [0,0,1,0,0,0,0,1,0,0],
        [0,0,0,1,0,0,1,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,1,0,0,1,0,0,0],
        [0,0,1,0,0,0,0,1,0,0],
        [0,1,0,0,0,0,0,0,1,0],
        [1,0,0,0,0,0,0,0,0,1]
    ]},
    {tabela: [
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1]
    ]},
    {tabela: [
        [1,1,0,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,0,0,0,1,0],
        [0,0,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,0,0,1,1,1,0,1],
        [1,1,0,0,1,1,0,0,1,0],
        [0,1,0,1,0,1,1,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1]
    ]},
    {tabela: [
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1]
    ]}
]

op1.onclick = ()=>{createTableWithPattern(opcije[0].tabela)}
op2.onclick = ()=>{createTableWithPattern(opcije[1].tabela)}
op3.onclick = ()=>{createTableWithPattern(opcije[2].tabela)}
op4.onclick = ()=>{createTableWithPattern(opcije[3].tabela)}


function createTable(){
    table.innerHTML = ""
    for (let i=0; i<10; i++){
        let tr = document.createElement('tr')
        table.appendChild(tr)
        for(let i=0; i<10; i++){
            let td = document.createElement('td')
            tr.appendChild(td)        
            td.style.border = 'solid black 2px'
            td.style.width = '10px'
            td.style.height = '10px'
            td.style.borderRadius = '50%'
            td.addEventListener('click', function(){
                td.style.backgroundColor = boja.value
            })
            
        }
    }
}

function createTableWithPattern(obj){
    table.innerHTML = ""
    for (let i=0; i<10; i++){
        let tr = document.createElement('tr')
        table.appendChild(tr)
        for(let j=0; j<10; j++){
            let td = document.createElement('td')
            tr.appendChild(td)        
            td.style.border = 'solid black 2px'
            td.style.width = '10px'
            td.style.height = '10px'
            td.style.borderRadius = '50%'
            if(obj[i][j])
                td.style.backgroundColor = boja.value
            td.addEventListener('click', function(){
                td.style.backgroundColor = boja.value
            })
            
        }
    }
}

clear.addEventListener('click', function(){
    createTable()
})

