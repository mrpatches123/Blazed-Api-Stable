import type { Player } from "./Player";
export declare enum Gamemode {
    creative = 0,
    survival = 1,
    adventure = 2,
    spectator = 3
}
export declare type Vec3 = {
    /**
     * The x position
     */
    x: number;
    /**
     * The y position
     */
    y: number;
    /**
     * The z position
     */
    z: number;
};
export declare type EntityQueryScoreOptions = {
    /**
     * If set to true, entities and players within this score range
     * are excluded from query results.
     */
    exclude?: boolean;
    /**
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     */
    maxScore?: number;
    /**
     * If defined, only players that have a score equal to or over
     * minScore are included.
     */
    minScore?: number;
    /**
     * Identifier of the scoreboard objective to filter on.
     */
    objective?: string;
};
export declare type EntityQueryOptions = {
    /**
     * Includes entities with the specified name.
     */
    name?: string;
    /**
     * Includes entities with a gamemode that matches the specified gamemode.
     */
    gameMode?: Gamemode;
    /**
     * Includes entities that match all of the specified tags.
     */
    tags?: string[];
    /**
     * Include entities at the location
     * Used in conjunction with closest, farthest, limit, and distance properties (Requires atleast one of the following).
     */
    location?: Vec3;
    /**
     * Includes the closest entities to the location that was specified
     */
    closest?: number;
    /**
     * Include entities that match the score options
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * Excludes entities that have a name that match one of the specified values.
     */
    excludeNames?: string[];
    /**
     * Excludes entities if have a specific gamemode that matches the specified gamemode.
     */
    excludeGameModes?: Gamemode[];
    /**
     * Excludes entities with a tag that matches one of the specified values.
     */
    excludeTags?: string[];
};
export declare type Effects = "absorption" | "bad_omen" | "blindness" | "conduit_power" | "darkness" | "fatal_poison" | "fire_resistance" | "haste" | "health_boost" | "hunger" | "instant_damage" | "instant_health" | "invisibility" | "jump_boost" | "levitation" | "mining_fatigue" | "nausea" | "night_vision" | "poison" | "regeneration" | "resistance" | "saturation" | "slow_falling" | "slowness" | "speed" | "strength" | "village_hero" | "water_breathing" | "weakness" | "wither";
export declare type Dimensions = "overworld" | "nether" | "the end";
export declare type Time = "sunrise" | "day" | "noon" | "sunset" | "night" | "midnight" | number;
export interface CommandInfo {
    /**
     * The name of the command
     */
    name: string;
    /**
     * The description of the commands
     */
    description?: string;
    /**
     * Permission the player needs to run the command
     */
    permission?: (player: Player) => boolean;
}
export interface CommandData extends CommandInfo {
    callback(data: {
        player: Player;
        args: string[];
    }): void;
}
