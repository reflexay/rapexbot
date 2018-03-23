exports.run = (client, message, args) => {   

  if(!message.member.roles.some(r=>["Dono 👑" , "Diretor 🏆" , "Social Manager🔧" , "Admin 🔪" , "Gerente 🔧"].includes(r.name)) )
  return message.reply("Desculpe, apenas meus gerenciadores pode usar esse comando");

  let votação = args.slice(0).join(' ');
  if(!votação)
    return message.reply("Por favor, me diga qual a votação que irei abrir.");

const saySelf = args.join(" ");
  message.delete().catch(O_o=>{}); 
  message.channel.send("@everyone",{embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "RapexBOT",
      url: "",
      description: "",
      fields: [{
          name: "𛲡",
          value: `${saySelf} \n𛲡`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "RapexBOT"
      }
    }
  }).then(function (message) {
    setTimeout(function() {
      message.react("✅")
        }, 500)
    setTimeout(function() {
      message.react("❎")
        }, 1000)
  }).catch(function() {
  })
}
