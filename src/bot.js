const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');
const music = require('./music');

client.on('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

    if (args.length === 0) return; //TODO: add test for non alphanumeric char

    music(args, message);
});

client.login(config.token);