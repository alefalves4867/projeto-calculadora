/*
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
    */

/*let valores = []
let sinais = []
let telaPrincipal = document.querySelector('#total')
let telaSec = document.querySelector('#res1')
function c(){
    valores = []
    telaPrincipal.innerHTML = ''
    telaSec.innerHTML = ''
    sinais = []
}
function ce(){
    
    telaPrincipal.innerHTML = telaPrincipal.innerHTML.substring(0, telaPrincipal.innerHTML.length -1)
    
    
}
/*num*/
/*

function AddNumber(num){
    
    if(telaPrincipal.innerHTML.length < 10){
        telaPrincipal.innerHTML += num

    }

    if (telaSec.innerHTML.length%2 == 0 && telaSec.innerHTML.length > 0){
        window.alert(telaSec.innerHTML.length)
    } 
}

function CalcAction(acao){
    if(telaPrincipal.innerHTML.length == 0){
        return
    } else {

      
        valores.push(Number(telaPrincipal.innerHTML))
        /*window.alert(typeof(valores))
        window.alert(valores)*//*
        sinais.push(acao)
        
        telaSec.innerHTML += telaPrincipal.innerHTML + ' ' + acao + ' '
        telaPrincipal.innerHTML = ''
    }
}
function flutuante() {
    if (telaPrincipal.innerHTML.indexOf('.') == -1){
        telaPrincipal.innerHTML += '.'
    }
}

function resultado() {
    if(valores.length == 0){
        return
    } else {
        
        
    }
}
*/