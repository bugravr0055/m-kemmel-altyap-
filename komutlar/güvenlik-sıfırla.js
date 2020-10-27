const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (bot, message, args) => {
  await db.delete(`guvenlik${message.guild.id}`)
  return message.channel.send("Güvenlik **sıfırlandı!**")
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'güvenlik-sıfırla', 
  description: '', 
  usage: '' 
};
