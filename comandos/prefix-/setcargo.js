exports.run = (client, message, args) => {   
  if(!message.member.roles.some(r=>["Dono 👑" , "Diretor 🏆" , "Social Manager🔧"].includes(r.name)) )
  return message.reply("Desculpe, apenas meus gerenciadores pode usar esse comando");

  let member = message.mentions.members.first();
  if(!member)
    return message.reply("Uso correto: !setcargo (@user) (@cargo)");
  
  let reason = args.slice(1).join(' ');
  if(!reason)
    return message.reply("Por favor, indique um cargo");
    message.delete().catch(O_o=>{});
  
    client.guilds.get("422039606330916874").channels.get("422077585338400799").send({"embed": {
        "title": "RapexSTAFF",
        "description": "",
        "url": "",
        "color": 4437732,
        "timestamp":  new Date(),
        "footer": {
          "icon_url": "https://cdn.discordapp.com/attachments/376542824339865623/422103064267456543/LOGO_V2.1.png",
          "text": "RapexBOT"
        },
        "thumbnail": {
          "url": ""
        },
        "image": {
          "url": ""
        },
        "author": {
          "name": "RapexBOT",
          "url": "",
          "icon_url": "https://cdn.discordapp.com/attachments/376542824339865623/422103064267456543/LOGO_V2.1.png"
        },
        "fields": [
    
          {
            "name": "Staff",
            "value": `${member.user}`,
            "inline": true
          },
          {
            "name": "Foi para o cargo",
            "value": `${reason}`,
            "inline": true
          }
        ]
      }
    });

}