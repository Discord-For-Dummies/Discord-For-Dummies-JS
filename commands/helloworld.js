const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('helloworld')
    .setDescription('Replies with Hello World!'),

  async execute(interaction, options) {
    await interaction.reply('[helloworld](https://sussy.com/)');
  }
}