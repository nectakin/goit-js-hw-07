function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  boxesContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();

    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = color;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    boxesContainer.appendChild(box);
  }

  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
