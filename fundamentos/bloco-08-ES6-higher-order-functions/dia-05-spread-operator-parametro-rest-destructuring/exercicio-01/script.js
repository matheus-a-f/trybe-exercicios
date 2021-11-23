// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'mango', 'blueberry'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['honey', 'peanut candy', 'ovaltine'];

const fruitSalad = (fruit, additional) => {
    const salad = [...fruit, ...additional]
    return salad
} ;

console.log(fruitSalad(specialFruit, additionalItens));