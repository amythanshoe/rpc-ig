// This template was made by FusionTerror.
const DiscordRPC = require('discord-rpc'); // Requiring the discord-rpc package.
const client = new DiscordRPC.Client({ transport: 'ipc' }); // Creating a client variable with is our rpc client.
require('dotenv').config(); // Requiring the content of our .env file.

(async () => {
    client.on('ready', async () => { // Calling the ready event.
        await client.setActivity({ // Setting the Rich Presence Activity based on what is passed in here.
            buttons: [{ label: "TOP.GG", url: "https://top.gg/bot/857279963564867595" },{ label: "Discord support server", url: "https://discord.gg/jBkbewdYvW" }],
            details: "Best Discord Bot. Vote for SayGoodbye !",
            largeImageKey: "maxresdefault",
            largeImageText: "do it!"
        }).catch(err => console.log(err));

        console.log("Discord Rich Presence has been enabled.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error); // Logging into our application.
})();
