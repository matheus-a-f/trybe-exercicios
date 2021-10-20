//main header style
const mainHeaderEl = document.querySelector('#header-container h1')
mainHeaderEl.style.backgroundColor = 'darkolivegreen'

//emergency tasks div background color
const emergencyTasksEl = document.querySelectorAll('.emergency-tasks div')
for (let i = 0; i < emergencyTasksEl.length; i++){
    emergencyTasksEl[i].style.backgroundColor = 'salmon'
}

//emergency tasks header background color
const emergencyHeadersEl = document.querySelectorAll('.emergency-tasks h3')
for(let i = 0; i < emergencyHeadersEl.length; i++){
    emergencyHeadersEl[i].style.backgroundColor = 'darkred'
}

//non-emergency tasks div background color
const nonEmergencyTasksEl = document.querySelectorAll('.no-emergency-tasks div')
for(let i = 0; i < nonEmergencyTasksEl.length; i++){
    nonEmergencyTasksEl[i].style.backgroundColor = 'lightskyblue'
}

//non-emergency tasks header background color
const nonEmergencyHeadersEl = document.querySelectorAll('.no-emergency-tasks h3')
for (let i = 0; i < nonEmergencyHeadersEl.length; i++){
    nonEmergencyHeadersEl[i].style.backgroundColor = 'darkslategrey'
}

//footer background color
const footerEl = document.querySelector('#footer-container div')
footerEl.style.backgroundColor = 'darkolivegreen'