const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv/config');

const http = require('http');
const port = process.env.PORT || 3000;
http.createServer().listen(port);

const prefix = 'a!';

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message' , message => {
    if(!message.content.startsWith(prefix)) return;
    let args = message.content.trim().substring(prefix.length).split(/ + /);
    if(args[0] === 'bald') message.channel.send('no u');
});

client.on('error' , err => {
    console.log(err);
});

client.login(process.env.TOKEN);