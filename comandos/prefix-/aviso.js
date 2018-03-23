exports.run = (client, message, args) => {
  if(!message.member.roles.some(r=>["Dono 👑" , "Diretor 🏆" , "Social Manager🔧" , "Admin 🔪" , "Gerente 🔧"].includes(r.name)) )
  return message.reply("Desculpe, apenas meu gerenciador pode usar esse comando");

const sayAviso = args.join(" ");
let aviso = args.slice(0).join(' ');
if(!aviso)
return message.reply("Por favor, me diga qual aviso irei dar.");
message.delete().catch(O_o=>{}); 
client.guilds.get("422039606330916874").channels.get("422063665735532544").send("@everyone",{embed: {
  color: 3447003,
  author: {
    name: "RapexAvisos",
    icon_url: client.user.avatarURL
  },
  title: "RapexAvisos",
  url: "",
  description: "",
  fields: [{
      name: "𛲡",
      value: `${sayAviso} \n𛲡`
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "RapexAvisos"
  }
}
});

}