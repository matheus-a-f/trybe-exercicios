let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//exercício 01
console.log('Bem-vinda, ' + info.personagem + '!')

//exercício 02
info['recorrente'] = 'Sim'

console.log(info)

//exercício 03
for (let i in info){
    console.log(i)
}

//exercício 04
for (let i in info){
    console.log(info[i])
}

//exercício 05
let moreInfo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

let output = ''

for (let i in info){
    for (let y in moreInfo){
        output += info[i] + ' e ' + moreInfo[y]
    }
    output += '\n'
}

console.log(output)