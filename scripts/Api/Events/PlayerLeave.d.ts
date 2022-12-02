import { EventCreator } from "./EventCreator";
export declare class PlayerLeaveEventSignal extends EventCreator<PlayerLeaveEvent> {
    constructor();
}
declare type PlayerLeaveEvent = {
    playerName: string;
};
export {};
