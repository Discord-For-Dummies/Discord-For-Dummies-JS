const { Collection } = require("discord.js")

const Path = require('path');

module.exports = {
  folder: 'commands',

  execute(client, extra) {
    client.commands = new Collection();

    for (const File of extra.files) {
      const FilePath = Path.join(extra.directory, File);
      const Command = require(FilePath);

      const FileName = FilePath.split('\\').slice(-1);

      if ('data' in Command && 'execute' in Command) {
        client.commands.set(Command.data.name, Command);

        console.log(`Command Setup: Added ${ FileName }`);
      } else console.log(`Command Setup: Failed to add ${ FileName }`);
    }
  }
}