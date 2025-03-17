let goodBad = prompt("Are the jokes on our page good or bad?  Type 'good' or 'bad' and hit Enter");
let lcGoodBad = goodBad.toLowerCase();

if (lcGoodBad == "good") {
    s("h1").html("The Best Jokes Ever!");
} else {
    s("h1").html("The Worst Jokes Ever!");
};


$("#noShow").hide();

$("h1").html("The Best Jokes Ever!");

$("#joke").append("<p>Q. What do you call a fake noodle? <br /> A. An impasta</p>");

$("#toggleJokes").css({
    "background-color": "orange",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px"
});

$("#toggleJokes").click(function() {
    $("#joke").toggle();
  });