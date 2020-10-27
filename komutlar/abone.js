const Discord = require('discord.js');
exports.run = async(client, message, args, ops) => {
    message.delete()
    if (!message.member.roles.find("name", "Destek Ekibi")) {
        return message.channel.send(' **Bu Komutu Kullanmak için** Destek Ekibi **Rolüne Sahip Olman Lazım** ')
            .then(m => m.delete(5000));
    }
    let toabone = message.guild.member(message.mentions.users.first());
    let abonerole = message.guild.roles.find(`name`, "🔔・Abone");
    if (!abonerole) return message.reply("Rol Bulunamadı Lütfen 'Abone' Adıyla Rol Oluşturunuz.");
    if (!toabone) return message.reply("Bir Kişiyi Et");
    await (toabone.addRole(abonerole.id));
    let vUser = message.guild.member(message.mentions.users.first());
    let aboneembed = new Discord.RichEmbed()
        .setTitle(" ・ Abone Rolü Verildi")
        .setColor('PURPLE')
        .addField(" ・ Abone Rolü Veren Yetkili", `${message.author.tag}`, true)
        .addField(" ・ Abone Rolü Alan Kullanıcı", `${vUser}`, true)
       .setTimestamp();
    let abonelog = message.guild.channels.find(`name`, "📸┊galeri");
      if (!abonelog) return message.channel.send("Abone log kanalı bulunamadı`");
    abonelog.send(aboneembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abonerol','k'],
};
exports.help = {
  name: 'a',
  description: 'Kayıt etme komutu',
  usage: 'a'
};  