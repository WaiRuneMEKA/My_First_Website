function calculate(){
    const price = Number(document.getElementById('price').value)
    const item = Number(document.getElementById('items').value)
    let result = 0

for (let i = 1 ; i <= item ; i++){
    result += price
}
document.getElementById('total').innerHTML = result
}