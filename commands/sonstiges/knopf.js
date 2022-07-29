const Discord = require("discord.js")
const client = require("../../index.js").client


module.exports = {
    name: "knopf",
    description: "Knöpfe sind toll",

    run: (interaction) => {
        let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("knopf1")
            .setEmoji("🤯")
            .setLabel("Kopf 1 :D")
            .setStyle(Discord.ButtonStyle.Secondary)
            .setDisabled(false),

            new Discord.ButtonBuilder()
            .setEmoji("❎")
            .setLabel("Kopf 2 :D")
            .setStyle(Discord.ButtonStyle.Link)
            .setURL("https://discord.gg/AqG9WRMDjp")
            .setDisabled(false),

            new Discord.ButtonBuilder()
            .setCustomId("knopf3")
            .setLabel("Kopf 3 :D")
            .setStyle(Discord.ButtonStyle.Danger)
            .setDisabled(true),
        )

        let row2 = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("knopf4")
            .setEmoji("🤯")
            .setLabel("Kopf 1 :D")
            .setStyle(Discord.ButtonStyle.Secondary)
            .setDisabled(false),

            new Discord.ButtonBuilder()
            .setEmoji("❎")
            .setLabel("Kopf 2 :D")
            .setStyle(Discord.ButtonStyle.Link)
            .setURL("https://discord.gg/AqG9WRMDjp")
            .setDisabled(false),

            new Discord.ButtonBuilder()
            .setCustomId("knopf6")
            .setLabel("Kopf 3 :D")
            .setStyle(Discord.ButtonStyle.Danger)
            .setDisabled(true),
        )

        let row3 = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.SelectMenuBuilder()
            .setCustomId("selectMenu")
            .setDisabled(false)
            .setPlaceholder("Wähle was aus")
            .setMaxValues(5)
            .setMinValues(1)
            .addOptions(
                {
                    label: "TExt",
                    description: "Beschreibung",
                    value: "id",
                    emoji: "❌"
                },
                {
                    label: "v",
                    description: "v",
                    value: "s",
                    emoji: "❌"
                },
                {
                    label: "G",
                    description: "d",
                    value: "e"
                },
                {
                    label: "F",
                    description: "s",
                    value: "b"
                },
                {
                    label: "S",
                    description: "Beschrasdeibung",
                    value: "o",
                    emoji: "👁️"
                }
            )
        )

        interaction.reply({components: [row, row2, row3]})
    }
}