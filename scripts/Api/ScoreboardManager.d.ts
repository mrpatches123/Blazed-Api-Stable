export declare class ScoreboardManager {
    /**
     * Add a scoreboard objective
     * @param {string} id The objective id
     * @param {string} display The optional display of the objective
     */
    addObjective(id: string, display?: string): void;
    /**
     * Remove an objective
     * @param {string} id The objective id to remove
     */
    removeObjective(id: string): void;
}
