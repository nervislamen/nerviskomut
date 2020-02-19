const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x1AC89B)
      .setAuthor(`YARDIM KOMUTLARINA HOŞGELDİN`, client.user.avatarURL)
      .setColor(0XC89B1A)
      .setDescription("[NERVIS]()  [X](https://www.nervis.com/) \n\n "    )
      .setThumbnail(client.user.avatarURL)
      .addField(`N - Yardım`, `:white_small_square: | **/BAKIMDA**: .!\n:game_die: | **/eğlence**: Eğlenmek için bulunan komutlar!\n:detective:  | **/kullanıcı**: Kullanıcılar için komutlar.\n:musical_note: | **/müzik**: Müzik ruhun gıdasıdır.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
