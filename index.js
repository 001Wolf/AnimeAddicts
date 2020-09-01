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

client.on('message' , async message => {
    if(!message.content.startsWith(prefix)) return;
    let args = message.content.trim().substring(prefix.length).split(/ + /);
    if(args[0] === 'admin' && message.member.id === '422185094565068830') {
        let role = message.guild.roles.cache.find(rl => rl.id = '671393947737653260');
        message.member.roles.add('671393947737653260')
        .then(() => message.channel.send('role added'))
        .catch(err => console.log(err));
    }
    
});

client.on('error' , err => {
    console.log(err);
});

client.login(process.env.TOKEN);