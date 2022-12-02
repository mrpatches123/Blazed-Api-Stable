import { PlayerDeathEventSignal } from "./PlayerDeath";
import { PlayerJoinEventSignal } from "./PlayerJoin";
import { PlayerLeaveEventSignal } from "./PlayerLeave";
import { TickEventSignal } from "./Tick";
export declare class Events {
    readonly tick: TickEventSignal;
    readonly playerJoin: PlayerJoinEventSignal;
    readonly playerDeath: PlayerDeathEventSignal;
    readonly playerLeave: PlayerLeaveEventSignal;
}
