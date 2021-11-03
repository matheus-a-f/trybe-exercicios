const submitBtn = document.querySelector('#submit-btn');
const userState = document.querySelector('#user-state');

function submitForm (event) {
    event.preventDefault();
    event.target.submit();
}

submitBtn.addEventListener('click', submitForm);

function generateStates () {
    const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

    for (let i in states) {
       const state = document.createElement('option');
       state.value = states[i];
       state.innerHTML = states[i];
       userState.appendChild(state);
    }
}

generateStates();
