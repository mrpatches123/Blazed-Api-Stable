import { commands } from "./CommandHandler";
import { Gamemode } from "./Types";
export class Player {
    constructor(player) {
        this.player = player;
    }
    /**
     * Add an effect to the entity
     * @param {Effects} effect Effect to add to the entity
     * @param {number} duration Amount of time (in seconds) for the effect to last
     * @param {number} amplifier The strength of the effect
     * @param {boolean} showParticles Whether or not to show particles
     */
    addEffect(effect, duration, amplifier, showParticles) {
        this.player.runCommandAsync(`effect @s ${effect} ${duration} ${amplifier ?? ""} ${showParticles ? !showParticles : ""}`);
    }
    /**
     * Add a score to an objective
     * @param {string} objective Objective to add the score to
     * @param {number} score Amount to add to the objective
     */
    addScore(objective, score) {
        this.player.runCommandAsync(`scoreboard players add @s "${objective}" ${score}`);
    }
    /**
     * Add a tag to the entity
     * @param {string} tag Tag to add to the entity
     */
    addTag(tag) {
        this.player.runCommandAsync(`tag @s add ${tag}`);
    }
    /**
     * Add xp points to the player
     * @param {number} amount Amount of xp points to add to the player
     */
    addXpPoints(amount) {
        if (!Number.isSafeInteger(amount))
            return;
        this.player.runCommandAsync(`xp ${amount} @s`);
    }
    /**
     * Add xp levels to the player
     * @param {number} amount Amount of xp levels to add to the player
     */
    addXpLevels(amount) {
        if (!Number.isSafeInteger(amount))
            return;
        this.player.runCommandAsync(`xp ${amount}L @s`);
    }
    /**
     * Clear the player's spawn point
     */
    clearRespawnPoint() {
        this.player.runCommandAsync(`clearspawnpoint @s`);
    }
    /**
     * Clear the player's title
     * @remarks Only clears title and subtitle, not actionbar
     */
    clearTitle() {
        this.player.runCommandAsync(`/title @s clear`);
    }
    /**
     * Get the dimension of the entity
     * @returns {Dimensions} The entity's dimension
     */
    getDimension() {
        //@ts-ignore
        return this.player.dimension.id;
    }
    /**
     * Get the player's gamemode
     * @returns {Promise<Gamemode>} The player's gamemode
     */
    async getGamemode() {
        return Promise.any([
            this.player.runCommandAsync(`testfor @s[m=${Gamemode.survival}]`).then(() => Gamemode.survival),
            this.player.runCommandAsync(`testfor @s[m=${Gamemode.creative}]`).then(() => Gamemode.creative),
            this.player.runCommandAsync(`testfor @s[m=${Gamemode.adventure}]`).then(() => Gamemode.adventure),
            this.player.runCommandAsync(`testfor @s[m=${Gamemode.spectator}]`).then(() => Gamemode.spectator),
        ]).catch(() => undefined);
    }
    /**
     * Get the entity's id
     * @returns {"minecraft:player"} The entity's id
     */
    getId() {
        //@ts-ignore
        return this.player.typeId;
    }
    /**
     * Get the IPlayer
     * @returns {IPlayer} The IPlayer
     */
    getIPlayer() {
        return this.player;
    }
    async getLocation() {
        return {
            x: await this.getScore("API_X"),
            y: await this.getScore("API_Y"),
            z: await this.getScore("API_Z")
        };
    }
    /**
     * Get the player's name
     * @returns {string} The player's name
     */
    getName() {
        return this.player.name;
    }
    /**
     * Get a score on an objective
     * @param {string} objective Objective to get the score of
     * @returns {Promise<number>} The score, or NaN if error
     */
    async getScore(objective) {
        return this.player.runCommandAsync(`scoreboard players test @s "${objective}" -2147483648 -2147483648`).then(() => -2147483648, e => parseInt(e.split(" ")[1]) ?? NaN);
    }
    /**
     * Get the entity's unique id
     * @remarks This is different for every single entity
     * @returns {string} The entity's unique id
     */
    getUniqueId() {
        return this.player.id;
    }
    /**
     * Test for whether or not the player has a certain tag
     * @param {string} tag Tag to test for
     * @returns {Promise<boolean>} Whether or not the entity has the tag
     */
    async hasTag(tag) {
        return new Promise(e => this.player.runCommandAsync(`tag @s add ${tag}`).then(() => {
            this.player.runCommandAsync(`tag @s remove ${tag}`);
            e(false);
        }, () => e(true)));
    }
    /**
     * Kill the entity
     */
    kill() {
        this.player.runCommandAsync(`kill @s`);
    }
    /**
     * Message the player something
     * @param {string | number | symbol} message Message to send to the player
     */
    message(message) {
        this.player.runCommandAsync(`tellraw @s {"rawtext":[{"text":"${message.toString()}"}]}`);
    }
    /**
     * Remove a score from an objective
     * @param {string} objective Objective to remove the score from
     * @param {number} score Amount to remove from the objective
     */
    removeScore(objective, score) {
        this.player.runCommandAsync(`scoreboard players remove @s "${objective}" ${score}`);
    }
    /**
     * Remove a tag from the entity
     * @param {string} tag Tag to remove from the entity
     */
    removeTag(tag) {
        this.player.runCommandAsync(`tag @s remove ${tag}`);
    }
    /**
     * Make the entity run an async command
     * @param {string} command Command to run
     * @returns {Promise<boolean>} Whether or not there was an error
     */
    async runCommandAsync(command) {
        return this.player.runCommandAsync(command).then(() => true).catch(() => false);
    }
    /**
     * Run a custom command
     * @param {string} command Command to run
     */
    runCustomCommand(command) {
        const args = command.trim().split(/\s+/g);
        const cmdName = args.shift().toLowerCase();
        const data = commands[cmdName];
        if (!data)
            return;
        try {
            data.callback({ player: this, args });
        }
        catch { }
    }
    /**
     * Set a score for an objective
     * @param {string} objective Objective to set the score to
     * @param {number} score Amount to set for the objective
     */
    setScore(objective, score) {
        this.player.runCommandAsync(`scoreboard players set @s "${objective}" ${score}`);
    }
    /**
     * Teleport to a certain location
     * @param {Vec3} location The location to teleport to
     */
    teleport(location) {
        this.player.runCommandAsync(`tp @s ${location.x} ${location.y} ${location.z}`);
    }
    /**
     * Trigger an entity event
     * @param {string} event Event to trigger
     */
    triggerEvent(event) {
        this.player.runCommandAsync(`event entity @s ${event}`);
    }
}
