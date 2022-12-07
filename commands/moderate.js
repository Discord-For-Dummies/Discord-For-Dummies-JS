const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('moderate')
    .setDescription('Moderates the user with a reason.')

    .addUserOption( option => option.setName('user').setDescription('The target user.').setRequired(true) )
    .addBooleanOption( option => option.setName('dm').setDescription('Weather to send a dm to the user or not.').setRequired(true) )

    .addStringOption( option => option.setName('reason').setDescription('the moderation reason.').setMaxLength(200) ),

  async execute(interaction, options) {
    const target = options.getUser('user');
    const reason = options.getString('reason') || '*nothing*';

    await interaction.reply({ content: 'Select something', embeds: [
      new EmbedBuilder()
        .setColor(0xd58d49)
        .setTitle('Selecte a moderation type.')
        .setDescription(`You are currently trying to moderate: ${ target }. With the reason of: **${ reason }**`),
    ], components: [
      new ActionRowBuilder()
        .addComponents(
          new StringSelectMenuBuilder()
            .setCustomId('select')
            .setPlaceholder('Nothing')
            .addOptions(
              { label: 'Kick', description: 'Kicks the user.', value: 'kick' },
              { label: 'Ban', description: 'Bans the user.', value: 'ban' },
              { label: 'Timeout', description: 'Timeout the user.', value: 'timeout' },
            )
        )
    ], ephemeral: true });
  }
}