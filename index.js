const Discord = require('discord.js')
const Ping = require('./commands/pings')
const Music = require('./commands/music')

const Bot = new Discord.Client()

const { Player } = require('discord-player')
const player = new Player(Bot)

Bot.player = player

const {
    BOT_TOKEN,
    PREFIX
} = require('./config')

Bot.login(BOT_TOKEN)

Bot.on("ready", () => {
    console.log("Je suis la !")
})

Bot.on("guildMemberAdd", member => {
    member.guild.channels.cache.find(channel => channel.id === "765481272726126604").send("Bienvenue sur ce serveur !")
})

Bot.on("guildMemberRemove", member => {
    member.guild.channels.cache.find(channel => channel.id === "765481272726126604").send("Un membre nous a quitté :face_with_monocle:")
})

Bot.on("message", message => {
    if (message.author.bot || message.channel.type == "dm")
        return
    if (message.content.startsWith(PREFIX)) {
        let commandUsed = Ping.parse(message, Bot) || Music.parse(message, Bot)
    }
})

Bot.player.on("trackStart", (message, track) => {
    message.channel.send(
        {embed: {
            color: "07E900",
            author: {
                icon_url: Bot.user.avatarURL()
            },
            title: track.title,
            description: track.description,
            fields: [
                {
                    name: "Duration",
                    value: track.duration
                },
                {
                    name: "Views",
                    value: track.views
                },
                {
                    name: "Url",
                    value: track.url
                }
            ],
            image: {
                url: track.thumbnail
            },
            timestamp: new Date(),
            footer: {
                icon_url: Bot.user.avatarURL(),
                text: "© " + Bot.user.username
            }
        }})
})