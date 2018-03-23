exports.run = (client, message, args) => {   
  if(!message.member.roles.some(r=>["Dono 👑" , "YT+ 📷" , "Diretor 🏆" , "Staff Manager 🔧" , "Social Manager🔧" , "ModGC 💣" , "Admin 🔪" , "Gerente 🔧" , "Moderador 🎈" , "Trial ❌"].includes(r.name)) )
  return message.reply("Desculpe, apenas administradores podem usar esse comando");

let member = message.mentions.members.first();
if(!member)
  return message.reply("Uso correto: !mute (@user) (motivo)");

let reason = args.slice(1).join(' ');
if(!reason)
  return message.reply("Por favor, indique um motivo para o mute");

  member.guild.members.get(member.id).addRole(member.guild.roles.find("name", "Mutado").id);
  member.guild.members.get(member.id).removeRole(member.guild.roles.find("name", "Membro").id);
  message.delete().catch(O_o=>{});
  client.guilds.get("422039606330916874").channels.get("422063694009073675").send({"embed": {
      "title": "RapexPunições",
      "description": "Um usuario foi punido.",
      "url": "",
      "color": 4437732,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/376542824339865623/422103064267456543/LOGO_V2.1.png",
        "text": "RapexPunições"
      },
      "thumbnail": {
        "url": ""
      },
      "image": {
        "url": ""
      },
      "author": {
        "name": "RapexPunições",
        "url": "",
        "icon_url": "https://cdn.discordapp.com/attachments/376542824339865623/422103064267456543/LOGO_V2.1.png"
      },
      "fields": [
  
        {
          "name": "Usuario punido",
          "value": `${member.user}`
        },
        {
          "name": "Motivo",
          "value": `${reason}`
        },
        {
          "name": "Punição",
          "value": "Mute",
          "inline": true
        },
        {
          "name": "Autor da punição",
          "value": `${message.author}`,
          "inline": true
        }
      ]
    }
  });

}