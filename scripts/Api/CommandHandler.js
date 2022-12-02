export const commands = {};
export class CommandManager {
    /**
     * Create a custom command
     * @param {CommandInfo} info The command info
     * @param {CommandData["callback"]} callback The code to run when command is called
     */
    create(info, callback) {
        commands[info.name] = {
            name: info.name.split(" ")[0].toLowerCase(),
            description: info.description,
            permission: info.permission,
            callback
        };
    }
    /**
     * Clear all commands
     */
    clear() {
        for (const key in commands)
            delete commands[key];
    }
    /**
     * Loop through all commands
     * @param {(value: CommandData, index: number, array: CommandData[]) => void} callback Code to run per loop
     * @param {any} thisArg The value of this "this" word
     */
    forEach(callback, thisArg) {
        Object.values(commands).forEach(callback, thisArg);
    }
    /**
     * Remove a command
     * @param {string} command Command to remove
     */
    remove(command) {
        delete commands[command];
    }
}
