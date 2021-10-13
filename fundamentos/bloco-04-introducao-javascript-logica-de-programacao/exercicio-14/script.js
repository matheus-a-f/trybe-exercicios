const productPrice = 140
const salePrice = 200
const tax = 0.2 * productPrice
const totalCost = productPrice + tax
const oneSaleGain = salePrice - totalCost
let bulkSaleGain;

function gainCalculator(totalCost, salePrice, ammount){
    if (totalCost <= 0 || salePrice <= 0 || ammount < 0){
        console.log('Invalid parameter passed.')
    }
    else{
        bulkSaleGain = (salePrice - totalCost) * ammount
        return bulkSaleGain
    }
    
}

console.log(gainCalculator(totalCost, salePrice, 1000))