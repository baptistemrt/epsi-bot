const { MessageEmbed } = require("discord.js");

const MessageWrapper = require('../common/messageWrapper');

module.exports = class Helper extends MessageWrapper {

  constructor() { }

  static match(message, prefix) {
    return message.content.startsWith(prefix + 'help') || message.content.startsWith(prefix + 'h');
  }

  static action(message, client, conf) {
    const command = message.content.split(" ")[1] || "";
    if (message.member.roles.cache.some(r => r.name === conf.roles.owner) && (command === "--admin" || command === "-a")) {
      this.printAdminHelperMessage(message, client, conf);
    } else {
      this.printHelperMessage(message, client, conf);
    }
  }

  static printHelperMessage(message, client, conf) {
    message.delete();
    const em = new MessageEmbed()
      .setColor(0x7C147B)
      .setAuthor(message.author.username, client.user.avatarURL(), "https://epsiwis.fr/")
      .setThumbnail(client.user.avatarURL())
      .setDescription(conf.commands.help.description)
      .setTimestamp()
      .setFooter(conf.commands.help.footer.replace("%version%", conf.global.version));
    message.channel.send({embeds: [em]});
  }

  static printAdminHelperMessage(message, client, conf) {
    message.delete();
    const em = new MessageEmbed()
      .setColor(0x7C147B)
      .setAuthor(message.author.username, client.user.avatarURL(), "https://epsiwis.fr/")
      .setThumbnail(client.user.avatarURL())
      .setDescription(conf.commands.admin.help.description)
      .setTimestamp()
      .setFooter(conf.commands.help.footer.replace("%version%", conf.global.version));
    message.channel.send({embeds: [em]});
  }
}