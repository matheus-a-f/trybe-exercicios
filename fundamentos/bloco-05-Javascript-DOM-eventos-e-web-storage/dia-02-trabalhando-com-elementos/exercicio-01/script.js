const daddy = document.getElementById('pai')

//accesses section element elementoOndeVoceEsta
const whereRU = daddy.firstElementChild.nextElementSibling

//colors whereRU parent element red
whereRU.parentElement.style.color = 'red'

//accesses primeiroFilhoDoFilho and changes its inner text
const firstChild = whereRU.firstElementChild
firstChild.innerText = 'Red sus'

//accesses primeiroFilho from pai
daddy.firstElementChild

//accesses primeiroFilho from elementoOndeVoceEsta
whereRU.previousElementSibling

//accesses "Atenção!" text node from elementoOndeVoceEsta
whereRU.nextSibling

//accesses terceiroFilho from elementoOndeVoceEsta
whereRU.nextElementSibling

//accesses terceiroFilho from pai
daddy.children[2]