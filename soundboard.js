var Discord = require('discord.js');
var bot = new Discord.Client();
var fs = require('fs');

var fileLocation = './sounds/';
var fileArray = [];
var PREFIX = '?';

fs.readdir(fileLocation, (err,files) => {
	files.forEach(file => {
		fileArray.push(file);
	});
});

bot.on('message', message => {
	fileArray.forEach(function(file){
		fileName = file.split('.')[0];
		fileType = file.split('.')[1];
	
		if(message.content === (PREFIX + fileName)){
			var voiceChannel = message.member.voiceChannel;
			voiceChannel.join().then(connection => {
				const dispatcher = connection.playFile(fileLocation + file);
			}).catch(err => console.log(err));
			message.delete(1000);
		}
	});
	if (message.content === (PREFIX + 'stop')){
		//Find VoiceConnection
		
		//Stop connection
	}
	if (message.content.startsWith(PREFIX + 'volume')){
		volumeAmount = message.content.split(' ')[1];
		console.log('Setting volume to: ' + volumeAmount);
		//Find VoiceConnection
		const voiceConnection = bot.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
		const dispatcher = voiceConnection.player.dispatcher;
		//Lower volume
		dispatcher.setVolume(volumeAmount/100);
	}
	if (message.content === (PREFIX + 'list')){
		fileArray.forEach(function(file){
			
		});
		console.log(bot.voiceConnections.get('speaking').value);
	}
});

bot.login('MzQ4NTQ3ODYxOTI0OTM3NzI5.DH9ptQ.WhCSqbu6YM2rBZe82kpHBUopY5c');