//main header style
const mainHeaderEl = document.querySelector('#header-container h1')
mainHeaderEl.style.backgroundColor = 'darkolivegreen'

//emergency tasks div background color
const emergencyTasksEl = document.querySelectorAll('.emergency-tasks div')
for (let i in emergencyTasksEl){
    emergencyTasksEl[i].style.backgroundColor = 'salmon'
}

//emergency tasks header background color
const emergencyHeadersEl = document.querySelectorAll('.emergency-tasks h3')
for(let i in emergencyHeadersEl){
    emergencyHeadersEl[i].style.backgroundColor = 'black'
}

//non-emergency tasks div background color
const nonEmergencyTasksEl = document.querySelectorAll('.no-emergency-tasks div')
for(let i in nonEmergencyTasksEl){
    nonEmergencyTasksEl[i].style.backgroundColor = 'lightskyblue'
}
