/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'dice', fromMe: false}, (async (message, match) => {

    await message.sendMessage("🎰 *The Game Beginning! Get Ready.* ✊🏻\n Type *.roll* to get start.");

}));

Asena.addCommand({pattern: 'roll', fromMe: false}, (async (message, match) => {

    await message.sendMessage("🍀 *Dice Rolling!* 🎲");
    await new Promise(r => setTimeout(r, 4000));

    var r_text = new Array ();
r_text[0] = "🎲 *1* 🎲";
r_text[1] = "🎲 *2* 🎲";
r_text[2] = "🎲 *3* 🎲";
r_text[3] = "🎲 *4* 🎲";
r_text[4] = "🎲 *5* 🎲";
r_text[5] = "🎲 *6* 🎲";

var i = Math.floor(6*Math.random())

await message.sendMessage(`*Dice Rolled:* ${r_text[i]}`);

}));

Asena.addCommand({pattern: 'infodice', fromMe: false}, (async (message, match) => {

    await message.sendMessage("*Codded by @abhimodzz*\nRoll dice randomly and set up a game.\n💻Usage: *.dice*")

}));
