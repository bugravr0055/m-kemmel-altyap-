const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
    message.channel.send(`Fotoğraf işleniyor, lütfen bekleyin...`).then(m => m.delete(1000));

Jimp.read('https://media.discordapp.net/attachments/767731753472360460/767809259755929610/lexcode.png?width=801&height=641', (err, image) => {
    image.resize(301, 168)
    //image.greyscale()
    //image.gaussian(3)
    Jimp.read(user.avatarURL, (err, avatar) => {
        avatar.resize(100, 100)
        image.composite(avatar, 70, 10).write(`./img/rip/${client.user.id}-${user.id}.png`);
        setTimeout(function() {message.channel.send(new Discord.Attachment(`./img/rip/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

});
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['lexol'],
 permLevel: 0
};

exports.help = {
 name: 'lexcodeol',
 description: 'Profil fotoğrafınıza RIP efekti ekler.',
 usage: 'lexcodeol'
};
