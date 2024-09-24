
const { Telegraf } = require('telegraf')

const bot = new Telegraf('6968669280:AAFQ2avaBz0lYv40WoT5dPPxbSAskfxwZ7c')

bot.start((ctx) =>{
    ctx.reply('Bienvenido');
})

bot.launch()
