// Import the built-in 'fs' module for file operations
const fs = require('fs');

// Utility function to get a random index within an array's bounds
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Function to display a random quote from the provided quotes array
function displayRandomQuote(quotes) {
  // Generate a random index within the range of the quotes array
  const randomIndex = getRandomIndex(quotes);
  
  // Retrieve the quote object at the random index
  const randomQuote = quotes[randomIndex];
  
  // Display the quote and its author in the console
  console.log(`"${randomQuote.quote}" - ${randomQuote.author}`);
}

// Read the quotes.json file
fs.readFile('quotes.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the JSON data into a JavaScript array
  const quotes = JSON.parse(data);
  
  // Call the displayRandomQuote function with the parsed quotes array
  displayRandomQuote(quotes);
});
