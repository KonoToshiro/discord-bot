const Discord = require ('discord.js')

const TOKEN = "OTMyMzEzNzg4MjMxODc2NjQw.YeRK4A.pqktQjov61Vhcso5nioEd5JpExs"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", ()=> {
    console.log(`Logged in as ${client.user.tag}`)
})
client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello World!")
    }
})

client.login(TOKEN)