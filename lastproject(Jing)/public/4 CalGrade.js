function Click(){
    const score = document.getElementById('inp').value

    if (score >= 95){
        document.getElementById('grade').innerHTML = 'Grade A+'
    }

    else if (score >= 90){
        document.getElementById('grade').innerHTML = 'Grade A'
    }

    else if (score >= 85){
        document.getElementById('grade').innerHTML = 'Grade B+'
    }

    else if (score >= 80){
        document.getElementById('grade').innerHTML = 'Grade B'
    }
    else if (score == 79){
        document.getElementById('grade').innerHTML = 'Cryyyyyyyyyyyyyyyyyyy TT'
    }

    else if (score >= 75){
        document.getElementById('grade').innerHTML = 'Grade C+'
    }

    else if (score >= 70){
        document.getElementById('grade').innerHTML = 'Grade C'
    }

    else if (score >= 65){
        document.getElementById('grade').innerHTML = 'Grade D+'
    }

    else if (score >= 60){
        document.getElementById('grade').innerHTML = 'Grade D'
    }

    else if (score == 0){
        document.getElementById('grade').innerHTML = 'Kwai!!!'
    }

    else if (60 > score != 0){
        document.getElementById('grade').innerHTML = 'Grade F'
    }

    else if(isNaN()){
        document.getElementById('grade').innerHTML = 'Pls put your SCORE !'
    }
}



