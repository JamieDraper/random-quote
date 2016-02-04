var quotes = [
	["You can do anything, but not everything.", "-David Allen"],
	["Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", "-Antoine de Saint-Exupéry"],
	["The richest man is not he who has the most, but he who needs the least.",  "-Unknown Author"],
	["You miss 100 percent of the shots you never take.", "-Wayne Gretzky"],
	["Courage is not the absence of fear, but rather the judgement that something else is more important than fear.", "—Ambrose Redmoon"],
	["You must be the change you wish to see in the world.", "-Gandhi"],
	["When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.", "—Lin-Chi"],
	["The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.", "—A. A. Milne"],
	["To the man who only has a hammer, everything he encounters begins to look like a nail.", "—Abraham Maslow"],
	["We are what we repeatedly do; excellence, then, is not an act but a habit.", "-Aristotle"],
	["Don't cry because it's over, smile because it happened.", "-Dr. Seuss"],
	["You only live once, but if you do it right, once is enough.", "-Mae West"],
	["In three words I can sum up everything I've learned about life: it goes on.", "-Robert Frost"],
	["To live is the rarest thing in the world. Most people exist, that is all.", "-Oscar Wilde"],
	["There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.", "-Albert Einstein"],
	["Good friends, good books, and a sleepy conscience: this is the ideal life.", "-Mark Twain"],
	["Everything could have been anything else and it would have had just as much meaning.", "-Tennessee Williams"],
	["Sometimes the questions are complicated and the answers are simple.", "-Dr. Seuss"],
	["Everything you can imagine is real.", "-Pablo Picasso"],
	["I'm not afraid of death; I just don't want to be there when it happens.", "-Woody Allen"],
	["Life isn't about finding yourself. Life is about creating yourself.", "-George Bernard Shaw"],
	["The only way out of the labyrinth of suffering is to forgive.", "-John Green"],
	["But better to get hurt by the truth than comforted with a lie.", "-Khaled Hosseini"],
	["Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can.", "-Nicholas Sparks"],
	["The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.", "-Mark Twain"],
	["We are what we pretend to be, so we must be careful about what we pretend to be.", "-Kurt Vonnegut"],
	["The one you love and the one who loves you are never, ever the same person.", "-Chuck Palahniuk"],
	["I speak to everyone in the same way, whether he is the garbage man or the president of the university.", "-Albert Einstein"],
	["If you don't know where you're going, any road'll take you there.", "-George Harrison"],
	["All God does is watch us and kill us when we get boring. We must never, ever be boring.", "-Chuck Palahniuk"],
	["How wonderful it is that nobody need wait a single moment before starting to improve the world.", "-Anne Frank"],
	["This life’s hard, but it’s harder if you’re stupid.", "-George V. Higgins"],
	["The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.", "-Isaac Asimov"],
	["Sometimes I can hear my bones straining under the weight of all the lives I'm not living.", "-Jonathan Safran Foer"],
	["Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.", "-Henry Wadsworth Longfellow"],
	["Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.", "-Margaret Mead"],
	["We have to dare to be ourselves, however frightening or strange that self may prove to be.", "-May Sarton"],
	["Anyone who lives within their means suffers from a lack of imagination.", "-Oscar Wilde"],
	["A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.", "-George Bernard Shaw"],
	["The best index to a person's character is how he treats people who can't do him any good, and how he treats people who can't fight back.", "-Abigail Van Buren"],
	["Remember: the time you feel lonely is the time you most need to be by yourself. Life's cruelest irony.", "-Douglas Coupland"],
	["It is said that your life flashes before your eyes just before you die. That is true, it's called Life.", "-Terry Pratchett"],
	["It isn't what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it.", "-Dale Carnegie"],
	["Nobody realizes that some people expend tremendous energy merely to be normal.", "-Albert Camus"],
	["My life amounts to no more than one drop in a limitless ocean. Yet what is any ocean, but a multitude of drops?", "-David Mitchell"],
	["A half-read book is a half-finished love affair.", "-David Mitchell"],
	["Books don't offer real escape, but they can stop a mind scratching itself raw.", "-David Mitchell"],
	];


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

}


$(document).ready(function(){
	$('#tweet').hide();
	// Get quote when 'start' clicked
    $('#quoteButton').click(function(){
    	newQuoteAndAuthor();
		$('#quoteButton').text("Next");
		$('#tweet').show();
		$("#quote").hide().fadeIn();
		$("#author").hide().fadeIn();
    });
    // Tweet current quote
    $('#tweet').click(function(){
    	tweet();
    });
  });


