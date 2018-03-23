exports.run = (client, message, args) => {   
  if(!message.member.roles.some(r=>["Dono 👑" , "Diretor 🏆" , "Social Manager🔧" , "Admin 🔪" , "Gerente 🔧"].includes(r.name)) )
  return message.reply("Desculpe, apenas meus gerenciadores pode usar esse comando");

const saySelf = args.join(" ");
  message.delete().catch(O_o=>{}); 
  let fala = args.slice(0).join(' ');
  if(!fala)
    return message.reply("Por favor, me diga oque colocar na embed.");


  message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Um membro da staff disse:",
      url: "",
      description: "",
      fields: [{
          name: "𛲡",
          value: `${saySelf} \n𛲡`
        },
        {
          name: "Mensagem enviada por:",
          value: `${message.author}`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "RapexBOT"
      }
    }
  });
}
