const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function appendKeyValue(obj, key, value) {
    obj[key] = value;
}

appendKeyValue(lesson2, 'turno', 'noite')

//onsole.log(lesson2)

function displayKeys(obj) {
    return Object.keys(obj);
}

//console.log(displayKeys(lesson3))

function displayLength(obj) {
    return Object.keys(obj).length;
}

//console.log(displayLength(lesson3))

function displayValues(obj) {
    return Object.values(obj);
}

//console.log(displayValues(lesson3))

let allLessons = {}

Object.assign(allLessons, lesson1, lesson2, lesson3)

console.log(allLessons)