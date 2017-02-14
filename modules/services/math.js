'use strict';

const pm = { 'parse_mode': 'Markdown' };
const isOk = require('../utils/regexutils').isInputOK;
const safeEval = require('sewe');
const s = require('../settings');

const execute = (bot, msg) => {
  if (s.getGlobal('evals', (err, data) => {
    if (data === 'true') {
      if (isOk(msg.text)) {
        const _return = 'Calculando: `' + msg.text + ' = ' + safeEval(msg.text) + '`';
        bot.sendMessage(msg.chat.id, _return, pm).catch(console.log);
      } else {
        require('../utils/monitutils').notifyAdmins(bot, 'Eval malicioso detectado: `' + msg.text + '`. Enviado por: ' + msg.from.id + ', ' + msg.from.first_name + ' ' + msg.from.last_name + ', @' + msg.from.username);
        bot.sendMessage(msg.chat.id, 'Aaaaaaah! Espertinho você, em! Esse comando não é permitido não, jovem. O @osuissa e o @rmunhoz foram avisados sobre isso e, se pá, nunca mais respondo uma mensagem sua.').catch(console.log);
      }
    } else {
      bot.sendMessage(msg.chat.id, 'Desculpa, evals estão desabilitados no momento');
    }

  }));

};

module.exports = {
  execute
};