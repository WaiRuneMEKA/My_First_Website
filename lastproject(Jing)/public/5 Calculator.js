function Click(){
    const fst = Number(document.getElementById('one').value)
    const calcu = document.getElementById('cal').value
    const sec = Number(document.getElementById('two').value)

    if (calcu == '+'){
        document.getElementById('resalt').innerHTML = fst + sec 
    }

    else if (calcu == '-'){
        document.getElementById('resalt').innerHTML = fst - sec
    }

    else if (calcu == '*'){
        document.getElementById('resalt').innerHTML = fst * sec 
    }

    else if (calcu == '/'){
        document.getElementById('resalt').innerHTML = fst / sec 
    }
    
    else if (calcu == '**'){
        document.getElementById('resalt').innerHTML = fst ** sec 
    }
}

function reset(){
    location.reload();
}