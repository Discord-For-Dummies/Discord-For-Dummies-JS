const { Events } = require('discord.js');

const Path = require('path');

module.exports = {
  folder: 'events',

  execute(client, extra) {
    for (const File of extra.files) {
      const FilePath = Path.join(extra.directory, File);

      const Event = require(FilePath);
      const EventName = File.replace('.js', '');

      client[Event.type]( 
        Events[EventName],
        Event.execute
      );
    }
  }
}