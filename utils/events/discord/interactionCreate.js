const Discord = require("discord.js")
const util = require("util")

module.exports = (client, interaction) => {
       if (interaction.isCommand()) {
   
       const command = client.interactions.get(interaction.commandName);
   
       if (!command) return interaction.reply({
         content: "Quelque chose s'est mal passé..",
         ephemeral: true
       });
   
       command.run(client, interaction);
     }



     if(interaction.isButton()){
       interaction.deferUpdate()
      if(interaction.customId === "closeticket"){
        const member = interaction.user;
        const embed = new Discord.MessageEmbed()
        .setTitle("Merci de vous vous être confié à notre équipe !")
        .setDescription(`
        Si vous avez des questions, besoin d'aide n'hésitez pas à réouvrir un ticket dans le salon <#959748727898259496>`)
        .setFooter({
          text: "© 2022 Zardium - Tout Droits Réservés",
          iconURL: "https://i.imgur.com/3oThL53.png"})
        .setColor("#ad7b00")
        member.send({ embeds: [embed]})
        interaction.channel.delete()
      }
    }
   }
