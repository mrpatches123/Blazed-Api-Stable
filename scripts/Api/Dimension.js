import { world } from "@minecraft/server";
export class Dimension {
    constructor(id) {
        this.dimension = world.getDimension(id);
    }
    /**
     * Run a command async
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    runCommandAsync(command) {
        return new Promise(e => this.dimension.runCommandAsync(command).then(() => e(true)).catch(() => e(false)));
    }
}
