const infobot = (status, offline, latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) => {
return `ℒ⃝👾 *𝗕𝗢𝗧 𝗟𝗔𝗫𝗬 𝗦𝗧𝗔𝗧𝗜𝗦𝗧𝗜𝗖*

👨‍💻 Owner : @${ownerNumberrr.split('@')[0]}
☪️ Lib  : Baileys
☸️ Type  : NodeJs
♂️ Mode : ${status}
♀️ Status : ${offline ? 'OFFLINE' : 'ONLINE'}
👨‍👨‍👧‍👦 Group Chat : ${giid.length}
👥 Personal Chat : ${totalchat.length - giid.length}
👨‍👩‍👧‍👧 Total Chat : ${totalchat.length}
🍃 Speed : ${latensii.toFixed(4)} Second (s)
🌾 Runtime : ${kyun(runtime)}


ℒ⃝📲 *𝗣𝗛𝗢𝗡𝗘 𝗦𝗧𝗔𝗧𝗜𝗦𝗧𝗜𝗖*

🪀 WhatsApp V : ${wa_version}
🛑 RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
📈 MCC : ${mcc}
📉 MNC : ${mnc}
📊 OS Version : ${os_version}
📫 Merk Hp : ${device_manufacturer}
📮 Versi Hp : ${device_model}


ℒ⃝👨‍💻 *𝗖𝗢𝗡𝗡𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗠𝗘*

⛎ Api : api-alphabot.herokuapp.com
♈ YouTube : youtube.com/c/zeeoneofc
♉ Github : zeeoneofc.github.io
♊ Instagram : instagram.com/zeeoneofc
♋ Tiktok : tiktok.com/@zeeoneofc
♌ Telegram : t.me/zeeoneofc
♎ Ch Telegram : t.me/zeeone_ofc
♏ WhatsApp : bit.ly/zeeone_ofc
`}

exports.infobot = infobot
 
