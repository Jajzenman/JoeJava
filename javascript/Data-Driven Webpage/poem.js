$("#info").html("<p>The info will go here.</p>");
let line1, line1Text; 
line1 = [{text: "What", info: "Anaphora: The repetition of a word or phrase at the beginning of (usually successive) lines. For example, the use of what in the first four lines."}, 
     {text: "hurrying"},
     {text: "human"}, {text: "tides"}, 
     {text: "or"}, {text: "day"}, {text: "or "},
     {text: "night!"}];
line1Text = "<blockquote><p>";

line1.map(function(word){
    let wordString;
    wordString = word.text;
    if (word.info) {
        wordString = "<a href='#'>" + wordString + "</a>";
    }
        line1Text= line1Text + wordString + " ";
});
$("#poem").html(line1Text) ;

$("poem a").click(function(){
    let infoText, clickedWord;
    infoText = "<h2>You clicked on the word: " + clickedWord + "</h2>";
    $("#info").html(infoText);
});