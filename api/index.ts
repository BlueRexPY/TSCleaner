require("../src/index");

import { webhookCallback } from "grammy";
import bot from "../src/core/bot";

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

async function handler(req, res) {
    await runMiddleware(req, res, webhookCallback(bot));
}

export default handler;
