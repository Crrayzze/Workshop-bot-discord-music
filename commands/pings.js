const Command = require('./commands')
const {
    PREFIX,
    PING
} = require('../config')

module.exports = class Ping extends Command {

    static match(message) {
        console.log('Ping: checking')
        return message.content == (PREFIX + PING)
    }

    static action(message, bot, utils) {
        console.log('Ping: action')

        message.reply("pong")
    }

}