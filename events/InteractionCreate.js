module.exports = {
  type: 'on',

  async execute(interaction) {
    const CommandName = interaction.commandName;
    const Command = interaction.client.commands.get(
      CommandName
    );

    if (!Command) {
      console.error(`Couldn't find command ${ CommandName }`);
      return;
    }

    try { await Command.execute(interaction, interaction.options); }
    catch (e) { console.error(`Failed to execute ${ CommandName }.\nERROR: ${ e }`) }
  }
}