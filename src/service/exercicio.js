class ServiceExercicio {

    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar somente números")
        }
        return num1 + num2
    }
    
    Sub(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar somente números")
        }
        return num1 - num2
    }
    
    Mult(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar somente números")
        }
        return num1 * num2
    }
    
    Div(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar somente números")
        }
        if(num2 === 0) {
            throw new Error("Não é poss~ivel div por 0")
        }
        return num1 / num2
    }
    
    Pot(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar somente números")
        }
        return num1 ** num2
    }
    
    Raiz(num1) {
        if(isNaN(num1)) {
            throw new Error("Favor informar somente números")
        }
        return num1 ** 0.5
    }
}

export default new ServiceExercicio()