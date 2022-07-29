const Discord = require("discord.js")
const fs = require("fs")

const client = new Discord.Client({
    intents: new Discord.IntentsBitField(32767),
    allowedMentions: {
        parse: [ "users", "roles", "everyone" ],
        repliedUser: true
    },
    presence: {
        status: "idle"
    }
})
client.commands = new Discord.Collection()
client.events = new Discord.Collection()
module.exports.client = client


fs.readdirSync("./commands/").forEach((dir) => {
    for(let file of fs.readdirSync(`./commands/${dir}/`).filter((files) => files.endsWith(".js"))){
        let command = require(`./commands/${dir}/${file}`)
        if(!command.name) return console.log(`[Command Handler]: ${dir}/${file} hat keinen namen`)
        if(!command.description) return console.log(`[Command Handler]: ${dir}/${file} hat keinen beschreibung`)

        client.commands.set(command.name, command)
        console.log(`[Command Handler]: ${dir}/${file} wurde geladen`)
    }
})

fs.readdirSync("./events/").forEach((file) => {
    let event = require(`./events/${file}`)
    client.events.set(event)
    console.log(`[Event Handler]: ${file} wurde geladen.`)
})


client.login("")