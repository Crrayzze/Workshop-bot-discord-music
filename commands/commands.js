module.exports = class Command {

    static parse(message, bot) {
        if (this.match(message)) {
            this.action(message, bot)
        }
    }

    static match(message) {
        return false
    }

    static action(message, bot) {

    }

}