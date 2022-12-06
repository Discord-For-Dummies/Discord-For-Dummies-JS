const { REST, Routes } = require('discord.js');

const Path = require('path');

const Commands = [];

module.exports = {
  folder: 'commands',

  execute(_, extra) {
    for (const File of extra.files) {
      const Command = require(
        Path.join(extra.directory, File)
      );

      Commands.push(
        Command.data.toJSON()
      );
    }

    const Rest = new REST({ version: '10' }).setToken( extra.token );

    // Deploy
    (async () => {
      try {
        console.log(`Command Deploy: Deploying commands! (${ Commands.length } commands.)`);

        const Data = await Rest.put(
          Routes.applicationCommands(extra.clientID),
          { body: Commands }
        );

        console.log(`Command Deploy: Successfuly loaded ${ Commands.length } commands!`);
      } catch (e) { console.error(e); }
    })();
  }
}