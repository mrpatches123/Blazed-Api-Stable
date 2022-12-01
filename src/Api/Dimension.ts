import { Dimension as IDimension, world } from "@minecraft/server";
import { Dimensions } from "./Types";

export class Dimension {
    private dimension: IDimension
    constructor(id: Dimensions) {
        this.dimension = world.getDimension(id)
    }
    /**
     * Run a command async
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    runCommandAsync(command: string): Promise<boolean> {
        return new Promise(e => this.dimension.runCommandAsync(command).then(() => e(true)).catch(() => e(false)))
    }
}
