module.exports = {
  type: 'once',

  async execute(client) {
    console.log(`Logged in as ${client.user.tag}`);
  }
}