function paragraphChanger(path, string){
    let selectedParagraph = document.querySelector(path)
    selectedParagraph.innerText = string
}

let in2years = 'Em dois anos eu me vejo como um ciborgue geneticamente e ciberneticamente modificado.'

paragraphChanger('.center-content p', in2years)

function colorChanger(path, color){
    let selectedSection = document.querySelector(path)
    selectedSection.style.backgroundColor = color
}

colorChanger('.main-content', 'rgb(76,164,109)')

colorChanger('.center-content', 'white')

paragraphChanger('.title', 'Exercício 5.1 - JavaScript')

function paragraphDisplay(path){
    let selected = document.querySelectorAll(path)
    for(let i = 0; i < selected.length; i++){
        console.log(selected[i])
    }
}

paragraphDisplay('.center-content p')
