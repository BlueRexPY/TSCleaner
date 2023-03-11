require('dotenv').config();

import commands from './commands';
import spamHandler from './spamHandler';
import bot from './core/bot';
import { development, production } from './utils/launch';

bot.use(commands);
bot.use(spamHandler);

process.env.NODE_ENV === 'development' ? development(bot) : production(bot);

export {};
