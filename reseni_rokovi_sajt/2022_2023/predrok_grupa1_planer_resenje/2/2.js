

let table = document.querySelector('table');

if(table != null){
    table.style.margin = 'auto'
    generate(table);
}

function generate(table){
    for(let i=0; i<10; i++){
        let tr = document.createElement('tr');
        table.append(tr);

        for(let j=0; j<10; j++){
            let td = document.createElement('td');
            tr.append(td)
            td.style.height = '50px';
            td.style.width = '50px';
            if(Math.random()<0.5){
                td.style.backgroundColor = 'red'
            } else {
                td.style.backgroundColor = 'green'
            }
            td.addEventListener('click', function(){
                if(td.style.backgroundColor == 'red'){
                    td.style.backgroundColor = 'green';
                } else {
                    td.style.backgroundColor = 'red'
                }
            })
        }
    
    }
}

