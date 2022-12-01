import { PlayerDeathEventSignal } from "./PlayerDeath";
import { PlayerJoinEventSignal } from "./PlayerJoin";
import { TickEventSignal } from "./Tick";

export class Events {
    readonly tick = new TickEventSignal()
    readonly playerJoin = new PlayerJoinEventSignal()
    readonly playerDeath = new PlayerDeathEventSignal()
}