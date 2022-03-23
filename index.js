const express = require('express');
const app = express();

app.listen(() => console.log('ready'));

app.use('/ping', (req, res) => {
    res.send(new Date());
});

const Discord = require("discord.js");
const moment = require('moment')
const client = new Discord.Client();
const prefix = "."; // بادئة البوت
// كود تقديم ادارة
client.on("message", message => { 
  if(message.content.startsWith(prefix+"تقديم")) {// كلمة بدء التقديم
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.cache.find(ch => ch.id === '890170468521345065')// اي دي روم التقديم
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
              message.channel.send(message.author.username + '`1`').then((m)=>{
            m.edit(message.author.username + ', ما هو اسمك').then( (m) =>{
             m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();

                  m.edit(message.author.username + '`2`').then( (m) =>{
                      m.edit( message.author.username + ', كم عمرك ' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.author.username + '`3`').then( (m) =>{
                            m.edit( message.author.username + ' كم لك بالديسكورد' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.author.username + '`4`').then( (m) =>{
                                  m.edit( message.author.username + ', لماذا تريد أن تصبح ضمن طاقم الإدارة ؟ !' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send(  message.author.username + '``5``').then( (m) =>{
                                        m.edit( message.author.username + ', كم مدة تفاعلك' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit( message.author.username + ', يتم إرسال البيانات').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.MessageEmbed()
                          .setAuthor(message.author.username, message.author.avatarURL) 
                          .setColor('GOLD')
                        .setTitle(`\`تقديمك على الإدارة\` \n سوف يتم الرد عليك قريبا من الادارة , \n > ID: ${message.author.id}`)
                        .addField('> \`إسمك:\`', ` ** ${name} ** ` , true)
                        .addField('> \`عمرك:\`', ` ** ${age} ** ` , true)
                        .addField('> \`كم لك بالديسكورد:\`',`** ${ask} ** ` , true)
                        .addField('> \` لماذا تريد أن تصبح ضمن طاقم الإدارة ؟:\` ',` ** ${ask2} ** ` , true)
                        .addField('> \`مدة تفاعلك: ?\`',` ** ${ask3} ** ` , true)
                        .addField('> __متى تم إنشاء حسابك: __',` \`${message.author.createdAt} \` ` , true)
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                 })
                })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
        client.on('message',async message => {
          let mention = message.mentions.members.first();
          if(message.content.startsWith(prefix+"قبول")) {// امر القبول
          if(!message.channel.guild) return;
          let acRoom = message.guild.channels.cache.find(ch => ch.id === '')// اي دي روم القبول
          if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
          if(!mention) return message.reply("الرجاء الإشارة");
         
          acRoom.send(`> أهلا بك تم قبولك ك إداري في الخادم \n ${mention} إداري مبتدئ - :partying_face: `)
          }
        });

client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith(prefix+"رفض")) {// امر الرفض
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.cache.find(ch => ch.id === '')// اي دي روم الرفض
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
  if(!mention) return message.reply("الرجاء الإشارة");
 
  acRoom.send(`> نعتذر منك لايمكننا قبولك في الوقت الحالي \n ${mention} - :pleading_face: `)
  }
});


client.login(process.env.token)
// حقوق احمد / Ahmed