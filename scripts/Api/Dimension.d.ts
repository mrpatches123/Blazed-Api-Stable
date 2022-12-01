import { Dimensions } from "./Types";
export declare class Dimension {
    private dimension;
    constructor(id: Dimensions);
    /**
     * Run a command async
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    runCommandAsync(command: string): Promise<boolean>;
}
