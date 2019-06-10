/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// creating array of objects with properties

var quotes = [

{
 quote: "It is certain, in any case, that ignorance, allied with power, is the most ferocious enemy justice can have.",
 source: "James Baldwin",
 citation: "No Name In The Street",
 year: 1972,
 tags: "motivational",
},
    
{
 quote: "If there is no struggle, there is no progress",
 source: "Frederick Douglass",
 citation: "West India Emancipation Speech",
 year: 1857,
 tags: "politics",
},
  
{ 
  quote: "Never be limited by other people's limited imaginations.",
  source: "Dr Jae Jemison",
  year: 1992
},  
  
{
  quote: "Some people want it to happen, some wish it would happen, others make it happen.",
  source: "Michael Jordan",
  year: 1996  
},

{
  quote: "Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we’ve been waiting for. We are the change that we seek.",
  source:   "Barack Obama",
  citation: "Super Tuesday Speech",
  year: 2008, 
  tags: "politics",
}

];
console.log(quotes.length)
// creating function to store a random background color

function randombgcolor() {

  //creating x, y, z variables to store random r, b, and g's intensity level
var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);

// creating variable to combine rgb and create color

var bgcolor = "rgb(" + x + "," + y + "," + z +")";

// returning color 

return bgcolor;

}

function getRandomQuote()

// creating "number" variable that stores a random # between between 0 and he length of the quotes 
{
  let number = Math.floor(Math.random() * quotes.length);

  // creating randomquote variable that stores array 
   
 // creating variable to store array of quotes

var randomQuote = quotes[number]

// return randomQuote array

  return randomQuote;
}


// create printQuote function


function printQuote()
{
  

  // create saying variable and set it to getRandomQuote function
  let saying = getRandomQuote();

  // setting empty html string to hold quote properties

  var popup = " ";

// adding quote and source property strings with paragraph tags
  popup = "<p class= 'quote'>" + saying.quote + "</p>";

  popup +=  "<p class= 'source'>" + saying.source;

  // adding if statements to test if the object has a ciation, year, or tag property
if ( typeof saying.citation != 'undefined'  )
  
{
    popup += "<span class = 'citation'>" + saying.citation + "</span>";

}

if ( typeof saying.year != 'undefined' )
  
{ 
  
 popup += "<span class = 'year'>" + saying.year + "</span>";

}

if ( typeof saying.tags != 'undefined'  )
  
{
    popup += "<span class = 'citation'>" + saying.tags + "</span>";

  }

// creating variable that stores entire random color function 

var finalcolor = randombgcolor();


// linking results of the randomized background color to css

document.body.style.backgroundColor = finalcolor;

// setting the "load quote" ID to "final color" variable, to randomize the color of button

document.getElementById('loadQuote').style.background = finalcolor;

// setting the "quote-box" ID in innerHTML to the randomized quote results

document.getElementById('quote-box').innerHTML = popup;
 

}

// setting time interval to refresh page every 3 seconds, calling it to "printQuote" function


setInterval(printQuote, 3000);

 
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);