import { world } from "./Api/index.js";
// world.events.playerJoin.subscribe((data) => {
//     console.warn(`${data.player.getName()} joined the game!`)
// })
// world.events.playerDeath.subscribe((data) => {
//     console.warn(`${data.player.getName()} has died!`)
// })
// world.events.playerLeave.subscribe(data => {
//     console.warn(`${data.playerName} left the game!`)
// })
world.playSound("random.toast", {
    volume: 1,
    pitch: 0.5
});
