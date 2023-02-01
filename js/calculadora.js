
var count = []
var soma = 0

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
        count.push(Number(total.innerHTML))
        
        
    }
    
    total.innerHTML = ''
    

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
    if (count.length == 0) {
        return
    } else {

        if (isNaN(count.length -1)) {
            count.pop()
        }
        
        count.push(Number(total.innerHTML))
        total.innerHTML = ''
        
        for (var i = 0; i < count.length; i++){
            soma += count[i]
        }
        
        
        window.alert(soma)
    }
}