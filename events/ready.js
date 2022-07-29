const Discord = require("discord.js")
const client = require("../index.js").client

client.on("ready", () => {
    let commands = []
    for(let command of client.commands) commands.push(command[1])
    client.application.commands.set(commands)
})