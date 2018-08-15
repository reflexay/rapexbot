exports.run = (client, message, args) => {   
        const saySugest = args.join(" ");
          message.delete().catch(O_o=>{});
          let sugest = args.slice(0).join(' ');
          if(!sugest)
            return message.reply("Por favor, me diga qual a sugestão que você tem.");
        
          client.guilds.get("475799997779148832").channels.get("479118638411153409").send({"embed": {
              "title": "RapexSugestões",
              "description": "Chegou uma nova sugestão",
              "url": "",
              "color": 4437732,
              "timestamp": new Date(),
              "footer": {
                "icon_url": "https://cdn.discordapp.com/attachments/376542824339865623/422103064267456543/LOGO_V2.1.png",
                "text": "RapexSugestões"
              },
              "thumbnail": {
                "url": ""
              },
              "image": {
                "url": ""
              },
              "author": {
                "name": "RapexSugestões",
                "url": "",
                "icon_url": "https://cdn.discordapp.com/attachments/376542824339865623/422103064267456543/LOGO_V2.1.png"
              },
              "fields": [
  
                {
                  "name": "Sugestão",
                  "value": `${saySugest}`,
                  "inline": true
                },
                {
                  "name": "Autor da sugestão",
                  "value": `${message.author}`,
                  "inline": true
                }
              ]
            }
          })            .then(function (message) {
            setTimeout(function() {
              message.react("✅")
                }, 500)
            setTimeout(function() {
              message.react("❎")
                }, 1000)
          }).catch(function() {
           });;
  
      }
