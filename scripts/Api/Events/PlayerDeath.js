import { world } from "@minecraft/server";
import { Player } from "../Player";
import { EventCreator } from "./EventCreator";
import { TickEventSignal } from "./Tick";
export class PlayerDeathEventSignal extends EventCreator {
    constructor() {
        super();
        let plrList = {};
        const e = world.getAllPlayers();
        for (let i = 0; i < e.length; i++)
            plrList[e[i].id] = true;
        new TickEventSignal().subscribe(async () => {
            const players = world.getAllPlayers();
            for (let i = 0; i < players.length; i++) {
                const player = players[i];
                const dead = await player.runCommandAsync(`tag @s remove API_DEAD`).then(() => true).catch(() => false);
                if (plrList[player.id] && dead) {
                    this.emit({ player: new Player(player) });
                    plrList[player.id] = false;
                }
                else if (!(plrList[player.id]) && !dead)
                    plrList[player.id] = true;
            }
            const buffer = plrList;
            plrList = {};
            for (let i = 0; i < players.length; i++)
                plrList[players[i].id] = (buffer[players[i].id] ?? true);
        });
    }
}
