import { Player as IPlayer } from "@minecraft/server";
import { Dimensions, Effects, Gamemode, Vec3 } from "./Types";
export declare class Player {
    protected player: IPlayer;
    constructor(player: IPlayer);
    /**
     * Add an effect to the entity
     * @param {Effects} effect Effect to add to the entity
     * @param {number} duration Amount of time (in seconds) for the effect to last
     * @param {number} amplifier The strength of the effect
     * @param {boolean} showParticles Whether or not to show particles
     */
    addEffect(effect: Effects, duration: number, amplifier?: number, showParticles?: boolean): void;
    /**
     * Add a score to an objective
     * @param {string} objective Objective to add the score to
     * @param {number} score Amount to add to the objective
     */
    addScore(objective: string, score: number): void;
    /**
     * Add a tag to the entity
     * @param {string} tag Tag to add to the entity
     */
    addTag(tag: string): void;
    /**
     * Add xp points to the player
     * @param {number} amount Amount of xp points to add to the player
     */
    addXpPoints(amount: number): void;
    /**
     * Add xp levels to the player
     * @param {number} amount Amount of xp levels to add to the player
     */
    addXpLevels(amount: number): void;
    /**
     * Clear the player's spawn point
     */
    clearRespawnPoint(): void;
    /**
     * Clear the player's title
     * @remarks Only clears title and subtitle, not actionbar
     */
    clearTitle(): void;
    /**
     * Get the dimension of the entity
     * @returns {Dimensions} The entity's dimension
     */
    getDimension(): Dimensions;
    /**
     * Get the player's gamemode
     * @returns {Promise<Gamemode>} The player's gamemode
     */
    getGamemode(): Promise<Gamemode>;
    /**
     * Get the entity's id
     * @returns {"minecraft:player"} The entity's id
     */
    getId(): "minecraft:player";
    /**
     * Get the IPlayer
     * @returns {IPlayer} The IPlayer
     */
    getIPlayer(): IPlayer;
    getLocation(): Promise<Vec3>;
    /**
     * Get the player's name
     * @returns {string} The player's name
     */
    getName(): string;
    /**
     * Get a score on an objective
     * @param {string} objective Objective to get the score of
     * @returns {Promise<number>} The score, or NaN if error
     */
    getScore(objective: string): Promise<number>;
    /**
     * Get the entity's unique id
     * @remarks This is different for every single entity
     * @returns {string} The entity's unique id
     */
    getUniqueId(): string;
    /**
     * Test for whether or not the player has a certain tag
     * @param {string} tag Tag to test for
     * @returns {Promise<boolean>} Whether or not the entity has the tag
     */
    hasTag(tag: string): Promise<boolean>;
    /**
     * Kill the entity
     */
    kill(): void;
    /**
     * Message the player something
     * @param {string | number | symbol} message Message to send to the player
     */
    message(message: string | number | symbol): void;
    /**
     * Remove a score from an objective
     * @param {string} objective Objective to remove the score from
     * @param {number} score Amount to remove from the objective
     */
    removeScore(objective: string, score: number): void;
    /**
     * Remove a tag from the entity
     * @param {string} tag Tag to remove from the entity
     */
    removeTag(tag: string): void;
    /**
     * Make the entity run an async command
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    runCommandAsync(command: string): Promise<boolean>;
    /**
     * Run a custom command
     * @param {string} command Command to run
     */
    runCustomCommand(command: string): void;
    /**
     * Set a score for an objective
     * @param {string} objective Objective to set the score to
     * @param {number} score Amount to set for the objective
     */
    setScore(objective: string, score: number): void;
    /**
     * Teleport to a certain location
     * @param {Vec3} location The location to teleport to
     */
    teleport(location: Vec3): void;
    /**
     * Trigger an entity event
     * @param {string} event Event to trigger
     */
    triggerEvent(event: string): void;
}
