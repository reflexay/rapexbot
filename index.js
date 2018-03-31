console.log("Conectando...")
const Discord = require('discord.js');
const client = new Discord.Client({
    autoReconnect: true,
    max_message_cache: 0
});
const PORT = process.env.PORT || 5000
const YTDL = require ("ytdl-core");
const moment = require('moment');
moment.locale('pt-BR');   
const config = require('./config.json');
var nicknames = require('nicknames');
const fs = require('fs');


fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error("[ERRO] " + err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});
client.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/prefix-/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error("[CONSOLE] " + err);
    }

});

client.login(config.token)

fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error("[ERRO] " + err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});
client.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.semprefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.semprefix.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/sem-prefix/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {

    }

});

client.login(config.token)


const prefix = "!";
const token = process.env.token;
const id = "149998623101288448"

const configs = require('./jsons/config.json');

const teste = configs.teste;

client.on("ready", () => {

    let string = ''
    for (var i = 0; i < client.users.size; i++) {

        let userStatus = {
            online: 'online',
            idle: 'ausente',
            dnd: 'ocupado',
            offline: 'offline'
        }[client.users.array()[i].presence.status]

        string += "     - " + client.users.array()[i].username + " ( " + userStatus + " ) ,\n";
    }
    
    var servers = {};
function play(connection,message) {
    var server = servers[message.guild.id];
    
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    
    server.queue.shift();
    
    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection,message);
        else connection.disconnect();
    
    })
}
client.on("message", message => {
    if(message.author.equals(client.user)) return;

    var args = message.content.substring(config.prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "tocar":
         if(!args[1]) {
            message.channel.send("Para tocar use !tocar <link>")
            return;
        }
        if(!message.member.voiceChannel) {
            message.channel.send("Você deve estar em um sala para eu poder me conectar!");
            return;
        }

        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }
        var server = servers[message.guild.id];

        server.queue.push(args[1]);

        if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
            play(connection, message);
        })
        break;

        case "pular": 
        var server = servers[message.guild.id];
        if (server.dispatcher) server.dispatcher.end();
        break;
        
        case "parar":
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        break;
}
    

    
    const membrosNomes = string
    var statusIDO = ["dnd" , "online" , ]

    console.log(`Conectado !`)
    setTimeout(function() {
        console.log(`                   ---== RAPEX ==---                 \n\nMembros: (${client.users.size}):\n\n${membrosNomes}`);
    }, 2000)
    client.user.setPresence({ game: { name: `o som das espadas.`, type: 2 } })
    client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    setInterval(() => {
        client.user.setPresence({ game: { name: `um HG no Rapex`, type: 0 } })
        client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    }, 1 * 60 * 1000)
    
});

client.login(token)

client.on("message", (message) => {



});
