import { Composer } from 'grammy';

const composer = new Composer();

const isSpam = (message: string) => {
  const allowedTextRegex = [
    /Привет! я линейка/gi,
    /Следующая попытка завтра!/gi,
    /Топ 10 игроков/gi,
    /Данная команда доступна только в личке с ботом/gi,
    /Команды бота/gi,
  ];

  let isSpam = true;

  if (message) {
    allowedTextRegex.forEach((regex) => {
      if (regex.test(message)) {
        isSpam = false;
      }
    });
  }

  return isSpam;
};

composer.on('message', (ctx) => {
  const { message, from } = ctx;

  if (message && from.is_bot && from.username === 'pipisabot') {
    ctx.deleteMessage();
    ctx.reply('Спам видалено 🧹');
  }
});

export default composer;
