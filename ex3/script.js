var timeControl = false

function opneMenu(){
    let menu = document.getElementById('menu')
    let header = document.getElementById('cabecalho')

    if(menu.style.display == 'flex'){
        menu.style.display = 'none'
        header.style.bottom = 'auto'
    }else{
        menu.style.display = 'flex'
        header.style.bottom = '0'
    }
    
}


