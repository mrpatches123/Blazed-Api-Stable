import { PlayerDeathEventSignal } from "./PlayerDeath";
import { PlayerJoinEventSignal } from "./PlayerJoin";
import { TickEventSignal } from "./Tick";
export class Events {
    constructor() {
        this.tick = new TickEventSignal();
        this.playerJoin = new PlayerJoinEventSignal();
        this.playerDeath = new PlayerDeathEventSignal();
    }
}
