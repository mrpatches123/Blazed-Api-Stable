import { world } from "@minecraft/server";
import { Player } from "../Player";
import { EventCreator } from "./EventCreator";
import { TickEventSignal } from "./Tick";
export class PlayerJoinEventSignal extends EventCreator {
    constructor() {
        super();
        let plrList = {};
        const e = world.getAllPlayers();
        for (let i = 0; i < e.length; i++)
            plrList[e[i].id] = true;
        new TickEventSignal().subscribe(() => {
            const players = world.getAllPlayers();
            for (let i = 0; i < players.length; i++) {
                const player = players[i];
                if (!plrList[player.id]) {
                    this.emit({ player: new Player(player) });
                }
                plrList[player.id] = true;
            }
            plrList = {};
            for (let i = 0; i < players.length; i++)
                plrList[players[i].id] = true;
        });
    }
}
