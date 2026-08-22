let handler = async (m, { conn }) => {
let menu = `
┏━━━〔 *VIHANGA-MD* 〕━━━┓
┃  👑 Owner: ${global.ownername}
┃  🤖 Bot: ${global.botname}
┃  📱 Version: 1.0.0
┗━━━━━━━━━━━━┛

*🔥 MAIN MENU*
├ !menu - main menu 
├ !ping - bot speed check

*👥 GROUP MENU*
├ !welcome on/off - Welcome msg

Made with ❤️ by *VIHANGA*
`
await conn.sendMessage(m.chat, { text: menu })
}
handler.command = ['menu', 'help']
module.exports = handler
