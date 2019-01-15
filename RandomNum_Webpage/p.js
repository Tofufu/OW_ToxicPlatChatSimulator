var hero = {
    name: ["DVA", "Orisa", "Reinhardt", "Roadhog", "Winston", "Wrecking Ball", "Zarya", "Ashe", "Bastion", "Doomfist", "Genji", "Hanzo", "Junkrat", "Mccree", "Mei", "Pharah", "Reaper", "Solider 76", "Sombra", "Symmetra", "Torbjorn", "Tracer", "Widowmaker", "Ana", "Brigitte", "Lucio", "Mercy", "Moira", "Zenyatta"],
    toxic: ["You suck",
    "I guess we're throwing now?",
    "Wtf I have gold elims?",
    "DPS do something",
    "Man you guys suck xD",
    "This is why you guys are hard stuck plat",
    "xD",
    "xDDDDD",
    "xDDDDDDDDDD",
    "LUL",
    "You're so trash",
    "Trash",
    "Stop hard feeding",
    "You guys are hard feeding LUL",
    "LUL you suck",
    "Trash LUL",
    "Are you a bot?",
    "Idiot DPS",
    "REEEEEEEEEEEEEEEEEEE",
    "Bro are you salty?",
    "You guys suck and are going to lose",
    "You are awful",
    "Nice throw bro",
    "Nice throw",
    "Am I the only one doing dmg in this team?",
    "This is my smurf bro my main is GM",
    "????????????????",
    "Are you throwing?",
    "I have gold dmg switch off dps",
    "I have gold elim switch off dps",
    "I have gold healing switch off tank",
    "toxic",
    "Stay plat LOL!",
    "Stay low plat",
    "Have fun staying hard stuck",
    "This is not even my main bro",
    "My main is top 500",
    "I'm actually top 500"],
    toxicMatchChat: ["Our Zaraya didn't grav once",
    "Our dva threw report",
    "Our widow threw report",
    "Best teammates ever",
    "xD HAHAHA losers",
    "My team sucks",
    "Report everyone on my team for throwing",
    "My god I can't believe I have to carry this team"]
};

var chatBox = document.querySelector(".chatbox");
var chatboxText = document.querySelector(".chattingtext");

var heroTeam = generatingHeros();
function generatingHeros() {
    var slicedHeroArray = [];
    for (var i=0; i < 5; i++) {
        var randomNum = Math.floor( Math.random() * hero.name.length);
        slicedHeroArray.push(hero.name[randomNum]);
        hero.name.splice(randomNum,1); 
    }
    return slicedHeroArray;
}

function initialization() {
  for (var i=0; i<5; i++) {
    var enterHeros = document.createElement("div");
    enterHeros.textContent += heroTeam[i] + " has entered";
    enterHeros.classList.add("user1");
    chatboxText.appendChild(enterHeros);
  }
}
initialization();

var inputform = document.querySelector(".userinputform")
inputform.addEventListener("submit", function(event){
    gettingUserInput();
    gettingheroOutput(); 
    event.preventDefault(); 
    chatBox.scrollTop = chatBox.scrollHeight; 

});

function gettingUserInput() {
    var usersinput = inputform.uInput.value;
    inputform.uInput.value = "";
    var userInputToChat = document.createElement("div");
    userInputToChat.textContent = "Tofufu: " + usersinput;
    userInputToChat.classList.add("user2");
    chatboxText.appendChild(userInputToChat);
    return usersinput;
}

function gettingheroOutput() {
    var randomNumText = Math.floor( Math.random() * hero.toxic.length);
    var randomNumHero = Math.floor( Math.random() * 5);

    var heroOutput = document.createElement("div");
    heroOutput.textContent = heroTeam[randomNumHero] + ": ";
    heroOutput.textContent += hero.toxic[randomNumText];
    heroOutput.classList.add("user1");
    chatboxText.appendChild(heroOutput);
}
