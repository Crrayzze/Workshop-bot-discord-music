const Command = require('./commands')
const {
    PREFIX,
    MUSIC,
    PLAY,
    STOP,
    SKIP,
    PAUSE,
    RESUME
} = require('../config')

module.exports = class Play extends Command {

    static match(message) {
        console.log('Music: checking')
        return message.content.startsWith(PREFIX + MUSIC)
    }

    static action(message, bot) {
        console.log('Music: action')
        
        var input = message.content.slice(PREFIX.length + MUSIC.length + 1).trim()
        if (input.startsWith(PLAY)) {
            let cleanedInput = input.slice(PLAY.length + 1)
            this.play(message, bot, cleanedInput)
        }    
        if (input.startsWith(STOP)) {
            this.stop(message, bot)
        }    
        if (input.startsWith(SKIP)) {
            this.skip(message, bot)
        }    
        if (input.startsWith(PAUSE)) {
            this.pause(message, bot)
        }    
        if (input.startsWith(RESUME)) {
            this.resume(message, bot)
        }    
    }

    static async play(message, bot, cleanedInput) {
        console.log("Music: play  this music " + cleanedInput)
        var track = await bot.player.play(message, cleanedInput, message.member.user.tag)
    }

    static async stop(message, bot) {
        console.log("Music: stop")
        let track = await bot.player.stop(message)
    }

    static async skip(message, bot) {
        console.log("Music: skip")
        let track = await bot.player.skip(message)
    }

    static async pause(message, bot) {
        console.log("Music: pause")
        let track = await bot.player.pause(message)
    }

    static async resume(message, bot) {
        console.log("Music: resume")
        let track = await bot.player.resume(message)
    }
}

    
