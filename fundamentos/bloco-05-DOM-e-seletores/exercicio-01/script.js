const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

const title = document.getElementById('page-title')
title.innerText = 'Veneno Para Las Hadas'

const secondParagraph = document.getElementById('second-paragraph')
secondParagraph.innerText = '"Hylea prefers the worship of two children singing over a thousand petitioners silently praying for victory."'
secondParagraph.style.backgroundColor = 'pink'
secondParagraph.style.fontStyle = 'italic'
secondParagraph.style.height = '90px'
secondParagraph.style.fontSize = '25px'

const subtitleEl = document.getElementById('subtitle')
subtitleEl.innerText = "Hi, I'm Hylea!"

const paragraphsEl = document.getElementsByClassName('paragraphs')
paragraphsEl[0].style.backgroundColor = 'pink'

const subtitleEl2 = document.getElementsByTagName('h4')
subtitleEl2[0].style.color = 'green'