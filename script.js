const quotes = [
    ' " Be yourself; everyone else is already taken." ' ,
    ' "So many books, so little time" ',
    ' "A room without books is like a body without a soul" ',
    ' "Be who you are and say what you feel, because those who mind dos not matter, and those who matter dos not mind" ',
   ' "You know you are in love when you can not fall asleep because reality is finally better than your dreams" ' ,
    ' "You only live once, but if you do it right, once is enough" ',
    ' "Be the change that you wish to see in the world" ',
    ' "If you tell the truth, you do not have to remember anything"',
    
];



//this by id in html in button and p

const generateButton = document.getElementById("generateButton");

const quoteElement = document.getElementById("quote");

// Attach an event listener to the “Generate Quote” button

generateButton.addEventListener("click", generateRandomQuote);

// Define the function in top  to generate a random quote

function generateRandomQuote() {

    // Generate a random index within the range of the quotes array

    const randomIndex = Math.floor(Math.random() * quotes.length);
     // Display the randomly selected quote in the quoteElement

     quoteElement.textContent = quotes[randomIndex];

    }