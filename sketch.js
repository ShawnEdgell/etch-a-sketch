const clearButton = document.getElementById('clearButton');
const toggleHoverButton = document.getElementById('toggleHoverButton');
const container = document.getElementById('grid-container');

let hoverEnabled = true; // Track whether hover is enabled

clearButton.addEventListener('click', clearGrid);
toggleHoverButton.addEventListener('click', toggleHover);

function getRandomColor() {
  // Generate a random RGB color
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function darkenColor(color, percentage) {
  // Darken a color by a given percentage
  const [r, g, b] = color.match(/\d+/g);
  const darkenedR = Math.max(0, Math.floor(r * (1 - percentage / 100)));
  const darkenedG = Math.max(0, Math.floor(g * (1 - percentage / 100)));
  const darkenedB = Math.max(0, Math.floor(b * (1 - percentage / 100)));
  return `rgb(${darkenedR}, ${darkenedG}, ${darkenedB})`;
}

function createGrid(rows, columns) {
  container.innerHTML = '';
  
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);

      if (hoverEnabled) {
        let interactions = 0;

        cell.addEventListener('mouseover', function () {
          if (interactions < 10) {
            const currentColor = cell.style.backgroundColor || 'rgb(255, 255, 255)';
            const newColor = getRandomColor();
            const darkenedColor = darkenColor(newColor, (interactions + 1) * 10);

            cell.style.backgroundColor = darkenedColor;

            interactions++;
          }
        });
      }
    }
    container.appendChild(row);
  }
}

function clearGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
}

function toggleHover() {
  hoverEnabled = !hoverEnabled;
  toggleHoverButton.textContent = hoverEnabled ? 'Disable Hover' : 'Enable Hover';
}

createGrid(16, 16); 
