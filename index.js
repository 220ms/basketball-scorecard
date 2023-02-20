



function reset(){
    // reset the scores
    let home = document.getElementById('home-score')
    let away = document.getElementById('away-score')
    home.textContent = 0
    away.textContent = 0
}

function add1home(){
    let home = document.getElementById('home-score')
    home.textContent = parseInt(home.textContent) + 1
}

function add2home(){
    let home = document.getElementById('home-score')

    home.textContent = parseInt(home.textContent) + 2
}

function add3home(){
    let home = document.getElementById('home-score')
    home.textContent = parseInt(home.textContent) + 3
}

function add1away(){
    let away = document.getElementById('away-score')
    away.textContent = parseInt(away.textContent) + 1
}

function add2away(){
    let away = document.getElementById('away-score')
    away.textContent = parseInt(away.textContent) + 2
}

function add3away(){
    let away = document.getElementById('away-score')
    away.textContent = parseInt(away.textContent) + 3
}

