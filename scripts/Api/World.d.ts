import { CommandManager } from "./CommandHandler";
import { Dimension } from "./Dimension";
import { Events } from "./Events/Events";
import { Player } from "./Player";
import { ScoreboardManager } from "./ScoreboardManager";
import { Dimensions, EntityQueryOptions, MusicOptions, SoundOptions, Time } from "./Types";
declare class World {
    /**
     * A custom commmand handler
     */
    readonly commands: CommandManager;
    /**
     * A set of events to run code
     */
    readonly events: Events;
    /**
     * The world scoreboard manager
     */
    readonly scoreboard: ScoreboardManager;

    getAllPlayers(): Array<Player>;
    /**
     * Run a command async
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    runCommandAsync(command: string): Promise<boolean>;
    /**
     * Set the world's time
     * @param {Time} timeOfDay The time
     */
    setTime(timeOfDay: Time): void;
    /**
     * Plays a particular track for all players
     * @param {string} musicId The id of the track to play
     * @param {MusicOptions} musicOptions Aditional music options
     */
    playMusic(musicId: string, musicOptions?: MusicOptions): void;
    /**
     * Queues an additional music track for all players. if a track is not playing, a music track will play
     * @param {string} musicId The id of the track to queue
     * @param {MusicOptions} musicOptions Aditional music options
     */
    queueMusic(musicId: string, musicOptions?: MusicOptions): void;
    /**
     * Stops any music tracks from playing
     */
    stopMusic(): void;
    /**
     * Plays a sound for all players
     * @param {string} soundId The id of the sound to play
     * @param {SoundOptions} soundOptions Aditional sound options
     */
    playSound(soundId: string, soundOptions?: SoundOptions): void;
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
export { };
