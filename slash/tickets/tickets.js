const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js")
const Discord = require("discord.js")
const config = require("../../config.js")

module.exports = {
  name: 'tickets',
  description: 'Tickets setup',
  run: async (client, interaction) => {
    if (message.member.permissions.has("ADMINISTRATOR")){
      const embed = new Discord.MessageEmbed()
      .setTitle("🏷️ Ouvrir un ticket :")
      .setDescription(`Pour ouvrir un ticket, il vous suffit de choisir la catégorie ci-dessous. Suite à cela vous entrerez en contacte avec le staff de zardium`)
      .setFooter({
        text: "© 2022 Zardium - Tout Droits Réservés",
        iconURL: "https://i.imgur.com/3oThL53.png"})
      .setColor("#ad7b00")
      .setThumbnail("https://i.imgur.com/3oThL53.png")

      const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('support1')
        .setLabel('Demande de support')
        .setStyle('PRIMARY'),
      )
            
      const initialMessage = await interaction.channel.send({ embeds: [embed], components: [row] });
    } else {
      const noperm = new Discord.MessageEmbed()
      .setAuthor({
          name: "| Modération",
          iconURL: "https://i.imgur.com/3oThL53.png"})
      .setDescription(`
      > Vous n'avez pas la permission de faire cette commande !`)
      .setFooter({
        text: "© 2022 Zardium - Tout Droits Réservés",
        iconURL: "https://i.imgur.com/3oThL53.png"})
      .setColor("#ad7b00")
      .setThumbnail("https://i.imgur.com/3oThL53.png")
      message.channel.send({ embeds: [noperm]}).then(msg => {
        setTimeout(function() {
            msg.delete()
        }, 4000);
      })
    }


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

async function ticketReload(){
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId('support1')
      .setLabel('Demande de support')
      .setStyle('PRIMARY'),
    )
    initialMessage.edit({ components: [row] });
}


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        const filter = (interaction) => interaction.user.id;
        const collector = interaction.channel.createMessageComponentCollector(
            {
                filter,
                componentType: "BUTTON",
            });

            collector.on('collect', (interaction) => {
                const SUPPORTROLEID = "957348798437417023";
                interaction.deferUpdate()
                if (interaction.customId === "support1") {
                    ticketReload()

                    interaction.message.guild.channels.create(`ticket-${interaction.user.username}`, {
                        permissionOverwrites: [
                            {
                                id: interaction.user.id,
                                allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                            },
                            {
                              id: SUPPORTROLEID,
                              allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                          },
                            {
                                id: interaction.message.guild.roles.everyone,
                                deny: ["VIEW_CHANNEL"]
                            },
                        ],
                        type: 'text',
                        parent: "957348812417024100", // BUILD TICKETS
                    }).then(async channel => {
                      const row = new MessageActionRow()
                      .addComponents([
                        new MessageButton()
                              .setLabel('🔒 Fermer le ticket')
                              .setStyle('DANGER')
                              .setCustomId('closeticket'),
                      ])
                        const enbed = new MessageEmbed()
                        .setTitle("<:zardium:952215881369395251> Bienvenue dans votre Ticket !")
                        .setDescription(`
                        Bonjour/bonsoir un membre du staff de zardium va vous prendre en charge sous peu !
                        Merci de patientez et de ne ping aucun membre du staff.`)
                        .setFooter({
                            text: "© 2022 Zardium - Tout Droits Réservés",
                            iconURL: "https://i.imgur.com/3oThL53.png"})
                          .setColor("#ad7b00")
                        channel.send(`${interaction.user} <@&${SUPPORTROLEID}>`)
                        channel.send({ embeds: [enbed], components: [row] });
                      })
                }
            })

            const filterr = (interaction) => interaction.user.id;
            const collectorr = interaction.channel.createMessageComponentCollector(
                {
                    filterr,
                });
    
                collectorr.on('collect', (interaction) => {
                    if (interaction.customId === "test") {
                        console.log("test")
                    }
                })
        }
}