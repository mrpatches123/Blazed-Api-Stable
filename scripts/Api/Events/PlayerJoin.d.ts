import { Player } from "../Player";
import { EventCreator } from "./EventCreator";
export declare class PlayerJoinEventSignal extends EventCreator<PlayerJoinEvent> {
    constructor();
}
declare type PlayerJoinEvent = {
    player: Player;
};
export {};
