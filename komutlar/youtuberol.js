const Discord = require('discord.js');
const client = new Discord.Client();


exports.run = function(client, message) {
 message.channel.send('YouTuber oluyorsun..').then(message => {

   var youtuberlar = ['Meryem Can Oldun','Enes Batur Oldun','BuğraCode oldun :('];
   var youtuber = youtuberlar[Math.floor(Math.random() * youtuberlar.length)];

   message.edit(`${youtuber}`);
});
}

exports.conf = {
  enabled: true,  ///KULLANILABİLİR Mİ. (FALSE İSE KOMUT KULLANILAMAZ)
  guildOnly: false,  /// SADECE SUNUCULARDA MI (DM DEN KULLANILMASINI ENGELLER)
  aliases: ['youtuber-ol','y-ol'], /// YAN KOMUTLAR
  permLevel: 0  /// PERM SEVİYESİ
};

exports.help = {
  name: 'youtuberol',  ///KOMUT İSMİ
  description: 'Botun pingini gösterir',  ///AÇIKLAMA
  usage: 'youtuberol'  ///KULLANIM ÖRNEĞİ
};
