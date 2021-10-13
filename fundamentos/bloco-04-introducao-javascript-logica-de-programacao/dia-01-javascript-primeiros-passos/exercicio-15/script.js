function liquidCalculator(salarioBruto){
    let INSS;
    let IR;
    let salarioBase;
    let salarioLiquido;

    if (salarioBruto <= 1556.94){
        INSS = 0.08 * salarioBruto
    }
    else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
        INSS = 0.09 * salarioBruto
    }
    else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.92){
        INSS = 0.11 * salarioBruto
    }
    else {
        INSS = 570.88
    }


    salarioBase = salarioBruto - INSS 


    if (salarioBase <= 1903.98){
        IR = 0
    }
    else if (salarioBase >= 1903.99 && salarioBase <= 2826.25){
        IR = (0.075 * salarioBase) - 142.80
    }
    else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
        IR = (0.15 * salarioBase) - 354.80
    }
    else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
        IR = (0.225 * salarioBase) - 636.13
    }
    else {
        IR = (0.275 * salarioBase) - 869.36
    }


    salarioLiquido = salarioBase - IR


    return salarioLiquido;
}

console.log(liquidCalculator(3000)) //Passe o salário bruto como parâmetro dessa função para
                                    // descobrir o salário líquido