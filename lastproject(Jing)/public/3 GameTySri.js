function sri() {
    let score = 1
    let sri = Math.floor(Math.random() * 10)
    console.log(sri)
    let round = parseInt(prompt('How many rounds do you want to guess ?-?'))
    
    if(isNaN(round)){
        alert('Use only NUMBER bi*ch !!')
    }
    else{
        for (let x = 0 ; x < round ; x++){
            let colorguess = prompt('Whaa Color Do U Tink ?-?')
            if (score < round){
                if (sri == 0){
                    if (colorguess == 'Brown' || colorguess == 'สีน้ำตาล' || colorguess == 'น้ำตาล'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Circle_Brown_Solid.svg/1024px-Circle_Brown_Solid.svg.png"
                        document.getElementById('FIans').innerHTML = 'สีน้ำตาล/น้ำตาล/Brown'
                        break
                    }
                    else {
                        alert('Try again BOI!')
                        score++
                    }
                }
                else if (sri == 1){
                    if (colorguess == 'Purple' || colorguess == 'สีม่วง' || colorguess == 'ม่วง'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/b/b7/Purple_Circle.png"
                        document.getElementById('FIans').innerHTML = 'สีม่วง/ม่วง/Purple'
                        break
                    }
                    else {
                        alert('Try again BOI!')
                        score++
                    }
                }
                else if (sri == 2){
                    if (colorguess == 'Pink' || colorguess == 'สีชมพู' || colorguess == 'ชมพู'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "pink.png"
                        document.getElementById('FIans').innerHTML = 'สีชมพู/มพู/Pink'
                        break
                    }
                    else {
                        alert('Try again BOI!')
                        score++
                    }
                }
                else if (sri == 3){
                    if (colorguess == 'Red' || colorguess == 'สีแดง' || colorguess == 'แดง'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "red.png"
                        document.getElementById('FIans').innerHTML = 'สีแดง/แดง/Red'
                        break
                    }
                    else {
                        alert('Try again BOI!')
                        score++
                    }
                }
                else if (sri == 4){
                    if (colorguess == 'Orange' || colorguess == 'สีส้ม' || colorguess == 'ส้ม'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "orange.png"
                        document.getElementById('FIans').innerHTML = 'สีส้ม/ส้ม/Orange'
                        break
                    }
                    else {
                        alert('Try again BOI!')
                        score++
                    }
                }
                else if (sri == 5){
                    if (colorguess == 'Yellow' || colorguess == 'สีเหลือง' || colorguess == 'เหลือง'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Yellow_icon.svg/1024px-Yellow_icon.svg.png"
                        document.getElementById('FIans').innerHTML = 'สีเหลือง/เหลือง/Yellow'
                        break
                    }
                    else {
                        alert('Try again BOI!')
                        score++
                    }
                }
                else if (sri == 6){
                    if (colorguess == 'Lime' || colorguess == 'สีเขียวอ่อน' || colorguess == 'เขียวอ่อน'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "lime.png"
                        document.getElementById('FIans').innerHTML = 'สีเขียวอ่อน/เขียวอ่อน/Lime'
                        break
                    }
                    else {
                        alert('Try again BOI!')
                        score++
                    }
                }
                else if (sri == 7){
                    if (colorguess == 'Green' || colorguess == 'สีเขียว' || colorguess == 'เขียว'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LACMTA_Circle_Green_Line.svg/1200px-LACMTA_Circle_Green_Line.svg.png"
                        document.getElementById('FIans').innerHTML = 'สีเขียว/เขียว/Green'
                        break
                    }
                    else {
                        alert('Try again BOI!')
                        score++
                    }
                }
                else if (sri == 8){
                    if (colorguess == 'Cyan' || colorguess == 'สีฟ้า' || colorguess == 'ฟ้า'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Disc_Plain_cyan.svg/1200px-Disc_Plain_cyan.svg.png"
                        document.getElementById('FIans').innerHTML = 'สีฟ้า/ฟ้า/Cyan'
                        break
                    }
                    else {
                        alert('Try again BOI!')
                        score++
                    }
                }
                else if (sri == 9){
                    if (colorguess == 'Blue' || colorguess == 'สีน้ำเงิน' || colorguess == 'น้ำเงิน'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png"
                        document.getElementById('FIans').innerHTML = 'สีน้ำเงิน/น้ำเงิน/Blue'
                        break
                    }
                    else {
                        alert('Try again BOI!')
                        score++
                    }
                }
            }  
            else if (score == round){
                if (sri == 0){
                    if (colorguess == 'Brown' || colorguess == 'สีน้ำตาล' || colorguess == 'น้ำตาล'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Circle_Brown_Solid.svg/1024px-Circle_Brown_Solid.svg.png"
                        document.getElementById('FIans').innerHTML = 'สีน้ำตาล/น้ำตาล/Brown'
                        break
                    }
                    else {
                        alert('Incorrect!!! XDD')
                        alert('Game OVER cuz run out of round OKEY!?!?!?!? Noob!!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Circle_Brown_Solid.svg/1024px-Circle_Brown_Solid.svg.png"
                        document.getElementById('FIans').innerHTML = 'สีน้ำตาล/น้ำตาล/Brown'
                    }
                }
                else if (sri == 1){
                    if (colorguess == 'Purple' || colorguess == 'สีม่วง' || colorguess == 'ม่วง'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/b/b7/Purple_Circle.png"
                        document.getElementById('FIans').innerHTML = 'สีม่วง/ม่วง/Purple'
                        break
                    }
                    else {
                        alert('Incorrect!!! XDD')
                        alert('Game OVER cuz run out of round OKEY!?!?!?!? Noob!!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/b/b7/Purple_Circle.png"
                        document.getElementById('FIans').innerHTML = 'สีม่วง/ม่วง/Purple'
                    }
                }
                else if (sri == 2){
                    if (colorguess == 'Pink' || colorguess == 'สีชมพู' || colorguess == 'ชมพู'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "pink.png"
                        document.getElementById('FIans').innerHTML = 'สีชมพู/มพู/Pink'
                        break
                    }
                    else {
                        alert('Incorrect!!! XDD')
                        alert('Game OVER cuz run out of round OKEY!?!?!?!? Noob!!')
                        document.getElementById('resalt').src = "pink.png"
                        document.getElementById('FIans').innerHTML = 'สีชมพู/มพู/Pink'
                    }
                }
                else if (sri == 3){
                    if (colorguess == 'Red' || colorguess == 'สีแดง' || colorguess == 'แดง'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "red.png"
                        document.getElementById('FIans').innerHTML = 'สีแดง/แดง/Red'
                        break
                    }
                    else {
                        alert('Incorrect!!! XDD')
                        alert('Game OVER cuz run out of round OKEY!?!?!?!? Noob!!')
                        document.getElementById('resalt').src = "red.png"
                        document.getElementById('FIans').innerHTML = 'สีแดง/แดง/Red'
                    }
                }
                else if (sri == 4){
                    if (colorguess == 'Orange' || colorguess == 'สีส้ม' || colorguess == 'ส้ม'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "orange.png"
                        document.getElementById('FIans').innerHTML = 'สีส้ม/ส้ม/Orange'
                        break
                    }
                    else {
                        alert('Incorrect!!! XDD')
                        alert('Game OVER cuz run out of round OKEY!?!?!?!? Noob!!')
                        document.getElementById('resalt').src = "orange.png"
                        document.getElementById('FIans').innerHTML = 'สีส้ม/ส้ม/Orange'
                    }
                }
                else if (sri == 5){
                    if (colorguess == 'Yellow' || colorguess == 'สีเหลือง' || colorguess == 'เหลือง'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Yellow_icon.svg/1024px-Yellow_icon.svg.png"
                        document.getElementById('FIans').innerHTML = 'สีเหลือง/เหลือง/Yellow'
                        break
                    }
                    else {
                        alert('Incorrect!!! XDD')
                        alert('Game OVER cuz run out of round OKEY!?!?!?!? Noob!!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Yellow_icon.svg/1024px-Yellow_icon.svg.png"
                        document.getElementById('FIans').innerHTML = 'สีเหลือง/เหลือง/Yellow'
                    }
                }
                else if (sri == 6){
                    if (colorguess == 'Lime' || colorguess == 'สีเขียวอ่อน' || colorguess == 'เขียวอ่อน'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "lime.png"
                        document.getElementById('FIans').innerHTML = 'สีเขียวอ่อน/เขียวอ่อน/Lime'
                        break
                    }
                    else {
                        alert('Incorrect!!! XDD')
                        alert('Game OVER cuz run out of round OKEY!?!?!?!? Noob!!')
                        document.getElementById('resalt').src = "lime.png"
                        document.getElementById('FIans').innerHTML = 'สีเขียวอ่อน/เขียวอ่อน/Lime'
                    }
                }
                else if (sri == 7){
                    if (colorguess == 'Green' || colorguess == 'สีเขียว' || colorguess == 'เขียว'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LACMTA_Circle_Green_Line.svg/1200px-LACMTA_Circle_Green_Line.svg.png"
                        document.getElementById('FIans').innerHTML = 'สีเขียว/เขียว/Green'
                        break
                    }
                    else {
                        alert('Incorrect!!! XDD')
                        alert('Game OVER cuz run out of round OKEY!?!?!?!? Noob!!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LACMTA_Circle_Green_Line.svg/1200px-LACMTA_Circle_Green_Line.svg.png"
                        document.getElementById('FIans').innerHTML = 'สีเขียว/เขียว/Green'
                    }
                }
                else if (sri == 8){
                    if (colorguess == 'Cyan' || colorguess == 'สีฟ้า' || colorguess == 'ฟ้า'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Disc_Plain_cyan.svg/1200px-Disc_Plain_cyan.svg.png"
                        document.getElementById('FIans').innerHTML = 'สีฟ้า/ฟ้า/Cyan'
                        break
                    }
                    else {
                        alert('Incorrect!!! XDD')
                        alert('Game OVER cuz run out of round OKEY!?!?!?!? Noob!!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Disc_Plain_cyan.svg/1200px-Disc_Plain_cyan.svg.png"
                        document.getElementById('FIans').innerHTML = 'สีฟ้า/ฟ้า/Cyan'
                    }
                }
                else if (sri == 9){
                    if (colorguess == 'Blue' || colorguess == 'สีน้ำเงิน' || colorguess == 'น้ำเงิน'){
                        alert('Yahh!! Correct biech!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png"
                        document.getElementById('FIans').innerHTML = 'สีน้ำเงิน/น้ำเงิน/Blue'
                        break
                    }
                    else {
                        alert('Incorrect!!! XDD')
                        alert('Game OVER cuz run out of round OKEY!?!?!?!? Noob!!')
                        document.getElementById('resalt').src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png"
                        document.getElementById('FIans').innerHTML = 'สีน้ำเงิน/น้ำเงิน/Blue'
                    }
                }
            }
         
        }
        document.getElementById("lastR").innerHTML = 'U Guessed ' + score + " times"
    }
}

function reset(){
    location.reload();
}