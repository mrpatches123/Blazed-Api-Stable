import { CommandHandler } from "./CommandHandler";
import { Dimension } from "./Dimension";
import { Events } from "./Events/Events";
import { Player } from "./Player";
import { Dimensions, EntityQueryOptions } from "./Types";
declare class World {
    /**
     * A set of events to run code
     */
    readonly events: Events;
    /**
     * A custom commmand handler
     */
    readonly commands: CommandHandler;
    /**
     * Run a command async
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    runCommandAsync(command: string): Promise<boolean>;
    /**
     * Get all players, with custom query options
     * @param {EntityQueryOptions} options The query options
     * @returns {Player[]} All players that match the query options
     */
    getPlayers(options?: EntityQueryOptions): Promise<Player[]>;
    /**
     * Get a dimension
     * @param {Dimensions} dimension The dimension to get
     * @returns {Dimension} The dimension class
     */
    getDimension(dimension: Dimensions): Dimension;
    /**
     * Broadcast a message in chat
     * @param {string | number | symbol} message Message to broadcast
     */
    broadcast(message: string | number | symbol): void;
}
export declare const world: World;
export {};
