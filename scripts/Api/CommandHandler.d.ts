import { CommandData, CommandInfo } from "./Types";
export declare const commands: {
    [key: string]: CommandData;
};
export declare class CommandHandler {
    /**
     * Create a custom command
     * @param {CommandInfo} info The command info
     * @param {CommandData["callback"]} callback The code to run when command is called
     */
    create(info: CommandInfo, callback: CommandData["callback"]): void;
    /**
     * Clear all commands
     */
    clear(): void;
    /**
     * Loop through all commands
     * @param {(value: CommandData, index: number, array: CommandData[]) => void} callback Code to run per loop
     * @param {any} thisArg The value of this "this" word
     */
    forEach(callback: (value: CommandData, index: number, array: CommandData[]) => void, thisArg?: any): void;
    /**
     * Remove a command
     * @param {string} command Command to remove
     */
    remove(command: string): void;
}
