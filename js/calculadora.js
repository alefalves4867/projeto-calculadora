let count = [] 

const maxVisor = 10

function AddNumber(num) {
    var total = document.getElementById('total')
    total.removeAttribute('hidden')
    if (total.innerHTML.length < maxVisor) {
        total.innerHTML += num     
    }
    
}

function CalcAction(action) {
    if (total.innerHTML.length == 0) {
        return
    }

    count.push(Number(total.innerHTML))
}

function resultado() {
    window.alert(count)
}