exports.run = (client, message, args) => {   

message.channel.send({"embed": {
        "title": "Informações",
        "description": `IP: Rapexmc.com.br\nTwitter: https://twitter.com/rapexmc\nInvite eterno: https://discord.gg/KW8f5Ep\nUsuarios no discord: ${client.users.size -1}`,
        "url": "",
        "color": 4437732,
        "timestamp": new Date(),
        "footer": {
          "icon_url": "https://media.discordapp.net/attachments/376542824339865623/422103064267456543/LOGO_V2.1.png",
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
          "icon_url": "https://media.discordapp.net/attachments/376542824339865623/422103064267456543/LOGO_V2.1.png"
        }
      }
      });
      
        }
      
      