const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')
const buttons = [...document.querySelectorAll('#buttons-container > button')]


class calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ''
    }

    // Adiciona digitos na tela da calculadora
    addDigit(digit) {
        // checar se currentOperation já tem um pont
        if (digit == '.' && currentOperationText.innerText.includes('.')){
            return
        }
        this.currentOperation = digit
        this.updateScreen()
    }

    // Processa todas as operações da calculadora
    processOperation(operation) {
        // Checar se o current value está vazio
        if (this.currentOperationText.innerText === '' && operation !== "C") {
            // Mudança de operação
            if(this.previousOperationText.innerText !== ""){
                this.changeOperation(operation)
            }
            return
        }

        // Pega current e previous valores
        let operationValue
        const previous = +this.previousOperationText.innerText.split(" ")[0]
        const current = +this.currentOperationText.innerText

        switch(operation) {
            case '+':
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break
             case '-':
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break
             case '/':
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break
             case 'x':
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
                break
            case 'DEL':
                this.processDelOperator()
                break
            case 'CE':
                this.processClearCurrentOperation()
                break
            case 'C':
                this.processClearAllOperation()
            case '=':
                this.processEqual()
            default:
                return
        }
    }


    // Muda os valores da tela da calculadora
    updateScreen(operationValue = null, operation = null, current = null, previous = null) {
        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation
        } else {
            // checagem se value é zero, se isso é somente a adição do current value
            if (previous === 0) {
                operationValue = current
            }

            // Adiciona o valor current para o previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = ''
        }

    }
    //Muda a operação matemática
    changeOperation(operation) {
        const mathOperations = ['*', '/', '+', '-']
        if (!mathOperations.includes(operation)) {
            return
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation
    }

    // Deleta o último digito
    processDelOperator() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
        //slice(0, -1) remove o último digito
    }

    // Apaga o current operation
    processClearCurrentOperation() {
        this.currentOperationText.innerText = ''
        
    }

    // Apaga tudo
    processClearAllOperation() {
        this.currentOperationText.innerText = ''
        this.previousOperationText.innerText = ''
    }

    // Resultado
    processEqual() {
        const operation = previousOperationText.innerText.split(' ')[1]

        this.processOperation(operation)
    }
}

const calc = new calculator(previousOperationText, currentOperationText)


buttons.map((el) => {
    el.addEventListener('click', (e) => {
        const value = e.target.innerText
        

        if(+value >= 0 || value == '.') {
            calc.addDigit(value)
        } else {
            calc.processOperation(value)
        }
    })
})
