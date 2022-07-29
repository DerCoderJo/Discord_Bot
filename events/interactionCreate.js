const Discord = require("discord.js")
const client = require("../index.js").client

client.on("interactionCreate", (interaction) => {
    if(interaction.isChatInputCommand()){
        let command = client.commands.get(interaction.commandName)
        if(!command) return interaction.reply("Konnte Command nicht finden")
        command.run(interaction)
    }else if(interaction.isButton()){
        if(interaction.customId == "knopf1") interaction.reply({content: "Knopf 1 ist cool"})
        else if(interaction.customId == "knopf4") interaction.reply({content: "hi"})
    }else if(interaction.isSelectMenu()){
        if(interaction.customId == "selectMenu"){
            if(interaction.values.includes("id")) interaction.reply("Text ist toll :D")
        }
    }
})