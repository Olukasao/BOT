const DiscordJS = require("discord.js")
require('dotenv').config()
const client = new DiscordJS.Client({
    intents: [
        DiscordJS.Intents.FLAGS.GUILDS,
        DiscordJS.Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on("ready,", () => {
    console.log("o bot esta online");
})

client.on("messageCreate", (message) => {
    if (message.content == "ping") {
        message.reply({
            content: "pong!",
        })
    }
})

client.login(process.env.TOKEN)

const { joinVoiceChannel } = require('@discordjs/voice');

client.on("ready", () => {

    let channel = client.channels.cache.get("895789448053268491");

    if (channel) {
        joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        })
    }

    console.log("✅ - Entrei no canal de vóz [" + channel.name + "] com sucesso.")
});

client.on("messageCreate", (messsage) => {

    let channel = client.channels.cache.get("");
    if (channel) {
        joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        })
    }
});

client.on("ready", () => {

    let canal = client.channels.cache.get("895789616592982056")
    let wave = 1
    let timer = 20000
    var myFunction = function () {
        if (wave <= 13) {
            canal.send('tts spawn em 20 segundos');
            message.channel.send("A text to speech message from a bot.", {
                tts: true
               })
        }
        if (wave > 13 && wave <= 25) {
            canal.send('tts spawn em 28 segundos');
            timer = 28000
        } if (wave > 25 && wave <= 32) {
            canal.send('tts spawn em 36 segundos');
            timer = 36000
        } if (wave == 33) {
            canal.send('tts spawn em 28 segundos');
            timer = 28000
        } if (wave >= 34 && wave <= 41) {
            canal.send('tts spawn em 44 segundos');
            timer = 44000
        } if (wave >= 42 && wave <= 46) {
            canal.send('tts spawn em 52 segundos');
            timer = 52000
        } if (wave >= 47 && wave <= 50) {
            canal.send('tts spawn em 1 minuto');
            timer = 100000
        }


        wave++
        if (wave <= 50) {
            setTimeout(myFunction, timer);
        }
    }
    setTimeout(myFunction, timer);


})

