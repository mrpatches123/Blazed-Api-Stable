import { world } from "@minecraft/server";
import { EventCreator } from "./EventCreator";
import { TickEventSignal } from "./Tick";
export class PlayerLeaveEventSignal extends EventCreator {
    constructor() {
        super();
        let plrList = {};
        const e = world.getAllPlayers();
        for (let i = 0; i < e.length; i++)
            plrList[e[i].id] = e[i].name;
        new TickEventSignal().subscribe(() => {
            const players = world.getAllPlayers(), list = Object.keys(plrList);
            const plrListOld = plrList;
            plrList = {};
            for (let i = 0; i < players.length; i++)
                plrList[players[i].id] = players[i].name;
            for (let i = 0; i < list.length; i++) {
                const val = list[i];
                if (val in plrListOld && !(val in plrList)) {
                    this.emit({ playerName: plrListOld[val] });
                }
            }
        });
    }
}
