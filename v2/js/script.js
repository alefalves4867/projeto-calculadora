const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')
const buttons = [...document.querySelectorAll('#buttons-container > button')]


class calculator {}

buttons.map((el) => {
    el.addEventListener('click', (e) => {
        const value = e.target.innerText
        

        if(+value >= 0 || value == '.') {
            console.log(value)
        } else {
            console.log(`Operação ${value}`)
        }
    })
})


console.log(buttons)