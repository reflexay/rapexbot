exports.run = (client, message, args) => {   
  if(!message.member.roles.some(r=>["Dono 👑" , "Diretor 🏆" , "Social Manager🔧"].includes(r.name)) )
      return message.reply("Desculpe, apenas meus gerenciadores pode usar esse comando");
  
    const sayMessage = args.join(" ");
      message.delete().catch(O_o=>{}); 
      message.channel.send(sayMessage);
    }