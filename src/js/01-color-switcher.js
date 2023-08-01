const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');




let intervalId;

// Event listener for the start button
startButton.addEventListener('click', function() {
  intervalId = setInterval(function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  }, 400);
});

// Event listener for the stop button
stopButton.addEventListener('click', function() {
  clearInterval(intervalId);
});

// Function to generate a random hex color code
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



startButton.style.backgroundColor = "#63954A";
startButton.style.color = "#FFFFFF";
startButton.style.padding = "10px";
startButton.style.borderRadius = "5px";

stopButton.style.backgroundColor = "#FF0019";
stopButton.style.color = "#FFFFFF";
stopButton.style.padding = "10px";
stopButton.style.borderRadius = "5px";


startButton.style.display = 'block';
startButton.style.margin = '0 auto';
stopButton.style.display = 'block';
stopButton.style.margin = '0 auto';