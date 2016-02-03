var quotes = [
	["You can do anything, but not everything.", "-David Allen"],
	["Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", "-Antoine de Saint-Exupéry"],
	["The richest man is not he who has the most, but he who needs the least.",  "-Unknown Author"],
	["You miss 100 percent of the shots you never take.", "—Wayne Gretzky"],
	["Courage is not the absence of fear, but rather the judgement that something else is more important than fear.", "—Ambrose Redmoon"],
	["You must be the change you wish to see in the world.", "-Gandhi"],
	["When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.", "—Lin-Chi"],
	["The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.", "—A. A. Milne"],
	["To the man who only has a hammer, everything he encounters begins to look like a nail.", "—Abraham Maslow"],
	["We are what we repeatedly do; excellence, then, is not an act but a habit.", "—Aristotle"]];


var quote;
var author;
var elQuote  = document.getElementById('quote');
var elAuthor = document.getElementById('author');
var numbOfQuotes = quotes.length;

// Gets a random number between min (inclusive) and max (exclusive)
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function tweet() {
    text = encodeURIComponent(quote + " " + author);
    window.open("http://twitter.com/home/?status=" + text, 'newwindow', 'width=600, height=250'); 
    }

function newQuoteAndAuthor() {
	// pick a random number within range
	var index = randomIntFromInterval(0, numbOfQuotes-1);
	// index into array with random number & assign
	quote = quotes[index][0];
	author = quotes[index][1];
	// update html quote and author
	elQuote.textContent = quote;
	elAuthor.textContent = author;
	// update twitter link
	var baseURL = "http://twitter.com/home/?status=";
	var tweetURL = baseURL + quote + " " + author;
	console.log(tweetURL);

}


$(document).ready(function(){
	$('#tweet').hide();
	// Get quote when 'start' clicked
    $('#quoteButton').click(function(){
    	newQuoteAndAuthor();
		$('#quoteButton').text("Next");
		$('#tweet').show();
    });
    // Tweet current quote
    $('#tweet').click(function(){
    	tweet();
    });
  });


