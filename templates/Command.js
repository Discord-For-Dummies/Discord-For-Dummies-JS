const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('Name')
    .setDescription('Description'),

  async execute(interaction) {
    await interaction.reply('Reply'); // Or "interaction.reply({ content: 'Reply', ephemeral: true })" can send hidden msgs

    // Add "await interaction.deferReply()" if doing longer taks
  }
}