/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```HEY BRO!! I AM STILL ALIVE 🐺```\n\n_Version:_ ```'+Config.VERSION+'```\n_Branch:_ ```'+Config.BRANCH+'```\n_OWNER:_ *TOXIC DEVIL [ ABHINAV]*\n_CONTACT OWNER:_ *https://Wa.me/+919645677094*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*_Powered by Toxic Devil_*', MessageType.text);
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```HEY BRO!! I AM STILL ALIVE!! 🐺```\n\n_Version:_ ```'+Config.VERSION+'```\n_Branch:_ ```'+Config.BRANCH+'```\n_OWNER:_ *TOXIC DEVIL [ ABHINAV]*\n_CONTACT OWNER:_ *https://Wa.me/+919645677094*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.ALIVEMSG + '\n*Powered by Toxic Devil*', MessageType.text);
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
