import { world as Iworld } from "@minecraft/server";
import { CommandManager } from "./CommandHandler";
import { Dimension } from "./Dimension";
import { Events } from "./Events/Events";
import { Player } from "./Player";
import { ScoreboardManager } from "./ScoreboardManager";
const v = Iworld.getDimension("overworld");
class World {
    constructor() {
        /**
         * A custom commmand handler
         */
        this.commands = new CommandManager();
        /**
         * A set of events to run code
         */
        this.events = new Events();
        /**
         * The world scoreboard manager
         */
        this.scoreboard = new ScoreboardManager();
    }
    /**
     * Run a command async
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    runCommandAsync(command) {
        return new Promise(e => v.runCommandAsync(command).then(() => e(true)).catch(() => e(false)));
    }
    /**
     * Set the world's time
     * @param {Time} timeOfDay The time
     */
    setTime(timeOfDay) {
        v.runCommandAsync(`time set ${timeOfDay}`);
    }
    /**
     * Get all players, with custom query options
     * @param {EntityQueryOptions} options The query options
     * @returns {Player[]} All players that match the query options
     */
    async getPlayers(options) {
        if (!options)
            return Iworld.getAllPlayers().map(plr => new Player(plr));
        return new Promise(e => {
            const plrArr = [], plrs = Iworld.getAllPlayers(), len = plrs.length;
            plrs.forEach(async (plr, i) => {
                let cmd = `testfor @s[`;
                if (options.name)
                    cmd += `name=${options.name},`;
                else if (options.excludeNames)
                    options.excludeNames.forEach(name => cmd += `name=!${name},`);
                if (options.gameMode)
                    cmd += `m=${options.gameMode},`;
                else if (options.excludeGameModes)
                    options.excludeGameModes.forEach(gm => cmd += `m=!${gm},`);
                if (options.tags)
                    cmd += options.tags.forEach(tag => `tag=${tag},`);
                else if (options.excludeTags)
                    options.excludeTags.forEach(tag => cmd += `tag=!${tag},`);
                if (options.location) {
                    cmd += `x=${Math.floor(options.location.x)},y=${Math.floor(options.location.y)},y=${Math.floor(options.location.y)},`;
                    if (options.closest)
                        cmd += `c=${options.closest},`;
                }
                plr.runCommandAsync(cmd.slice(0, -1) + "]").then(() => plrArr.push(new Player(plr))).finally(() => (++i === len) && e(plrArr));
            });
        });
    }
    /**
     * Get a dimension
     * @param {Dimensions} dimension The dimension to get
     * @returns {Dimension} The dimension class
     */
    getDimension(dimension) {
        return new Dimension(dimension);
    }
    /**
     * Broadcast a message in chat
     * @param {string | number | symbol} message Message to broadcast
     */
    broadcast(message) {
        v.runCommandAsync(`tellraw @a {"rawtext":[{"text":"${message.toString()}"}]}`);
    }
}
export const world = new World();
