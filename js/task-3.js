

const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function () {

    const trimVal = nameInput.value.trim();
    
    if (trimVal === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = trimVal;
    }
    
})