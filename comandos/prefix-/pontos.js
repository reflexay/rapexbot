var database = require("../../database.js")

exports.run = (client, message, args) => {

    let razaou = args.slice(0).join(' ');
    let razaod = args.slice(1).join(' ');
    let razaot = args.slice(2).join(' ');
    let user = message.mentions.users.first();

    var setadores = ["315263840268976128", "399399819992629258", "254042074712768512", "149998623101288448" , "315937295637151746", "315286101906685953"]

    if(!razaou.length < 1) {

        if(message.content.startsWith("!pontos ver")) {

            if(message.mentions.users.size < 1) {

                database.Staffs.findOne({
                    "_id": message.author.id
                }, function (erro, documento) {

                    if(documento) {

                        message.reply(`**Você possui ${documento.pontos} pontos. **`);

                    } else {
                        message.reply("**Você ainda não possui pontos, ou não é um staff. <:RapexMC:425020647236960268>**");
                    }

                })

            } else {

                database.Staffs.findOne({
                    "_id": message.mentions.users.first().id
                }, function (erro, documento) {

                    if(documento) {

                        message.reply(`**Este usuário possui ${documento.pontos} pontos. **`);

                    } else {
                        message.reply("**Este usuário ainda não possui pontos, ou não é um staff. <:RapexMC:425020647236960268>**");
                    }

                })

            }

        }

        if(message.content.startsWith("!pontos true")) {
            if (setadores.includes(message.author.id)) {

                if(message.mentions.users.size < 1) {
                    message.reply("Mencione o usuário que deseja ativar o sistema de pontos. :confused:");
                } else {

                    database.Staffs.findOne({
                        "_id": message.mentions.users.first().id
                    }, function (erro, documento) {

                        if(documento) {

                            message.reply(`**Este usuário já pussui o sistema de pontos.**`);

                        } else {

                            var staffer = new database.Staffs({
                                _id: message.mentions.users.first().id,
                                pontos: 0,
                            })

                            staffer.save()

                            message.reply("Sistema ativado.");
                        }

                    })

                }

            } else {
                message.reply("**Sem permissão. :confused:**");
            }
        }

        if(message.content.startsWith("!pontos false")) {
            if (setadores.includes(message.author.id)) {

                if(message.mentions.users.size < 1) {
                    message.reply("Mencione o usuário que deseja ativar o sistema de pontos. :confused:");
                } else {

                    database.Staffs.findOne({
                        "_id": message.mentions.users.first().id
                    }, function (erro, documento) {

                        if(!documento) {

                            message.reply(`**Este usuário não pussui o sistema de pontos.**`);

                        } else {
                            database.Staffs.deleteOne({
                                "_id": message.mentions.users.first().id
                            }, function (erro, documento) {})
                            message.reply("Sistema desativado.");
                        }

                    })

                }

            } else {
                message.reply("**Sem permissão. :confused:**");
            }
        }

        if(message.content.startsWith("!pontos add")) {
            if (setadores.includes(message.author.id)) {
                if(message.mentions.users.size < 1) {
                    message.reply("Mencione o usuário que deseja dar pontos. :confused:");
                } else {
                    if(!razaot.length < 1) {
                        if (parseInt(args[2]) < 1) {
                            message.reply("Não pode ser menor que 1. :confused:");
                        } else {
                            if (message.mentions.users.first().id == message.author.id) return message.reply("**Você não pode dar pontos para você mesmo!**");
                            database.Staffs.findOne({
                                "_id": message.mentions.users.first().id
                            }, function (erro, documento) {
        
                                if(!documento) {
        
                                    message.reply(`**Este usuário não pussui o sistema de pontos.**`);
        
                                } else {
                                    documento.pontos += parseInt(args[2])
                                    documento.save();
                                    message.reply("Pontos adicionados.");
                                }
        
                            })
                        }
                    } else {
                        message.reply("**Diga quantos pontos quer setar. :confused:**");
                    }
                }
            } else{
                message.reply("**Sem permissão. :confused:**");
            }
        }

        if(message.content.startsWith("!pontos remove")) {
            if (setadores.includes(message.author.id)) {
                if(message.mentions.users.size < 1) {
                    message.reply("Mencione o usuário que deseja retirar pontos. :confused:");
                } else {
                    if(!razaot.length < 1) {
                        if (parseInt(args[2]) < 1) {
                            message.reply("Não pode ser menor que 1. :confused:");
                        } else {
                            if (message.mentions.users.first().id == message.author.id) return message.reply("**Você não pode retirar pontos de você mesmo!**");
                            database.Staffs.findOne({
                                "_id": message.mentions.users.first().id
                            }, function (erro, documento) {
        
                                if(!documento) {
        
                                    message.reply(`**Este usuário não pussui o sistema de pontos.**`);
        
                                } else {
                                    documento.pontos -= parseInt(args[2])
                                    documento.save();
                                    message.reply("Pontos removidos.");
                                }
        
                            })
                        }
                    } else {
                        message.reply("**Diga quantos pontos quer retirar. :confused:**");
                    }
                }
            } else{
                message.reply("**Sem permissão. :confused:**");
            }
        }

        if(message.content.startsWith("!pontos top")) {


            database.Staffs.find({}, function(erro, documaninho) {
                if (documaninho) {
                    var position = documaninho.map(function(docu) {
                        return {
                            _id: docu._id,
                            pontos: docu.pontos
                        }
                    });
                    position = position.sort(function(a, b) {
                        return b.pontos - a.pontos
                    });
                    var topcodes = "\n" + position.slice(0, 10).map((a, posicao) => "**" + (posicao + 1) + "** <@" + a._id + "> - **" + a.pontos + " pontos.**").join("\n") + "";
                    message.channel.sendMessage({
                        "embed": {
                            "description": "ㅤㅤㅤㅤㅤㅤㅤ<:golden:422427813392547862> **PONTOS** <:golden:422427813392547862>ㅤㅤㅤㅤㅤ\nㅤ\n" + topcodes,
                            "color": 55512,
                            "thumbnail": {
                                "url": "https://i.imgur.com/yhYiflU.png"
                            }
                        }
                    })
                }
            });


        }
        
    } else {
        message.channel.sendMessage({
            "embed": {
                "description": "ㅤㅤㅤㅤㅤㅤㅤ<:golden:422427813392547862> **PONTOS** <:golden:422427813392547862>ㅤㅤㅤㅤㅤ\nㅤ\n**Como usar:**\n```\n!pontos top\n!pontos ver <menção>\n!pontos true <menção>\n!pontos false <menção>\n!pontos add <menção> <quantidade>\n!pontos remove <menção> <quantidade>```",
                "color": 10223807,
                "thumbnail": {
                    "url": "https://i.imgur.com/yhYiflU.png"
                }
            }
        });
    }

}