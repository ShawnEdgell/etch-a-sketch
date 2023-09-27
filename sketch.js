const containerEl = document.querySelector('.container');

function createDivs(num) {
  // Check if the input is a positive integer
  if (Number.isInteger(num) && num > 0) {
    for (let i = 0; i < num; i++) {
      // Create a new div element
      const div = document.createElement('div');
      
      // Add a CSS class to the div
      div.classList.add('my-div');

      // Append the div to the container element
      containerEl.appendChild(div);
    }
  } else {
    console.log('Please provide a positive integer as the parameter.');
  }
}

const numOfDivs = 256;
createDivs(numOfDivs);








