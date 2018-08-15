exports.run = (client, message, args) => {   
  let member = message.mentions.members.first();
  if(!member)
    return message.reply("Uso correto: !report (@user) (motivo)");
  
  let reason = args.slice(1).join(' ');
  if(!reason)
    return message.reply("Por favor, indique um motivo para o report");
    message.delete().catch(O_o=>{});
  
    client.guilds.get("475799997779148832").channels.get("479118897174544388").send("@everyone"{
      "content": "@everyone",
      "embed": {
                "title": "RapexReports",
        "description": "Um usuario foi reportado.",
        "url": "",
        "color": 4437732,
        "timestamp":  new Date(),
        "footer": {
          "icon_url": "https://cdn.discordapp.com/attachments/376542824339865623/422103064267456543/LOGO_V2.1.png",
          "text": "RapexReports"
        },
        "thumbnail": {
          "url": ""
        },
        "image": {
          "url": ""
        },
        "author": {
          "name": "RapexReports",
          "url": "",
          "icon_url": "https://cdn.discordapp.com/attachments/376542824339865623/422103064267456543/LOGO_V2.1.png"
        },
        "fields": [
    
          {
            "name": "Usuario reportado",
            "value": `${member.user}`
          },
          {
            "name": "Motivo",
            "value": `${reason}`,
            "inline": true
          },
          {
            "name": "Autor da report",
            "value": `${message.author}`,
            "inline": true
          }
        ]
      }
    });

}
