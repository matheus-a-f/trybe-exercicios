function triangleMaker(size){
   let output = ''

   for (let x = 0; x <= size; x++){
       for (let y = 0; y < x; y++){
           output += '*'
       }
       output += '\n'
   }
   return output
}

console.log(triangleMaker(5))

// function xperiment(size){
//     let output = ''

//     for (let x = 0; x <= size; x++){
//         output += '\n'
//     }   for (let y = 0; y < x; y++){
//             output += '*'
//     }
//     return output
// }