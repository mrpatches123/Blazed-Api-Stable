import { world } from "@minecraft/server";
const v = world.getDimension("overworld");
export class ScoreboardManager {
    /**
     * Add a scoreboard objective
     * @param {string} id The objective id
     * @param {string} display The optional display of the objective
     */
    addObjective(id, display) {
        v.runCommandAsync(`scoreboard objectives add ${id} dummy ${display ?? ''}`);
    }
    /**
     * Remove an objective
     * @param {string} id The objective id to remove
     */
    removeObjective(id) {
        v.runCommandAsync(`scoreboard objectives remove ${id}`);
    }
}
