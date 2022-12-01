/*
for (const player of await world.getPlayers({ name: "iBlqzed" })) {
    player.runCommandAsync(`tag @a add dead`)
    console.warn(await player.runCommandAsync(`tag @e[type=player] remove dead`))
}
*/

import { world } from "@minecraft/server"
import { Player } from "../Player"
import { EventCreator } from "./EventCreator"
import { TickEventSignal } from "./Tick"

export class PlayerDeathEventSignal extends EventCreator<PlayerDeathEvent> {
    constructor() {
        super()
        let plrList = {} as { [key: string]: boolean }
        const e = world.getAllPlayers()
        for (let i = 0; i < e.length; i++) plrList[e[i].id] = true
        new TickEventSignal().subscribe(async () => {
            const players = world.getAllPlayers()
            for (let i = 0; i < players.length; i++) {
                const player = players[i];
                const dead = await player.runCommandAsync(`tag @s remove dead`).then(() => true).catch(() => false)
                if (plrList[player.id] && dead) {
                    this.emit({ player: new Player(player) })
                    plrList[player.id] = false
                }
                else if (!(plrList[player.id]) && !dead) plrList[player.id] = true
            }
            const buffer = plrList
            plrList = {}
            for (let i = 0; i < players.length; i++) plrList[players[i].id] = (buffer[players[i].id] ?? true)
        })
    }
}

type PlayerDeathEvent = {
    player: Player
}