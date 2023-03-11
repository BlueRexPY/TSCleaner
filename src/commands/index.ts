import { Composer } from "grammy";

import info from "./info";

const composer = new Composer();

composer.command("info", info);

export default composer;
