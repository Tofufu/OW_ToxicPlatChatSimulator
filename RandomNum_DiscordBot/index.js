/*
Plat Chat Simulator Discord Bot

1. npm install discord.js in folder that this index.js is stored
2. ./config.json stores botkey
*/

const Discord = require("discord.js");
const bot = new Discord.Client();
const { command, botTokenKey } = require("./config.json");
const { hero, lines } = require("./hero.json");

bot.on("message", message => {
    // early termination if not !platchat or it's a bot speaking
    if( !message.content.startsWith(`${command}`) || message.author.bot ) { return; }
    
    // else it's !platchat - this has no logic just generates random# and replies back with a random line
    var randomNum = Math.floor( Math.random() * lines.length);
    message.reply(lines[randomNum]);
});

bot.once("ready", () => {
    console.log("Bot is ready on Discord Server");
});

bot.login(botTokenKey); 