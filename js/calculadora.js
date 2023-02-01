
var count = []


var total = document.getElementById('total')
var acumulador = document.getElementById('res1')
function AddNumber(num) {
    if (total.innerHTML.length < 10){
        total.innerHTML += num
    }
}

function CalcAction(action) {
    if (total.innerHTML.length == 0){
        return
    } else {
        acumulador.innerHTML += ` ${total.innerHTML} ${action}`
        
        total.innerHTML = ''
        
    }
}

function c() {
    total.innerHTML = ''
    acumulador.innerHTML = ''
    count = []
}

function flutuante() {
    if (total.innerHTML.indexOf('.') == -1){
        total.innerHTML += '.'
    }
}

function ce() {
    total.innerHTML = total.innerHTML.substring(0, total.innerHTML.length -1)
}

function resultado() {
    count.push(acumulador.innerHTML.split(' ', ''))
    window.alert(count)
}