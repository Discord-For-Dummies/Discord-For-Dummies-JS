const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

const FileSystem = require('fs');
const Path = require('path');

const SetupPath = Path.join(__dirname, 'setup'); 

// Dotenv
require('dotenv').config();

const TOKEN = process.env.TOKEN;
const CLIENTID = process.env.CLIENT_ID;

// Client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

// Setup Folder
const RunOrder = ['before', 'after'];

for (var index = 0; index < RunOrder.length; index++) {
  const Folder = RunOrder[index];

  const FolderPath = Path.join(SetupPath, Folder);
  const Files = FileSystem.readdirSync( FolderPath ).filter(file => file.endsWith('.js'));

  console.log(`\nSetup: Running files for ${Folder}`);

  for (const File of Files) {
    const FilePath = Path.join(FolderPath, File);
    const Data = require(FilePath);

    const Directory = Path.join(__dirname, Data.folder);

    console.log(`Setup: Running file ${File}`);

    Data.execute(
      client,
      {
        "directory": Directory,
        "files": FileSystem.readdirSync( Directory ),

        "token": TOKEN,
        "clientID": CLIENTID
      }
    );
  }
}

client.login(TOKEN);