const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('imposter')
    .setDescription('ayo sussy?'),

  async execute(interaction) {
    await interaction.reply('Among us???');
  }
}