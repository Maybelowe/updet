let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
   if (!text) throw text = '20'
   conn.sendMessage(m.chat, "\n".repeat(text), MessageType.text)
}
handler.command = /^unamedd$/i
