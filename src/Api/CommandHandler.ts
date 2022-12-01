import { CommandData, CommandInfo } from "./Types";

export const commands = {} as { [key: string]: CommandData }

export class CommandHandler {
    /**
     * Create a custom command
     * @param {CommandInfo} info The command info
     * @param {CommandData["callback"]} callback The code to run when command is called
     */
    create(info: CommandInfo, callback: CommandData["callback"]) {
        commands[info.name] = {
            name: info.name.split(" ")[0].toLowerCase(),
            description: info.description,
            permission: info.permission,
            callback
        }
    }
    /**
     * Clear all commands
     */
    clear() {
        for (const key in commands) delete commands[key]
    }
    /**
     * Loop through all commands
     * @param {(value: CommandData, index: number, array: CommandData[]) => void} callback Code to run per loop
     * @param {any} thisArg The value of this "this" word
     */
    forEach(callback: (value: CommandData, index: number, array: CommandData[]) => void, thisArg?: any) {
        Object.values(commands).forEach(callback, thisArg)
    }
    /**
     * Remove a command
     * @param {string} command Command to remove
     */
    remove(command: string) {
        delete commands[command]
    }
}
