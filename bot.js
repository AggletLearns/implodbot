const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

if(message.content == '~smol') {
    //message.reply('pong');
    message.channel.sendMessage('***IMPLOD***');
}

});

//THIS MUST BE THIS WAY

client.login(process.env.BOT_TOKEN);
