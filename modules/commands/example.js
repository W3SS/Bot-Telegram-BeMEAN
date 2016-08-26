'use strict';

const execute = (msg, match, bot) => {
    const text = 'Segundo o Qual é a Gíria, *uva* é: algo muito bom, excelente, ótimo.\nFonte: http://www.qualeagiria.com.br/giria/uva/'
    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            inline_keyboard: [[{
                text: "Saiba como usar a gíria",
                url: 'http://www.qualeagiria.com.br/giria/uva/'
            }]]
        },
        parse_mode: 'Markdown'
    });
}

module.exports = {
    execute,
    'numParams': 0
};